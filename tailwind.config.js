module.exports = {
  content: [],
  purge: {
    enabled: false,
    content: ['./dist/**/*.html'],
  },
  darkMode: 'class',
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    extend: {
      fontFamily: {
        'Oswald': ['Oswald'],
        'Roboto': ['Roboto']
      },
      backgroundImage: {
        's2': "url('/images/Mask Group 7.png')",
      },
      colors: {
        'c01': '#EBEFF7',
        'btn-orange': '#FF9300',
        'custom-black': '#231F20',
        'custom-gray': '#656565',
        'input-gray' : '#939FB8',
        'gray': {
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
        },
        'orange': {
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
        },
        'white': '#ffffff',
        's4' : '#EBEFF7',
        's5' : '#DFE3EB',
        's6' : '#EBEFF7',
      },
      width: {
        '100': '32.5rem',
        '110': '38rem',
        '30': '7.375rem'
      },
      height: {
        '30': '7.375rem'
      },
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}
