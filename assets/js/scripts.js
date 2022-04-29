(function ($) {
  $(function () {
    $(document).ready(function () {
      onShowHamberger();
      onCloseHamberger();
      onShowBtnSearchMobile();
      onClickSelect();
      onClickShowMenuMobile();
      CountDownt();
      liveSlickList();
      SlickNext();
      SlickPrex();
    });
    let clickHamber = false;
    function onShowHamberger() {
      const el_hamber = $("#button-hamberger");
      if (el_hamber.length > 0) {
        el_hamber.on("click", function (e) {
          if (clickHamber) {
            clickHamber = false;
            $("#button-hamberger-nav").removeClass(
              "hamberger-menu-mobile_show"
            );
          } else {
            clickHamber = true;
            $("#button-hamberger-nav").addClass("hamberger-menu-mobile_show");
          }
        });
      }
    }

    function onCloseHamberger() {
      const el_hamber = $("#close-hamberger-nav");
      if (el_hamber.length > 0) {
        el_hamber.on("click", function (e) {
          clickHamber = false;
          $("#button-hamberger-nav").removeClass("hamberger-menu-mobile_show");
        });
      }
    }
    function onShowBtnSearchMobile() {
      const el_btn = $("#button-search");
      let click = false;
      if (el_btn.length > 0) {
        el_btn.on("click", function (e) {
          if (click) {
            click = false;
            $("#header-search").removeClass("is-active");
            $(".icon-search").removeClass("d-none");
            $(".icon-close-search").addClass("d-none");
          } else {
            click = true;
            $("#header-search").addClass("is-active");
            $(".icon-search").addClass("d-none");
            $(".icon-close-search").removeClass("d-none");
          }
        });
      }
    }
    function onClickSelect() {
      const el_button = $(".nice-select");
      let click = false;
      if (el_button.length > 0) {
        el_button.on("click", function (e) {
          if (click) {
            click = false;
            $("#nice-select_active").removeClass("is-active");
            $("#icon-nice-select").removeClass("is-active");
          } else {
            click = true;
            $("#nice-select_active").addClass("is-active");
            $("#icon-nice-select").addClass("is-active");
          }
        });
      }
    }
    function onClickShowMenuMobile() {
      const el_menu = $("#mainmenu-mobile");
      let click = true;
      if(el_menu.length > 0) {
        el_menu.on("click",function (e) {
          if(click) {
            click= false;
            $("#submenu-mobile").removeClass("is-active")
          } else {
            click= true;
            $("#submenu-mobile").addClass("is-active")
          }
        })
      }
    }
    function CountDownt() {
      let h = 9;
      let m = 27;
      let s = 60;
      setInterval(() => {
        s = s - 1;
        if(s == 0) {
          s = 60;
          m = m - 1;
          if (m == 0) {
            m = 60;
            h = h - 1;
            if (h == 0) h = 12;
          } 
        };
        $(".countdown-seconds").html(s);
        $(".countdown-mins").html(m);
        $(".countdown-hours").html("0"+h);
      },1000)
    }
    function liveSlickList () {
      $('.slick-list').not('.slick-initialized').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    }
    function SlickNext() {
      const el = $("#slick-list-btn-right");
      if(el.length > 0) {
        el.on("click", function (e) {
          $('.slick-list').filter('.slick-initialized').slick('slickNext');
        })
      }
    }
    function SlickPrex() {
      const el = $("#slick-list-btn-left");
      if(el.length > 0) {
        el.on("click", function (e) {
          let number = $('.slick-list').slick('slickCurrentSlide');
          if (number <= 0) return;
          $('.slick-list').filter('.slick-initialized').slick('slickPrev');
        })
      }
    }
  });
})(jQuery);
