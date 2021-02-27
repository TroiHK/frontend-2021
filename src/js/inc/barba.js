import barba from '@barba/core';
import gsap from "gsap";

const barbaJs = () => {
    barba.init({
        // schema: {
        //   prefix: 'data-custom',
        //   wrapper: 'wrap'
        // },
    
        // views: [{
        //     namespace: 'home',
        //     beforeEnter() {
        //         // update the menu based on user navigation
        //         menu.update();
        //     },
        //     afterEnter() {
        //         // refresh the parallax based on new page content
        //         parallax.refresh();
        //     }
        // }],
    
        transitions: [{
            name: 'opacity-transition',
            leave(data) {
                scroll.scrollTo(0, 0, 50, [0.00, 0.28, 0.00, 1.00], true);
                
                return gsap.to(data.current.container, {
                    opacity: 0
                });
            },
            enter(data) {
                scroll.update();

                return gsap.from(data.next.container, {
                    opacity: 0
                });
            }
        }]
    });
}

export default barbaJs;
