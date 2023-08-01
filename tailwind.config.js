/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/user-portal/**/*.{html,ts}",
    "./libs/ui/authentication/**/*.{html,ts}",
    "./libs/ui/layout/**/*.{html,ts}",
    "./libs/ui/user-management/**/*.{html,ts}",
    "./libs/ui/banks/**/*.{html,ts}",
    "./libs/ui/cost-drivers/**/*.{html,ts}",
    "./libs/ui/pricing-handbook/**/*.{html,ts}",
    "./libs/ui/calculations/**/*.{html,ts}",
    "./libs/ui/Suppliers/**/*.{html,ts}",
    "./libs/ui/cost-allocation/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#348327'
      }
    },
  },
  plugins: [],
}

