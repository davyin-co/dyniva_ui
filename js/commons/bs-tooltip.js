(function($) {
  /**
   * dont set tooltip container global, can use data-container set custom in self component
   * so that every componet can have own styles
   */
  $(document).ready(function() {
    var bsTooltip = $.fn.tooltip.noConflict();
    $.fn.bsTooltip = bsTooltip;

    $('[data-toggle="bsTooltip"]').bsTooltip();
  });
})(jQuery);
