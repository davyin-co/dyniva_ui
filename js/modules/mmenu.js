(function($) {

  Drupal.behaviors.dyniva.mmenu = function(region) {
    var $menu = $(region).mmenu({
      extensions: [
        "border-full",
        "position-left"
      ],
      // 菜单标题
      navbar: {
        title: Drupal.t('Main Menu')
      }
    }, {
      // 解决drupal toolbar padding top的问题
      offCanvas: {
        pageSelector: ".dialog-off-canvas-main-canvas"
      }
    });

    var $icon = $("#header-btns");
    var API = $menu.data("mmenu");
    if (API) {
      $icon.on("click", function() {
        API.open();
      });

      API.bind("open:finish", function() {
        setTimeout(function() {
          $icon.addClass("is-active");
        }, 100);
      });
      API.bind("close:finish", function() {
        setTimeout(function() {
          $icon.removeClass("is-active");
        }, 100);
      });
    }

  };
  // 初始化mmenu
  Drupal.behaviors.dyniva.mmenu('#outside');

}(jQuery));
