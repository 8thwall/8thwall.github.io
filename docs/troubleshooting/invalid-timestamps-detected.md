---
id: invalid-timestamps-detected
sidebar_position: 5
---
# Invalid Timestamps Detected

#### Issue {#issue}

On iOS devices, console logs display a warning that states `webvr-polyfill: Invalid timestamps detected: Timestamp from devicemotion outside expected range.`

#### Resolution {#resolution}

No action required.

This is a **warning** coming from `webvr-polyfill`, a dependency of 8-Frame and of A-Frame before version 1.7.0. A-Frame 1.7.0 removed `webvr-polyfill`, so this warning doesn't appear with current A-Frame versions. To move your project from 8-Frame to A-Frame, see [Migrate from 8-Frame to A-Frame](/docs/engine/guides/aframe-migration).

Devicemotion is an event coming from the browser that fires at a regular interval. It indicates the amount of physical force of acceleration the device is receiving at that time. These "Invalid timestamp" messages are a byproduct of iOS's devicemotion implementation where timestamps are sometimes reported out of order.

This is simply a **warning**, not an error, and can be safely ignored. It does not have any impact on your Web AR experience.
