# from the standard library :
require 'rss/1.0'
require 'rss/2.0'
require 'open-uri'
require 'time'

# gem install to_slug if you don't have it already. 
require 'to_slug'
site = "_organisations/smashing-magazine.md"
source = "https://www.smashingmagazine.com/feed/"                                 # put your feed url here
content = ""                                # this is just initializing the string
open(source) do |s| content = s.read end 
rss = RSS::Parser.parse(content, false)

rss.items.each do |item|
	filename = "#{item.title.to_slug.sub(/-\Z/,"")}.md"
	file = File.new(filename, "w+")
	file.puts "---"
	file.puts "title: \"#{item.title}\""
	file.puts "date: #{item.date.strftime("%Y-%m-%d")}"
	file.puts "description: \"#{item.description}\""
	file.puts "link: \"#{item.link}\""
	file.puts "category:"
	item.categories.each do |cat| 
		cat = cat.to_s
		cat1=cat.sub("<category>","")
		cat2=cat1.sub("</category>","")
	    file.puts "- #{cat2.capitalize}"

	end
	file.puts "organisation: #{site}"
	file.puts "---"
	file.close
end