// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// Sidebar toggle
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.width === '100%') {
        sidebar.style.width = '0';
    } else {
        sidebar.style.width = '100%';
    }
}
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// Fade X Start Animation
document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-in-x-start');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// Fade Y Animation
document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-in-y');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// Fade X  Left Animation
document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-in-x-left');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// Fade X  Right Animation
document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-in-x-right');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// Fade Y  Footer Animation
document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-in-y-footer');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// Hover Changer Code
function toggleContent(element) {
    element.classList.toggle('active');
}
