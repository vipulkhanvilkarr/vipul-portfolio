# Vipul's Portfolio

Welcome to **Vipul's Portfolio** – a modern, responsive personal portfolio built with Vite, React.js, and Tailwind CSS. This project showcases my skills, projects, and professional experience. Hosted on Vercel.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- 🌐 **Fully Responsive**: Optimized for all devices.
- ⚡ **Fast Performance**: Powered by Vite.
- 🎨 **Dark/Light Theme**: Implemented using Redux.
- 🔥 **Smooth Animations**: CSS and JS-based transitions.
- 📂 **Modular Components**: Organized code structure for easy customization.
- 📞 **Contact Section**: Direct ways to connect with me.

## Technologies Used

- **Frontend**: React.js, Vite, Tailwind CSS
- **State Management**: Redux Toolkit
- **Deployment**: Vercel
- **Tools**: PostCSS, ESLint

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vipulkhanvilkarr/vipul-portfolio.git
   ```
2. Navigate into the project directory:
   ```bash
   cd vipul-portfolio
   ```
3. Install dependencies:
   ```bash
   yarn install  # Recommended to use Yarn for proper Husky hook functionality
   ```
4. Start the development server:
   ```bash
   yarn dev
   ```
   Open `http://localhost:3000` with your browser to see the result.

## Project Structure

```plaintext
vipul-portfolio/
├── .eslintrc.cjs
├── .gitignore
├── How to use this project.txt
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── src/
│   ├── App.jsx
│   ├── assets/         # Image and static assets
│   ├── Components/     # Organized React components
│   │   ├── About/
│   │   │   └── About.jsx
│   │   ├── Experience/
│   │   │   └── Experience.jsx
│   │   ├── Footer/
│   │   │   └── Footer.jsx
│   │   ├── Home/
│   │   │   └── Home.jsx
│   │   ├── Navbar/
│   │   │   ├── navbar.css
│   │   │   └── Navbar.jsx
│   │   ├── Projects/
│   │   │   ├── ProjectCard.jsx
│   │   │   └── ...
│   │   └── TextChange.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── redux/          # Redux state management
│   │   ├── store.js
│   │   └── themeSlice.js
├── tailwind.config.js
└── vite.config.js
```

## Deployment

This project is hosted on **Vercel**.

### Deploy to Vercel

1. Push your changes to GitHub.
2. Log in to [Vercel](https://vercel.com/).
3. Import the repository.
4. Click **Deploy**.
5. Vercel will provide a live URL.

🔗 **Live Demo**: [Vipul's Portfolio](https://vipul-khanvilkar-portfolio-sigma.vercel.app/)

## Customization

### Change Defaults
There are some things you may want to change, including:
- Titles, URLs, favicons, etc.
- Find all comments with `!STARTERCONF` and follow the guide.
- Don't forget to update the package name in `package.json`.

## Commit Message Convention

This project follows **conventional commits**. It is mandatory to use this format for all commits.

## Contributing

Contributions are welcome! Follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature-name`)
3. **Commit your changes** (`git commit -m "feat: Add new feature"`)
4. **Push to your branch** (`git push origin feature-name`)
5. **Create a Pull Request**

### Projects Using This Starter

- [theodorusclarence.com](https://theodorusclarence.com) ([Source](https://github.com/theodorusclarence))
- [Notiolink](https://notiolink.com) ([Source](https://github.com/notiolink))

Are you using this starter? Feel free to add your page and repository via a Pull Request! 😃

## Expansion Pack 📦

This starter supports easy expansion with additional features like:
- **React Hook Form + Components**
- **Storybook**
- **More integrations**

## License

This project is **MIT Licensed**. Feel free to use and modify it as needed.

---
🚀 Built with ❤️ by Vipul Khanvilkar