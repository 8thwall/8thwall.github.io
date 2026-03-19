---
id: faq
sidebar_position: 999
---

# FAQ

## What’s Happening

### What is happening with 8th Wall?
All 8th Wall products and services — including Studio, Cloud Editor, and Asset Lab — will be discontinued over the coming year. In the meantime, we are actively exploring options to open source key components of the 8th Wall technology and documentation so the creativity built on 8th Wall can continue to thrive in the developer community.

While the hosted 8th Wall platform will eventually wind down, core parts of its engine, SDK, and documentation will be released for public use.

### What does it mean for 8th Wall to open source?
Going open source means 8th Wall’s non-proprietary technology — including parts of its SDK, runtime, tools, and documentation — will be publicly available for developers to use, modify, and build upon.

Rather than a closed, hosted platform, 8th Wall will live on as community-driven code. This transition ensures the technology continues to evolve in the hands of the developers, artists, and creators who shaped it.

### Which parts of 8th Wall will be open sourced?
We plan to release key parts of the 8th Wall SDK, runtime, and developer tools as open-source projects. This includes documentation, sample projects, and tooling that is not tied to proprietary computer vision or SLAM systems.

Not every hosted component can be maintained long-term, but we aim to release the building blocks that matter most. Specific repositories and contribution guidelines will be shared as they become available.

---

## Key Dates and Access

### What’s the timeline for this transition?
We’re shifting to open source gradually to give developers time to export projects and access documentation.

| Date | What Happens |
|------|-------------|
| **February 28, 2026** | End of platform access. All accounts lose the ability to create, edit, publish, or export projects. |
| **Feb 28, 2026 – Feb 28, 2027** | All hosted projects and experiences remain live and accessible. |
| **After Feb 28, 2027** | Hosting services will be decommissioned and project data deleted per retention policy. |

### Will I still be able to log in or access my projects after February 28, 2026?
No. After February 28, 2026, you will no longer be able to log in to the 8th Wall platform.

Hosted projects will remain live through **February 28, 2027**, but they will be locked and cannot be edited or exported.

---

## Exporting Your Projects

### Can I download my projects and assets?
Yes. You can export your projects **before February 28, 2026**. [Documentation on how to export your 8th Wall-hosted projects](/docs/migration/8thwall-hosted) has been provided to help you archive or migrate your work.

### What’s the difference between Code Export and Buildable Code Export?
**Code Export** provides a snapshot of your project code and assets for reference and backup.

**Buildable Code Export** includes everything required to build and run the project offline or in a self-hosted environment, including the distributed engine binary and runtime components.

### What exactly is included in each exported project?
Each **Buildable Code Export** includes:
- Project source code
- Assets and image targets
- Build configuration
- XR runtime components
- A copy of the distributed 8th Wall Engine binary required to run the project locally

### What is not included in Buildable Code Export?
Buildable Code Export does not include cloud-dependent services or licensed IP that cannot be distributed for offline or self-hosted use.

Specifically, exported projects do **not** include:
- Niantic Spatial VPS (also known as Lightship VPS for Web)
- Lightship Maps
- Hand Tracking

If your project relies on these services, it may continue to function while hosted on the 8th Wall platform, but it will not run offline using Buildable Code Export.

We strongly recommend exporting and running your project locally to validate which features are supported in your self-hosted workflow.

### Do I need to export projects that are already live?
Yes. If you want to continue developing, rebuilding, or migrating a project after platform access ends, you must export it before February 28, 2026.

Live projects that are not exported will continue running temporarily but cannot be modified.

### What happens if I don’t export my project before February 28, 2026?
If you do not export a project before February 28, 2026, you will not be able to download or modify it after platform access ends.

Projects that are live on that date will continue to run as-is until February 28, 2027, but they will be locked and cannot be edited or exported.

### Do I need to export with Buildable Code Export if I have a self-hosted project?
No. Existing self-hosted projects will continue to work without changes until February 28, 2027.

If your project is not cloud-dependent (does not use VPS, Maps, Hand Tracking, or Modules) and you want to migrate to the open-source engine to keep your project live beyond February 28, 2027, follow the [self-hosted project migration guide](/docs/migration/self-hosted).

### If I use the 8th Wall Desktop App, do I still need to export my project?
You still must export your project before February 28, 2026 in order to continue developing or self-hosting it. You can export your project directly from the Desktop App or from 8thwall.com.

### Should I test my exported project before February 28, 2026?
Yes. We strongly recommend exporting and running your project locally as soon as possible to validate your workflow and identify any dependencies on cloud-based services.

### Will there be documentation or tools to help with migration?
Yes. We will release documentation, export utilities, and examples to support developers in self-hosting or rebuilding projects using the open-source version.

---

## Studio Desktop App Offline Mode

### What is Offline Mode for the Studio Desktop App?
Offline Mode allows you to continue developing locally in the Desktop App without logging in to the 8th Wall platform. It removes account-based features and focuses on local and exported project workflows.

### Is Offline Mode required immediately?
No. Offline Mode is optional until February 28, 2026.

After that date, login will stop working and the Desktop App will operate in Offline Mode automatically. If you haven’t switched earlier, your projects will prompt you to migrate to the offline workflow at that time.

We recommend switching now so you can validate your local setup before platform access ends.

### Can I switch back after enabling Offline Mode?
No. Once enabled, Offline Mode cannot be reversed without uninstalling and reinstalling the Desktop App.

### What projects can I work on in Offline Mode?
You can work on projects previously opened on your device, exported projects, and new local projects. You cannot access cloud-hosted projects that haven’t been exported.

### What features are not available in Offline Mode?
Offline Mode does not currently include Image Target management, Asset Lab, Native App Export, pre-recorded Simulator sequences, or other account-dependent features. We plan to restore or replace key capabilities over time as we execute on our open source roadmap.

---

## Projects, Hosting, and Data

### Will my hosted projects stay live?
Yes. All 8th Wall hosted projects and experiences will remain live through **February 28, 2027**. After that, hosting services will be shut down.

### What happens to externally linked assets or embedded experiences?
Assets and hosted URLs will continue functioning through **February 28, 2027**. After that, they will stop serving content.

Any embedded 8th Wall projects will need to be re-hosted.

### What’s the plan for data retention and deletion?
All developer and billing data will be permanently deleted after the decommission date. Please download any data you wish to keep before that time.

---

## Distributed 8th Wall Engine Binary

### What is the Distributed 8th Wall Engine Binary?
The Distributed Engine Binary contains the core 8th Wall AR engine and is included with each project exported using Buildable Code Export.

It is provided as closed source and governed by a limited-use distribution license.

### Is the engine binary the same engine used by the hosted platform?
Yes. The distributed engine binary contains the same core AR capabilities used by the hosted 8th Wall platform, packaged for local and self-hosted use.

However, it removes specific cloud-dependent or licensed features such as:
- Niantic Spatial VPS (Lightship VPS for Web)
- Lightship Maps
- Hand Tracking
- Any other features that depend on hosted platform services

### What’s included in the engine binary?
The distributed engine binary includes the core AR capabilities that power 8th Wall experiences, including:
- World Effects
- Face Effects
- Image Targets
- Sky Effects
- Absolute Scale

### What’s not included in the engine binary?
The engine binary does not include:
- Source code access
- The ability to modify or recompile the engine
- Niantic Spatial products such as VPS, Lightship Maps, or the Geospatial Browser
- Hand Tracking

### How long will the engine binary be maintained?
The engine binary will be maintained through **March 2026** to support a stable transition.

---

## Distributed Engine Binary License and Permitted Use

### What license will the distributed 8th Wall Engine binary use?
The engine binary is distributed under a limited-use license included with the binary. The license defines how the engine can be used, distributed, and integrated into projects.

### In plain terms, what is this license for?
The license allows you to continue running and distributing your existing 8th Wall projects using the distributed engine binary, while protecting Niantic Spatial’s proprietary technology.

It is designed to preserve existing use cases, not to enable engine modification or competitive development.

### What am I allowed to do with the Distributed 8th Wall Engine Binary?
You may install, execute, and distribute the engine binary in its original form as part of your own application, game, product, or service, provided that your use complies with the license terms.

This includes:
- Running the engine locally or in your own hosting environment
- Packaging the engine with your exported 8th Wall project
- Deploying your application to end users as part of a larger experience

### Can I modify, inspect, or reverse engineer the engine?
No. The engine is provided as closed source. You may not:
- Reverse engineer, decompile, or disassemble the engine
- Modify the engine or create derivative works
- Redistribute altered versions of the engine

These restrictions apply regardless of use case.

### Can I use the engine in a commercial product?
Yes, as long as the value of your product does not derive entirely or substantially from the engine itself.

In practice:
- ✅ Using the engine as one component of a broader application or experience is permitted
- ❌ Selling the engine itself or an engine-based toolkit is not permitted

### Can I use the engine to build client marketing campaigns?
Yes. Developers, brands, and agencies may use the engine to build branded or marketing experiences for clients, provided the engine is one component of a broader creative or marketing deliverable.

Common permitted examples include:
- Branded AR campaigns
- Experiential marketing activations
- Web-based AR experiences delivered as part of a larger campaign

In short: if you’re selling the experience, not the engine, your use is permitted.

### If I use the Distributed Engine Binary, am I required to include attribution or notices?
Yes. When distributing applications that use the engine, you must:
- Retain Niantic Spatial copyright and proprietary notices
- Identify Niantic Spatial as the creator of the engine
- Include a reference to the engine license and disclaimer of warranties

Specific attribution requirements are outlined in the license.

---

## Open Source Plans

### What parts of 8th Wall will be open sourced?
Components that are not tied to proprietary computer vision or SLAM will be open sourced, including:
- 8th Wall Desktop App
- Standalone Runtime / ECS
- Non-SLAM AR features
- Developer tools such as the 8th Wall Agent MCP Server and Image Target Processor
- Documentation and sample projects

### What will not be open sourced?
The following will not be open sourced:
- Engine internals (provided via the distributed binary)
- Hand Tracking
- Niantic Spatial products (VPS, Geospatial Browser, Maps)

---

## Niantic Spatial Products

### Can I use Niantic Spatial VPS with the distributed engine binary?
No. Niantic Spatial VPS (Lightship VPS for Web) is not included in the distributed engine binary.

### Can I launch new projects using Niantic Spatial VPS after February 28, 2026?
No. Projects created using the distributed engine binary and open source tools will not support Niantic Spatial VPS on the Web.

Hosted projects launched before February 28, 2026 that use Niantic Spatial VPS will continue to be supported through **February 28, 2027**.

### Will Lightship Maps or the Geospatial Browser be available after the transition?
No. Lightship Maps and the Geospatial Browser are not part of the open source transition. The Geospatial Browser will also be removed from the Desktop App.

---

## Billing and Accounts

### When will billing and new subscriptions stop?
We have paused new annual contracts and are no longer accepting new paid sign-ups.

Existing subscriptions will continue until February 28, 2026, when editing access ends and recurring billing stops automatically.

### What happens to my active subscription?
All paid accounts will automatically end by February 28, 2026.

If you prepaid for time beyond that date, you will receive a prorated refund. You’ll retain dashboard and export access until that date.

### What about enterprise or custom agreements?
Enterprise and custom customers will be contacted directly to coordinate transitions. For additional questions, contact billing@8thwall.com.

### Will I still be able to access my billing or account history?
Yes. Billing receipts and account details will remain accessible through February 28, 2026.

### What happens to my data after billing ends?
All developer and billing data will be permanently deleted after decommissioning. Download anything you need before that date.

---

## Community and Support

### What support and community channels will remain active during this period?
We aim to keep the 8th Wall Forum, Discord, and social channels active and monitored throughout the transition period.

### What if I need help exporting or archiving my projects?
We’ll continue providing export guides and documentation updates throughout 2026.

Support is available through the [community Discord](https://8th.io/discord) or at support@8thwall.com.

### Will the Forum eventually close?
Eventually, yes — but not immediately. We’ll provide advance notice before any changes to support channels occur.
