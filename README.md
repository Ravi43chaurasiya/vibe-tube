 ## npx create-react-app vibe-tube
 - cd vibe-tube
 - npm start

 ## configure tailwind css for CRA.
 - npm install -D tailwindcss
 - npx tailwindcss init
 - /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
- }

  ## add in the index.css 
- @tailwind base;
- @tailwind components;
- @tailwind utilities;

- after thiese steps tailwind has been configured now You can npm start and use tailwind css.