(function($, _) {

  Drupal.behaviors.slider = {
    /**
     * init
     * @param slider element
     * @param settings object
     */
    init: function(sliders, settings){
      var sliders = $(sliders);
      var defautls = {
        start: [20, 80],
        connect: true,
        tooltips: true,
        range: {
          'min': 0,
          'max': 100
        }
      }

      _.each(sliders, function(slider, index){
        // console.log(slider, index)
        var dataSettings = $(slider).data('slider');
        var options = $.extend({}, defautls, settings, dataSettings)
        var slider = $(slider).addClass('dy-slider-' + index);
        noUiSlider.create(slider.get(0), options);
      });

    },
    attach: function(context) {
      this.init('.dy-slider')
    }
  }

}(jQuery, _));
