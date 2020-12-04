(function ($) {
  /**
   * Dropdown element
   * @type {{attach: Drupal.behaviors.dropdown.attach}}
   */
  Drupal.behaviors.dropdown = {
    init: function (toggleEle) {
      var $elems = $(toggleEle);
      _.each($elems, function (elem, index) {
        $(elem).addClass('menu-toggle-' + index);
        var $parent = $(elem).parent();

        // slideDown, slideUp
        var slideDown = function slideDown() {
          $(elem).parent().addClass('open');
          $(elem).next().stop().slideDown(500);
        };
        var slideUp = function slideUp() {
          $(elem).parent().removeClass('open');
          $(elem).next().stop().slideUp(200);
        };

        // debounce
        // var debounceDown = _.debounce(slideDown, 250);
        // var debounceUp = _.debounce(slideUp, 250);

        $parent.addClass('menu-item-' + index);
        $parent.on('mouseenter', elem, slideDown);
        $parent.on('mouseleave', elem, slideUp);
      });
    },
    attach: function () {
      this.init('#page .menu-toggle');
    }
  };
}(jQuery));
