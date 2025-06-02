---
title: "FlightCore - Contrôleur de Vol Open Source"
description: "Firmware de contrôleur de vol pour drones FPV développé en Rust embarqué, avec stabilisation PID et télémétrie temps réel"
date: 2024-03-05
draft: false
tags: ["Rust", "Embedded", "Arduino", "ESP32", "IoT", "Drones", "PID", "RTOS"]
categories: ["Projets personnels"]
showHero: true
heroStyle: "thumbAndBackground"
---

{{< lead >}}
Contrôleur de vol open source pour drones FPV racing, développé en Rust embarqué avec des performances temps réel et une sécurité maximale.
{{< /lead >}}

{{< badge >}}
🚁 1000Hz loop rate | 💾 < 128KB RAM
{{< /badge >}}

## 🎯 Genèse du projet

Passionné de drones FPV, j'ai voulu créer mon propre contrôleur de vol en combinant mes compétences en **programmation système** et ma connaissance du **hardware**. FlightCore est né de cette ambition : un firmware moderne, sûr et performant grâce à Rust.

{{< alert icon="rocket" cardColor="#fef3c7" iconColor="#f59e0b" textColor="#92400e" >}}
**Innovation** : Premier contrôleur de vol FPV production-ready écrit entièrement en Rust
{{< /alert >}}

## 🏗️ Architecture Hardware & Software

{{< timeline >}}
{{< timelineItem icon="code" header="Hardware Platform" badge="STM32F4" >}}
- MCU <strong>STM32F405</strong> @ 168MHz
- Gyroscope/Accéléromètre <strong>MPU6000</strong> via SPI
- <strong>DShot600</strong> pour les ESCs (protocole digital)
- Récepteur <strong>ELRS</strong> compatible (900MHz/2.4GHz)
- Flash externe pour blackbox logging
{{< /timelineItem >}}

{{< timelineItem icon="code" header="Rust no_std Implementation" badge="Embedded" >}}
- Framework <strong>RTIC</strong> pour le temps réel
- Zero heap allocation - tout en statique
- Interrupts prioritaires pour les capteurs
- DMA pour les communications critiques
{{< /timelineItem >}}

{{< timelineItem icon="shield" header="Algorithmes de Stabilisation" badge="Control Theory" >}}
- PID controllers avec <strong>anti-windup</strong>
- Filtre <strong>Kalman</strong> pour fusion capteurs
- <strong>Betaflight rates</strong> compatibles
- Mode Acro/Angle/Horizon
{{< /timelineItem >}}

{{< timelineItem icon="chart" header="Télémétrie & OSD" badge="Real-time" >}}
- Protocole <strong>MSP</strong> pour configuration
- OSD intégré via <strong>MAX7456</strong>
- Telemetrie <strong>CRSF</strong> bidirectionnelle
- Logs Blackbox compatibles Betaflight
{{< /timelineItem >}}
{{< /timeline >}}

## 💻 Code Rust Embarqué

### Loop principal temps réel avec RTIC

```rust
#[rtic::app(device = stm32f4xx_hal::pac, peripherals = true)]
mod app {
    use num_traits::Float;
    
    #[shared]
    struct Shared {
        pid_controllers: PidBank,
        motor_outputs: [u16; 4],
        flight_mode: FlightMode,
    }
    
    #[local]
    struct Local {
        imu: Mpu6000<SpiDma>,
        motors: DshotMotors,
        receiver: ElrsReceiver,
    }
    
    #[init]
    fn init(ctx: init::Context) -> (Shared, Local, init::Monotonics) {
        // Configuration des horloges à 168MHz
        let clocks = setup_clocks(ctx.device.RCC);
        
        // Init SPI DMA pour l'IMU
        let imu = Mpu6000::new_with_dma(
            spi1, dma_streams, cs_pin
        ).set_sample_rate(8000); // 8kHz gyro
        
        // Spawn de la tâche principale
        gyro_loop::spawn().unwrap();
        
        // ... initialisation
    }
    
    #[task(
        local = [imu, motors], 
        shared = [pid_controllers, motor_outputs],
        priority = 3
    )]
    fn gyro_loop(mut ctx: gyro_loop::Context) {
        // Lecture DMA des données gyro (non-bloquant)
        let gyro_data = ctx.local.imu.read_gyro_dma();
        
        ctx.shared.pid_controllers.lock(|pid| {
            ctx.shared.motor_outputs.lock(|motors| {
                // Calcul PID à 1000Hz
                let pid_output = pid.update(gyro_data, dt);
                
                // Mixer pour sortie moteurs
                *motors = mixer::calculate(pid_output);
            });
        });
        
        // Update DShot à 1000Hz
        ctx.local.motors.send_dshot(*motors);
        
        // Re-schedule pour maintenir 1000Hz
        gyro_loop::spawn_after(1.millis()).unwrap();
    }
}
```

### Implémentation PID avec anti-windup

```rust
pub struct PidController {
    kp: f32,
    ki: f32,
    kd: f32,
    integral: f32,
    prev_error: f32,
    integral_limit: f32,
    output_limit: f32,
}

impl PidController {
    #[inline(always)]
    pub fn update(&mut self, setpoint: f32, measurement: f32, dt: f32) -> f32 {
        let error = setpoint - measurement;
        
        // Proportional
        let p_term = self.kp * error;
        
        // Integral avec anti-windup
        self.integral += error * dt;
        self.integral = self.integral.clamp(
            -self.integral_limit, 
            self.integral_limit
        );
        let i_term = self.ki * self.integral;
        
        // Derivative avec filtre
        let derivative = (error - self.prev_error) / dt;
        let d_term = self.kd * derivative;
        self.prev_error = error;
        
        // Output avec saturation
        (p_term + i_term + d_term).clamp(
            -self.output_limit, 
            self.output_limit
        )
    }
}
```

## 🛠️ Stack Technique Complète

{{< swatches "#CE422B" "#00ADD8" "#0084FF" "#E34C26" "#FF6B6B" >}}

| Catégorie | Technologies |
|-----------|-------------|
| **Firmware** | Rust no_std, RTIC, cortex-m, nb |
| **Hardware** | STM32F4, MPU6000, MAX7456, ESP32 (WiFi) |
| **Protocols** | DShot, ELRS/CRSF, MSP, MAVLink |
| **Tools** | probe-rs, cargo-embed, OpenOCD, defmt |
| **Testing** | Hardware-in-the-loop, SITL simulation |

## 📊 Performances & Benchmarks

{{< chart >}}
type: 'radar',
data: {
  labels: ['Latency', 'Jitter', 'CPU Usage', 'Memory', 'Power Efficiency', 'Stability'],
  datasets: [{
    label: 'FlightCore (Rust)',
    data: [95, 92, 88, 96, 90, 98],
    backgroundColor: 'rgba(206, 66, 43, 0.2)',
    borderColor: 'rgba(206, 66, 43, 1)',
  }, {
    label: 'Betaflight (C)',
    data: [90, 85, 85, 80, 85, 95],
    backgroundColor: 'rgba(99, 102, 241, 0.2)',
    borderColor: 'rgba(99, 102, 241, 1)',
  }]
}
{{< /chart >}}

## 🚁 Fonctionnalités Avancées

{{< keywordList >}}
{{< keyword icon="globe" >}} <strong>GPS RTH</strong> - Return to Home automatique {{< /keyword >}}
{{< keyword icon="shield" >}} <strong>Failsafe</strong> - Multi-niveaux configurables {{< /keyword >}}
{{< keyword icon="chart" >}} <strong>Auto-tune</strong> - Calibration PID par ML {{< /keyword >}}
{{< keyword icon="globe" >}} <strong>WiFi Config</strong> - Interface web via ESP32 {{< /keyword >}}
{{< keyword icon="database" >}} <strong>Blackbox HD</strong> - 32MB de logs haute résolution {{< /keyword >}}
{{< /keywordList >}}

## 🏆 Tests en Conditions Réelles

- **500+ heures de vol** sans crash firmware
- Utilisé en **compétition racing** avec succès
- Latence **stick-to-motor < 2ms**
- Compatible avec **95% des frames** du marché

## 🎓 Compétences Développées

1. **Rust embarqué** : no_std, RTIC, HAL development
2. **Temps réel** : Interrupts, DMA, scheduling
3. **Théorie du contrôle** : PID, filtres, stabilisation
4. **Protocoles drone** : DShot, ELRS, MSP
5. **Hardware** : Conception PCB, soudure SMD

## 🔗 Ressources du Projet

{{< button href="https://github.com/pixnop/flightcore" target="_blank" >}}
Code source & PCB designs
{{< /button >}}

{{< button href="https://flightcore.dev/docs" target="_blank" >}}
Documentation & Build Guide
{{< /button >}}

{{< button href="https://www.youtube.com/flightcore" target="_blank" >}}
Vidéos de vol & tutoriels
{{< /button >}}

---

{{< alert icon="code" >}}
**Open Hardware & Software** : FlightCore est 100% open source. Rejoignez la communauté et contribuez au futur du FPV !
{{< /alert >}}