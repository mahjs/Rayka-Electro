# Electro Team Website

## Introduction

Welcome to the Electro Team Website project. Our platform is dedicated to offering innovative solutions, focusing on addressing the challenges faced by the Iranian online community under international sanctions. We're committed to creating a digital space that is accessible, user-friendly, and resilient under restrictive online environments.

## Features

The Electro Team Website is equipped with features designed to empower users in the face of international sanctions:

- **Specialized and Regular DNS Provision**: We offer both specialized and standard DNS options, providing users with essential tools to maintain internet access under restrictive conditions. This feature supports consistent access to a broad spectrum of internet resources.

- **Sanctions Confrontation Application**: Beyond DNS, our platform includes a dedicated application that supports users in dealing with sanctions. It's essential for accessing crucial online services and information in challenging environments.

- **Diverse DNS Accessibility**: Our platform addresses various user needs by offering a range of DNS types. This ensures that all users, regardless of technical background, can access a suitable DNS solution to maintain their online presence.

Together, these features represent our commitment to helping users navigate and stay connected in a world with increasing digital barriers.

## Technologies Used

### React

- **Description**: React is a JavaScript library for building dynamic user interfaces, utilizing efficient rendering methods like the Virtual DOM.
- **Role in Project**: Our website leverages React for its high-speed rendering capabilities, enhancing both user experience and SEO. Its compatibility with various JavaScript frameworks and libraries also adds to its flexibility in our front-end development.

### TypeScript

- **Description**: TypeScript is an open-source language that builds on JavaScript by adding static type definitions. Types provide a way to describe the shape of an object, providing better documentation, and allowing TypeScript to validate that your code is working correctly.
- **Role in Project**: The use of TypeScript in our project significantly enhances the development workflow by introducing type safety and reducing the likelihood of runtime errors. With clear type definitions, developers can confidently make changes and refactor code, ensuring that components interact as expected. This added layer of security makes the development process smoother and faster, as many potential errors can be caught at compile time rather than during runtime, which is particularly beneficial in a collaborative environment where understanding code at a glance becomes crucial. The autocompletion and intelligence features provided by TypeScript also streamline the development process, making it more intuitive and productive.

### Vite

- **Description**:Vite is a cutting-edge frontend build tool that significantly streamlines the development experience. It stands out for its faster build times, leveraged by ESBuild, a high-performance engine that powers Vite.
- **Role in Project**: In our project, Vite plays a pivotal role in enhancing the development workflow. It dramatically increases startup speed by 10-100x, thanks to ESBuild. This acceleration in the feedback loop during development means our application is not only quick to load but also allows for more efficient and productive development, enabling rapid iteration and quicker realization of project goals.

### Tailwind CSS

- **Description**: Tailwind CSS? It's this super cool toolkit for styling your web pages without the fuss. Think of it like having a bunch of ready-to-use styling options at your fingertips.
  - **Role in Project**: Here’s what it does for us:
    Styling Made Easy: We get to boss around how elements look with total ease. Want to tweak something? Bam! Done.
    Speedy Styling: It’s like putting your webpage's style on fast-forward. No more waiting around to get things looking sharp.
    Adapts Like a Chameleon: This thing makes sure our site looks good on any device, and it’s tight on security too.

## Getting Started

To set up the project locally:

```bash
git clone https://github.com/sina-ss/electro-team-website
cd electro-team-website
npm install
npm run dev
```

## Project Structure
e
**Architecture Overview**

The architecture of the Electro Team Website project is designed with a focus on scalability and maintainability. Below is a structured overview of our project's core directories and files, delineating the organization of the codebase:

**/src**: This directory constitutes the central hub of our application, containing all the active source code.
**/assets**: Herein are housed the global static assets such as styles, images, and fonts that are used across the application.
**/components**: This directory contains reusable UI components, each within dedicated sub-directories to promote modularity and reuse.
**/contexts**: Contexts within this directory are employed for state management, facilitating shared state across components.
**/hooks**: We encapsulate reusable stateful logic within custom hooks, located in this directory.
**/pages**: The pages directory features components that represent complete pages, constituting the navigable screens within the application.
**/routes**: Our routing setup, leveraging react-router-dom, is defined here, orchestrating the navigation throughout the application.
**/services**: The services directory encapsulates the logic for external API calls, centralizing the management of data exchange with external sources.
**/utils**: Common, reusable utility functions are kept within this directory, providing solutions to frequently encountered programming tasks.

## Root-Level Files

**App.tsx**: The root component that synthesizes our UI and underlying logic.
**index.tsx**: The entry point file that renders the React application into the web Document Object Model (DOM).
**package.json**: This file is the cornerstone of our project's dependencies and scripting commands. It provides a comprehensive list of modules required for the project's functionality and scripts that streamline the setup and deployment processes, enabling a smooth workflow for developers.process.
**README.md**: Serving as the face of our documentation, the README file offers a detailed introduction and walkthrough for new contributors, outlining the steps necessary to get started with the project. It is the initial point of reference for understanding the project's purpose, structure, and contribution guidelines.
**tsconfig.json**: The TypeScript configuration file is a critical component that enforces type safety and optimizes the TypeScript compiler settings. This configuration ensures our code adheres to stringent quality standards, catching potential issues early in the development cycle and facilitating an exceptional developer experience.
**vite.config.ts**: The Vite configuration file delineates the parameters and plugins used by Vite to accelerate and enhance our development and build process. By fine-tuning the settings in this file, we ensure our build tool is optimized for performance, contributing to the efficiency and speed of our application's development.

## Public Assets

**/public**: Static files such as the primary HTML template and icons reside here, accessible to the web browser.
The thoughtful organization of our project's structure mirrors contemporary web development practices and embodies our dedication to crafting a platform that is both user-centric and resilient.

## Key Dependencies

### @headlessui/react

- **Description**: @headlessui/react is a collection of unstyled, fully accessible UI components for React, akin to a treasure trove of ready-to-use designs. It's kind of like the cool cousin of Ant Design and Material UI but specifically tailored to gel with Tailwind CSS.
- **Role in Project**: We use it to whip up some really slick UI components. Since it's from the creators of Tailwind CSS, it meshes perfectly with our design system. The components look fantastic and are super user-friendly, giving our users a top-notch experience. Plus, with over a million weekly downloads, this library isn't just a small player – it's a heavyweight champ in terms of popularity. And the best part? It's only about 500 KB, making it a lightweight choice compared to its competitors.

In short, @headlessui/react gives our project that extra oomph in the UI department, combining beauty with efficiency.

### axios

- **Description**: Axios is a versatile HTTP client for browsers and Node.js, known for its easy-to-use API and automatic JSON data handling.
- **Role in Project**: Axios streamlines server communication by handling data requests and responses efficiently. We chose Axios over Fetch due to its wide range of features, including error handling, request cancellation, and security against cross-site request forgery (XSRF). These attributes ensure reliable data exchange and enhance the overall performance of our platform.

### Tauri

- **Description**: Tauri is a modern framework for creating lightweight desktop applications with web technologies.
- **Role in Project**: For the Electro Team Website, we chose Tauri due to its compact application size, modern architecture, and high performance. It enables us to offer a desktop app version of our site that is efficient and fast, while maintaining a smaller footprint than traditional desktop applications.

### clsx

- **Description**: CLSX is a nifty little utility for React devs. Think of it as a magic wand for conditionally juggling CSS classes. It makes it super easy to switch up styles based on what's happening in your app. No more headache of concatenating strings or juggling conditions to get your styling right.
- **Role in Project**: We use clsx to keep our code clean while we're throwing different styles at our components. Depending on what's going on in the app, clsx helps us apply the right styles at the right time, making our components look sharp without cluttering our code. It's all about keeping things neat and readable while being stylish.

### react-hook-form

- **Description**: A compact library for managing forms in React applications.
  - **Role in Project**:
  - **Efficiency**: React Hook Form optimizes form handling by minimizing re-renders, enhancing the performance of our project.
  - **Versatility**: Its compatibility with various validation schemas ensures robust and flexible form validation.
  - **Performance**: It excels in performance with its small size (only 800 KB) and wide adoption (over 3 million weekly downloads), making it a preferred choice for developers.

### react-router-dom

- **Description**: `react-router-dom` is a comprehensive tool for managing web navigation in React applications.
- **Role in Project**: It simplifies creating and organizing routes in our app. We use components like `<Router>`, `<Route>`, and `<Link>` for straightforward routing implementation. The library also supports dynamic routing, adapting to user interactions and specific project needs, making it an adaptable solution for our web application's navigation structure.

### react-toastify

- **Description**: A handy tool for adding toast notifications in React applications.
- **Role in Project**: We've employed react-toastify for its simplicity and effectiveness. It allows us to integrate toasts into our app effortlessly. The toasts we create using react-toastify are not only visually appealing but also function seamlessly across all devices, including mobiles. This ensures that our messages are delivered in an engaging and responsive manner.

### three js

- **Description**: Three.js is a powerful JavaScript library and API used to create and display animated 3D computer graphics in a web browser using WebGL.
- **Role in Project**: In our project, Three.js is employed to create immersive and interactive 3D backgrounds. These backgrounds are not just visually appealing, but they also contribute to the narrative of accessibility and technological prowess that our platform embodies. By leveraging the robust capabilities of Three.js, we're able to provide users with a rich visual experience that's both engaging and informative, setting our website apart in terms of design and user experience.

## Website Architecture and Functionalities

Our digital platform is meticulously architected to deliver a sophisticated and intuitive user experience. Each segment of the website is curated to fulfill distinct informational and interactive requirements:

### Account Creation Portal

The **Account Creation Portal** is the inception point for users to embark upon their engagement with our digital offerings. It is a streamlined interface designed to facilitate the seamless registration of new users, paving the way for access to customized services and features.

### Secure Authentication Interface

The **Secure Authentication Interface** serves as the nexus for user re-entry, safeguarding the integrity of user-specific environments. This interface ensures secure and private access to individual accounts, maintaining the sanctity of personalized user experiences.

### Main Dashboard

The **Main Dashboard** functions as the central node of our website, encapsulating a holistic portrayal of our services. This dashboard is thoughtfully engineered to provide both newcomers and frequent visitors with a snapshot of our capabilities and the latest insights.

### Application Page

On the application page, visitors have the opportunity to engage directly with our core services. By downloading our specialized software, users gain access to a comprehensive suite of DNS services tailored to their specific needs. This software is designed with cross-platform compatibility in mind, ensuring seamless installation and functionality across various operating systems.

Moreover, the application page provides direct links to educational resources, guiding users on the optimal usage of our software. Whether you are looking to implement our DNS services for personal use or integrate them into a larger system, the application page serves as your gateway to unrestricted internet access.

For those interested in gaining a deeper understanding of our services, the training section offers detailed instructions and support, ensuring you can leverage the full potential of our offerings.

### DNS Configuration Suite

Our **DNS Configuration Suite** is dedicated to furnishing users with robust tools and settings for DNS management. Herein, individuals can fine-tune their DNS preferences to assure resilient and secure connectivity across the web.

### Pricing Options

### Standard Plan

**Features**: This plan provides a basic set of services, suitable for users who require standard functionality without the need for advanced features.
**Benefits**: Cost-effective solution for everyday use, providing reliable performance and access to essential services.

### Premium Plan

**Features**: The premium plan includes all the features of the standard plan, along with additional advanced features tailored for users who need more specialized services.
**Benefits**: Enhanced capabilities for more demanding tasks, priority support, and a broader range of services, ensuring a comprehensive and premium experience.

### Server Performance Monitor

The **Server Performance Monitor** page is an operational dashboard that offers real-time insights into the status and efficacy of our server infrastructure. Users can consult this page for live updates on system performance, potential disruptions, or scheduled maintenance activities.

This delineation of our website's structure not only mirrors contemporary web development practices but also encapsulates our dedication to constructing a user-centric and resilient digital platform.
