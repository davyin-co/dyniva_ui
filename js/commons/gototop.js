(function ($) {
  $(document).ready(function () {
    var $goToTop = $('#go-to-top');
    if ($goToTop.length > 0) {
      var options = $goToTop.data('options');
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $goToTop.css({
            bottom: options && options.bottom || '60px'
          })
        } else {
          $goToTop.css({
            bottom: "-100px"
          })
        }
      })
      $goToTop.click(function () {
        $('html, body').animate({
          scrollTop: '0px'
        }, 800);
        return false;
      })
    }
  })
})(jQuery)
