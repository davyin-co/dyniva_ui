(function ($) {
  /**
   * sidebar menu
   * @type {{attach: Drupal.behaviors.sidebarMenu.attach}}
   */
  Drupal.behaviors.sidebarMenu = {
    attach: function (context) {
      var $sidebarMenu = $('.js-sidebar-menu');
      $sidebarMenu.find('.menu-collapse').append('<i class="icon-toggle"></i>');
      $('.icon-toggle', $sidebarMenu).click(function (event) {
        event.preventDefault();
        $sidebarMenu.find('.level-menu').stop().slideUp();
        $(this).parents('.expanded').children('.level-menu').stop().slideToggle();
      })
    }
  }
}(jQuery))
