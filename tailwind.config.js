/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        color: {
          primary: "#0085ff",
          secondary: "#69b4ff",
          dark: "#1E1E1E",
          light: "#FFFFFF",
          body: "#454545",
          lighten: "#9e9e9e"
        }
      }
    },
  },
  plugins: [],
}
