(function($) {
  Drupal.behaviors.ellipsis = {
    attach: function(ctx) {
      /**
       * 溢出显示...功能
       */
      $(".ellipsis").each(function() {
        // 获取自定义配置
        var $option = $(this).attr("data-ellipsis");
        // 默认配置
        var $optionDefault = {
          truncate: "letter"
        };
        // 当自定义配置没有则取默认配置
        if($option){
          try {
            // 合并配置
            $option = JSON.parse($option);
            $.extend($option, $optionDefault);
          } catch (error) {
            console.log(error);
            $option = $optionDefault;
          }
        }else{
          // 自定义配置需要为标准JSON字符串，不然会导致解析失败，解析失败则获取默认配置
          $option = $optionDefault;
        }
        // 渲染dom
        $(this).dotdotdot($option);
      });
    }
  };

  $(document).ready(function() {});
})(jQuery);
