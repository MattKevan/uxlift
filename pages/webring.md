---
layout: post-default
title: Webring
description: Explore a collection of hand-crafted UX and design portfolios, blogs and personal sites.
permalink: /webring/
---

#### What are webrings?

Popular in the early days of the Web, webrings are a way to link together similar sites and share traffic. This webring is an attempt to foster a DIY aesthetic and inspire designers to create their own corner of the internet. 

The webring welcomes well-designed, hand-crafted personal homepages, portfolios and blogs.

#### Why join?

As well being linked to from the webring, we'll promote a different site in each edition of our [email newsletter](htpps://www.uxlift.substack.com). Plus, if you have a RSS feed, your content will automatically appear in the [UX News](/news) section and have priority consideration for being featured in the newsletter. 

#### How to join?

Anyone is welcome to apply, but sites that meet the following criteria have a better chance of being succesful:

* It's a personal website, portfolio or blog, ideally one you've made yourself.
* It's well crafted and designed with high-qualty content. 
* It has a UX or design focus.

To apply, fill out the form and add the webring icon to your site using the code below. We'll let you know if your application has been successful. 

<form name="webring-application" method="POST" data-netlify="true" class="mb-5">
  <div class="form-group">
    <label>Your name</label> 
    <input type="text" class="form-control" name="name" required />   
   </div>
<div class="form-group">
    <label>Your email address</label> 
    <input type="email" class="form-control" name="email" required />
</div>
<div class="form-group">
    <label>Website URL</label> 
    <input type="url" class="form-control" name="url" placeholder="https://" required />  
</div>
<div class="form-group">
    <label>RSS feed URL</label> 
    <input type="url" class="form-control" name="feed" placeholder="https://" />  
</div>
<div class="form-group">
    <label>Location of webring icon</label> 
  <textarea name="location" class="form-control" placeholder="For example, 'Bottom left corner of site footer'" required></textarea>
</div>
<div class="form-group">
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="">
  <label class="form-check-label" for="defaultCheck1">
    Subscribe to the newsletter
  </label>
</div></div>
    <button type="submit" class="btn btn-primary">Submit application</button>
</form>

#### Webring code

```<a href="https://www.uxlift.org/webring" target="_blank" class="webring"><img src="https://www.uxlift.org/assets/webring-icon.svg" /></a>```

If your site has a dark theme, use ```webring-icon-white.svg```.

<hr>