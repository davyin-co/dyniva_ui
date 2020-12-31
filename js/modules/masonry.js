(function ($) {

  Drupal.behaviors.masonry = {
    selector: '.masonry',
    container: null,
    options: null,
    instance: null,
    isFirstLoad: true,
    attach: function (ctx) {
      if (this.isFirstLoad) {
        this.isFirstLoad = false;

        this.container = $(this.selector).attr('data-masonry-container');
        this.options = JSON.parse($(this.selector).attr('data-masonry-options') || '{}');

        this.render();
      } else {
        this.reload()
      }
    },
    render: function () {
      var that = this;
      var containerSelector = that.selector + ' ' + that.container;

      if (!$(containerSelector).hasClass('row')) {
        $(containerSelector).addClass('row');
      }

      that.instance = $(containerSelector).masonry(that.options);
      that.instance.imagesLoaded().progress(function () {
        that.instance.masonry('layout');
      })
    },
    reload: function () {
      var that = this;

      that.instance.masonry('reloadItems');
      that.instance.imagesLoaded().progress(function () {
        that.instance.masonry('layout');
      })
    }
  };
}(jQuery));

