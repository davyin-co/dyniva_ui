(function ($) {

  /**
   * only for preive page
   */
  $(document).ready(function () {
    var $eles = $('[data-toggle="showFontSize"]')
    _.each($eles, function (ele) {
      var target = $(ele).data('element');
      var firstEle = $('#font-size-wraper').find(target)[0];
      if (firstEle) {
        var size = $(firstEle).css('fontSize');
        $(ele).text(size);
      }
    })
  })

}(jQuery))
