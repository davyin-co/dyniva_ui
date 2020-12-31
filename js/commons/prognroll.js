/**
 * Prognroll by mobile
 */
(function ($) {
  $(document).ready(function () {
    if ($(window).width() < 767) {
      $('body').prognroll({
        height: 5, //Progress bar height
        color: '#26A3E7', //Progress bar background color
        custom: false //If you make it true, you can add your custom div and see it's scroll progress on the page
      })
    }
  })
}(jQuery))
