# Furniro E-Commerce Platform

<div align="center">

  ![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  ![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

  <p align="center">
    A premium, responsive, full-stack e-commerce experience built for modern furniture and home interior design.
  </p>

</div>

---

## Executive Summary

**Furniro** is a high-performance e-commerce frontend built to showcase luxury interior products and furniture. Designed with performance, accessibility, and user experience in mind, Furniro features dynamic filtering, side-by-side spec comparison matrices, real-time cart state management, and fluid UI animations.

---

## Key Features

- **Interactive Product Catalog:** Dynamic grid view with instant sorting, category filtering, percentage discount badges, and quick-action hover overlays (*Add to Cart*, *Compare*, *Wishlist*).
- **Side-by-Side Comparison Engine:** Custom specs comparison table allowing customers to compare up to 3 items on dimensions, materials, and price points.
- **Persistent State Management:** Global shopping cart, wishlist, and comparison context powered by React Context API with local storage synchronization.
- **Fluid Micro-Interactions:** Smooth page transitions and UI feedback powered by `framer-motion` and custom Tailwind CSS design system tokens.
- **Asset Fallback Resilience:** Built-in image error handling to automatically serve high-quality fallback visual placeholders for missing image assets.
- **Fully Responsive Architecture:** Pixel-perfect adaptive design across mobile, tablet, and desktop breakpoints.

---

## Tech Stack

### Frontend Core
- **Framework:** [React.js](https://react.dev/) (v18+)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Routing:** [React Router DOM](https://reactrouter.com/) (v6+)

### Architecture & State
- **State Management:** React Context API (`CartContext`)
- **Asset Pipeline:** Modular ES6 imports with Vite bundling

---

## Project Architecture

```text
furniro-ecommerce/
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Global media assets, icons, and banners
│   ├── components/         # Reusable UI components
│   │   ├── FeaturesBar.jsx # Value proposition bar
│   │   ├── Navbar.jsx      # Navigation bar with active state
│   │   ├── ProductCard.jsx # Reusable product card with image fallback
│   │   └── ...
│   ├── context/            # React Context stores
│   │   └── CartContext.jsx # Shopping cart, comparison & wishlist state
│   ├── pages/              # Application routes & view views
│   │   ├── Home.jsx        # Landing page
│   │   ├── Shop.jsx        # Catalog page with filters
│   │   ├── Comparison.jsx  # Side-by-side spec comparison table
│   │   ├── Cart.jsx        # Cart management view
│   │   └── Checkout.jsx    # Order completion workflow
│   ├── App.jsx             # Main router configuration
│   └── main.jsx            # Application entry point
├── package.json
├── tailwind.config.js
└── vite.config.js


Getting Started
Prerequisites
Ensure you have the following installed on your machine:

Node.js: v18.0.0 or higher

npm: v9.0.0 or higher (or pnpm / yarn)

Local Setup Instructions
Clone the repository

Bash
git clone [https://github.com/your-username/furniro-ecommerce.git](https://github.com/your-username/furniro-ecommerce.git)
cd furniro-ecommerce
Install project dependencies

Bash
npm install
Start the local development server

Bash
npm run dev
Open http://localhost:5173 in your browser to view the application.

Build for production

Bash
npm run build
Contributing
Contributions are welcome! If you'd like to improve Furniro, please follow these steps:

Fork the repository

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request
