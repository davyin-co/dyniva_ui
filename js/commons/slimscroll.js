(function ($) {
  $(document).ready(function () {
    $("[data-toggle=slimScroll]").each(function () {
      var self = this;
      
      if (self.scrollHeight > self.clientHeight) {
        var option = JSON.parse($(self).attr("data-slimScroll") || "{}");
        if (option && typeof option === "object")
          $.extend(option, {
            height: self.clientHeight + "px",
            railVisible: true,
          });
        $(self).slimScroll(option);
        
        var hideScrollDefault = $(self).attr('data-hide-scroll');
        if(hideScrollDefault) {
          $(self).parent().find('.slimScrollBar').hide();
        }
      }
    });
  });
})(jQuery);
