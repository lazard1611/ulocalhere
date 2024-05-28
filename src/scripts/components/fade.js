import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const fade = () => {
	const SELECTORS = {
		el: '.js-fade-el',
	};

	const $fadeEl = document.querySelectorAll(SELECTORS.el);
	if ($fadeEl.length) {
		gsap.set($fadeEl, {
			y: 30,
			opacity: 0,
		});

		ScrollTrigger.batch($fadeEl, {
			start: 'top 85%',
			once: true,
			onEnter: (batch) =>
				gsap.to(batch, {
					duration: 0.6,
					opacity: 1,
					y: 0,
					stagger: 0.1,
					ease: 'none',
				}),
		});
	}
};

export default fade;
