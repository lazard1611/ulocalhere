
import barba from '@barba/core';
import gsap from 'gsap';

const initBarba = () => {
    console.log('init barba');

    barba.init({
        transitions: [{
            name: 'opacity-transition',
            leave(data) {
              return gsap.to(data.current.container, {
                opacity: 0
              });
            },
            enter(data) {
              return gsap.from(data.next.container, {
                opacity: 0
              });
            }
          }]
      });
}

export default initBarba;