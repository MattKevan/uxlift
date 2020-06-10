# UX Lift

A collection of the best articles, resources, books and tools, covering every aspect of the UX and design process.

## Contributing content

Content contributions are always welcome. Please create a pull request

### Submitting an article

Create a new markdown file in the `_topics` folder with the following front-matter structure:

```
---
title:
category:
- [Category]
link: 
site: 
description: 
type: Article | Resource
date: 
image: ""
---
```

* *Title:* the article's title
* *Category:* Select from one or more categories in `_data/categories.yml`
* *Link:* The full URL of the article, including https://
* *Site:* The name of the site the article is from
* *Description:* A descriptive sentance that sums up the article content
* *Type:* Is the content an article or a resource?
* *Date:* Publication date in `YYYY-MM-DD HH:MM:SS +0100` format.
* *Image:* Filename of site favicon. Add upload images to `/assets/images` if not already present.

## How to run the site locally
This site is built with Jekyll, a Ruby-based static site generator. 

1. Make sure you've got the latest version of Ruby installed on your machine. Test with `ruby -v`.
2. Clone this repo
3. cd into the project folder
4. Install Jekyll and Bundler `gem install bundler jekyll`
5. Install the dependencies `bundle install`
6. Run the development server `bundle exec jekyll serve`