# API Introduction

This section provides a detailed look at the APIs available for building immersive WebAR experiences with 8th Wall Studio.

The 8th Wall API reference is organized into two main groups:

## Studio API

The Studio API provides everything you need to build structured, dynamic experiences in Studio.

The Studio API includes:

- [**Entity-Component System (ECS)**](/docs/api/studio/ecs) — API for working with Studio’s ECS architecture, allowing you to create, modify, and organize entities and components at runtime.
- [**World**](/docs/api/studio/world) — Core functions and utilities for managing the overall scene graph, including entity hierarchies, transforms, and spaces. The world is the container for all spaces, entities, queries, and observers in your project.
- [**Events**](/docs/api/studio/events) — A rich system for sending and responding to runtime events within Studio.

Use the Studio API to create immersive, stateful experiences that respond to player input, world changes, and real-time interactions.

[Explore the Studio API →](/docs/api/studio)


## Engine API

The Engine API provides lower-level access to 8th Wall’s underlying AR engine, including:

- **8th Wall Camera Pipeline Modules** — Camera pipeline modules developed by 8th Wall.
- **Custom Camera Pipeline Modules** — Interface for working with the camera frame processing pipeline.

Use the Engine API when you need fine-grained control over camera input, frame processing, or when integrating custom WebGL or computer vision workflows into your project.

[Explore the Engine API →](/docs/api/engine)
