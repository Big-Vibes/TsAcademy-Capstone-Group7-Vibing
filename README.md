# TsAcademy Capstone Group 7

## Solar System Data Explorer

A frontend capstone project by Group 7 for TS Academy. The app presents solar system content as a guided learning experience with a hero section, explainer content, planet cards, a comparison table, and a contact form.

## Recent Development

The latest iteration includes:

- Direct local image imports for planet cards using `src/assets/planet.json`
- Smooth-scroll CTA behavior from the hero section
- A short roll-down transition when users jump to the data or contact sections
- Client-side validation and submit-state feedback for the contact form
- Cleaner data normalization in `fetch.jsx` without the older HTML metadata parsing approach

## Overview

The project is designed to make planetary information easier to understand through:

- visual comparison
- structured educational content
- clear section-to-section flow
- responsive React components

It also serves as a portfolio-ready frontend exercise that demonstrates component composition, local asset handling, and iterative UI refinement.

## Features

- Hero section with two CTA buttons:
  `Explore the Data` scrolls to the planet-card section
  `Contact Us` scrolls to the contact form
- Educational explainer section with embedded video content
- Planet card grid generated from local JSON data
- Grouped comparison table for major planet classifications
- Contact form with validation and submission feedback
- Footer with project and team credits

## User Flow

1. Users land on the hero section and understand the purpose of the site.
2. They continue into the explainer section to learn why planetary data matters.
3. They explore the visual planet cards generated from local data.
4. They compare key facts in the grouped data table.
5. They can submit an inquiry through the contact form.

## Tech Stack

- React 19
- Vite
- Tailwind CSS 4
- Lucide React
- ESLint

## Project Structure

```text
Capstone/
|-- public/
|-- src/
|   |-- assets/
|   |   |-- planet.json
|   |   |-- EARTH-1024_web.png
|   |   |-- Mercury.jpg
|   |   |-- venus.jpg
|   |   |-- mars-v2.jpg
|   |   |-- jupiter-v2.jpg
|   |   |-- saturn-v2.jpg
|   |   |-- uranus-v2.jpg
|   |   |-- neptune-v2.jpg
|   |   |-- pluto.jpg
|   |   |-- Image.png
|   |   `-- graphics.png
|   |-- components/
|   |   |-- headers.jsx
|   |   |-- content1.jsx
|   |   |-- content2.jsx
|   |   |-- content3.jsx
|   |   |-- content4.jsx
|   |   |-- fetch.jsx
|   |   `-- footer.jsx
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- package.json
`-- README.md
```

## Component Notes

### `headers.jsx`

Contains the hero layout, branding, intro copy, and CTA buttons. The CTA actions are passed from `App.jsx` so they can trigger smooth scrolling to the correct sections.

### `content1.jsx`

Contains the introductory educational section and embedded YouTube explainer.

### `fetch.jsx`

Normalizes the local planet data for the UI. It now:

- imports `planet.json`
- maps each `image` path to a real bundled asset import
- returns UI-ready objects with `name`, `distanceFromSun`, and `image`

This replaces the older approach that depended on parsing saved HTML files for image metadata.

### `content2.jsx`

Renders the planet card grid using the normalized data from `fetch.jsx`.

### `content3.jsx`

Displays the grouped planetary facts table for terrestrial planets, jovian planets, gas giants, ice giants, and dwarf planets.

### `content4.jsx`

Contains the contact form. The current version includes:

- field-level validation
- inline error messages
- submit status messaging
- POST submission to `https://whitebricks.com/tsacademy.php`

### `App.jsx`

Coordinates the page flow. It now manages:

- smooth-scroll behavior for CTA buttons
- section refs for the data and contact areas
- the temporary roll-down transition state applied after scroll

## Data Model

The app uses local JSON from:

```text
src/assets/planet.json
```

Each entry includes:

- `planet`
- `distanceFromSun`
- `image`

Example:

```json
{
  "planet": "Mars",
  "distanceFromSun": 227.9,
  "image": "./assets/mars-v2.jpg"
}
```

The `image` values now point to real local asset paths that are matched against imported image modules in `fetch.jsx`.

## Running the Project

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build

```bash
npm run preview
```

### 5. Lint the project

```bash
npm run lint
```

## Design Direction

The interface uses a blue-and-white visual language intended to feel educational, clean, and approachable. The page is organized into progressive sections so users can move from discovery to comparison to contact without getting lost.

## Current Status

This project is currently a frontend educational experience with:

- responsive section-based layout
- local data rendering
- bundled image assets
- smooth in-page CTA navigation
- validated contact form interactions

## Next Improvements

- add automated tests
- improve accessibility and keyboard-flow checks
- connect the form flow to a more robust backend response model
- add filtering, sorting, or search for planet data
- verify content values against an official scientific data source

## Team Credit

Group 7

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

## References

- TS Academy
- YouTube embedded educational content
- Local planetary dataset in `src/assets/planet.json`

Institutional link:

- https://tsacademyonline.com/

## License

MIT License
