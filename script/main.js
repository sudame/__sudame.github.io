$(function () {
    if ($(window).width() / $(window).height() < 1) {
        $("div.centering").css({
            "font-size": "13vh",
            "-webkit-writing-mode": "vertical-rl",
            "-ms-writing-mode": "tb-rl",
            "writing-mode": "vertical-rl"
        });
    }
});

$(window).resize(function () {
    if ($(window).width() / $(window).height() < 1) {
        $("div.centering").css({
            "font-size": "15vh",
            "-webkit-writing-mode": "vertical-rl",
            "-ms-writing-mode": "tb-rl",
            "writing-mode": "vertical-rl"
        });
    } else {
        $("div.centering").css({
            "font-size": "13vw",
            "-webkit-writing-mode": "horizontal-tb",
            "-ms-writing-mode": "lr-tb",
            "writing-mode": "horizontal-tb"
        });
    }
});