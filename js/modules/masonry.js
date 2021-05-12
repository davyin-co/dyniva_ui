(function ($) {
  Drupal.behaviors.masonry = {
    attach: function (ctx) {
      var $masonries = $('.masonry', ctx);
      var that = this;

      $masonries.each(function () {
        if ($(this).hasClass('masonry-initialed')) {
          that.reload($(this))
        } else {
          that.render($(this));
        }
      })
    },
    render: function ($ele) {
      var options = null;
      var $masonry = $ele.find($ele.attr('data-masonry-container'));

      try {
        options = JSON.parse($ele.attr('data-masonry'));
      } catch (error) {
        options = {};
      }

      if (!$masonry.hasClass('row')) {
        $masonry.addClass('row');
      }

      $masonry.masonry(options);
      $masonry.imagesLoaded().progress(function () {
        $masonry.masonry('layout');
      })

      $masonry.addClass('masonry-initialed')
    },
    reload: function ($ele) {
      var $masonry = $ele.find($ele.attr('data-masonry-container'));

      $masonry.masonry('reloadItems');
      $masonry.imagesLoaded().progress(function () {
        $masonry.masonry('layout');
      })
    }
  };
}(jQuery));

