---
title: "Goodbye 8thwall.com. Hello 8thwall.org."
description: "Nearly a decade of XR engine development and WebAR tooling is now in the open."
date: 2026-03-02
authors: [8thwall]
tags: [announcement]
image: /img/blog/open-source-cover.png
slug: 8th-wall-open-source
---

Nearly a decade of XR engine development and WebAR tooling is now in the open.

![8th Wall open source](/img/blog/open-source-cover.png)

<!-- truncate -->

Over the past few months, we shared that 8th Wall would transition from a hosted, paid platform to an open source project. As of February 28, 2026, that transition is complete.

8th Wall now continues at <a href="https://8thwall.org/">8thwall.org</a> as a free, open source XR toolset.

## What's live today

While the hosted 8th Wall platform — login, the cloud editor, and web-based Studio — is no longer available, the technology lives on. The same codebase that powered thousands of WebAR experiences is now open, where it can be inspected, extended, and improved by anyone.

We've released components in stages over the past few months.

In January, we released the [Distributed Engine Binary](https://github.com/8thwall/engine/tree/main). It includes SLAM and is available under a binary-only license for continued commercial and noncommercial use. VPS, Maps, and Hand Tracking are not included.

Today, we're publishing an [MIT-licensed open source version of the engine framework](https://github.com/8thwall/8thwall/tree/main/packages/engine) that does not include SLAM. The core architecture and major AR feature modules — including Face Effects, Image Targets, and Sky Effects — are now available in the open.

SLAM has not been open sourced and will only be available in the Distributed Engine Binary. But with the rest of the framework now open, the engine isn't frozen in place. As browser APIs change and web standards evolve, the community can maintain and adapt it without depending on us.

Several supporting tools are also available:

- [Sample projects](https://8th.io/examples), including starter templates, feature demos, and best practice references
- [Image Target Processor CLI](https://github.com/8thwall/8thwall/tree/main/apps/image-target-cli), a tool for creating new image targets for use with the XR engine
- [Archive](https://github.com/8thwall/archive), a cleaned snapshot of the 8th Wall monorepo, is available for reference

All of this is governed by a formal open source model, with contribution guidelines and decision-making processes documented in the [repository](https://github.com/8thwall/8thwall).

## What's coming next

Today is a major milestone, but the transition isn't finished.

Over the next month, we'll complete the next wave of releases, including updated documentation fully migrated to GitHub, the full open source release of the Desktop App, open source ECS runtime components, MCP server, and additional sample projects and reference implementations.

We're shipping as quickly as we can do it right. [GitHub](https://github.com/orgs/8thwall/discussions) and [Discord](https://8th.io/discord) are where updates will land first.

## Thank you for building with us

To our community of developers, brands, and agencies: thank you.

Since we announced the closing of 8th Wall, you've shown up with thoughtfulness, tough questions, honest feedback, and patience. That input shaped everything you see on 8thwall.org today.

We're proud of what we built together, and grateful for the trust you placed in us.

This is a community project now. If you want to help shape what 8th Wall becomes next, review the [governance](https://github.com/8thwall/8thwall/blob/main/GOVERNANCE.md) and [contribution](https://github.com/8thwall/8thwall/blob/main/CONTRIBUTING.md) docs in the repo and join us in the open.

— The 8th Wall Team
