(function ($) {
  $(function () {
    $(document).ready(function () {
      onShowHamberger();
      onCloseHamberger();
      onShowBtnSearchMobile();
      onClickSelect();
      onClickShowMenuMobile();
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
  });
})(jQuery);
