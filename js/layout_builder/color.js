(function ($) {
  Drupal.behaviors.dyniva_layout_builder = {
    cssRules: null,
    getCssRules: function () {
      for (let index = 0; index < document.styleSheets.length; index++) {
        var css = document.styleSheets[index];
        if ((css.href || "").indexOf("build/init.css") > -1) {
          this.cssRules = css.cssRules;
          break;
        }
      }
    },
    getStyleRuleValueByName(selectorText) {
      var cssStyleRule;
      for (let index = 0; index < this.cssRules.length; index++) {
        var item = this.cssRules[index];
        if (item.selectorText === "." + selectorText) {
          cssStyleRule = item;
          break;
        }
      }

      return cssStyleRule;
    },
    setCssByClassName: function ($el, rewriteKey) {
      var that = this;
      setTimeout(function () {
        var classList = $el.attr("class").split(" ");
        for (let index = 0; index < classList.length; index++) {
          var name = classList[index];
          var CSSStyleRule = that.getStyleRuleValueByName(name);
          if (CSSStyleRule && CSSStyleRule.style && CSSStyleRule.style.length) {
            var css = {};
            for (let cIndex = 0; cIndex < CSSStyleRule.style.length; cIndex++) {
              var k = CSSStyleRule.style[cIndex];
              css[rewriteKey || k] = CSSStyleRule.style[k];
            }
            $el.css(css);
          }
        }
      }, 500);
    },
    attach: function (context) {
      var that = this;
      if (!document.getElementById("layout-builder")) {
        return;
      }

      if (!this.cssRules) {
        this.getCssRules();
      }

      if (!this.cssRules) {
        console.warn("cssRules is null");
        return;
      }

      // 设置modal里的color
      if (
        $(".js-form-item-appearance-typography-text-color label.option").length
      ) {
        $(".js-form-item-appearance-typography-text-color label.option").each(
          function () {
            var $this = $(this);
            that.setCssByClassName($this, "background-color");
          }
        );
      }

      // 设置侧边框里color
      // Background
      if (
        $(
          ".js-form-item-layout-settings-ui-tab-content-appearance-background-background-color label.option"
        ).length
      ) {
        $(
          ".js-form-item-layout-settings-ui-tab-content-appearance-background-background-color label.option"
        ).each(function () {
          var $this = $(this);
          that.setCssByClassName($this);
        });
      }
      // Text Color
      if (
        $(
          ".js-form-item-layout-settings-ui-tab-content-appearance-typography-text-color label.option"
        ).length
      ) {
        $(
          ".js-form-item-layout-settings-ui-tab-content-appearance-typography-text-color label.option"
        ).each(function () {
          var $this = $(this);
          that.setCssByClassName($this, "background-color");
        });
      }
      // Border Color
      if (
        $(
          ".js-form-item-layout-settings-ui-tab-content-appearance-border-border-color label.option"
        ).length
      ) {
        $(
          ".js-form-item-layout-settings-ui-tab-content-appearance-border-border-color label.option"
        ).each(function () {
          var $this = $(this);
          that.setCssByClassName($this, "background-color");
        });
      }
    },
  };
})(jQuery);
