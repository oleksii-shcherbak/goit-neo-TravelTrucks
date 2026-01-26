/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                main: '#101828',
                text: '#475467',
                gray: '#6C717B',
                'gray-light': '#F7F7F7',
                inputs: '#F7F7F7',
                button: '#E44848',
                'button-hover': '#D84343',
                badges: '#F2F4F7',
                rating: '#FFC531',
            },
            fontSize: {
                h1: ['48px', { lineHeight: '1', fontWeight: 600 }],
                h2: ['24px', { lineHeight: '1.25', fontWeight: 600 }],
                h3: ['20px', { lineHeight: '1.2', fontWeight: 600 }],
                text: ['16px', { lineHeight: '1.5', fontWeight: 400 }],
            },
            container: {
                center: true,
                padding: '64px',
                screens: {
                    xl: '1440px',
                },
            },
        },
    },
    plugins: [],
};