---
title: "The slippery slope of in product messaging"
date: 2021-03-11 13:47:36 +0000
dateadded: 2021-03-11 13:47:36 +0000
description: ""
link: "https://matthewstrom.com/writing/wayfinding/"
category:
directory:
- _directory/matthew-ström.md
---
<p><strong>In-product education</strong> is a pattern that has emerged from the overlap between user experience design, marketing strategy, and product management. A brief definition: in-product education markets a product to someone who already uses that product. Think of the messages you get from a chatbot, the guided tours you see when you sign up for a new account, or the webinars you get invited to on becoming a pro user. That’s in-product education.</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/wayfinding-1.jpg" alt="Dropbox onboarding image by Useronboard.com"><figcaption>Dropbox onboarding image by <a href="https://www.useronboard.com/how-dropbox-onboards-new-users" target="_blank" rel="noopener">Useronboard.com</a></figcaption></figure>
<p>Recently, there’s been an explosion of products and services in the in-product education space. New tools promise to enhance your application’s user experience and drive business value. It’s true that in-product education can improve key metrics in the short term. But in the long run, investment in in-product education can limit user experience.</p>
<p>To see why, let’s compare applications to airports.</p>
<h2 id="airports-and-applications">Airports and Applications</h2>
<p>The user experience concerns of airports and applications are similar. Travelers pass through airports with a to-do list: locate their gate, eat lunch, use the restroom, retrieve their bags, go through customs, charge their phone. App users have a to-do list, too: they need to update their profile, read their email, create a new blog post, or file their taxes. But sometimes users can’t find the path to accomplishing their tasks. This is a problem for airports, too.</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/wayfinding-4.jpg" alt="Airport signage photo by George Kourounis on Unsplash"><figcaption>Airport signage photo by <a href="https://unsplash.com/photos/UxAXiKklRLg?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="noopener">George Kourounis on Unsplash</a></figcaption></figure>
<p>For an airport, lost passengers = lost revenue. If your passengers can’t find the food court, they won’t spend money. If they can’t find their gate, they’ll miss their flight. If they can’t find the trash bins, your janitorial fees are higher. Airports solve this problem by placing easy-to-read wayfinding signs in busy areas. For an airport, an investment in good wayfinding signs is a no-brainer.</p>
<p>This is the argument for in-product education: lost users = lost revenue. For example, gmail tells new users where to find their inbox, so they’ll know where to go to read their email. But we makers of software have an opportunity that airport makers don’t. We can move the food court.</p>
<h2 id="opportunity-cost">Opportunity cost</h2>
<p>Once the foundation is set, an airport’s developer can’t re-design the building. The cost of new signs is almost zero compared to the cost of moving terminals and amenities around. If travelers are getting lost, add more signs. It’s a no-brainer.</p>
<p>When an app’s users can’t find their way, the builders have more options. Incremental user experience changes are quick and cheap. But in-product education can also be cheap.</p>
<p>Products like AppCues and Intercom have changed the cost structure of in-product education. Developers don’t have to build in-app education themselves; they can install a library and hand control to the marketing team.</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/wayfinding-5.png" alt="An example of what you can build with AppCues, from the AppCues blog"><figcaption>An example of what you can build with AppCues, from the <a href="https://www.appcues.com/blog/how-amplitude-bypassed-engineering-bottlenecks-by-using-appcues" target="_blank" rel="noopener">AppCues blog</a></figcaption></figure>
<p>With plug-and-play libraries, in-product education is an attractive option. But there’s a hidden cost to using in-product education: the opportunity cost. And that’s where the slippery slope starts.</p>
<p>When teams use these tools to point their users in the right direction, they don’t learn why the users get lost in the first place. If the underlying problems are never resolved, the way-finding signs can become a permanent fixture in the landscape. This cycle causes the user experience to get more and more complex over time.</p>
<h2 id="norman-doors-and-epipens">Norman Doors and EpiPens</h2>
<p>Norman doors are an example of this complexity spiral. You might not have heard the term, but I’m sure that you have experienced a Norman door. This is a Norman door:</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/wayfinding-2.jpg" alt="An example of a Norman door, by Cameron Moll"><figcaption>An example of a Norman door, by <a href="https://twitter.com/cameronmoll/status/1016726780240060416" target="_blank" rel="noopener">Cameron Moll</a></figcaption></figure>
<p>In an <a href="https://99percentinvisible.org/article/norman-doors-dont-know-whether-push-pull-blame-design/" target="_blank" rel="noopener">article and video,</a> 99% Invisible describes Norman doors:</p>
<blockquote>
<p>A so-called “Norman Door” has design elements that give you the wrong usability signals to the point that special signage is needed to clarify how they work. Without signs, a user is left guessing about whether to push or pull, creating needless frustration.</p>
</blockquote>
<p>Norman doors don’t happen by accident. A designer has to realize that people are failing to use the door correctly, and add a sign. Despite the fact that good door designs are everywhere, Norman doors still persist. Don’t let your app be a Norman door.</p>
<hr>
<p>A more alarming example is the EpiPen. Unlike most insulin pens and regular syringes, the original EpiPen’s cap and needle were on opposite ends. In an <a href="https://medium.com/@joyclee/the-role-of-metaphor-in-design-cd6d8f04daab" target="_blank" rel="noopener">in-depth article,</a> Joyce Lee describes the crisis that result from this design: “[Between 1994 and 2007,] There were over 15,000 unintentional injections with the EpiPen reported.”</p>
<p>To fix the problem with accidental injections, Mylan (the maker of the EpiPen) added text to the needle end of the pen.</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/wayfinding-3.jpg" alt="The updated EpiPen design"><figcaption>The updated EpiPen design</figcaption></figure>
<p><a href="https://www.ncbi.nlm.nih.gov/pubmed/25850463" target="_blank" rel="noopener">According to one study</a>, the updated pen had a <strong>success rate of just 67%.</strong> ProPublica writes:</p>
<blockquote>
<p>That same study compared the EpiPen to another epinephrine auto-injector, the Auvi-Q … The Auvi-Q is designed with the cap and needle on the same end – and had a success rate of over 90 percent.<sup class="footnote-ref"><a href="#fn1" id="fnref1">1</a></sup></p>
</blockquote>
<p>Don’t let your app be an EpiPen.</p>
<h2 id="conclusion">Conclusion</h2>
<p>If you are considering using in-product education to guide your users, try instead to solve the underlying problem. If you are introducing a new product or feature, let users explore at their own pace. Make functionality obvious. Use what you learn to avoid usability issues in the future. Build robust feedback loops, and let users tell you when they run into problems. Don’t trade the chance to develop a core competency for a short-term budget win. In the words of Don Norman, namesake of the Norman door:</p>
<p>“Any time you see signs or labels added to a device, it is an indication of bad design.”</p>
<hr>
<section class="footnotes l--space-compact">
<div class="t--weight-bold l--pad-btm-s">Footnotes & References</div>
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p><a href="https://www.propublica.org/article/if-it-needs-a-sign-its-probably-bad-design" target="_blank" rel="noopener">https://www.propublica.org/article/if-it-needs-a-sign-its-probably-bad-design</a> <a href="#fnref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
