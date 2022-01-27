cd /home/pi/Sites/uxlift/scripts
git add -A
git commit -m "First update"
git pull
ruby feeds.rb
git add -A
git commit -m "Update feeds"
git push origin master
echo "Feeds updated"