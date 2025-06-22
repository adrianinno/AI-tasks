# User Management App

This is a responsive frontend application that displays and manages user data from the JSONPlaceholder API. It features a clean, modern interface with a table-based layout for user data and a modal for detailed views.

## Features

- **User List Display**: Shows a list of users in a responsive, table-like format.
- **Detailed User Modal**: Clicking on a user opens a modal with their complete information, including a link to their location on Google Maps.
- **Delete Users**: Users can be deleted from the list (client-side only).
- **Responsive Design**: The layout adapts to different screen sizes, with the table transforming into a card view on mobile devices.
- **Modern UI**: Clean and professional user interface with animations and visual feedback for user interactions.
- **Tested**: Unit and integration tests are included to ensure application reliability.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A modern frontend build tool that provides a fast development experience.
- **Vitest**: A blazing fast unit-test framework powered by Vite.
- **React Testing Library**: A lightweight solution for testing React components.
- **CSS**: Custom styles for a modern look and feel.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or later)
- [npm](https://www.npmjs.com/)

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd user-management-app
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

To start the development server, run:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Running Tests

To run the test suite, use the following command:

```bash
npm test
```

## Project Structure

The project follows a standard React application structure, with source files organized as follows:

```
src
├── components      # React components (UserTable, UserModal)
├── hooks           # Custom React hooks (useUsers)
├── services        # API services (userService)
├── styles          # CSS stylesheets
├── tests           # Test files and setup
└── types           # TypeScript type definitions
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
