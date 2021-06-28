$(document).ready(function () {
    // scroll back
    $(window).scroll(function () {
        // active & un active logo nav left
        if (this.scrollY > 30) {
            $(".logo img:first-child").addClass("un-active"),
                $(".logo img:first-child").removeClass("active"),
                $(".logo img:last-child").addClass("active"),
                $(".logo img:last-child").removeClass("un-active");
        } else {
            $(".logo img:first-child").addClass("active"),
                $(".logo img:first-child").removeClass("un-active"),
                $(".logo img:last-child").addClass("un-active"),
                $(".logo img:last-child").removeClass("active");
        }
    })
});

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
new Typed(".typing", {
    strings: ["Thành Nam"],
    typeSpeed: 80,
    backSpeed: 60,
    loop: !0
});
new Typed(".typing-name", {
    strings: ["Nguyễn Thành Nam"],
    typeSpeed: 80,
    backSpeed: 60,
    loop: !0
});
/* ---------- about section tabs ---------- */
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