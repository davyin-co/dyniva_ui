(function ($) {
  /**
   * readme https: //www.layui.com/laydate/
   */
  Drupal.behaviors.dyniva_laydate = {
    _dates: {},
    first: true,
    attach: function (context) {
      var that = this;

      if(that.first) {
        that.init(context);

        that.first = false;
      }
    },
    init: function (context) {  
      var that = this;
      var $date = $('[data-toggle="date"]', context);

      $date.each(function (index) {
        that.render(this, index);
      })
    },
    render: function (ele, key) {
      var $ele = $(ele);
      var that = this;

      $ele.addClass('dy-date-' + key);

      var defaults = {
        elem: '.dy-date-' + key,
        ready: function (date) {
          $ele.trigger('laydate.ready', { date: date });
        },
        change: function (value, date, endDate) {
          $ele.trigger('laydate.change', { value: value, date: date, endDate: endDate })
        },
        done: function (value, date, endDate) {
          $ele.trigger('laydate.done', { value: value, date: date, endDate: endDate })
        }
      };
      
      var options = null;

      // 参数为JSON字符串
      try {
        options = JSON.parse($ele.attr('data-options'))
      } catch (error) {
        options = {}
      }

      var optionMark = that.getMarks($ele);

      var marks = optionMark ? {
        mark: optionMark
      } : {};

      var configs = $.extend(defaults, options, marks)

      that._dates[key] = laydate.render(configs);
    },
    getMarks: function ($ele) {
      return $ele.data('mark')
    }
  }

}(jQuery));
