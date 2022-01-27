date +'FORMAT'
### mm/dd/yyyy ###
date +'%m/%d/%Y'
## Time in 12 hr format ###
date +'%r'
## backup dir format ##
datetime=$(date +'%m/%d/%Y')

cd /home/pi/Sites/uxlift/scripts
git add -A
git commit -m "First update"
git pull
ruby feeds.rb
git add -A
git commit -m "Update feeds"
git push origin master
echo "Feeds updated ${datetime}"