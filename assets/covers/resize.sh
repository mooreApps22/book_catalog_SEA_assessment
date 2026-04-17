file_name=$0

convert "$file_name.jpg" -resize 180x270^ -gravity center -extent 180x270 -quality 75 "$file_name.webp"
