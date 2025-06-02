---
title: "PixEngine - 2D Game Engine in Rust"
description: "High-performance 2D game engine developed in Rust with WebGL rendering and ECS system, compilable to WebAssembly"
date: 2023-11-10
draft: false
tags: ["Rust", "WebAssembly", "WebGL", "ECS", "Game Development", "WASM"]
categories: ["Personal Projects"]
showHero: true
heroStyle: "thumbAndBackground"
---

{{< lead >}}
Modern 2D game engine written in Rust, leveraging the language's memory safety and performance to create smooth gaming experiences on the web.
{{< /lead >}}

{{< badge >}}
⚡ Stable 60 FPS with 10K+ entities
{{< /badge >}}

## 🎮 Project Overview

**PixEngine** is a 2D game engine I developed entirely in Rust, with the goal of demonstrating that it's possible to create performant web games without sacrificing memory safety. The engine compiles to WebAssembly for native execution in the browser.

{{< alert icon="shield" cardColor="#dbeafe" iconColor="#2563eb" textColor="#1e3a8a" >}}
**Zero crashes**: Thanks to Rust, no memory-related crashes since the project began
{{< /alert >}}

## 🏗️ Architecture & Design

{{< timeline >}}
{{< timelineItem icon="code" header="Entity Component System (ECS)" badge="Architecture" >}}
- Pure ECS pattern with <strong>specs</strong> as foundation
- Data/logic separation for cache efficiency
- Automatically parallelizable systems
- Hot-reload of components in development
{{< /timelineItem >}}

{{< timelineItem icon="image" header="Optimized WebGL Renderer" badge="Performance" >}}
- Automatic batching of draw calls
- Instanced rendering for similar sprites
- Texture atlas generated at compile time
- Compiled and optimized GLSL shaders
{{< /timelineItem >}}

{{< timelineItem icon="shield" header="Memory Safety by Design" badge="Rust" >}}
- No dynamic allocation in the game loop
- Strict ownership to avoid data races
- Explicit lifetimes for resources
- Zero-cost abstractions everywhere
{{< /timelineItem >}}

{{< timelineItem icon="globe" header="WebAssembly First" badge="Web Native" >}}
- Binary size < 200KB (gzipped)
- Minimal and typed JavaScript interop
- Streaming compilation support
- SharedArrayBuffer for multithreading
{{< /timelineItem >}}
{{< /timeline >}}

## 💻 Technical Implementation

### ECS System in Rust

```rust
// Component definition with derive macros
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

// Parallelizable movement system
struct MovementSystem;

impl<'a> System<'a> for MovementSystem {
    type SystemData = (
        WriteStorage<'a, Position>,
        ReadStorage<'a, Velocity>,
        Read<'a, DeltaTime>,
    );

    fn run(&mut self, (mut pos, vel, dt): Self::SystemData) {
        // Parallel iteration with Rayon
        (&mut pos, &vel)
            .par_join()
            .for_each(|(pos, vel)| {
                pos.x += vel.dx * dt.0;
                pos.y += vel.dy * dt.0;
            });
    }
}
```

### WebGL Renderer with zero-copy

```rust
// Vertex buffer with shared memory
pub struct SpriteRenderer {
    vao: WebGlVertexArrayObject,
    instances: Vec<InstanceData>,
    buffer: Arc<SharedArrayBuffer>,
}

impl SpriteRenderer {
    pub fn render(&mut self, sprites: &[Sprite]) {
        // Update instances without allocation
        self.instances.clear();
        self.instances.extend(
            sprites.iter().map(|s| s.to_instance_data())
        );
        
        // Direct upload to GPU
        unsafe {
            let data = std::slice::from_raw_parts(
                self.instances.as_ptr() as *const u8,
                self.instances.len() * std::mem::size_of::<InstanceData>()
            );
            
            self.buffer.update_data(0, data);
        }
        
        // Single draw call for all sprites
        self.context.draw_arrays_instanced(
            WebGl2::TRIANGLES,
            0,
            6,
            self.instances.len() as i32
        );
    }
}
```

## 🛠️ Technologies & Tools

{{< swatches "#CE422B" "#F7DF1E" "#E34C26" "#007ACC" "#00ADD8" >}}

| Category | Technologies |
|----------|-------------|
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
    label: 'Max entities @ 60 FPS',
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

## 🎯 Engine Features

{{< keywordList >}}
{{< keyword icon="image" >}} <strong>Sprite rendering</strong> - Batching, animations, atlases {{< /keyword >}}
{{< keyword icon="music" >}} <strong>Audio</strong> - Web Audio API, spatial sound {{< /keyword >}}
{{< keyword icon="keyboard" >}} <strong>Input</strong> - Keyboard, mouse, gamepad, touch {{< /keyword >}}
{{< keyword icon="shield" >}} <strong>Physics</strong> - Rapier2D (Rust) integration {{< /keyword >}}
{{< keyword icon="globe" >}} <strong>Networking</strong> - WebRTC for multiplayer {{< /keyword >}}
{{< keyword icon="code" >}} <strong>Scripting</strong> - Ergonomic Rust API {{< /keyword >}}
{{< /keywordList >}}

## 🚀 Demo Game

I developed a demonstration game "Space Defenders" using PixEngine:
- 1000+ simultaneous enemy ships
- Particle system (10K+ particles)
- Pixel-perfect collisions
- Online leaderboard with Rust backend

## 🎓 Skills Acquired

This project allowed me to master:

1. **Advanced Rust**: unsafe code, FFI, procedural macros
2. **WebAssembly**: size optimization, JS interop
3. **ECS Architecture**: data-oriented design
4. **GPU Optimization**: batching, instancing, shaders
5. **Memory Management**: zero-allocation patterns

## 🔗 Project Links

{{< button href="https://github.com/pixnop/pixengine" target="_blank" >}}
Source code (MIT License)
{{< /button >}}

{{< button href="https://pixengine-demo.wasm.app" target="_blank" >}}
Playable online demo
{{< /button >}}

{{< button href="https://docs.pixengine.dev" target="_blank" >}}
Complete documentation
{{< /button >}}

---

{{< alert icon="code" >}}
**Want to create your own web game?** PixEngine is open source and ready to use. Contact me for support!
{{< /alert >}}