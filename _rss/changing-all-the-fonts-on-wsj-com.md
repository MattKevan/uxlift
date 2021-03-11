---
title: "Changing all the fonts on WSJ.com"
date: 2021-03-11 13:47:36 +0000
dateadded: 2021-03-11 13:47:36 +0000
description: ""
link: "https://matthewstrom.com/writing/wsjfonts/"
category:
directory:
- _directory/matthew-ström.md
---
<p>“Change the fonts.” It’s a simple mission statement.</p>
<p>In reality, changing the fonts on <a href="https://wsj.com/" target="_blank" rel="noopener">wsj.com</a> has involved years of coordination and planning between nearly every team at the Wall Street Journal. In the past month, the last few coordinated steps were executed with an incredible amount of patience and skill, and no shortage of white knuckles.</p>
<h3 id="why-change-the-fonts%3F">Why change the fonts?</h3>
<p>The Wall Street Journal has a long history of quality typography. There’s a well of design wisdom behind the paper’s current look, as the evolution of news design is encoded in each page.</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/wsjfonts-0.png" alt="The paper in 1889 and 2017"><figcaption>The paper in 1889 and 2017</figcaption></figure>
<p>Each typeface currently used in print was designed specifically for the needs of the Journal’s format and printing process. Those typefaces are:</p>
<p><strong>Escrow</strong><br>
Designed by Cyrus Highsmith in 2002. Escrow epitomizes what the news looks like: loud and authoritative. As a Scotch, expresses the legacy of the Journal.</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/wsjfonts-1.png" alt="Escrow"><figcaption>Escrow</figcaption></figure>
<p><strong>Exchange</strong><br>
Designed by Tobias Frere-Jones in 2002. Exchange welds the stability of Ionic slab serifs together with notes from Bell Gothic’s practical legibility.</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/wsjfonts-2.png" alt="Exchange"><figcaption>Exchange</figcaption></figure>
<p><strong>Retina</strong><br>
Designed by Tobias Frere-Jones in 2000. Retina takes clarity to the extreme. It was designed around the print process, allowing space for ink to bleed into newsprint.</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/wsjfonts-3.png" alt="Retina"><figcaption>Retina</figcaption></figure>
<p>While these typefaces are central to the brand of the Journal, digital channels are a significantly more complicated environment. Legal and technical hurdles meant that, until recently, we lacked the ability to use these typefaces on the web.</p>
<p>It took the time, patience, passion, attention, hard work, and cooperation of many, many people throughout the organization, and as of December 11, 2017, most of wsj.com is rendered in Escrow, Exchange, and Retina.</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/wsjfonts-4.png" alt="Updated fonts on the homepage"><figcaption>Updated fonts on the homepage</figcaption></figure>
<p>Here’s some things I’ve learned in the process:</p>
<h3 id="the-hard-thing-about-easy-things">The hard thing about easy things</h3>
<p>The hardware and software that renders wsj.com is fascinating. My back-of-the-envelope calculation says that in the time you’ve been reading this essay, more than 10,000 people will have visited our site; each of them expects a nice-looking page to load quickly and work perfectly.</p>
<p>Depending on what page it serves, our web platform might rely on any number of separate applications, all of which are continuously deployed and deeply intertwined.</p>
<p>Editors and contributors are publishing and updating stories every minute, of every day, of every month of the year.</p>
<p>Our readers are in every corner of the globe, on every imaginable combination of internet connection and hardware quality.</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/wsjfonts-5.png" alt="Re-painting the plane (photo by Deniz Altindas)"><figcaption>Re-painting the plane (photo by Deniz Altindas)</figcaption></figure>
<p>To make a coordinated change between all the machines that make wsj.com go, the engineering team had to pull off an incredibly difficult feat. The best analogy I can come up with is that it is like putting a new coat of paint on a fully-loaded 747 in flight over the Pacific.</p>
<h3 id="the-spreadsheet">The spreadsheet</h3>
<p>The tentpole of communication during this process was a humble spreadsheet. No sophisticated style guide or design system, no handoff software like Zeplin or InVision (though, we use all those things at times). A humble spreadsheet.</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/wsjfonts-6.png" alt="The spreadsheet"><figcaption>The spreadsheet</figcaption></figure>
<p>I love spreadsheets. Reactions to a tweet espousing my love for spreadsheets tell me that other designers love spreadsheets, too.</p>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">my favorite design tool is a spreadsheet</p>&mdash; Matthew Ström (@ilikescience) <a href="https://twitter.com/ilikescience/status/933038098920935424?ref_src=twsrc%5Etfw">November 21, 2017</a></blockquote>
<script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<p>Spreadsheets work so well because they <strong>map</strong> information. In this case, the map showed where we were today, where we wanted to go, and provided exact instructions for how to get there.</p>
<p>Because Google Sheets can be collaborative, designers from across the organization can use them simultaneously with developers, sharing a simple, common language.</p>
<h2 id="getting-90%25-of-the-way-there">Getting 90% of the way there</h2>
<p>To get the new fonts into an article page exactly how I think it should look, I could spend all day in Sketch moving text boxes inside a big rectangle. I get to nudge pixels until everything is just so, save a PDF, and preserve that perfection for all eternity. Then just attach it to a JIRA ticket, and move onto the next one.</p>
<p>Websites don’t actually work like this.</p>
<p>There are many, many shortcomings in the design tools we use; not that designers don’t have enough control, but that they have <em>too much.</em> The web platform is messy, and often out of our control. Our tools trick us into thinking we have agency.</p>
<p>To avoid this trap, in working with the web design team, I encouraged everyone to just account for 90% of the changes. The last 10% was such an unknown, and so liable to change, that it would be best to simply let it wait.</p>
<p>90% is a totally arbitrary number. By choosing this goal we acknowledge that shipping anything is better than not shipping the perfect thing.</p>
<h2 id="acknowledgements">Acknowledgements</h2>
<p>To say this was a team effort would be to imply that there was such thing as a solo effort at The Wall Street Journal. Nothing here happens without the hard work of many people. Here’s some of the folks that made this particular project a success:</p>
<p>Head of Design <strong>Che Douglas</strong> held the vision, fought the hard fights, and made it possible for us to implement these typefaces.</p>
<p>Fellow Design and UX Directors <strong>Thomas Williams, Bonnie Jarvie, and Fernando Turch</strong> coordinated and collaborated with the design team to maintain the strength of the brand across all our products.</p>
<p>Product Designers <strong>Brian Feeney, Cory Etzkorn, Lee Yon, Adele Morgan</strong> and Studio Manager <strong>Jillian Breitfeller</strong> put many, many hours into the endless details of the changeover.</p>
<p>Program Manager <strong>Tania Feliz</strong> and Product Managers <strong>Marta Jakubanis, Delia Casa, Neesha Patel, Tyler Chance, and Sarah Pesin</strong> managed the chaos of such a complicated project, facilitating communication and ultimately guaranteeing our success.</p>
<p>The graphics team, <strong>Shazna Nessa, Dov Friedman, Elliot Bentley, Gabriel Gianordoli, Laura Holder, Tonia Cowan, Tyler Paige, Erik Brynildsen, and Tynan Debold,</strong> worked on our data visualization and graphics language to make the shift together with the product team.</p>
<p>Engineering leads <strong>Vishaal Patil, Morgan Vo, Ryan Yun, and Christian Sherland,</strong> along with the entire engineering team, worked with such supreme grace under pressure — I’m fortunate to work with such a collaborative and patient group.</p>
<p>Finally, many more people contributed to this feat, all of who I hope I have properly thanked in the many internal emails and slack messages that we’ve exchanged over the past few months.</p>
