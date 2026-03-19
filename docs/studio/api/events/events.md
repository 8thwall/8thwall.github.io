# Studio Events Reference

Events are a core part of building dynamic and interactive experiences in Studio. This reference outlines the different types of events you can listen for in your projects.

## Event Categories

- [XR Events](xr): Events emitted by 8th Wall camera pipeline modules like `reality` and `facecontroller`, covering things like Image Target tracking and Face detection.

- [Asset Events](assets): Events related to assets, such as asset loading and playback events.

- [Camera Events](camera): Events related to camera state changes, including active camera switches, XR camera attribute edits, and active camera entity changes.

- [General Events](general): Core world-level events triggered within Studio experiences, such as an active space change.

- [Input Events](input): Events triggered by user interactions, including touch, gesture, and UI click events. Covers both simple taps and complex multi-touch gestures.

- [Physics Events](physics): Events emitted when physical interactions occur between entities, such as collisions starting or ending.

---

Each event section provides:

- A description of when the event is emitted
- Properties (if any) passed with the event
- Code examples showing how to listen for the event globally or on specific entities
