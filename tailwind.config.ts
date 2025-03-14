import { hover } from "motion";
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		keyframes: {
  			slidein: {
  				from: {
  					opacity: '0',
  					transform: 'translateY(-1000px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
			  slideinto: {
				from: {
					opacity: '0',
					transform: 'translateX(1000px) skewY(12deg) rotate(-12deg)'
				},
				to: {
					opacity: '1',
					transform: 'translateX(0) skewY(12deg) rotate(-12deg)'
				}
			}, 
			slideintol: {
				from: {
					opacity: '0',
					transform: 'translateX(-1000px) skewY(12deg) rotate(-12deg)'
				},
				to: {
					opacity: '1',
					transform: 'translateX(0) skewY(12deg) rotate(-12deg)'
				}
			},
			 
        slidein_10px: {
  				from: {
  					opacity: '0',
  					transform: 'translateY(-200px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
			slidein_0px: {
				from: {
					opacity: '0',
					transform: 'translateY(-10px)'
				},
				to: {
					opacity: '1',
					transform: 'translateY(0)'
				}
			},
			slideout_0px: {
				from: {
					opacity: '0',
					transform: 'translateY(10px)'
				},
				to: {
					opacity: '1',
					transform: 'translateY(0)'
				}
			},
			slideout_10px: {
				from: {
					opacity: '0',
					transform: 'translateY(1000px)'
				},
				to: {
					opacity: '1',
					transform: 'translateY(0)'
				}
			},
  			slideout: {
  				from: {
  					opacity: '0',
  					transform: 'translateY(100px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
        slideleft: {
  				from: {
  					opacity: '0',
  					transform: 'translateX(-500px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateX(0)'
  				}
  			},
			  slideleftw: {
				from: {
					opacity: '0',
					transform: 'translateX(-500px)'
				},
				to: {
					opacity: '1',
					transform: 'translateX(0)'
				}
			},
			slideleftnw: {
				from: {
					opacity: '0',
					transform: 'translateX(-500px)'
				},
				to: {
					opacity: '1',
					transform: 'translateX(0)'
				}
			},
        slideright: {
  				from: {
  					opacity: '0',
  					transform: 'translateX(500px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateX(0)',
					
  				}
  			},
			  appear: {
				from: {
					opacity: '0',
				},
				to: {
					opacity: '1',
				}
			},
			disappear: {
				from: {
					opacity: '1',
				},
				to: {
					opacity: '0',
				}
			},
			scale: {
				from: {
					scale: '100',
				},
				to: {
					scale: '105',
				}
			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
			scale: 'scale 0.5s ease 1s forwards',
			appear: 'appear 0.5s ease 800ms forwards',
			appearQuick: 'appear 0.5s ease 10ms forwards',
			appearText: 'appear 0.3s ease 100ms forwards',
			appearVideo: 'appear 0.5s ease 400ms forwards',
			disappear: 'disappear 0.01s ease 10ms forwards',
			disappearLoader: 'disappear 0.5s ease 3000ms forwards',
			slidelogo: 'slidein_10px 1s ease 500ms forwards',
  			slidein300: 'slideinto 2.2s ease 300ms forwards',
  			slidein500: 'slidein 2s ease 500ms forwards',
  			slidein700: 'slidein 1s ease-in-out 700ms forwards',
        	slidein300_10px: 'slidein_10px 1s ease 300ms forwards',
  			slidein500_10px: 'slidein_10px 2s ease 500ms forwards',
			slidein500_0px: 'slidein_0px 2s ease 500ms forwards',
  			slidein700_10px: 'slidein_10px 1s ease 1.5s forwards',
			slidein700_0px: 'slidein_0px 1s ease 1.5s forwards',
			slideout700_0px: 'slideout_0px 1s ease 1s forwards',
			slideout500_0px: 'slideout_0px 1s ease 2200ms forwards',
  			slideout300: 'slideout 1s ease 300ms forwards',
  			slideout500: 'slideout 1.5s ease 1.5s forwards',
  			slideout700: 'slideout 1s ease 700ms forwards',
			slideout750_0px: 'slideout_0px 1s ease 700ms forwards',
  			slideout1500: 'slideout_10px 1.7s ease 2s forwards',
  			slideout1700: 'slideout_10px 1.5s ease 1500ms forwards',
			slideout1700_0px: 'slideout_0px 1.5s ease 1500ms forwards',
			slideleft500: 'slideleft 2s ease 1s forwards',
			slideleftskew: 'slideintol 2s ease 1s forwards',
			slideleft1: 'slideleftw 1s ease 2s forwards',
			slideleft2: 'slideleftw 1s ease 2.2s forwards',
			slideleft3: 'slideleftw 1s ease 2.4s forwards',
			slideleft4: 'slideleftw 1s ease 2.6s forwards',
			slideleft5: 'slideleftw 1s ease 3s forwards',
			slideleftn1: 'slideleftnw 1s ease 0.5s forwards',
			slideleftn2: 'slideleftnw 1s ease 0.7s forwards',
			slideleftn3: 'slideleftnw 1s ease 0.9s forwards',
			slideleftn4: 'slideleftnw 1s ease 1.1s forwards',
			slideleftn5: 'slideleftnw 1s ease 1.7s forwards',
			slidedown1: 'slidein_0px 3s ease-in	1s forwards',
			slidedown2: 'slidein_0px 3s ease-in	1.4s forwards',
			slidedown3: 'slidein_0px 3s ease-in	1.8s forwards',
			slidedown4: 'slidein_0px 3s ease-in	2.2s forwards',
			slideup1: 'slideout_0px 8s ease-in-out 1.2s forwards',
			slideup2: 'slideout_0px 8s ease-in-out 1.6s forwards',
			slideup3: 'slideout_0px 8s ease-in-out 2s forwards',
			slideup4: 'slideout_0px 8s ease-in-out 2.4s forwards',
			slideright300: 'slideright 2s ease 1000ms forwards',
			slideright500: 'slideright 2s ease 1s forwards',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
