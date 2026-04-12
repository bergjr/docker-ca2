# Project Report 

## 1. Introduction

This project involved designing a private cloud environment and deploying a containerised full-stack web application within that environment. The application in this repository (Midnight Oil) is a three-tier food ordering platform composed of a React frontend, a Node.js/Express backend, and a MongoDB database. The solution was packaged using Docker and orchestrated with Docker Compose to support consistent deployment across development and hosting environments.

This report documents the private cloud plan and design, summarises the implementation process, explains the containerisation strategy, and reflects on the overall outcome of the project. It also identifies the contribution made by each group member and lists the supporting artefacts submitted with the final work.

## 2. Scenario and Objectives

The scenario for this assignment required the developer to design and implement a private cloud solution capable of hosting a containerised application. In response, I selected a web-based restaurant platform that allows users to browse menus and products and submit contact messages. The application was split into separate frontend, backend, and database services to follow a modular architecture suitable for cloud deployment.

The project objectives were as follows:

1. Design a private cloud environment that can host the application reliably.
2. Identify infrastructure, networking, storage, and security requirements.
3. Justify the technologies selected for both the cloud platform and the application stack.
4. Containerise the application components using Docker.
5. Deploy the containerised application in the target environment.
6. Validate that the services communicate correctly and are accessible to users.

## 3. Private Cloud Plan and Design

### 3.1 Requirements Analysis

The solution required an environment capable of hosting three connected services:

1. A frontend web service for user interaction.
2. A backend API service for application logic and data access.
3. A MongoDB database service for persistent storage.

From an infrastructure perspective, the environment needed to provide the following:

1. One virtual machine or node capable of running Docker.
2. Network connectivity between containers and external users.
3. Persistent storage for MongoDB data.
4. Basic security controls for access to the application and management interfaces.
5. Sufficient CPU, RAM, and storage resources to support the application workload.

Functional requirements included:

1. Displaying menu and product data to users.
2. Accepting contact messages from the frontend and storing them in MongoDB.
3. Serving the frontend over HTTP and exposing backend endpoints for data access.

Non-functional requirements included:

1. Portability across environments.
2. Ease of deployment and redeployment.
3. Maintainability through service separation.

### 3.2 Technology Justification

The selected technologies were appropriate for the project because they matched both the technical requirements and the learning objectives of the assignment as well as being widely used in industry.

Docker was used to package each application component into isolated containers. This made deployment more consistent and reduced dependency issues between environments.

Docker Compose was used to define and run the multi-container solution. It allowed the team to describe the frontend, backend, and database services in a single configuration file and manage them together.

MongoDB was selected as the database because the backend uses Mongoose and stores flexible document-based entities such as products, menus, and messages.

Node.js with Express was used for the backend API because it offers lightweight routing, JSON handling, and a straightforward integration with MongoDB.

React with Vite was used for the frontend because it supports component-based development and efficient client-side routing.

Microsoft Azure was selected as the cloud platform for this project because it provided a straightforward way to provision and manage the virtual machine used to host the containerised application.

