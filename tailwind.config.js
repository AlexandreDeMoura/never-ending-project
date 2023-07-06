/** @type {import('tailwindcss').Config} */
// npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: '"Maison Neue", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    extend: {
      colors: {
        gray: {
          900: '#0B1115',
          700: '#434647',
          500: '#8A8D8F',
          300: '#D8D9DA',
          100: '#ECECEC',
          50: '#F4F4F4',
        },
        beige: {
          600: '#D1AE9B',
          400: '#F1E4CD',
          300: '#FEF8ED',
        },
        red: {
          600: '#C20C0C',
          400: '#D45454',
          350: '#F5D5D5',
          300: '#FAECEC',
        },
        orange: {
          600: '#D88100',
          350: '#FEF1DA',
          300: '#FCF5EB',
        },
        green: {
          900: '#13482B',
          600: '#139B51',
          400: '#8EA799',
          350: '#E1E9E6',
          300: '#EBF0EE',
          200: '#8ECFAB',
          100: '#CBDCD2',
        },
        notion: {
          sideBar: '#fbfbfa'
        }
      },
      spacing: {
        '-px': '-1px',
        0.75: '0.1875rem',
        2.25: '0.5625rem',
        2.75: '0.6875rem',
        5.5: '1.375rem',
        7.5: '1.875rem',
        9.5: '2.375rem',
        14.5: '3.625rem',
        15: '3.75rem',
        18: '4.5rem',
        19: '4.75rem',
        21.5: '5.375rem',
        22: '5.5rem',
        25: '6.25rem',
        27: '6.625rem',
        33: '8.25rem',
        35: '8.75rem',
        38: '9.25rem',
        50: '12.5rem',
        84: '21rem',
        85: '21.25rem',
        87: '22rem',
        90: '23rem',
        'highlight-modal': '23.44rem',
        100: '26rem',
        106: '27rem',
        112: '28rem',
        118: '29rem',
        136: '32rem',
        148: '34rem',
        150: '34.125rem',
        modal: '37.5rem',
      },
      borderRadius: {
        smxl: '0.1875rem',
      },
      fontSize: {
        xxs: ['.625rem', '.625rem'],
        '3.5xl': ['2rem', '2.5rem'],
        '4.25xl': ['2.5rem', '3.75rem'],
      },
      lineHeight: {
        5.1: '1.175rem',
        5.5: '1.375rem',
      },
      boxShadow: {
        dropdown: '0px 4px 32px rgba(0, 16, 61, 0.16)',
      },
      dropShadow: {
        tooltip: '0px 4px 8px rgba(0, 0, 0, 0.16)',
      },
      borderWidth: {
        0.5: '0.5px',
        12: '12px',
      },
      zIndex: {
        9999: 9999,
      },
      animation: {
        enter: 'enter 200ms ease-out',
        leave: 'leave 150ms ease-in forwards',
        'spin-fast': 'spin 0.6s linear infinite',
      },
      keyframes: {
        enter: {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        leave: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(0.9)', opacity: 0 },
        },
      },
      transitionDuration: {
        250: '250ms',
      },
      width: {
        'overflow-table': '120%',
        'overflow-table-2': '140%',
      },
      minWidth: {
        'profile-menu': '15rem',
        address: '18.375rem',
      },
      maxWidth: {
        'shipping-service': '10rem',
        xxs: '16rem',
        progress: '22.5rem',
        api: '26.5rem',
        'sales-selector': '30rem',
        '2.5xl': '45rem',
        '4.5xl': '60rem',
      },
    },
  },
  plugins: [],
}