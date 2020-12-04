require('bootstrap/js/transition');
// require('bootstrap/js/alert');
// require('bootstrap/js/tab');
require('bootstrap/js/modal');
require('bootstrap/js/dropdown');
// require('bootstrap/js/tooltip');

// ----- 上面部分按需使用 ----- //
// ----- ==  ReadMe  == ----- //
// ----- 下面部分自行修改 ----- //

let Drupal = window.Drupal || {};

(function ($) {

  Drupal.behaviors.siteScript = {
    first: true,
    attach(context) {

      if (!this.first) return false;

      $('#content-modal-nav').modal({
        backdrop: false,
        'show': true,
      });

      // Message alert button
      this.librarys.messages;

      // Default Set with drupal.js
      this.librarys.footer($);

      // Set Swiper 2.7.3
      // if(this.plugins && this.plugins.swipers2) this.plugins.swipers2.init();

      this.first = false;

    },
    plugins: {
      // Plugins
      // 'swipers2' : require('./plugins/swipers2')
    },
    librarys: {
      // Core
      'messages': require('./drupal/dynivaui.messages'),
      'footer': require('./drupal/dynivaui.footer')
    }
  }

  /**
   * 定义loading方法
   */
  $.fn.showLoading = function () {
    var $load =
      '<svg class="load" viewBox="22 22 44 44">\n' +
      '  <circle class="loading" cx="44" cy="44" r="20.2" fill="none" stroke-width="3.6"/>\n' +
      "</svg>";

    if ($(this).css("position") === "static") {
      $(this).css("position", "relative");
    }

    $(this).attr("data-loading", "loading");
    $(this).append($load);
  };
  $.fn.hideLoading = function () {
    $(this).removeAttr("data-loading", "");
    $(this).find(".load").remove();
  };
}(jQuery));
