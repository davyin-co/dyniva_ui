(function ($) {
  Drupal.behaviors.animate = {
    first: true,
    attach: function (context) {
      if (this.first) {
        AOS.init({
          useClassNames: true,
          initClassName: 'dy-animate-init',
          animatedClassName: 'dy-animate',
          once: true
        });
      } else {
        AOS.refreshHard()
      }
      this.first = false;
    }
  }
})(jQuery)
