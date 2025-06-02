---
title: "PixEngine - Moteur de Jeu 2D en Rust"
description: "Moteur de jeu 2D performant développé en Rust avec rendu WebGL et système ECS, compilable en WebAssembly"
date: 2023-11-10
draft: false
tags: ["Rust", "WebAssembly", "WebGL", "ECS", "Game Development", "WASM"]
categories: ["Projets personnels"]
showHero: true
heroStyle: "thumbAndBackground"
---

{{< lead >}}
Moteur de jeu 2D moderne écrit en Rust, exploitant la sécurité mémoire et les performances du langage pour créer des expériences de jeu fluides sur le web.
{{< /lead >}}

{{< badge >}}
⚡ 60 FPS stable avec 10K+ entités
{{< /badge >}}

## 🎮 Présentation du projet

**PixEngine** est un moteur de jeu 2D que j'ai développé entièrement en Rust, avec pour objectif de démontrer qu'il est possible de créer des jeux web performants sans sacrifier la sécurité mémoire. Le moteur compile en WebAssembly pour une exécution native dans le navigateur.

{{< alert icon="shield" cardColor="#dbeafe" iconColor="#2563eb" textColor="#1e3a8a" >}}
**Zero crash** : Grâce à Rust, aucun crash dû à la mémoire depuis le début du projet
{{< /alert >}}

## 🏗️ Architecture & Design

{{< timeline >}}
{{< timelineItem icon="code" header="Entity Component System (ECS)" badge="Architecture" >}}
- Pattern ECS pur avec <strong>specs</strong> comme base
- Séparation données/logique pour cache efficiency
- Systems parallélisables automatiquement
- Hot-reload des components en développement
{{< /timelineItem >}}

{{< timelineItem icon="image" header="Renderer WebGL Optimisé" badge="Performance" >}}
- Batching automatique des draw calls
- Instanced rendering pour les sprites similaires
- Atlas de textures généré à la compilation
- Shaders GLSL compilés et optimisés
{{< /timelineItem >}}

{{< timelineItem icon="shield" header="Memory Safety by Design" badge="Rust" >}}
- Aucune allocation dynamique dans la game loop
- Ownership strict pour éviter les data races
- Lifetimes explicites pour les ressources
- Zero-cost abstractions partout
{{< /timelineItem >}}

{{< timelineItem icon="globe" header="WebAssembly First" badge="Web Native" >}}
- Taille du binaire < 200KB (gzipped)
- Interop JavaScript minimale et typée
- Streaming compilation support
- SharedArrayBuffer pour le multithreading
{{< /timelineItem >}}
{{< /timeline >}}

## 💻 Implémentation technique

### Système ECS en Rust

```rust
// Définition des components avec derive macros
#[derive(Component, Debug)]
struct Position {
    x: f32,
    y: f32,
}

#[derive(Component, Debug)]
struct Velocity {
    dx: f32,
    dy: f32,
}

// System de mouvement parallélisable
struct MovementSystem;

impl<'a> System<'a> for MovementSystem {
    type SystemData = (
        WriteStorage<'a, Position>,
        ReadStorage<'a, Velocity>,
        Read<'a, DeltaTime>,
    );

    fn run(&mut self, (mut pos, vel, dt): Self::SystemData) {
        // Parallel iteration avec Rayon
        (&mut pos, &vel)
            .par_join()
            .for_each(|(pos, vel)| {
                pos.x += vel.dx * dt.0;
                pos.y += vel.dy * dt.0;
            });
    }
}
```

### Renderer WebGL avec zero-copy

```rust
// Vertex buffer avec mémoire partagée
pub struct SpriteRenderer {
    vao: WebGlVertexArrayObject,
    instances: Vec<InstanceData>,
    buffer: Arc<SharedArrayBuffer>,
}

impl SpriteRenderer {
    pub fn render(&mut self, sprites: &[Sprite]) {
        // Update instances sans allocation
        self.instances.clear();
        self.instances.extend(
            sprites.iter().map(|s| s.to_instance_data())
        );
        
        // Upload direct vers GPU
        unsafe {
            let data = std::slice::from_raw_parts(
                self.instances.as_ptr() as *const u8,
                self.instances.len() * std::mem::size_of::<InstanceData>()
            );
            
            self.buffer.update_data(0, data);
        }
        
        // Draw call unique pour tous les sprites
        self.context.draw_arrays_instanced(
            WebGl2::TRIANGLES,
            0,
            6,
            self.instances.len() as i32
        );
    }
}
```

## 🛠️ Technologies & Outils

{{< swatches "#CE422B" "#F7DF1E" "#E34C26" "#007ACC" "#00ADD8" >}}

| Catégorie | Technologies |
|-----------|-------------|
| **Core** | Rust 1.75, wasm-bindgen, web-sys |
| **Graphics** | WebGL 2.0, glam (math), image |
| **ECS** | specs, rayon (parallelism) |
| **Build** | wasm-pack, webpack, wasm-opt |
| **Dev Tools** | cargo-watch, wasm-bindgen-test |

## 📊 Benchmarks & Performance

{{< chart >}}
type: 'bar',
data: {
  labels: ['PixEngine (Rust)', 'Phaser.js', 'Unity WebGL', 'Godot HTML5'],
  datasets: [{
    label: 'Entités max @ 60 FPS',
    data: [12000, 5000, 8000, 6500],
    backgroundColor: [
      'rgba(206, 66, 43, 0.8)',
      'rgba(99, 102, 241, 0.8)',
      'rgba(75, 192, 192, 0.8)',
      'rgba(153, 102, 255, 0.8)'
    ]
  }]
}
{{< /chart >}}

## 🎯 Fonctionnalités du moteur

{{< keywordList >}}
{{< keyword icon="image" >}} <strong>Sprite rendering</strong> - Batching, animations, atlases {{< /keyword >}}
{{< keyword icon="music" >}} <strong>Audio</strong> - Web Audio API, spatial sound {{< /keyword >}}
{{< keyword icon="keyboard" >}} <strong>Input</strong> - Clavier, souris, gamepad, touch {{< /keyword >}}
{{< keyword icon="shield" >}} <strong>Physics</strong> - Intégration Rapier2D (Rust) {{< /keyword >}}
{{< keyword icon="globe" >}} <strong>Networking</strong> - WebRTC pour le multiplayer {{< /keyword >}}
{{< keyword icon="code" >}} <strong>Scripting</strong> - API Rust ergonomique {{< /keyword >}}
{{< /keywordList >}}

## 🚀 Exemple de jeu

J'ai développé un jeu de démonstration "Space Defenders" utilisant PixEngine :
- 1000+ vaisseaux ennemis simultanés
- Système de particules (10K+ particules)
- Collisions pixel-perfect
- Leaderboard online avec backend Rust

## 🎓 Compétences acquises

Ce projet m'a permis de maîtriser :

1. **Rust avancé** : unsafe code, FFI, macros procédurales
2. **WebAssembly** : optimisation de taille, interop JS
3. **Architecture ECS** : data-oriented design
4. **Optimisation GPU** : batching, instancing, shaders
5. **Gestion mémoire** : zero-allocation patterns

## 🔗 Liens du projet

{{< button href="https://github.com/pixnop/pixengine" target="_blank" >}}
Code source (MIT License)
{{< /button >}}

{{< button href="https://pixengine-demo.wasm.app" target="_blank" >}}
Démo jouable en ligne
{{< /button >}}

{{< button href="https://docs.pixengine.dev" target="_blank" >}}
Documentation complète
{{< /button >}}

---

{{< alert icon="code" >}}
**Envie de créer votre jeu web ?** PixEngine est open source et prêt à l'emploi. Contactez-moi pour du support !
{{< /alert >}}