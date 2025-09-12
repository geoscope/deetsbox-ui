/** @type {import('tailwindcss').Config} */
module.exports = {
    // Configure the paths to all of your HTML templates, JavaScript components,
    // and any other source files that contain Tailwind class names.
    darkMode: 'class', // Or 'media' if you want to allow system preference
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
    extend: {},
    },
    plugins: [],
}