/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.html',
    './marketing/templates/**/*.html',
    './marketing/static/**/*.js',
    './static/js/**/*.js',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    fontFamily: {
      heading: ['"Poppins"', 'Segoe UI', 'Calibri', 'Helvetica Neue', 'Arial', 'sans-serif'],
      sans: ['"Open Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif']
    },
    extend: {
      colors: {
        'todde-red': '#8B1A35',
        'todde-red-dark': '#6D1429',
        'todde-dark-bg': '#1A1A1A',
        'todde-light-bg': '#F5F5F5',
        'todde-text-dark': '#111111',
        'todde-text-light': '#666666',
        'todde-border': '#E5E5E5',
        'todde-blue': '#004080',
        'todde-blue-dark': '#003366',
        'todde-blue-light': '#89CFF0',
        'todde-dark': '#383838',
        'todde-jet': '#004080',
        'todde-neutral': '#F3F7F8',
        'todde-muted': '#6E7A7B',
        'todde-success': '#89CFF0',
        'todde-orange': '#E18335',
        'todde-orange-dark': '#C66D2A',
        'todde-amber': '#E18335',
        'todde-caramel': '#E18335',
        'todde-caramel-soft': '#C66D2A',
        'todde-cream': '#FFF5ED'
      },
      boxShadow: {
        subtle: '0 10px 30px -12px rgba(12, 46, 138, 0.2)',
        card: '0 20px 45px -20px rgba(12, 46, 138, 0.35)'
      },
      borderRadius: {
        none: '0',
        sm: '0',
        DEFAULT: '0',
        md: '0',
        lg: '0',
        xl: '0',
        '2xl': '0',
        '3xl': '0',
        full: '0'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem'
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1366px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
  ]
}
