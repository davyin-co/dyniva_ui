/**
 * https: //echarts.baidu.com/theme-builder/
 */
var app = app || {};


(function ($, Drupal) {
  Drupal.behaviors.echart = {
    attach: function (context, settings) {

      // line v1
      var _chartLineV1 = document.getElementById('dy-chart-line-v1');
      if (_chartLineV1) {
        var line_v1 = echarts.init(_chartLineV1, 'dy-chart');
        line_v1.setOption(app.getChartLine("v1"));
      }

      // line v2
      var _chartLineV2 = document.getElementById('dy-chart-line-v2');
      if (_chartLineV2) {
        var line_v2 = echarts.init(_chartLineV2, 'dy-chart');
        line_v2.setOption(app.getChartLine("v2"));
      }


      // bar v2
      var _chartBarV1 = document.getElementById('dy-chart-bar-v1');
      if (_chartBarV1) {
        var bar_v1 = echarts.init(_chartBarV1, 'dy-chart');
        bar_v1.setOption(app.getChartBar('v1'));
      }


      // bar v2
      var _chartBarV2 = document.getElementById('dy-chart-bar-v2');
      if (_chartBarV2) {
        var bar_v2 = echarts.init(_chartBarV2, 'dy-chart');
        bar_v2.setOption(app.getChartBar('v2'));
      }


      // pie v1
      var _chartPieV1 = document.getElementById('dy-chart-pie-v1');
      if (_chartPieV1) {
        var pie_v1 = echarts.init(_chartPieV1, 'dy-chart');
        pie_v1.setOption(app.getChartPie('v1'));
      }


      // pie v2
      var _chartPieV2 = document.getElementById('dy-chart-pie-v2');
      if (_chartPieV2) {
        var pie_v2 = echarts.init(_chartPieV2, 'dy-chart');
        pie_v2.setOption(app.getChartPie('v2'));
      }


      window.onresize = function () {
        if (line_v1) {
          line_v1.resize();
        }
        if (line_v2) {
          line_v2.resize();
        }
        if (bar_v1) {
          bar_v1.resize();
        }
        if (bar_v2) {
          bar_v2.resize();
        }
        if (pie_v1) {
          pie_v1.resize();
        }
        if (pie_v2) {
          pie_v1.resize();
        }
      }
    }
  };

}(jQuery, Drupal));
