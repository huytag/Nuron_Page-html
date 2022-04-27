(function ($) {
  $(function () {
    $(document).ready(function () {
      onShowHamberger();
      onCloseHamberger();
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
  });
})(jQuery);
