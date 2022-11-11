# React Pragratism UI Library

A UI library built with tailwind and radix ui

### Getting Started
#### 1. Install and Configure <a href="https://tailwindcss.com/" rel="nofollow" >Tailwind CSS</a> :
- Install tailwindcss via npm, and create your tailwind.config.js file:
   ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
   ```
- Add the paths to all of your template files in your `tailwind.config.js` file:
   ```javascript
   /** @type {import('tailwindcss').Config} */
   module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Add this line
    ],
    theme: {
      extend: {},
      },
    plugins: [],
   }
   ```
 - Add the @tailwind directives for each of Tailwind’s layers to your `./src/index.css` file:
 ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
 ```
#### 2. Install pragmatism-ui from npm:
##### npm
```bash
npm install pragratism-ui
```
##### yarn
```bash
yarn add pragratism-ui
```
#### 3. Add the paths to pragratism-ui module in your `tailwind.config.js` file:
   ```javascript
   /** @type {import('tailwindcss').Config} */
   module.exports = {
    content: [
     ...,
    'node_modules/pragratism-ui/**/*.{js,jsx,ts,tsx}' // Add this
    ],
    theme: {
      extend: {},
      },
    plugins: [],
   }
   ```
#### 4. Import `tailwind.css` file from  pragratism-ui:
```javascript
  // Order is important
  import 'pragratism-ui/dist/tailwind.css' // this comes first
  import 'index.css' // this comes last
```



### Components

[Storybooks](https://pragmatism-ui.vercel.app/)
