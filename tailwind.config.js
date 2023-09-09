/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'mobile-sm': '320px',
            'mobile-md': '375px',
            'mobile-lg': '425px',
            'tablet': '768px',
            'laptop': '1024px',
            'laptop-lg': '1440px',
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1.5rem',
            },
            screens: {
                'laptop-lg': '1360px',
            },
        },
        extend: {
            colors: {
                primary: '#03ccac',
                secondary: {
                    'red': '#fc486b',
                    'blue': '#7758f6',
                    'yellow': '#f6ce17',
                }
            },
        },
    },
    plugins: [
        import('@tailwindcss/forms'),
    ],
}

