(function ($) {
  $(function () {
    $(document).ready(function () {
      onShowHamberger();
      onCloseHamberger();
      onShowBtnSearchMobile();
    });

    function onShowHamberger() {
      const el_hamber = $("#button-hamberger");
      let click = false;
      if (el_hamber.length > 0) {
        el_hamber.on("click", function (e) {
          if (click) {
            click = false;
            $("#button-hamberger-nav").removeClass(
              "hamberger-menu-mobile_show"
            );
          }
          else {
            click = true;
            $("#button-hamberger-nav").addClass("hamberger-menu-mobile_show");
          }
        });
      }
    }

    function onCloseHamberger() {
      const el_hamber = $("#close-hamberger-nav");
      if (el_hamber.length > 0) {
        el_hamber.on("click", function (e) {
          $("#button-hamberger-nav").removeClass("hamberger-menu-mobile_show");
        });
      }
    }
    function onShowBtnSearchMobile () {
        const el_btn = $("#button-search");
        let click = false;
        if(el_btn.length > 0) {
            el_btn.on("click",function (e) {
                if(click) {
                    click = false;
                    $("#header-search").removeClass("is-active");
                    $(".icon-search").removeClass("d-none");
                    $(".icon-close-search").addClass("d-none");
                }
                else {
                    click = true;
                    $("#header-search").addClass("is-active");
                    $(".icon-search").addClass("d-none");
                    $(".icon-close-search").removeClass("d-none");
                }
            })
        }
    }
  });
})(jQuery);
