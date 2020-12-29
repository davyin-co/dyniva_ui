# Script to quickly create sub-theme.

echo '
+------------------------------------------------------------------------+
| With this script you could quickly create dyniva_ui sub-theme           |
| In order to use this:                                                    |
| - dyniva_ui theme (this folder) should be in the custom folder          |
+------------------------------------------------------------------------+
'
echo 'The machine name of your custom theme? [e.g. sub_theme_ui]'
read THEME_NAME


# copy sub theme to theme/custom
cp -r ../dyniva_ui/_SUBTHEME ../$THEME_NAME

# cd sub theme folder
cd ../$THEME_NAME

# rename theme files
for file in $(ls *._yml); do
  mv $file $(echo $file | sed "s/._yml/.yml/g")
done

for file in $(ls *SUBTHEME*); do
  mv $file $(echo $file | sed "s/SUBTHEME/${THEME_NAME}/g")
done

# replace SUBTHEME to new theme string
sed -i "s/SUBTHEME/${THEME_NAME}/g" `grep "SUBTHEME" -rl ../${THEME_NAME}/`

# done
echo "\nsub theme ${THEME_NAME} has been generated in theme/custom/${THEME_NAME}"