- npm create vite@latest 
Project name : Project-Imove
template: react 
variant: Javascript

- Install Tailwind CSS with Vite
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

- Add the paths to tailwind.config.js file.
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

- Add the @tailwind directives for each of Tailwind’s layers to index.css file
@tailwind base;
@tailwind components;
@tailwind utilities;

-  In App.css delete all data.

<!-- - Add background images file on tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'Banner: "url('src\Picture\run.jpg')",
        <!-- 'footer-texture': "url('/img/footer-texture.png')"
      }
    }
  }
} --># Project-Imove -->

- Install Material UI
npm install @mui/material @emotion/react @emotion/styled

npm install react-scroll >> scroll up
-----------
npm install notistack