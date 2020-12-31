
(function ($, Drupal) {
  Drupal.behaviors.echart = {
    attach: function (context, settings) {
      /**
       * https://github.com/select2/select2
       */
      $('.dy-select').select2();
    }
  };

}(jQuery, Drupal));
