(function ($) {

	Drupal.behaviors.dyniva.sticky = function(ele){
    var waypoint = new Waypoint.Sticky({
      stuckClass: 'stuck',
      element: $(ele)[0],
      offset: function(){
        return -this.element.clientHeight
      }
    });
  };

}(jQuery));
