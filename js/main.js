// init cursor
var cursors = [{
    cursor_id: "3",
    cursor_type: "0",
    cursor_shape: "12",
    cursor_image: "",
    default_cursor: "auto",
    hover_effect: "plugin",
    body_activation: "1",
    element_activation: "0",
    selector_type: "tag",
    selector_data: "body",
    color: "#cc3a3b",
    width: "30",
    blending_mode: "normal"
}];

/* ---------------- navigation menu ------------------- */
(() => {
    const hamburgerBtn = document.querySelector(".hamburger-btn"),
        navMenu = document.querySelector(".nav-menu"),
        closeNavBtn = document.querySelector(".close-nav-menu");

    hamburgerBtn.addEventListener("click", showNavMenu);
    closeNavBtn.addEventListener("click", hideNavMenu);

    function showNavMenu() {
        navMenu.classList.toggle("open");
        bodyScrollingToggle();
    }

    function hideNavMenu() {
        navMenu.classList.toggle("open");
        fadeOutEffect();
        bodyScrollingToggle();
    }

    function fadeOutEffect() {
        document.querySelector(".fade-out-effect").classList.add("active");
        setTimeout(() => {
            document.querySelector(".fade-out-effect").classList.remove("active");
        }, 300)
    }
    // acttach an event handler to document
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("link-item"))
            // make sure event.target.hash has a value before overridding default behavior
            if (event.target.hash !== "") {
                // prevent default anchor click behavior
                event.preventDefault();
                const hash = event.target.hash;
                /* uncomment if u use nav 1 section - comment line from 339 (comment if u scroll link with nav)*/
                // // deactivate existing active 'section'
                // document.querySelector(".section.active").classList.add("hide");
                // document.querySelector(".section.active").classList.remove("active");
                // // activate new 'section'
                // document.querySelector(hash).classList.add("active");
                // document.querySelector(hash).classList.remove("hide");

                // deactivate existing active navigation menu 'link-item'
                navMenu.querySelector(".active").classList.add("outer-shadow", "hover-in-shadow");
                navMenu.querySelector(".active").classList.remove("active", "inner-shadow");
                // if clicked 'link-item' is contained withing the navigation menu
                if (navMenu.classList.contains("open")) {
                    // activate new navigation menu 'link-item'
                    event.target.classList.add("active", "inner-shadow");
                    event.target.classList.remove("outer-shadow", "hover-in-shadow");
                    // hide navigation menu
                    hideNavMenu();
                } else {
                    let navItems = navMenu.querySelectorAll(".link-item");
                    navItems.forEach((item) => {
                        if (hash === item.hash) {
                            // activate new navigation menu 'link-item'
                            item.classList.add("active", "inner-shadow");
                            item.classList.remove("outer-shadow", "hover-in-shadow");
                        }
                    })
                    fadeOutEffect();
                }
                // add hash (#) to url
                window.location.hash = hash;
            }
    })
})();

/* --------------- hide all sections except active ------------ */
// (() => {
//     const sections = document.querySelectorAll(".section");
//     sections.forEach((section) => {
//         if (!section.classList.contains("active"))
//             section.classList.add("hide");
//     })
// })();

/* ---------------- homepage section ------------------- */
//typing name
new Typed(".typing", {
    strings: ["Thành Nam"],
    typeSpeed: 80,
    backSpeed: 60,
    loop: !0
});

/* ------------------- about section tabs ---------------- */
// typing name 
new Typed(".typing-name", {
    strings: ["Nguyễn Thành Nam"],
    typeSpeed: 80,
    backSpeed: 60,
    loop: !0
});
// load real time
function renderTime() {
    var e = new Date,
        t = new Date("2001-01-16"),
        n = e.getTime() - t.getTime(),
        o = new Date(n),
        a = o.getFullYear() - 1970,
        l = o.getMonth(),
        s = o.getDate(),
        r = o.getHours(),
        c = o.getMinutes(),
        i = o.getSeconds();
    24 == r ? r = 0 : r > 12 && (r -= 0), r < 10 && (r = "0" + r), c < 10 && (c = "0" + c), i < 10 && (i = "0" + i);
    var d = document.getElementById("years"),
        u = document.getElementById("months"),
        m = document.getElementById("days"),
        y = document.getElementById("hours"),
        g = document.getElementById("minutes"),
        p = document.getElementById("seconds");
    d.innerText = a, u.innerText = l, m.innerText = s, y.innerText = r, g.innerText = c, p.innerText = i, d.style.color = "#ed4747", u.style.color = "#ed4747", m.style.color = "#ed4747", y.style.color = "#0099ff", g.style.color = "#0099ff", p.style.color = "#0099ff", setTimeout("renderTime()", 1e3)
}
window.onload = (event) => {
    renderTime();
};
document.body.onload(document.body.classList.add("loaded"));

// click about-tabs
(() => {
    const aboutSection = document.querySelector(".about-section"),
        tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) => {
        /* if event.target contains 'tab-item' class and not contains 'active' class */
        if (event.target.classList.contains("tab-item") &&
            !event.target.classList.contains("active")) {
            const target = event.target.getAttribute("data-target");
            // deactivate existing active 'tab-item'
            tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
            // activate new 'tab-item'
            event.target.classList.add("active", "outer-shadow");
            // deactivate existing active 'tab-content'
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            // active new 'tab-content'
            aboutSection.querySelector(target).classList.add("active");
        }
    });
})();

function bodyScrollingToggle() {
    document.body.classList.toggle("hidden-scrolling");
}
/* ------------------------ portfolio filter and popup ------------------------ */
(() => {
    const filterContainer = document.querySelector(".portfolio-filter"),
        portfolioItemsContainer = document.querySelector(".portfolio-items"),
        portfolioItems = document.querySelectorAll(".portfolio-item"),
        popup = document.querySelector(".portfolio-popup"),
        prevBtn = document.querySelector(".pp-prev"),
        nextBtn = document.querySelector(".pp-next"),
        closeBtn = document.querySelector(".pp-close"),
        projectDetailsContainer = popup.querySelector(".pp-details"),
        projectDetailsBtn = popup.querySelector(".pp-project-details-btn");

    let itemIndex, slideIndex, screenshots;

    // filter portfolio items
    filterContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("filter-item") &&
            !event.target.classList.contains("active")) {
            // deactivate existing active 'filter-item'
            filterContainer.querySelector(".active").classList.remove("outer-shadow", "active");
            // activate new 'filter item'
            event.target.classList.add("active", "outer-shadow");
            const target = event.target.getAttribute("data-target");
            portfolioItems.forEach((item) => {
                if (target === item.getAttribute("data-category") || target === "all") {
                    item.classList.remove("hide");
                    item.classList.add("show");
                } else {
                    item.classList.remove("show");
                    item.classList.add("hide");
                }
            })
        }
    });

    portfolioItemsContainer.addEventListener("click", (event) => {
        if (event.target.closest(".portfolio-item-inner")) {
            const portfolioItem = event.target.closest(".portfolio-item-inner").parentElement;
            // get the portfolioItem index
            itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem);
            screenshots = portfolioItems[itemIndex].querySelector(".portfolio-item-img img").getAttribute("data-screenshots");
            // convert screenshots into array
            screenshots = screenshots.split(",");
            slideIndex = 0;
            // hide btn prev & next if screenshots = 1
            if (screenshots.length === 1) {
                prevBtn.style.display = "none";
                nextBtn.style.display = "none";
            } else {
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
            }

            popupToggle();
            popupSlideShow();
            popupDetails();
        }
    });

    closeBtn.addEventListener("click", () => {
        popupToggle();
        // turn off popup details
        if (projectDetailsContainer.classList.contains("active"))
            popupDetailsToggle();
    });

    function popupToggle() {
        popup.classList.toggle("open");
        bodyScrollingToggle();
    }

    function popupSlideShow() {
        const imgSrc = screenshots[slideIndex];
        const popupImg = popup.querySelector(".pp-img");
        // activate loader until the popupImg loaded
        popup.querySelector(".pp-loader").classList.add("active");
        popupImg.src = imgSrc;
        popupImg.onload = () => {
            // deactivate loader after the popupImg loaded
            popup.querySelector(".pp-loader").classList.remove("active");
        }
        popup.querySelector(".pp-counter").innerHTML = (slideIndex + 1) + " of " + screenshots.length;
    }

    // next slide
    nextBtn.addEventListener("click", () => {
        if (slideIndex === screenshots.length - 1)
            slideIndex = 0;
        else
            slideIndex++;
        popupSlideShow();
    });

    //prev slide 
    prevBtn.addEventListener("click", () => {
        if (slideIndex === 0)
            slideIndex = screenshots.length - 1;
        else
            slideIndex--;
        popupSlideShow();
    });

    function popupDetails() {
        // if portfolio-item-details not exists
        if (!portfolioItems[itemIndex].querySelector(".portfolio-item-details")) {
            projectDetailsBtn.style.display = "none";
            return; // end function execution
        }
        projectDetailsBtn.style.display = "block";
        // get the project details 
        const details = portfolioItems[itemIndex].querySelector(".portfolio-item-details").innerHTML;
        // set the project details
        popup.querySelector(".pp-project-details").innerHTML = details;
        // get the project title
        const title = portfolioItems[itemIndex].querySelector(".portfolio-item-title").innerHTML;
        // set the project title
        popup.querySelector(".pp-title h2").innerHTML = title;
        // get the project category
        const category = portfolioItems[itemIndex].getAttribute("data-category");
        // set thr project category
        popup.querySelector(".pp-project-category").innerHTML = category.split("-").join(" ");
    }

    projectDetailsBtn.addEventListener("click", () => {
        popupDetailsToggle();
    });

    function popupDetailsToggle() {
        if (projectDetailsContainer.classList.contains("active")) {
            projectDetailsBtn.querySelector("i").classList.remove("fa-times");
            projectDetailsBtn.querySelector("i").classList.add("fa-plus");
            projectDetailsContainer.classList.remove("active");
            projectDetailsContainer.style.maxHeight = 0 + "px";
        } else {
            projectDetailsBtn.querySelector("i").classList.remove("fa-plus");
            projectDetailsBtn.querySelector("i").classList.add("fa-times");
            projectDetailsContainer.classList.add("active");
            projectDetailsContainer.style.maxHeight = projectDetailsContainer.scrollHeight + "px";
            popup.scrollTo(0, projectDetailsContainer.offsetTop);
        }
    }
})();

/* ------------------------ testimonial slider -------------------- */
(() => {
    const sliderContainer = document.querySelector(".testi-slider-container"),
        slides = sliderContainer.querySelectorAll(".testi-item"),
        slideWidth = sliderContainer.offsetWidth,
        prevBtn = document.querySelector(".testi-slider-nav .prev"),
        nextBtn = document.querySelector(".testi-slider-nav .next"),
        activeSlide = sliderContainer.querySelector(".testi-item.active");
    let slideIndex = Array.from(activeSlide.parentElement.children).indexOf(activeSlide);

    // set width of all slides
    slides.forEach((slide) => {
        slide.style.width = slideWidth + "px";
    })
    // set width of sliderContainer
    sliderContainer.style.width = slideWidth * slides.length + "px";

    nextBtn.addEventListener("click", () => {
        if (slideIndex === slides.length - 1)
            slideIndex = 0;
        else
            slideIndex++;
        slider();
    });

    prevBtn.addEventListener("click", () => {
        if (slideIndex === 0)
            slideIndex = slides.length - 1;
        else
            slideIndex--;
        slider();
    });

    function slider() {
        // deactivate existing active slides
        sliderContainer.querySelector(".testi-item.active").classList.remove("active");
        slides[slideIndex].classList.add("active");
        sliderContainer.style.marginLeft = -(slideWidth * slideIndex) + "px";
    }
    slider();
})();