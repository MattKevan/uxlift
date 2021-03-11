---
title: "Return Users to the Same Place in the Product List When Returning from the Product Page (13% Don’t)"
date: 2020-11-17 10:25:00 +0100
dateadded: 2021-03-11 13:47:44 +0000
description: ""
link: "https://feeds.baymard.com/link/9825/14075357/return-same-place"
category:
directory:
- _directory/baymard-institute.md
---
<p><em>(Note: Unfortunately, e-mail and RSS don’t support advanced layouts and features. If the graphics in this article look strange, you may want to <a href="https://baymard.com/blog/return-same-place">read the article</a> in your web browser.)</em></p>


<p><a href="https://baymard.com/blog/return-same-place" title="Click to read the article in your browser (in case this graphic looks garbled)"><img src="https://cdn.baymard.com/data-broker/graphic-286038-6ebafcea6d525be2d6a2c900fc4913fe.jpg" style="width:600px;height:auto;" alt="" width="600" height="auto" /></a></p>



<p><em>“It keeps coming back up to the very start. I would prefer if it went back to where I last left it.”</em></p>



<p>When users are evaluating products, they often move <strong>back and forth</strong> between the product list, where they can see a few <a href="https://baymard.com/blog/product-listing-information">key elements</a> of product information, and multiple product details pages.</p>



<p>If users click into a product page having found the item interesting on a product list, then backtrack to the product list when they are done, they’ll be taken to one of <strong>two places</strong> in the product list:</p>



<ol>
  <li>On most sites users are returned to the <strong>same place</strong> in the product list as they were originally — that is, the position of the list item they clicked on.</li>
  <li>However, on 13% of sites in our <a href="https://baymard.com/ux-benchmark">desktop and mobile benchmarks</a> (amongst the world’s largest sites) users are returned to the <strong>top of the product list</strong> rather than to the place they were at before clicking into the product page.</li>
</ol>



<p>If users are returned to the top of the product list, they will <strong>have to scroll</strong> to find the product they just investigated and then restart scanning items from that point.</p>



<p>This extra step of refinding the correct place in the product list is observed to be a <strong>direct cause of site abandonments</strong> during Baymard’s <a href="https://baymard.com/research">large-scale usability testing</a>.</p>



<p>This article outlines</p>


<ul>
  <li>why the issue causes problems for users,</li>
  <li>why problems are more severe on mobile devices,</li>
  <li>and describes how to make it easy for users to refind the last product viewed in product lists.</li>
</ul>



<h2 id="why-the-issue-causes-problems-for-users">Why the Issue Causes Problems for Users</h2>



<div class="anecdote-graphic-dn32ja anecdote-module-3ba83n v-mood-negative v-embed-code"><div class="inner">
<div class="anecdote-intrinsic-embed-n42ha1"><div class="inner" style="padding-bottom: 74.84375%;"><iframe src="https://player.vimeo.com/video/345914439?title=0&amp;byline=0&amp;portrait=0" width="640" height="479" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe></div></div>
<div class="anecdote-caption-ajkd3b"><div class="inner anecdote-wysicontent-ndj4ab">
<p><em>“When I backtracked I got kicked way back up in the scroll…now I’m just scrolling fast to get back down to where I was.”</em> On returning to the product list from a product page, this user on <a href="https://baymard.com/ux-benchmark/case-studies/staples">Staples</a> was returned to the top of the list rather than to the list item she had just tapped. Users waste a lot of time refinding items in product lists if they are not returned to the same place in the list.</p>
</div></div>
</div></div>



<p><a href="https://baymard.com/blog/return-same-place" title="Click to read the article in your browser (in case this graphic looks garbled)"><img src="https://cdn.baymard.com/data-broker/graphic-286040-8e7b37309e0392925e880df2fab3d708.jpg" style="width:600px;height:auto;" alt="" width="600" height="auto" /></a></p>



<p>When users are taken to the top of the product list, rather than to where they were before visiting the product page, they <strong>become disoriented</strong> and must refind where they were in the product list.</p>



<p>Not only is this tedious — users must redo all the work they had previously done by scrolling the product list again — but it can also be challenging to remember exactly <strong>where they were</strong> before visiting the product page (e.g., if the product list is a selection of blue dresses with similar but not identical styling, or similar-looking office chairs, as seen in the video above).</p>



<p>Now, imagine if someone was in a bricks-and-mortar bookstore and she found a book of interest in the middle of a very long bookshelf. If she was “returned” to one end of the shelf when she replaced the book, and had to walk back to the <strong>original spot</strong> again to explore similar books, the shop would lose a customer.</p>



<p>Furthermore, users are quite likely to <strong>lose patience</strong> if they have to look at many separate products and keep getting placed back at the top of the product list.</p>



<p>For example, if someone wanted to learn about 10 products in detail, they’d have to <strong>refind 9 items</strong> scattered throughout the list.</p>



<div class="anecdote-pull-quote-sba2ha anecdote-module-3ba83n v-size-medium v-float-right v-float-from-laptop"><div class="inner">
<p>“When I backtracked I got kicked way back up in the scroll…now I’m just scrolling fast to get back down to where I was.</p>
</div></div>



<p>In this situation, there’s a very good chance that they’d just <strong>give up</strong> due to the time needed to scroll to find each one.</p>



<p>Indeed, given that 87% of sites in our <a href="https://baymard.com/ux-benchmark">benchmark</a> return users to the same place in the product list, most users <strong>won’t expect</strong> to be taken to the top of the list.</p>



<p>(This issue is one example of not <strong>adhering to common practice</strong> regarding <a href="https://baymard.com/blog/back-button-expectations">“Back” button behavior</a>, where users have a very specific mental model of how an interface should behave.)</p>



<p>The difficulty in refinding the product can depend also on the method <strong>used for loading products</strong>.</p>



<p>There are 3 <a href="https://www.smashingmagazine.com/2016/03/pagination-infinite-scrolling-load-more-buttons/">loading schemas</a> on e-commerce sites:</p>



<ol>
  <li>“Pagination”</li>
  <li>“Load More”</li>
  <li>“Endless Scrolling”</li>
</ol>



<p>With <strong>“Endless Scrolling”</strong>, the issue of refinding items in a product list could be really severe, given that users could load a large number of items quite quickly if they simply scroll quickly through the list before visiting a product page.</p>



<p>With <strong>“Pagination”</strong>, on the other hand, the number of items loaded by default could be relatively small and users wouldn’t need to scroll excessively to refind the position they were in.</p>



<p>Similarly, with <strong>“Load More”,</strong> the difficulty in refinding the right spot in the list would depend on the number of products loaded at once.</p>



<p>However, whatever the loading schema is, if the process of refinding the correct place in the product list is too <strong>time-consuming and troublesome</strong>, users may well give up looking for a suitable item.</p>


<h2 id="the-problem-is-worse-on-mobile">The Problem Is Worse on Mobile</h2>



<p><a href="https://baymard.com/blog/return-same-place" title="Click to read the article in your browser (in case this graphic looks garbled)"><img src="https://cdn.baymard.com/data-broker/graphic-286041-7356bc07534d7cbbc1ed2c0a02fab504.jpg" style="width:600px;height:auto;" alt="" width="600" height="auto" /></a></p>



<p>Users of mobile sites will find it <strong>even harder</strong> than desktop users to refind the last product viewed when returned to the top of the product list after visiting a product page.</p>



<p>One reason is that <strong>desktop users</strong> can avoid losing their place in the product list by opening product pages of interest in new browser tabs — a behavior observed during our desktop testing, but only by a small subgroup of users. Then, they can return to the product list by simply returning to the relevant browser tab and resume scrolling from where they left off.</p>



<p><strong>On mobile,</strong> opening multiple tabs is a more cumbersome process that none of our most recent mobile test participants attempted.</p>



<p>Another reason the issue is <strong>more severe on mobile</strong> is that scrolling is often slower and more cumbersome — users were frequently observed inadvertently selecting text or tapping links during mobile testing, which wasn’t an issue when scrolling during desktop testing.</p>



<div class="anecdote-pull-quote-sba2ha anecdote-module-3ba83n v-size-medium v-float-right v-float-from-laptop"><div class="inner">
<p>“When you use the “Back” button, it takes you right back to the beginning. Rather than where you left off”</p>
</div></div>



<p>Additionally, a small subgroup of desktop users have been observed to use <strong>keyboard commands</strong> (e.g., using “option” + the down arrow or “Page Down” on Windows) to more quickly navigate to where they’d like to go. A few tech-savvy desktop users may even use the “Find” feature (e.g., <code>CMD+F</code>) to more quickly jump to where they were in the product list — but this was a behavior not observed during mobile testing (e.g., using the <em>“Find on Page”</em> feature in iOS).</p>



<p>Furthermore, on desktop, more items are visible in each viewport. On mobile, <strong>fewer items</strong> can be seen at once.</p>



<p>For example, a product list with 40 items will take up around 20 viewports on mobile devices, but only between 10 and 13 on a typical desktop monitor. As a result, desktop users will generally reach the previous spot in the product list <strong>more quickly than on mobile</strong>.</p>



<p>A final reason for why the issue is worse on mobile is that <strong>page load times</strong> can be much longer than on desktop.</p>



<p>During testing on mobile devices, users frequently <strong>had to wait</strong> for considerable amounts of time for pages to load.</p>



<p>Excessive page load times, in addition to having to refind the product last tapped on the product list, can make it <strong>quite an ordeal</strong> for mobile users to move back-and-forth between product lists and product pages.</p>



<h2 id="ensure-users-can-easily-refind-their-place-in-a-product-list">Ensure Users Can Easily Refind Their Place In a Product List</h2>



<div class="anecdote-graphic-dn32ja anecdote-module-3ba83n v-mood-positive v-embed-code"><div class="inner">
<div class="anecdote-intrinsic-embed-n42ha1"><div class="inner" style="padding-bottom: 69.53125%;"><iframe src="https://player.vimeo.com/video/345467069?title=0&amp;byline=0&amp;portrait=0" width="640" height="445" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe></div></div>
<div class="anecdote-caption-ajkd3b"><div class="inner anecdote-wysicontent-ndj4ab">
<p><em>“I like how when I went back it brought me back to where I was, not to the top of the page.”</em> This user was pleased to be returned to the right place in the <a href="https://baymard.com/ux-benchmark/case-studies/adidas">Adidas</a> product list, and was able to continue scrolling from that point. Note the time it takes for pages to load, and the scrolling and other interaction issues the user had, which helps illustrate how mobile users must contend with more interaction issues compared to desktop users, making it even more important to minimize the amount of scrolling they have to do when browsing products.</p>
</div></div>
</div></div>



<p>When sites don’t return users to the correct place in the product list, therefore, product finding becomes less efficient, and users’ <strong>time is wasted</strong> refinding the item they last viewed.</p>



<p>Also, users can’t immediately <strong>resume scrolling</strong> where they had previously left off, and start viewing products that they had not previously seen.</p>



<p>Furthermore, users will be <strong>discouraged from visiting product pages</strong> in the knowledge that, if the product is not quite suitable, going back to the product page will troublesome and looking for alternatives will take time.</p>



<p>Given the significant drawbacks, it’s surprising that 13% of sites in our <a href="https://baymard.com/ux-benchmark">desktop and mobile benchmarks</a> return users to the <strong>top of the product list.</strong></p>



<div class="anecdote-graphic-dn32ja anecdote-module-3ba83n v-embed-code"><div class="inner"><div class="anecdote-intrinsic-embed-n42ha1"><div class="inner" style="padding-bottom: 76.40625%;"><iframe src="https://player.vimeo.com/video/343212915" width="640" height="489" frameborder="0" allow="fullscreen" allowfullscreen=""></iframe></div></div></div></div>



<p><a href="https://baymard.com/blog/return-same-place" title="Click to read the article in your browser (in case this graphic looks garbled)"><img src="https://cdn.baymard.com/data-broker/graphic-286044-f196b926259fc005066e5c9dba98edc4.jpg" style="width:600px;height:auto;" alt="" width="600" height="auto" /></a></p>



<p>When returning users to the same place where they were in the product list, there’s a <strong>technical implementation detail</strong> that’s critical to get right when using <a href="https://www.smashingmagazine.com/2016/03/pagination-infinite-scrolling-load-more-buttons/">“Load More”</a>: “Back” button support through ‘history.pushState’.</p>



<p>The HTML5 History API allows sites to <strong>honor users’ expectations</strong> of where they’ll end up when going back from a product page to a product list.</p>



<p>More specifically, the history.pushState() function allows a site to invoke a URL change without a page reload, meaning the site can align the browser “Back” button behavior to <strong>match user expectations.</strong> The URL needs to be altered on each “Load More” click so the correct product list content can be loaded when a user moves backwards.</p>



<div class="anecdote-graphic-dn32ja anecdote-module-3ba83n v-mood-positive v-embed-code"><div class="inner">
<div class="anecdote-intrinsic-embed-n42ha1"><div class="inner" style="padding-bottom: 60.46875000000001%;"><iframe src="https://player.vimeo.com/video/345911012?title=0&amp;byline=0&amp;portrait=0" width="640" height="387" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe></div></div>
<div class="anecdote-caption-ajkd3b"><div class="inner anecdote-wysicontent-ndj4ab">
<p><a href="https://baymard.com/ux-benchmark/case-studies/neiman-marcus">Neiman Marcus</a> brings users back to where they were in the product list after they return from product pages.</p>
</div></div>
</div></div>



<p>Returning users to the same place in the product list on returning from the product details page, therefore, <strong>speeds up product finding</strong>, and is particularly helpful to mobile users.</p>



<p>Finally, it’s one of the recommended ways to <a href="https://baymard.com/blog/back-button-expectations">support “Back” button  use</a> and has widespread support across our <a href="https://baymard.com/ux-benchmark">benchmark sites</a>, making it a <strong>“web convention”</strong> users have come to expect — breaking this expectation makes a site seem especially “clunky” or hard to navigate for users.</p>



<p><em>This article presents the research findings from just 1 of the 850+ UX guidelines in Baymard Premium – <a href="https://baymard.com/research">get full access</a> to learn how to create a “State of the Art” user experience for product lists, filtering and sorting.</em></p>




<p>
    <a href="https://www.linkedin.com/company/baymard-institute/">Comment on LinkedIn</a> or
  <a href="https://twitter.com/intent/tweet?text=Return+Users+to+the+Same+Place+in+the+Product+List+When+Returning+from+the+Product+Page+%2813%25+Don%E2%80%99t%29&amp;url=https://baymard.com/blog/return-same-place&amp;via=Baymard&amp;related=Baymard,jamieappleseed,KiehnHolst">Tweet this article</a>
</p>

  <h3>Related articles</h3>
  <ul>
      <li><a href="https://baymard.com/blog/have-filters-for-list-item-info">Product Listing UX: Have Filters for All Displayed List Item Info (38% Don’t)</a></li>
      <li><a href="https://baymard.com/blog/macys-filtering-experience">7 Filtering Implementations That Make Macy’s Best-in-Class</a></li>
      <li><a href="https://baymard.com/blog/allow-applying-of-multiple-filter-values">E-Commerce UX: Allow Users to Combine Multiple Filtering Values of the Same Type — an ‘OR’ logic (32% of Sites Don’t)</a></li>
      <li><a href="https://baymard.com/blog/explain-industry-specific-filters">Product List UX: Explain Industry-Specific Filters (91% Don’t)</a></li>
      <li><a href="https://baymard.com/blog/promoting-product-filters">Consider ‘Promoting’ Important Product Filters (80% Don’t)</a></li>
      <li><a href="https://baymard.com/blog/how-to-design-applied-filters">Display “Applied Filters” in an Overview (32% Don’t)</a></li>
  </ul><img src="https://feeds.baymard.com/link/9825/14075357.gif" height="1" width="1"/>
