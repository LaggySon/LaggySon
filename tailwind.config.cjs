const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				DotMatrix: ['DotMatrix', 'sans-serif'],
				Heebo: ['Heebo', 'sans-serif'],
				Righteous: ['Righteous', 'sans-serif']
			},
			animation: {
				'spin-slow': 'spin 3s linear ',
				'slide-in': 'slideIn 2s ease-in-out'
			},
			keyframes: {
				slideIn: {
					'0%': {
						transform: 'translateY(-3rem)',
						opacity: '0%'
					},
					'100%': {
						transform: 'translateY(0rem)',
						opacity: '100%'
					}
				}
			}
		}
	},

	plugins: [require('tailwind-scrollbar-hide')]
};

module.exports = config;
