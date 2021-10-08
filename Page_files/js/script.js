(function ($) {
  "use strict";

  /*===================================*
	1. ANIMATION JS
	*===================================*/
  $(function () {
    function ckScrollInit(items, trigger) {
      items.each(function () {
        var ckElement = $(this),
          AnimationClass = ckElement.attr("data-animation"),
          AnimationDelay = ckElement.attr("data-animation-delay"),
          AnimationDuration = ckElement.attr("data-animation-duration");

        ckElement.css({
          "-webkit-animation-delay": AnimationDelay,
          "-moz-animation-delay": AnimationDelay,
          "animation-delay": AnimationDelay,
          "animation-duration": AnimationDuration,
          "-webkit-animation-duration": AnimationDuration,
          "-moz-animation-duration": AnimationDuration,
          opacity: 0,
        });

        var ckTrigger = trigger ? trigger : ckElement;

        ckTrigger.waypoint(
          function () {
            ckElement.addClass("animated").css("opacity", "1");
            ckElement.addClass("animated").addClass(AnimationClass);
          },
          {
            triggerOnce: true,
            offset: "90%",
          }
        );
      });
    }

    ckScrollInit($(".animation"));
  });

  /*===================================*
	2. PLAY AUDIO
	*===================================*/
  $(document).ready(function () {
    var audio = new Audio(
      "./Page_files/mp3/happybirthdaysong.mp3"
    );
    audio.loop = true;
    $("#play-audio").click(function(e) {
      var el = $(this);
      if (el.hasClass("stop")) {
        el.removeClass("stop fadeInDown");
        el.addClass("play spin infinite");
        audio.play();
      } else {
        el.removeClass("play spin infinite");
        el.addClass("stop");
        audio.pause();
      }
    })
  });

  /*===================================*
	2. SLIDE
	*===================================*/
  $(function () {
    function ckSlideInit() {
      $(".u-carousel-inner").each(function () {
        var ckElement = $(this),
          ckInterval = ckElement.attr("data-interval"),
          ckId = ckElement.attr("id");
        // $(ckElement).css("animation-duration", `${5}s`)
        // var ckSlideItems = $(ckElement).find(".u-carousel-item"),
        //   ckNumSlide = ckSlideItems.length;
        // var ckPrev = $(ckElement).find(".u-carousel-control-prev")[0];
        // var ckNext = $(ckElement).find(".u-carousel-control-next")[0];
        // var activeSlide = 0;

        // $(ckPrev).click(function (e) {
        //   e.preventDefault();
        // });

        // $(ckNext).click(function () {});

        ckElement.waypoint(
          function () {
            // ckElement.addClass("animated").css("opacity", "1");
            // ckElement.addClass("animated").addClass(AnimationClass);
            setTimeout(() => ckElement.addClass("animation"), 1000);
          },
          {
            triggerOnce: true,
            offset: "90%",
          }
        );
      });
    }

    ckSlideInit();
  });
})(jQuery);
