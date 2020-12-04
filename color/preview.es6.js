/**
 * @file
 * Preview for the Bartik theme.
 */
(function ($, Drupal, drupalSettings) {
  Drupal.color = {
    logoChanged: false,
    callback(context, settings, $form) {
      // Change the logo to be the real one.
      if (!this.logoChanged) {
        $('.color-preview .color-preview-logo img').attr('src', drupalSettings.color.logo);
        this.logoChanged = true;
      }
      // Remove the logo if the setting is toggled off.
      if (drupalSettings.color.logo === null) {
        $('div').remove('.color-preview-logo');
      }


      const $colorPreview = $form.find('.color-preview');
      const $colorPalette = $form.find('.js-color-palette');

      $colorPreview.css('background-color', $colorPalette.find('input[name="palette[bg-base]"]').val());
      $colorPreview.css('color', $colorPalette.find('input[name="palette[text-color]"]').val());

      const $colorPreviewMain = $form.find('.color-preview-main');
      const $colorPreviewLinks = $colorPreviewMain.find('a');
      $colorPreviewLinks.css('color', $colorPalette.find('input[name="palette[link-color]"]').val());

    },
  };
}(jQuery, Drupal, drupalSettings));
