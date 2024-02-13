(function($) {
    var namespace = "chaffle";
    var methods = {
        init: function(options) {
            options = $.extend({
                speed: 20,
                time: 140
            }, options);
            return this.each(function() {
                var _this = this;
                var $this = $(this);
                var data = $this.data(namespace);
                if (!data) {
                    options = $.extend({}, options);
                    $this.data(namespace, {
                        options: options
                    });
                }
                var $text = $this.text();
                var substitution;
                var shuffle_timer;
                var shuffle_timer_delay;
                var shuffle = function() {
                    $this.text(substitution);
                    if ($text.length - substitution.length > 0) {
                        for (var i = 0; i < $text.length - substitution.length; i++) {
                            // var shuffleStr = random_text.call();
                            // quick fix
                            var shuffleStr = String.fromCharCode(33 + Math.round(Math.random() * 99));
                            $this.append(shuffleStr);
                        }
                    } else {
                        clearInterval(shuffle_timer);
                    }
                };
                var shuffle_delay = function() {
                    if (substitution.length < $text.length) {
                        substitution = $text.substr(0, substitution.length + 1);
                    } else {
                        clearInterval(shuffle_timer_delay);
                    }
                };
                var random_text = function() {
                    var str;
                    var lang = $this.data("lang");
                    switch (lang) {
                        case "en":
                            str = String.fromCharCode(33 + Math.round(Math.random() * 99));
                            break;

                        case "ja":
                            str = String.fromCharCode(19968 + Math.round(Math.random() * 80));
                            break;

                        case "ja-hiragana":
                            str = String.fromCharCode(12352 + Math.round(Math.random() * 50));
                            break;

                        case "ja-katakana":
                            str = String.fromCharCode(12448 + Math.round(Math.random() * 84));
                            break;
                        case "ua":
                            str = String.fromCharCode(1040 + Math.round(Math.random() * 55));
                            break;
                    }
                    return str;
                };
                var start = function() {
                    substitution = "";
                    clearInterval(shuffle_timer);
                    clearInterval(shuffle_timer_delay);
                    shuffle_timer = setInterval(function() {
                        shuffle.call(_this);
                    }, options.speed);
                    shuffle_timer_delay = setInterval(function() {
                        shuffle_delay.call(this);
                    }, options.time);
                };
                $this.unbind("mouseover." + namespace).bind("mouseover." + namespace, function() {
                    start.call(_this);
                });
            });
        },
        destroy: function() {
            return this.each(function() {
                var $this = $(this);
                $(window).unbind("." + namespace);
                $this.removeData(namespace);
            });
        }
    };
    $.fn.chaffle = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === "object" || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error("Method " + method + " does not exist on jQuery." + namespace);
        }
    };
})(jQuery);
(function($) {
    var namespace = "chaffleAppear";
    var methods = {
        init: function(options) {
            options = $.extend({
                speed: 20,
                time: 140
            }, options);
            return this.each(function() {
                var _this = this;
                var $this = $(this);
                var data = $this.data(namespace);
                if (!data) {
                    options = $.extend({}, options);
                    $this.data(namespace, {
                        options: options
                    });
                }
                var $text = $this.text();
                var substitution;
                var shuffle_timer;
                var shuffle_timer_delay;
                var shuffle = function() {
                    $this.text(substitution);
                    if ($text.length - substitution.length > 0) {
                        for (var i = 0; i < $text.length - substitution.length; i++) {
                            // var shuffleStr = random_text.call();
                            // quick fix
                            var shuffleStr = String.fromCharCode(33 + Math.round(Math.random() * 99));
                            $this.append(shuffleStr);
                        }
                    } else {
                        clearInterval(shuffle_timer);
                    }
                };
                var shuffle_delay = function() {
                    if (substitution.length < $text.length) {
                        substitution = $text.substr(0, substitution.length + 1);
                    } else {
                        clearInterval(shuffle_timer_delay);
                    }
                };
                var random_text = function() {
                    var str;
                    var lang = $this.data("lang");
                    switch (lang) {
                        case "en":
                            str = String.fromCharCode(33 + Math.round(Math.random() * 99));
                            break;

                        case "ja":
                            str = String.fromCharCode(19968 + Math.round(Math.random() * 80));
                            break;

                        case "ja-hiragana":
                            str = String.fromCharCode(12352 + Math.round(Math.random() * 50));
                            break;

                        case "ja-katakana":
                            str = String.fromCharCode(12448 + Math.round(Math.random() * 84));
                            break;
                        case "ua":
                            str = String.fromCharCode(1040 + Math.round(Math.random() * 55));
                            break;
                    }
                    return str;
                };
                var start = function() {
                    substitution = "";
                    clearInterval(shuffle_timer);
                    clearInterval(shuffle_timer_delay);
                    shuffle_timer = setInterval(function() {
                        shuffle.call(_this);
                    }, options.speed);
                    shuffle_timer_delay = setInterval(function() {
                        shuffle_delay.call(this);
                    }, options.time);
                };

                    start.call(_this);

            });
        },
        destroy: function() {
            return this.each(function() {
                var $this = $(this);
                $(window).unbind("." + namespace);
                $this.removeData(namespace);
            });
        }
    };
    $.fn.chaffleAppear = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === "object" || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error("Method " + method + " does not exist on jQuery." + namespace);
        }
    };
})(jQuery);

/* -----------------------------
 * Preloader
 * ---------------------------*/
var $preloader = $(".airin-preloader-container");
$("body").css("overflow", "hidden");
// makes sure the whole site is loaded
// and add native js event listener for window
$("span.airin-loader-text").show().chaffleAppear({
    speed: 40,
    time: 100
});
window.addEventListener("load", function () {
    setTimeout(function () {
        setTimeout(function () {
            $preloader.addClass("airin-preloader-container-hide");
        }, 500);
        setTimeout(function () {
            $preloader.hide();
            $("body").addClass("airin-loaded");
        }, 1000);
    }, 500)
}, false);

// Global var
var AIRIN = {};
AIRIN.accentcolor = "#9b14db";

$(function () {

    'use strict';

    /* -----------------------
     * Predefined Variables
     * --------------------- */
    var $window = $(window),
        $document = $(document),
        $body = $("body"),
        $html = $("html, body");


    /* -----------------------------
     * On DOM ready functions
     * ---------------------------*/
    $(function () {


        $(".airin-chaffle").chaffle({
            lang: "en",
            speed: 40,
            time: 100
        });


        
        var $roadmapCarcass = $("#roadmap-carcass");
        var $roadmapLine = $("#roadmap-line");
        
        var $sidebar_overlay = $("#sidebar-overlay");
        var $sidebar_close = $("#sidebar-close");
        var $sidebar = $("#sidebar");
        
        
        function roadmapScroll() {
            var carcass_height = $roadmapCarcass.outerHeight();
            var carcass_top_position = $roadmapCarcass.offset().top;
            var carcass_bottom_position = (carcass_top_position + carcass_height);
        
        
            var sidebar_height = $sidebar.height();
        
            var line_position = (sidebar_height - carcass_top_position) - 30;
        
        
            $roadmapLine.css({
                "height": line_position
            })
        
        };
        
        
        
        
        $sidebar.mCustomScrollbar({
            scrollInertia: 400,
            callbacks:{
                whileScrolling: function(){
                    if ($body.hasClass("open-roadmap-sidebar")) {
                        roadmapScroll();
                    }
                }
            }
        });
        
        
        // $sidebar.niceScroll(".sidebar-content-wrapper", {
        //     cursorcolor: AIRIN.accentcolor,
        //     cursorwidth: "6px",
        //     background: "#000000",
        //     cursorborder: "none",
        //     cursorborderradius: 0,
        //     autohidemode: false,
        //     zindex: 300,
        //     bouncescroll: false,
        //     scrollspeed: 80,
        //     mousescrollstep: 40,
        // });
        
        function showRightArea() {
            $body.addClass("open-sidebar");
            $sidebar_overlay.fadeIn(500);
        
            if($(window).width()<800){
                $sidebar_close.fadeIn(500);
            }
        
        }
        function hideRightArea() {
            $body.removeClass("open-sidebar");
            $sidebar_overlay.fadeOut(500);
            $sidebar_close.fadeOut(500);
        }
        
        var $open_link = $(".open-sidebar-link");
        var $slider_content = $("#sidebar .sidebar-content-wrapper .sider-content-inner").children();
        $slider_content.hide();
        
        $open_link.each(function () {
            var $this = $(this);
            var $this_content = $($this.attr('href'));
            $this.on("click", function (e) {
                e.stopPropagation();
                e.preventDefault();
                if (!$body.hasClass("open-sidebar")) {
                    $slider_content.hide();
                    $this_content.show();
                    // $sidebar.getNiceScroll().resize();
                    showRightArea();
                    if ($this.attr("href") == "#sidebar-roadmap-content") {
                        roadmapScroll();
                        // $sidebar.on('scroll', roadmapScroll);
                        $body.addClass("open-roadmap-sidebar");
                    }
                } else {
                    hideRightArea();
                    $slider_content.fadeOut(500);
                }
            });
        });
        
        function onCloseClick() {
            if ($body.hasClass("open-sidebar")) {
                hideRightArea();
                $slider_content.fadeOut(500);
                setTimeout(function(){
                    $sidebar.scrollTop(0);
                }, 500);
                if ($body.hasClass("open-roadmap-sidebar")) {
                    // $sidebar.off('scroll', roadmapScroll);
                    $body.removeClass("open-roadmap-sidebar");
                }
            }
        }
        
        $sidebar_close.on("click", onCloseClick);
        $sidebar_overlay.on("click", onCloseClick);

        $(".typo-chaffle-appear").each(function () {
            $(this).chaffleAppear({
                speed: 40,
                time: 100
            });
        });


        /* Hero bg */
        $window = $(window);
        $window.on("resize", heroResizer);

        var $video = $(".airin-vhs-video-overlay > video");
        var $airinHero = $(".airin-hero-airin");

        function heroResizer() {
            var wW = $window.width();
            var wH = $window.height();
            // console.log(wW +" x "+ wH);

            var aspectRatio = wW / wH;

            // Video bg
            if (aspectRatio < 1.326) {
                $video.css({
                    "width": "auto",
                    "height": "100%"
                })
            } else {
                $video.css({
                    "width": "100%",
                    "height": "auto"
                })
            }

            // Airin bg
            if (aspectRatio < 0.96) {
                $airinHero.css({
                    "background-size": "cover"
                })
            } else {
                $airinHero.css({
                    "background-size": "contain"
                })
            }
        }

        heroResizer();


    });


});





/*
 var ctx = document.getElementById("preminde_distribution_chart").getContext('2d');

 // https://www.chartjs.org/docs/latest/charts/doughnut.html
 var data ={
 labels: ["Devs", "Airdrop", "sda", "dsadsa", "dasda"],
 datasets: [{
 data: [10, 20, 30, 15, 5, 10],
 backgroundColor: [
 'rgba(201, 52, 232, 0.5)',
 'rgba(122, 27, 183, 0.5)',
 'rgba(42, 0, 134, 0.5)',
 'rgba(221, 50, 182, 0.5)',
 'rgba(112, 24, 160, 0.5)',
 'rgba(3, 0, 141, 0.5)',
 ],
 borderColor: [
 'rgba(0,0,0,1)',
 'rgba(0,0,0,1)',
 'rgba(0,0,0,1)',
 'rgba(0,0,0,1)',
 'rgba(0,0,0,1)',
 'rgba(0,0,0,1)',
 'rgba(0,0,0,1)'
 ]
 }]
 };

 var options = {
 legend: {
 display: true,
 position: 'bottom',
 labels: {
 fontSize: 14,
 fontFamily: "'Roboto Mono', monospace",
 fontColor: "#fff",
 padding: 20
 }
 },
 hover: {
 // Overrides the global setting
 mode: 'index'
 },
 tooltips: {
 // titleFontFamily: "'Roboto Mono', monospace",
 // titleFontSize: 14,
 // titleFontStyle: "normal",
 // titleFontColor: "#fff",
 // bodyFontFamily: "'Roboto Mono', monospace",
 bodyFontSize: 12,
 bodyFontStyle: "normal",
 bodyFontColor: "#ff17d3",
 // footerFontFamily: "'Roboto Mono', monospace",
 displayColors: false,
 yPadding: 16,
 titleMarginBottom: 0,
 titleSpacing: 0,
 bodySpacing: 0,
 footerSpacing: 0,
 footerMarginTop: 0,
 caretPadding: 0
 }
 };

 var myDoughnutChart = new Chart(ctx, {
 type: 'doughnut',
 data: data,
 options: options
 });
 */