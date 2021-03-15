(function ($) {
  Drupal.behaviors.slimScroll = {
    first: true,
    attach: function (context, settings) {
      var self = this;

      if (self.first) {
        self.init(context);

        self.first = false;
      }
    },
    init: function (context) {
      var self = this;

      $("[data-toggle=slimScroll]", context).each(function () {
        self.scroll(this);
      });
    },
    scroll: function (scrollWrapper) {
      var $scrollWrapper = $(scrollWrapper);
      // scolled -> return
      if($scrollWrapper.hasClass('slimscrolled')) return;

      if (scrollWrapper.scrollHeight > scrollWrapper.clientHeight) {
        var option = JSON.parse($scrollWrapper.attr("data-slimScroll") || "{}");

        if (option && typeof option === "object") {
          $.extend(option, {
            height: scrollWrapper.clientHeight + "px",
            railVisible: true,
          });
        }

        $scrollWrapper.slimScroll(option).trigger('slimscrolled').addClass('slimscrolled');

        var hideScrollDefault = $scrollWrapper.attr('data-hide-scroll');

        if (hideScrollDefault) {
          $scrollWrapper.parent().find('.slimScrollBar').hide();
        }
      }
    }
  };
})(jQuery);
