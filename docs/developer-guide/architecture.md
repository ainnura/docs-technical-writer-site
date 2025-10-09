---
id: architecture
title: System Architecture
sidebar_label: Architecture
---

# System Architecture

This document provides an overview of the **Taskify architecture**, including its main components, data flow, and design principles.

---

## Overview

Taskify is built using a **modular microservices architecture** to ensure scalability, maintainability, and flexibility for future growth.

Each service handles a specific domain, communicating securely through REST APIs.

---

## Architecture Diagram
```mermaid
graph TD

A[Client (Web/Mobile)]
A --> B[API Gateway / Backend Service]

B --> C1[User Service]
B --> C2[Task Service]
B --> C3[Auth Service]

C1 --> D1[(Database)]
C2 --> D2[(Database)]
C3 --> D3[(Database)]
```
