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