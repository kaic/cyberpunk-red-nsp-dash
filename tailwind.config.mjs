/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define a custom 'neon' color palette
        neon: {
          primary: '#BF40BF',     // Purple-400 equivalent 
          secondary: '#38B2AC',   // Cyan-400 equivalent
          accent1: '#F687B3',     // Pink-400 equivalent
          accent2: '#4299E1',     // Blue-400 equivalent
          accent3: '#7F9CF5',     // Indigo-400 equivalent
          
          // Dark versions for borders and backgrounds
          primaryDark: '#44337A', // Purple-900 equivalent
          secondaryDark: '#234E52', // Cyan-900 equivalent
          accent1Dark: '#702459', // Pink-900 equivalent
          accent2Dark: '#2A4365', // Blue-900 equivalent
          accent3Dark: '#3C366B', // Indigo-900 equivalent
        },
      },
    },
  },
  plugins: [],
};