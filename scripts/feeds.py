import feedparser
import yaml

with open('../_site/exporters/feeds.yml', 'r') as file:
	data = yaml.safe_load(file)
	allItems = []
	allFeeds = []
	for feeditem in data:
		feedName = feeditem['name']
		feedUrl = feeditem['feed']
		print (feedName)
		print (feedUrl)

		d = feedparser.parse(feedUrl)
		allItems.append(d.entries)
		

for items in allItems:
	for item in items:
		print ('New article:', item.title)
		print (item.link)



