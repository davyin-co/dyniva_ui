<?php
/**
 * Implements hook_form_system_theme_settings_alter() function.
 */
function dyniva_admin_form_system_theme_settings_alter(&$form, \Drupal\Core\Form\FormStateInterface &$form_state, $form_id = NULL) {
  if (isset($form_id)) {
    return;
  }
  $form['devtools'] = array(
      '#type'  => 'details',
      '#title' => t('william settings'),
      '#open'  => TRUE
  );
  $form['devtools']['dyniva_ui_front_rebuild_registry'] = array(
    '#type'          => 'checkbox',
    '#title'         => t('Cache theme templates.'),
    '#default_value' => theme_get_setting('dyniva_ui_front_rebuild_registry'),
    '#description'   => t('Just Useful on DEV Mode, If Sites will online, Please off this option.'),
  );
}
