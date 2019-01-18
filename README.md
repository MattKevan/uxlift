# UX Lift

Collecting best practice and inspiration on UX, visual design, product management, web development and more.

## How to run the site locally

This site is built with Jekyll, a Ruby-based static site generator. 

1. Make sure you've got the latest version of Ruby installed on your machine. Test with `ruby -v`.
2. Clone this repo
3. cd into the project folder
4. Install Jekyll and Bundler `gem install bundler jekyll`
5. Install the dependencies `bundle install`
6. Run the development server `bundle exec jekyll serve`

## Contributing

### Concepts

### Books

### Tools

Tools are new and innovative software and services useful to design, UX and product development.

To add a tool, create a new file following the template below and save it in the `_tools` folder.

```
---
title: Name of tool
intro: One sentence description, doesn't have to be the official marketing copy.
linkurl: // Full URL to product or service
tags: // Add up to three, use existing ones if possible
- Tag
- Tag
- Tag
logo: "/assets/[filename]" // Add your logo to the assets folder, put the filename here.
---
```