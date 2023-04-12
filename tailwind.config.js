/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        light: '#FFFFFF',
        darken: '#F8F8F8',
        primary: {
          100: '#ECF0FF',
          200: '#96ADFF',
          300: '#6284FD',
          400: '#2D5BFF',
        },
        secondary: {
          100: '#FFECE1',
          200: '#FFD5BE',
          300: '#FC9D68',
          400: '#FF7F37',
        },
        disabled: '#EFEFEF',
        hover: '#1B4AF0',
        active: '#002ED0',
        success: {
          100: '#28B411',
          200: '#B2FFA6',
          300: '#E6FFE2',
          hover: '#28B411',
        },
        attention: {
          100: '#F6D523',
          200: '#FFEF98',
          300: '#FFFAE1',
          hover: '#F6D523',
        },
        error: {
          100: '#FF3030',
          200: '#FFC0C0',
          300: '#FFF2F2',
          hover: '#ED2121',
        },
        font: {
          100: '#181818',
          200: '#5C5C5C',
          300: '#747474',
          disabled: '#8A8A8A',
        },
        dark: {
          light: '#282828',
          darken: '#1C1C1C',
          primary: {
            100: '#C0CAF1',
            200: '#95AAF5',
            300: '#6782E7',
            400: '#4264DF',
            hover: '#244AD0',
            active: '#244DDF0',
          },
          secondary: {
            100: '#FFC2A0',
            200: '#FFAB7C',
            300: '#EA996B',
            400: '#F37B38',
          },
          disabled: '#4A4A4A',
          success: {
            100: '#4DA63E',
            200: '#B0F9A5',
            300: '#C2F5B9',
            hover: '#369926',
          },
          attention: {
            100: '#F9DE51',
            200: '#EFE29B',
            300: '#F9F1C7',
            hover: '#EFD02C',
          },
          error: {
            100: '#FF4545',
            200: '#F7B7B7',
            300: '#FBDFDF',
            hover: '#ED2F2F',
          },
          font: {
            100: '#D9D9D9',
            200: '#9D9D9D',
            300: '#5C5C5C',
            disabled: '#8B8B8B',
          },
        },
      },
      fontFamily: {
        sans: ['Mulish', 'sans-serif'],
      },
      fontSize: {
        '2xs': '.625rem',
        '3xs': '.5rem',
      },
    },
  },
  plugins: [],
}
