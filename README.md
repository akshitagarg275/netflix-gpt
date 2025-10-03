# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Netflix Gpt

- using vite created the app
- configured tailwind css
- routing configuration
- Header
- Login Form
- SignUp Form (name, email, password)
- Validations in Form
- deploying app to production
- create SignUp/Signin User Functionality
- Redux store with user slice
- we will be using onAuth state changed firebase utility
- navigate user to browse page
- Implemented signout
- Update Profile API call

# Features
- Login/SignUp
    - Sign In / Sign Up Form
    - redirect to browse page

- BrowsePage (after auhenticatiom)
    - Header
    - main movie
        - Trailer in background
        - Title & Description
        - MovieSuggestions
            - MovieLists * N

- Netflix GPT
 - Search Bar
 - Movie Suggestions