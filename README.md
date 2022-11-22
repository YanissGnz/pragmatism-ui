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
- ```javascript
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}', // Add this line
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
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

#### 4. Import `tailwind.min.css` file in your `index.{js,jsx,tsx}` file from pragratism-ui:

```javascript
// Order is important
import 'pragratism-ui/dist/tailwind.min.css'; // this comes first
import './index.css'; // this comes last
```

### Theme Override

To override the default theme change the `theme` section of your `tailwind.config.js` file.

#### Default theme:

```javascript
theme: {
 extend: {
   keyframes: {
     'slide-left-and-fade': {
       '0%': { opacity: 0, transform: 'translateX(2px)' },
       '100%': { opacity: 1, transform: 'translateX(0)' }
     },
     'slide-down-and-fade': {
       '0%': { opacity: 0, transform: 'translateY(-2px)' },
       '100%': { opacity: 1, transform: 'translateY(0)' }
     },
     'slide-right-and-fade': {
       '0%': { opacity: 0, transform: 'translateX(-2px)' },
       '100%': { opacity: 1, transform: 'translateX(0)' }
     },
     'slide-up-and-fade': {
       '0%': { opacity: 0, transform: 'translateY(2px)' },
       '100%': { opacity: 1, transform: 'translateY(0)' }
     }
   },
   animation: {
     'slide-left-and-fade': 'slide-left-and-fade 400ms',
     'slide-down-and-fade': 'slide-down-and-fade 400ms',
     'slide-right-and-fade': 'slide-right-and-fade 400ms',
     'slide-up-and-fade': 'slide-up-and-fade 400ms'
   },
   fontFamily: {
     sans: ['Poppins']
   },
   colors: {
     primary: {
       light: '#79E1F6',
       DEFAULT: '#0EB1D2',
       dark: '#086172',
       'contrast-text': '#FFFFFF'
     },
     secondary: {
       light: '#F1D26A',
       DEFAULT: '#ECC032',
       dark: '#83670C',
       'contrast-text': '#000000'
     },
     info: {
       light: '#4FC3F7',
       DEFAULT: '#29B6F6',
       dark: '#0288D1',
       'contrast-text': '#000000'
     },
     success: {
       light: '#81c784',
       DEFAULT: '#66bb6a',
       dark: '#388e3c',
       'contrast-text': '#000000'
     },
     error: {
       light: '#E57373',
       DEFAULT: '#F44336',
       dark: '#D32F2F',
       'contrast-text': '#FFFFFF'
     },
     warning: {
       light: '#ffb74d',
       DEFAULT: '#ffa726',
       dark: '#DD6B20',
       'contrast-text': '#FFFFFF'
     },
     highlight: '#F3CF00',
     neutral: {
       DEFAULT: '#FFFFFF',
       100: '#F1F4F9',
       200: '#E2E8F0',
       300: '#CBD5E0',
       400: '#A9B9CC',
       500: '#8496AE',
       600: '#68778D',
       700: '#4A5568',
       800: '#323A43',
       900: '#202327'
     },
     skelaton: '#CBD5E0',
     focus: '#2173DF'
   }
}
```

### Components

Visit [Storybooks](https://pragmatism-ui.vercel.app/)
