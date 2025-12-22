/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'tanit-bg': '#0a0a0f',
                'tanit-card': '#12121a',
                'tanit-border': '#1f1f2e',
                'tanit-purple': '#AD65BF',
                'tanit-purple-dark': '#8B4F9C',
                'tanit-light': '#F1F1F1',
                'tanit-dark': '#000000',
                'tanit-text': '#F1F1F1',
                'tanit-text-muted': '#94a3b8',
                'payflo-purple': '#AD65BF',
                'payflo-blue': '#AD65BF',
                'payflo-pink': '#AD65BF',
                'payflo-gray': '#1e1e2e',
                'payflo-dark': '#0a0a0f',
            },
            fontFamily: {
                sans: ['Inter Variable', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out forwards',
                'slide-up': 'slideUp 0.6s ease-out forwards',
                'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
                slideUp: { '0%': { transform: 'translateY(30px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
                pulseGlow: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(173, 101, 191, 0.5), 0 0 40px rgba(173, 101, 191, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(173, 101, 191, 0.8), 0 0 60px rgba(173, 101, 191, 0.5)' },
                },
                float: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-20px)' } },
            },
            boxShadow: {
                'glow-sm': '0 0 15px rgba(173, 101, 191, 0.3)',
                'glow-md': '0 0 30px rgba(173, 101, 191, 0.4)',
            },
        },
    },
    plugins: [],
}
