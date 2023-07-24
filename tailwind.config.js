/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            spacing: {
                4.25: '1.0625rem',
                18: '4.5rem',
                30: '7.5rem',
                66: '16.5rem',
                72: '18rem',
                175.75: '43.9375rem',
            },
            colors: {
                bgColor: '#04041B',
                gray: '#C4C4D5',
                lItem: '#29293A',
                lItemTitle: '#8686AC',
                lItemValue: '#FFF',
                gps: '#363173',
                border: '#34344C',
                weatherText: '#E8E8F5',
            },
            fontFamily: {
                suite: ['var(--font-suite)']
            },
        }
    },
    plugins: [],
}
