/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            display: ['group-hover'],
            colors: {
                accent: '#7C3AED',
                light: '#FFFFFF',
                dark: '#5E5E5E',
                stroke: '#D9D9D9'
            },
            fontFamily: {
                nunito: ['Nunito', 'sans-serif'],
                remachine: ['Remachine Script', 'sans-serif'],
                circus: ['Core Circus', 'sans-serif']
            },
            fontSize: {
                mini: ['10px', { lineHeight: '14px' }]
            },
            transitionTimingFunction: {
                DEFAULT: 'ease-in-out'
            },
            transitionDuration: {
                DEFAULT: '300ms'
            },
            transitionDelay: {
                DEFAULT: '50ms'
            }
        }
    },
    plugins: []
};
