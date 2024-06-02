// Scroll Animations
function aboutScroll() {
    const about_scroll = document.querySelector('.about-section');
    about_scroll.scrollIntoView({ behavior: 'smooth' });
}

function pricesScroll(){
    const serv_scroll = document.querySelector(".prices-section");
    serv_scroll.scrollIntoView({ behavior: 'smooth' });
}

function galleryScroll(){
    const shop_scroll = document.querySelector(".collage-div");
    shop_scroll.scrollIntoView({ behavior: 'smooth' });
}
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
        rootMargin: "0px 0px -400px 0px"
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
        rootMargin: "0px 0px -400px 0px"
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




// document.addEventListener("DOMContentLoaded", function() {
//     const showInfoBtn = document.querySelector('.show-info');
//     const hideDiv = document.querySelector('.hide');

//     showInfoBtn.addEventListener('mouseover', function() {
//         hideDiv.style.opacity = "1"; // Show content when hovering over the button
//     });

//     showInfoBtn.addEventListener('mouseout', function() {
//         hideDiv.style.opacity = "0"; // Hide content when mouse leaves the button
//     });
// });




