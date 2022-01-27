cd /home/pi/Sites/uxlift
git add -A
git commit -m "First update"
git pull
jekyll build
cd scripts
ruby feeds.rb
git add -A
git commit -m "Update feeds"
git push origin master
cd ../
bundle exec jekyll build
echo "Feeds updated"