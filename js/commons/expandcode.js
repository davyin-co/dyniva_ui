(function($){
// 隐藏展开code开发说明
  Drupal.behaviors.expandCode =  {
    attach: function(){
      $('.expand-code').each(function (index) {
        var idCollapse = 'collapseCode-' + index;
        var misc = $(this).find('span');
        $(this).attr('href', '#' + idCollapse).next().attr('id', idCollapse);
        $('#' + idCollapse).on('shown.bs.collapse', function () {
          misc.text('收起')
        });
        $('#' + idCollapse).on('hidden.bs.collapse', function () {
          misc.text('展开')
        });
      })
    }
  }

  $(function () {  
    // prettyPrint
    if ($('.prettyprint').length) {
      PR.prettyPrint()
    }
  })
}(jQuery))

