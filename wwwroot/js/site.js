window.addMouseMoveListener = function (selector) {
    document.addEventListener('mousemove', function (e) {
        const backgroundImage = document.querySelector(selector);
        const xAxis = (window.innerWidth / 2 - e.pageX) / 100;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 100;
        backgroundImage.style.transform = `translate(calc(-50% + ${xAxis}px), calc(-50% + ${yAxis}px))`;
    });
}

window.initLogoScroll = function() {
    const container = document.querySelector('.logo-container');
    const containerWidth = container.scrollWidth;
    container.style.animationDuration = `${containerWidth / 50}s`;
};

window.handleContentScroll = function() {
    const sections = document.querySelectorAll('.content-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
};

window.initScrollSpy = function() {
    const papers = document.querySelectorAll('.mud-paper');
    const navLinks = document.querySelectorAll('.mud-nav-link');
    const options = {
        root: null,
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href').substring(1) === id);
                });
            }
        });
    }, options);

    papers.forEach(paper => {
        observer.observe(paper);
    });
};

window.scrollToTop = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};