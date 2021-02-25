import LocomotiveScroll from 'locomotive-scroll';

const scroll = () => {
    window.scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });
}

export default scroll;