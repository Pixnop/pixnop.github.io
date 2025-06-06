---
title: "SkyFuel - Drone Battery Management App"
description: "Android application dedicated to the efficient management of drone batteries, allowing pilots and operators to maintain their batteries in good condition, track their usage, and optimize their lifespan."
date: 2025-05-07
draft: false
tags: ["Android", "Kotlin", "QR Code", "Drone"]
categories: ["Personal Projects"]
series: ["Mobile Development"]
showHero: true
heroStyle: "basic"
---

{{< lead >}}
**SkyFuel** is an Android application dedicated to the efficient management of drone batteries, allowing pilots and operators to maintain their batteries in good condition and optimize their lifespan.
{{< /lead >}}

{{< badge >}}
Version 1.0.0
{{< /badge >}}
{{< badge >}}
Android App
{{< /badge >}}
{{< badge >}}
Open Source
{{< /badge >}}

{{< github repo="Pixnop/SkyFuel" >}}

{{< figure src="home-and-details.png" alt="SkyFuel - Home screen and battery details" caption="Complete SkyFuel interface" >}}

## Main Features


### 1. Battery Management

- **Battery Registration**: Easily add new batteries to your inventory by specifying:
  - Brand and model
  - Number of cells
  - Capacity (mAh)
  - Type (LiPo, Li-ion, etc.)
  - Purchase date
  - Serial number
  - Custom notes

- **Main Dashboard**: View all your batteries and their current status at a glance.

{{< gallery >}}
  <img src="bat-detail_SkyFuel-app.jpg" class="grid-w50" />
  <img src="bat-detail-2_SkyFuel-app.jpg" class="grid-w50" />
{{< /gallery >}}

- **Filtering and Search**: Quickly find a specific battery by status, model, or other criteria.

### 2. Status Tracking and Lifecycle Management

- **Multiple Statuses**:
  - Charged (ready to use)
  - Discharged (requires charging)
  - In storage (optimal charge level for long-term storage)
  - Out of service (battery to be recycled)

- **Voltage Recording**: Document voltage levels at different stages to monitor battery health.

- **Cycle Counter**: Automatic tracking of the number of charge/discharge cycles for each battery.

- **Usage History**: View the complete history of status changes and usage.

- **Lifespan Estimation**: Calculation of remaining lifespan based on the number of cycles and performance.

### 3. QR Code System

- **Unique QR Code Generation**: Automatic creation of a QR code for each registered battery.

- **Easy Printing**: Export QR codes in formats optimized for printing on durable labels.

- **Quick Access**: Scanning a QR code instantly directs to the corresponding battery page.

- **Express Status Modification**: Quickly change the status of a battery after scanning its QR code.

{{< figure src="Qr-code_SkyFuel-app.jpg" alt="SkyFuel QR Code" caption="Unique QR code generation for each battery" class="grid-w50 md:grid-w33" >}}

### 4. Alert and Reminder System

- **Extended Charging Notifications**: Alerts for batteries left charging for too long.

- **Extended Discharge Alerts**: Reminders for batteries left discharged, which can damage them.

- **Storage Reminders**: Notifications to prepare batteries for long-term storage if unused.

- **End-of-Life Alerts**: Notifications when a battery approaches its theoretical end of life based on cycles.

### 5. Statistics and Reports

- **Analytical Dashboard**: Visualize usage trends and the overall status of your battery fleet.

- **Health Reports**: Generate detailed reports on the health and performance of each battery.

- **Usage Statistics**: Track which batteries are most used and which might be underutilized.

- **Data Export**: Export your data in various formats (CSV, PDF) for external analysis.


## Technical Specifications

- **Platforms**: Application available on Android
- **Storage**: Local data storage with cloud synchronization option
- **Performance**: Low resource consumption, optimized for field use
- **Connectivity**: Offline mode available with automatic synchronization

## Benefits

- Extend the lifespan of your batteries by following best charging and storage practices
- Avoid in-flight failures through better battery status management
- Reduce costs by maximizing the lifespan of each battery
- Save time with a quick identification system using QR codes
- Improve safety by identifying potentially defective batteries

## Target Audience

- Professional drone pilots
- Drone video production companies
- Drone inspection services
- Aerial mapping companies
- Enthusiasts with multiple drones and batteries


{{< alert icon="download" cardColor="#10b981" textColor="#ffffff" iconColor="#ffffff" >}}
**Download SkyFuel v1.0.0** on [GitHub](https://github.com/Pixnop/SkyFuel)
{{< /alert >}}

{{< keywordList >}}
{{< keyword icon="android" >}} Android {{< /keyword >}}
{{< keyword icon="code" >}} Kotlin {{< /keyword >}}
{{< keyword icon="tag" >}} QR Code {{< /keyword >}}
{{< keyword icon="shield" >}} Battery Management {{< /keyword >}}
{{< /keywordList >}}