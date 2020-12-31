var app = app || {};

(function ($, Drupal) {

  app.getChartLine = function (version) {
    switch (version) {
      case "v1":
        return {
          title: {
              text: '本周发文统计'
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: ['发文总量', '文章发文量', '着陆页发文量', '活动发文量', 'JSON']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
              type: 'value'
            },
            series: [{
                name: '发文总量',
                type: 'line',
                data: [1511, 1678, 1594, 1656, 2160, 2320, 2360]
              },
              {
                name: '文章发文量',
                type: 'line',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
              },
              {
                name: '着陆页发文量',
                type: 'line',
                data: [150, 232, 201, 154, 190, 330, 410]
              },
              {
                name: '活动发文量',
                type: 'line',
                data: [320, 332, 301, 334, 390, 330, 320]
              },
              {
                name: 'JSON',
                type: 'line',
                data: [220, 182, 191, 234, 290, 330, 310]
              }
            ]
        };
        break;
      case "v2":
        return {
          title: {
              text: '用户活跃统计'
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: ['Admin', '张三', '李四', '王五', '赵六']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['2019-10-25', '2019-10-26', '2019-10-27', '2019-10-28', '2019-10-29', '2019-10-30', '2019-10-31']
            },
            yAxis: {
              type: 'value'
            },
            series: [{
                name: 'Admin',
                type: 'line',
                data: [8, 7, 8, 5, 13, 14, 20]
              },
              {
                name: '张三',
                type: 'line',
                data: [5, 6, 5, 12, 15, 10, 12]
              },
              {
                name: '李四',
                type: 'line',
                data: [3, 4, 6, 6, 8, 11, 9]
              },
              {
                name: '王五',
                type: 'line',
                data: [1, 6, 4, 4, 7, 9, 13]
              },
              {
                name: '赵六',
                type: 'line',
                data: [0, 7, 7, 9, 7, 5, 12]
              }
            ]
        };
        break;
    }
  }

  app.getChartBar = function (version) {
    switch (version) {
      case "v1":
        return {
          "color": ["#7527a1", "#80bdfe", "#ff7640"],
          "title": {
            "text": "网络与信息中心本年度发文统计",
            "left": "left"
          },
          "legend": {
            "data": ["发文总量", "文章发文量", "活动发文量"],
            "left": "center",
            "bottom": "bottom"
          },
          "xAxis": {
            "type": "category",
            "axisTick": {
              "show": false
            },
            "data": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
          },
          "yAxis": {
            "name": "数字",
            "type": "value"
          },
          "series": [{
            "name": "发文总量",
            "type": "bar",
            "barGap": 0,
            "label": {
              "normal": {
                "show": true,
                "position": "top"
              }
            },
            "data": ["6", "10", "3", "13", "26", "2", "4", "6", "8", "20", "12", "32"]
          }, {
            "name": "文章发文量",
            "type": "bar",
            "label": {
              "normal": {
                "show": true,
                "position": "top"
              }
            },
            "data": ["4", "7", "1", "7", "17", "1", "3", "4", "3", "15", "4", "15"]
          }, {
            "name": "活动发文量",
            "type": "bar",
            "label": {
              "normal": {
                "show": true,
                "position": "top"
              }
            },
            "data": ["2", "3", "2", "6", "9", "1", "1", "2", "5", "5", "8", "17"]
          }],
          "grid": {
            "containLabel": true,
            "left": "10",
            "right": "10",
            "bottom": "40"
          },
          "toolbox": {
            "show": true,
            "right": "30",
            "feature": {
              "saveAsImage": {}
            }
          }
        };
        break;
      case "v2":
        return {

          "color": ["#80bdfe", "#7ec857", "#f2b33f"],
          "title": {
            "text": "院部发布信息数排行 Top10",
            "left": "left"
          },
          "legend": {
            "data": ["发文总量", "文章发文量", "活动发文量"],
            "left": "center",
            "bottom": "bottom"
          },
          "xAxis": {
            "name": "数字",
            "type": "value"
          },
          "yAxis": {
            "type": "category",
            "axisTick": {
              "show": false
            },
            "data": ["机电学院", "后勤集团", "建筑学院", "外国语学院", "人事处", "航天学院", "电信学院", "产业工委", "化工化学学院", "网络与信息中心"]
          },
          "series": [{
            "name": "发文总量",
            "type": "bar",
            "barGap": 0,
            "label": {
              "normal": {
                "show": true,
                "position": "right"
              }
            },
            "data": ["1", "1", "2", "2", "8", "16", "17", "21", "72", "110"]
          }, {
            "name": "文章发文量",
            "type": "bar",
            "label": {
              "normal": {
                "show": true,
                "position": "right"
              }
            },
            "data": ["1", "1", "2", "2", "2", "12", "8", "9", "31", "58"]
          }, {
            "name": "活动发文量",
            "type": "bar",
            "label": {
              "normal": {
                "show": true,
                "position": "right"
              }
            },
            "data": ["0", "0", "0", "0", "2", "1", "4", "3", "12", "12"]
          }],
          "grid": {
            "containLabel": true,
            "left": "10",
            "right": "10",
            "bottom": "40"
          },
          "toolbox": {
            "show": true,
            "right": "30",
            "feature": {
              "saveAsImage": {}
            }
          }


        };
        break;
    }
  };

  app.getChartPie = function (version) {
    switch (version) {
      case "v1":
        return {
          title: {
              text: '发文统计',
              x: 'left'
            },
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              orient: 'vertical',
              left: 'right',
              data: ['文章', '着陆页', '活动', 'JSON']
            },
            series: [{
              name: '发文统计',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [{
                  value: 335,
                  name: '文章'
                },
                {
                  value: 122,
                  name: '着陆页'
                },
                {
                  value: 96,
                  name: '活动'
                },
                {
                  value: 56,
                  name: 'JSON'
                }
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }]
        };
        break;
      case "v2":
        return {
          tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
              orient: 'vertical',
              x: 'right',
              data: ['文章', '着陆页', '活动', 'JSON']
            },
            series: [{
              name: '发文统计',
              type: 'pie',
              radius: ['40%', '60%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [{
                  value: 335,
                  name: '文章'
                },
                {
                  value: 122,
                  name: '着陆页'
                },
                {
                  value: 96,
                  name: '活动'
                },
                {
                  value: 56,
                  name: 'JSON'
                }
              ],
            }]
        };
        break;
    }
  }

}(jQuery, Drupal));
