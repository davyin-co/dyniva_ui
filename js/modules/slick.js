(function ($) {
  /**
   * Slick carousel init
   * @type {{attach: Drupal.behaviors.slick.attach}}
   */
  Drupal.behaviors.dyniva_ui_slick = {
    first: true,
    instance: null,
    attach: function (context) {
      var that = this;

      // set initialized(cloned) instance element
      var setElements = function ($e) {
        $e.slick.$slider = $($e);
        $e.slick.$list = $('.slick-list', $e);
        $e.slick.$slideTrack = $('.slick-track', $e);
        $e.slick.$dots = $('.slick-dots', $e);
        $e.slick.$slides = $('.slick-slide:not(.slick-cloned)', $e)
        $e.slick.$track = $('.slick-track', $e)
        $e.slick.$prevArrow = $('.slick-arrow.slick-prev', $e)
        $e.slick.$nextArrow = $('.slick-arrow.slick-next', $e)
      }

      // destroy initialized(cloned) slick
      $(".dy-carousel.slick-initialized", context).each(function (i) {
        // copy instance
        this.slick = Object.create(that.instance[i].slick);

        // fix instance element
        setElements(this);

        // fix instance event
        this.slick.initializeEvents();

        // destroy instance
        $(this).slick('destroy');
      });

      // Init Render
      var $slick = $(".dy-carousel", context);
      if ($slick && $slick.length > 0) {
        that.instance = $(".dy-carousel", context).slick();
      }
    }
  };

}(jQuery));
