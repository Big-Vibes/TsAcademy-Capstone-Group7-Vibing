# TsAcademy-Capstone-Group7-Vibing
# Solar System Data Explorer

A frontend capstone project by **Group 7** for **TS Academy**, built to make planetary science easier to understand through structured content, data-driven comparisons, and a clean visual interface.

This application presents the solar system as an educational experience rather than a static landing page. It introduces users to planetary science, visualizes planet differences, summarizes key planetary facts in a grouped comparison table, and provides a contact form for follow-up engagement.

## Overview

The project is designed for learners, recruiters, and reviewers who want to understand both the **product goal** and the **engineering thinking** behind it.

From an employer's point of view, this project demonstrates:

- Component-based UI design with React
- Frontend styling with Tailwind CSS
- Local data handling and transformation
- Responsive layout structuring
- Educational product thinking
- Iterative UI refinement based on reference mockups

## Project Objective

The objective of the project is to present core planetary information in a way that is:

- **Accessible**: simple enough for non-experts to understand
- **Visual**: organized with clear sections, imagery, tables, and cards
- **Educational**: focused on real planetary attributes such as distance, mass, diameter, density, and gravity
- **Interactive in structure**: designed to guide the user through discovery, comparison, and contact

In short, the application aims to translate astronomy content into a friendly web experience for students and curious users.

## Problem Statement

Many educational pages about the solar system are either:

- too text-heavy for beginners
- too scientific without visual structure
- or visually appealing but weak on actual data

This project addresses that gap by combining:

- a clear landing section
- a supporting explanation block
- a visual planet card grid
- a structured facts table
- and a simple inquiry form

## Key Features

- **Hero section** introducing the product mission
- **Educational explainer section** with embedded video content
- **Planet card grid** showing planet name, distance from the sun, and image
- **Grouped comparison table** for terrestrial, jovian, gas giant, ice giant, and dwarf planet categories
- **Contact form UI** for user inquiries
- **Footer section** with project credits and institutional reference

## User Journey

The page is structured as a simple learning flow:

1. A user lands on the hero section and understands the purpose of the site.
2. The user sees why planetary data matters through the explainer section.
3. The user browses visual planet cards for quick recognition.
4. The user compares detailed planetary facts in a grouped data table.
5. The user can use the contact form if they want to learn more or reach out.

## Tech Stack

- **React 19**
- **Vite**
- **Tailwind CSS 4**
- **Lucide React**
- **ESLint**

## Project Structure

```text
Capstone/
├── public/
├── src/
│   ├── assets/
│   │   ├── planet.json
│   │   ├── Image.png
│   │   ├── graphics.png
│   │   └── *.htm
│   ├── components/
│   │   ├── headers.jsx
│   │   ├── content1.jsx
│   │   ├── content2.jsx
│   │   ├── content3.jsx
│   │   ├── content4.jsx
│   │   ├── fetch.jsx
│   │   └── footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md
```

## Section Breakdown

### `headers.jsx`

Contains the hero area:

- brand/logo placement
- project headline
- supporting intro text
- call-to-action buttons
- hero planet illustration

### `content1.jsx`

Contains the educational introduction section:

- embedded YouTube content
- short explanation of how planetary data helps us understand space

### `fetch.jsx`

Handles the planet data preparation layer.

Current behavior:

- imports `planet.json` from local assets
- maps raw planet entries into UI-friendly objects
- extracts usable image URLs from the saved HTML image-reference files

### `content2.jsx`

Displays the visual planet card grid using normalized planet data:

- image
- planet name
- distance from the sun

### `content3.jsx`

Displays the grouped comparison table:

- terrestrial planets
- jovian planets
- gas giants
- ice giants
- dwarf planets

### `content4.jsx`

Contains the contact form UI:

- full name
- email
- phone number
- message

### `footer.jsx`

Contains:

- project summary
- team credits
- TS Academy link

## How the Data Works

This project uses a local file:

```text
src/assets/planet.json
```

Each planet entry contains:

- `planet`
- `distanceFromSun`
- `image`

The current image references inside `planet.json` point to `.htm` files stored in `src/assets`. Those files are not image files themselves; they are saved HTML pages that contain metadata for the planet images. The application currently extracts the `og:image` URL from those files during data normalization.

### Important Note For Usage

For a more production-ready version of the project, those `.htm` files should be replaced with actual local image assets such as: 

- `.png`
- `.jpg`
- `.webp`

That would simplify the rendering pipeline and make the project more stable offline. NOTE specifically used htm for clear version of image. Developer purposely build in format. Turn on your data to use.

## How to Run the Project

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd Capstone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` starts the Vite development server
- `npm run build` builds the app for production
- `npm run preview` previews the production build
- `npm run lint` runs ESLint checks

## Design Approach

The interface was built with a few guiding design decisions:

- Use a **blue-and-white science-themed palette**
- Keep layouts **moderate and readable**
- Present information in **progressive sections**
- Favor **clear grouping** over decorative complexity
- Use **cards and tables** to support quick scanning

The styling direction is intentionally educational, clean, and structured.

## Roadmap

### Phase 1: Foundation

- Set up React + Vite project
- Establish page structure
- Create reusable sections
- Add Tailwind-based styling

### Phase 2: Content Assembly

- Build hero section
- Add explainer section
- Create planet card display
- Add grouped comparison table
- Add contact form UI
- Add footer and project credits

### Phase 3: Data Integration

- Introduce local `planet.json`
- Normalize data for frontend rendering
- Resolve image display issues through HTML metadata extraction

### Phase 4: Refinement

- Improve spacing, responsiveness, and alignment
- Match layout to design references
- Simplify and moderate component styling

### Proposed Next Steps

- Replace `.htm` image references with proper local image files
- Add form handling and validation feedback
- Add filtering or sorting for planetary data
- Add accessibility review and keyboard testing
- Add unit/component tests
- Add deployment instructions and hosted demo link

## Current Status

This project is currently a **frontend-focused educational web application** with local data integration and refined UI sections.

What is complete:

- major page sections
- responsive layouts
- local data rendering
- grouped comparison content
- employer-readable structure

What can still be improved:

- production-ready asset management
- backend or form submission logic
- automated tests
- content validation against an official scientific dataset

## Usage Notes

This project is best used as:

- a student capstone submission
- a frontend portfolio project
- a UI implementation sample
- a learning product prototype

## References

The project content and assets are inspired by or connected to the following sources used within the application:

- **TS Academy** for the capstone context
- **YouTube** for the embedded educational video
- **Planet data in `src/assets/planet.json`**
- **Planet image metadata extracted from local HTML asset files**

Institutional link:

- [TS Academy](https://tsacademyonline.com/)

## Team Credit

**Group 7**

Developers listed in the project footer:

- Abiodun Inaolaji
- Henry Aniche
- Oduguwa Olanrewaju Micheal
- Offiah Victor
- Jawando Fawaz
- Samuel Akindele

Design credit shown in the application:

- Amaka
- Ifeoma A.

## Employer Summary

If you are reviewing this project as a recruiter, hiring manager, or technical evaluator, the strongest signals in this work are:

- the ability to translate rough UI references into working React components
- iterative debugging of data and asset issues
- structured decomposition of a landing page into maintainable sections
- practical use of local assets and data transformation
- attention to layout, readability, and user flow

This project shows solid frontend implementation fundamentals and a good base for future expansion into a more complete product.

## Employer Summary
MIT License
