import barba from '@barba/core';
import gsap from "gsap";

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

// Open and close sidebar
window.openNav = function () {
    document.getElementById("mySidebar").style.width = "60%";
    document.getElementById("mySidebar").style.display = "block";
}

window.closeNav = function () {
    document.getElementById("mySidebar").style.display = "none";
}