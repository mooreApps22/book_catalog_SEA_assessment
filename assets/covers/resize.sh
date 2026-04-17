file_name=$1
file_ext=$2

convert "$file_name.$file_ext" -resize 180x270^ -gravity center -extent 180x270 -quality 75 "$file_name.webp"

mv "$file_name.webp" keep
rm "$file_name.$file_ext"
clear
ls
