window.smoothScrollTo = function(target) {
    let element;
    if (typeof target === 'string') {
        element = document.getElementById(target);
    } else {
        element = document.documentElement;
    }
    
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

window.addMouseMoveListener = function (selector) {
    document.addEventListener('mousemove', function (e) {
        const backgroundImage = document.querySelector(selector);
        const xAxis = (window.innerWidth / 2 - e.pageX) / 100;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 100;
        backgroundImage.style.transform = `translate(${xAxis}px, calc(-50% + ${yAxis}px))`;
    });
}

window.scrollToTop = function() {
    window.scrollTo(0, 0);
}