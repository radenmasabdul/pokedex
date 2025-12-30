<div align="center">
  
# 🔴 Pokédex 
# Discover your favorite Pokémon in a modern web app.

</div>

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="50" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="50" />
  <img src="https://raw.githubusercontent.com/radenmasabdul/logo/refs/heads/main/vite.svg" width="50" />
  <img src="https://raw.githubusercontent.com/radenmasabdul/logo/refs/heads/main/tailwindcss.svg" width="50" />
</p>

## 🌟 Project Overview

This project is a modern and responsive **Pokédex web application** developed as part of a **Frontend Developer Technical Test** at **Labamu**.

The application consumes data from the public **PokéAPI**, implements **search**, **infinite scroll**, **loading skeletons**, and **error handling**, while maintaining clean UI and good performance across devices.

## 🛠️ Features

- **Responsive Design:** Fully optimized for mobile, tablet, and desktop screens.
- **Pokémon List & Detail View:** Browse Pokémon list and view detailed information including stats, types, height, and weight.
- **Search Pokémon:** Search Pokémon by name with loading state and empty result handling.
- **Infinite Scroll:** Load Pokémon progressively using lazy loading for better performance.
- **Skeleton Loading:** Smooth skeleton placeholders during data fetching and search process.
- **Error Handling:** Graceful error messages when API requests fail.
- **Modern UI:** Clean layout built with Tailwind CSS and reusable UI components (shadcn/ui).

## ⚙️ Tech Stack

- **React 19** – Main library for building user interfaces
- **TypeScript** – Static typing for safer and more maintainable code
- **Vite** – Fast build tool and development server
- **Tailwind CSS** – Utility-first CSS framework for rapid UI development
- **shadcn/ui** – Reusable and accessible UI components
- **Radix UI** – Accessible primitives used by shadcn/ui
- **React Router** - Client-side routing
- **Lucide React** – Icon library
- **Redux Toolkit** – State management
- **Axios** – HTTP client for API requests
- **PokéAPI** – Public API for Pokémon data
- **Deployment:** Vercel

## 🚀 Setup / Installation

1. **Clone the repository**
```bash
git clone https://github.com/radenmasabdul/pokedex.git
cd pokedex
```

2. **Install dependencies**
```
npm install
```

3. **Create .env file**
```
VITE_API_BASE_URL=your_base_url
```

4. **Run the development server**
```
npm run dev
```

5. **Open to view in browser**
```
http://localhost:5173
```

## 📦 Build & Deployment

1. **Build for production**
```
npm run build
```

2. **Preview production build**
```
npm run preview
```

## 📁 Project Structure

```
public/                           # Static public assets
src/                              # Application source code
├── app/                          # App-level configuration & setup
├── assets/                       # Images, icons, and static assets
├── components/                   # Reusable shared components
│   ├── components/               # Global custom components (Skeleton, etc.)
│   ├── ui                        # Shadcn UI components
├── features/                     # Feature-based modules
│   ├── pokemon/                  # Pokémon feature module
│   │   ├── components/           # Feature-specific components
│   │   ├── hooks/                # Custom hooks
│   │   ├── pages/                # Feature pages
│   │   ├── services/             # API services
│   │   ├── store/                # Feature state management
│   │   ├── types/                # TypeScript types & mappers
├── lib/                          # Utility helpers & shared logic
├── pages/                        # App-level pages
├── routes/                       # Routing config
├── store/                        # Global state
├── styles/                       # Global styles & Tailwind config
├── main.tsx                      # Application entry point
.env                              # Environment variables
.env.example                      # Environment variable template
.gitignore                        # Git ignored files
components.json                   # Shadcn UI configuration
eslint.config.js                  # ESLint configuration
index.html                        # HTML entry
package-lock.json                 # Dependency lock file
package.json                      # Project dependencies & scripts
README.md                         # Project documentation
tsconfig.app.json                 # TypeScript app config
tsconfig.json                     # Base TypeScript config
tsconfig.node.json                # Node-specific TS config
vite.config.ts                    # Vite configuration
```

## 📱 Browser Support

This application supports all modern browsers that support ES2015+.

## 📄 License

This project is private and not licensed for public use.

## 🌐 Live Demo

Check out the live application: https://pokedex-chi-three-25.vercel.app/
