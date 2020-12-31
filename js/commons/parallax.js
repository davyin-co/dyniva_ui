(function ($) {
  var s = skrollr.init({
    forceHeight: false
  });
  checkMobile()

  $(window).resize(function () {
    checkMobile()
  })

  function checkMobile() {
    if (s.isMobile()) {
      s.destroy()
    }
  }
})(jQuery)
