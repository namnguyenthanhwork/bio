// $(document).ready(function () {
//     // scroll back
//     $(window).scroll(function () {
//         // active & un active logo nav left
//         if (this.scrollY > 30) {
//             $(".logo img:first-child").addClass("un-active"),
//                 $(".logo img:first-child").removeClass("active"),
//                 $(".logo img:last-child").addClass("active"),
//                 $(".logo img:last-child").removeClass("un-active");
//         } else {
//             $(".logo img:first-child").addClass("active"),
//                 $(".logo img:first-child").removeClass("un-active"),
//                 $(".logo img:last-child").addClass("un-active"),
//                 $(".logo img:last-child").removeClass("active");
//         }
//     })
// });

// init cursor
var cursors = [{
    cursor_id: "3",
    cursor_type: "0",
    cursor_shape: "11",
    cursor_image: "",
    default_cursor: "auto",
    hover_effect: "plugin",
    body_activation: "1",
    element_activation: "0",
    selector_type: "tag",
    selector_data: "body",
    color: "#f72c26",
    width: "30",
    blending_mode: "normal"
}];

/* ---------- homepage section ---------- */
//typing name
new Typed(".typing", {
    strings: ["Thành Nam"],
    typeSpeed: 80,
    backSpeed: 60,
    loop: !0
});

/* ---------- about section tabs ---------- */
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
    })
})();

function bodyScrollingToggle() {
    document.body.classList.toggle("stop-scrolling");
}
/* ----------- portfolio filter and popup ------------ */
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
    })

    portfolioItemsContainer.addEventListener("click", (event) => {
        if (event.target.closest(".portfolio-item-inner")) {
            const portfolioItem = event.target.closest(".portfolio-item-inner").parentElement;
            // get the portfolioItem index
            itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem);
            screenshots = portfolioItems[itemIndex].querySelector(".portfolio-item-img img").getAttribute("data-screenshots");
            // convert screenshots into array
            screenshots = screenshots.split(",");
            slideIndex = 0;
            popupToggle();
            popupSlideShow();
        }
    })

    closeBtn.addEventListener("click", ()=> {
        popupToggle();
    })
    function popupToggle() {
        popup.classList.toggle("open");
        bodyScrollingToggle();
    }
    function popupSlideShow(){
       const imgSrc = screenshots[slideIndex];
       const popupImg = popup.querySelector(".pp-img");
       // activate loader until the popupImg loaded
       popupImg.src= imgSrc;
    }
})();