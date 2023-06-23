/** @type {import('tailwindcss').Config} */
export default {
    purge: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [],
};
