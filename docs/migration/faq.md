---
id: faq
sidebar_position: 999
---

# FAQ

:::important
This page was originally published in November 2025 as part of the sunset of the hosted platform (8thwall.com). Projects created using the open source project (i.e. after February 2026) are not affected.
:::

---

## Key Dates and Access

### What’s the timeline for this transition?

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

The self-service export window has closed. Please see [Data Requests](../../legacy-policies/data-requests) for instructions on requesting a data export.

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

## Distributed Engine Binary License and Permitted Use

Please refer to [Engine License](../engine/license).


---

## Niantic Spatial Products

### Can I use Niantic Spatial VPS with the distributed engine binary?
No. Niantic Spatial VPS (Lightship VPS for Web) is not included in the distributed engine binary.

### Can I launch new projects using Niantic Spatial VPS after February 28, 2026?
No. Projects created using the distributed engine binary and open source tools will not support Niantic Spatial VPS on the Web.

Hosted projects launched before February 28, 2026 that use Niantic Spatial VPS will continue to be supported through **February 28, 2027**.

### Will Lightship Maps or the Geospatial Browser be available after the transition?
No. Lightship Maps and the Geospatial Browser are not part of the open source transition. The Geospatial Browser will also be removed from the Desktop App.
