(function ($) {

  /**
   * Dom ready
   */
  $(document).ready(function () {})

  /**
   * Use drupal system
   * info.yml
   * libraries themeName/plugins.code
   * @type {{first: boolean, attach: Drupal.behaviors.dyniva.attach}}
   */

  Drupal.behaviors.dyniva = {
    first: true,
    attach: function (context) {
      var self = this
      if (!this.first) return false;

      // Init inview block Anmi.
      this.inviews('.inview-box');
      
      // init sticky header
      if ($('.sticky-header .sticky-wrapper').length > 0) {
        this.sticky('.sticky-header .sticky-wrapper');
      }

      this.first = false;
    }
  }
  /* - !Use frontEnd npm --------------- */
  /* - @see assets/scripts/index.js ---- */
  /* - Need npm install first ---------- */

}(jQuery))
