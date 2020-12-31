(function ($) {
  /**
   * readme https: //www.layui.com/laydate/
   */
  Drupal.behaviors.date = {
    _dates: {},
    attach: function (context) {
      var that = this;

      var $date = $('[data-toggle="date"]', context);

      $date.each(function (index) {
        var $ele = $(this);
        $ele.addClass('dy-date-' + index);

        var defaults = {
          elem: '.dy-date-' + index
        };
        var options = null;

        // 参数为JSON字符串
        try {
          options = JSON.parse($ele.attr('data-options'))
        } catch (error) {
          options = {}
        }

        var optionMark = getMarks($ele);
        var marks = optionMark ? {
          mark: optionMark
        } : {};

        var configs = $.extend(defaults, options, marks)

        that._dates[index] = laydate.render(configs);
      })

      function getMarks(ele) {
        return ele.data('mark')
      }
    }
  }

}(jQuery));
