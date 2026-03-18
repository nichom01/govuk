# GOV.UK React Application

A React application built with Vite that uses the rebranded GOV.UK Design System from June 2025.

## Features

- **Rebranded Header**: Blue background (#1d70b8) with updated GOV.UK logo and wordmark
- **Rebranded Footer**: Light blue background (#d2e2f1) with thick blue top border (#1d70b8) and crown logo
- **Landing Page**: Clean, accessible landing page following GOV.UK Design System patterns
- **Responsive Design**: Mobile-friendly layout that works across all device sizes

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

### Build

Build for production:
```bash
npm run build
```

### Preview Production Build

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Rebranded header component
│   ├── Header.css      # Header styles
│   ├── Footer.jsx      # Rebranded footer component
│   └── Footer.css      # Footer styles
├── App.jsx             # Main app component with landing page
├── App.css             # App styles
├── index.css           # Global GOV.UK Design System styles
└── main.jsx            # Application entry point
```

## Design System

This application implements the rebranded GOV.UK Design System from June 2025, featuring:

- **Header**: Blue background replacing the previous black header
- **Footer**: Light blue background with prominent blue top border
- **Typography**: GDS Transport font family
- **Colors**: Official GOV.UK color palette
- **Accessibility**: WCAG 2.1 AA compliant components

## License

This project uses the GOV.UK Design System patterns and styling.
