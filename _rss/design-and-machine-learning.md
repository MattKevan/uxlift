---
title: "Design and machine learning"
date: 2021-03-11 13:47:36 +0000
dateadded: 2021-03-11 13:47:36 +0000
description: ""
link: "https://matthewstrom.com/writing/design-and-ml/"
category:
directory:
- _directory/matthew-ström.md
---
<figure data-type="image"><img src="https://matthewstrom.com/images/design-ml-1.jpg" alt=""></figure>
<p>Machine learning is a powerful tool that drives everything from curated content recommendations to optimized user interfaces. With Apple, Google, Facebook, and Amazon leading the charge, machine learning is becoming deeply integrated into everyday product experiences. This means that digital product designers need to get familiar with machine learning. Wielding machine learning might be a niche design skill today, but soon it will be hard to design without it. Or that’s how the argument usually goes.</p>
<p>Lots of articles do a good job of explaining what machine learning is. Many warn that designers who don’t start learning about ML will be left behind. But I haven’t seen one that has explored what design and machine learning have to offer each other.</p>
<p>Design and machine learning function like a flywheel: when connected, each provides value to the other. Together, they open up new product experiences and business value.</p>
<h2 id="what-can-design-do-for-machine-learning%3F">What can design do for machine learning?</h2>
<h3 id="design-helps-machine-learning-gather-better-data.">Design helps machine learning gather better data.</h3>
<p>Machine learning is a hungry beast. To deliver the best results, learning algorithms need vast amounts of detailed data, clean of any confounding factors or built-in biases.</p>
<p>To provide song recommendations, for example, Spotify’s algorithms need data on how users choose what to listen to. If the app’s browsing interface is difficult to navigate, users will be more likely to listen to the first few songs they see, regardless of their personal taste. So-called “noisy” signals result in less accurate recommendations.</p>
<p>Designers can help create user experiences that eliminate noise in data, leading to more accurate and efficient ML-powered applications.</p>
<h3 id="design-helps-set-expectations-and-establish-trust-with-users.">Design helps set expectations and establish trust with users.</h3>
<p>Twitter uses many, many machine learning algorithms. If you switch to the “top tweets” feed, an algorithm decides what order tweets appear. Algorithms decide when to show you tweets that your friends like, retweet, or reply to. A different set of algorithms chooses trending topics to display in the sidebar.</p>
<p>Often, Twitter users get confused as to why they’re seeing what they’re seeing. Social media marketers write <a href="https://sproutsocial.com/insights/twitter-algorithm/" target="_blank" rel="noopener">long posts</a> on how to take advantage of Twitter’s algorithms. Confusion and ambiguity lead to frustration and distrust.</p>
<p>Designers — specifically, UX writers, the unsung heroes of usability — can add clarity to ML-powered interfaces. When you see a tweet by someone you don’t follow in your timeline, Twitter’s designers have added a bit of text to explain why it’s there: “Matthew liked,” “Raquel replied,” “Freyja retweeted,” and so on. The trends in the sidebar are framed with the heading “Trends for you,” indicating that they are curated.</p>
<p>These design details build trust and understanding among users. Trust is a vital component in how ML achieves its goals. Google’s People + AI initiative has provided detailed guidance for building trust in ML-powered applications:</p>
<blockquote>
<p>Because AI-driven systems are based on probability and uncertainty, the right level of explanation is key to helping users understand how the system works. Once users have clear mental models of the system’s capabilities and limits, they can understand how and when to trust it to help accomplish their goals. In short, explainability and trust are inherently linked.<br>
- <a href="https://pair.withgoogle.com/chapter/explainability-trust/" target="_blank" rel="noopener">Google’s People + AI Guidebook</a></p>
</blockquote>
<h2 id="what-can-machine-learning-do-for-design%3F">What can machine learning do for design?</h2>
<h3 id="machine-learning-answers-questions-about-user-behavior.">Machine learning answers questions about user behavior.</h3>
<p>Designers often have to make assumptions about users when building and iterating on interfaces. The trickiest assumptions usually come in the form of “if a user takes this action, some other behavior will result.” For instance: If a user adds a coupon to their order, they’ll be more likely to complete their checkout. These assumptions have a huge impact on business value, but often come down to tricky statistical analysis and — often, sadly — guesswork.</p>
<p>Machine learning can help simplify this process by making complex models of user behavior that are easy to experiment with. One variation on this technique is called a Bayesian network. Bayesian networks can answer questions like “what will happen if a user takes (or doesn’t take) an action?” Using machine learning like this helps designers make more confident decisions with fewer assumptions.</p>
<h3 id="machine-learning-customizes-interfaces-to-users-needs.">Machine learning customizes interfaces to users needs.</h3>
<p>What if you could design a unique interface for every single user that opened your app? How would you tailor the experience to suit the use case of that person at that exact moment?</p>
<p>It’s strange to think of a designer manually tweaking the locations of buttons and menus for every user to make an app easier to use. But that’s one of the ways Facebook uses ML: in 2018, it began composing the nav bar in its app based on users’ most commonly used features.</p>
<h2 id="the-future-of-ml-and-design">The future of ML and design</h2>
<p>The flywheel of design and machine learning is just getting started. Many designers are still in the process of learning what machine learning is, a task made more difficult by the breakneck speed of new developments in the field. Once machine learning becomes part of the core curriculum for design, the pace of innovation will accelerate.</p>
<p>Imagine Sketch, Figma, or Adobe XD predicting the usability of a mockup based on real user data. Tools like FullStory already capture what users see and do at every step of their session; an ML algorithm could be trained to mimic your users, even when given new screens or workflows.</p>
<p>Alternatively, consider a tool that could generate your app’s UI instantly based on a few high-level parameters. A designer could tweak a few knobs — shorter session length, higher conversion rate on a CTA, etc. — and an algorithm could make adjustments it thinks will accomplish the desired output. This kind of tool could make UI changes on the fly, in production, in response to real user behavior.</p>
<p>This kind of blue-sky thinking is part of the product innovation cycle. Designers are uniquely qualified to push the boundaries of what ML can do, and how algorithms can deliver real value to users as well as businesses.</p>
<h2 id="resources-for-designers">Resources for designers</h2>
<p>If you’d like to learn more about machine learning in general, UX Planet has a<a href="https://uxplanet.org/designer-friendly-resources-to-study-ai-and-machine-learning-1-6106e257faeb" target="_blank" rel="noopener"> great list of resources</a>, including one of my favorite introductions,<a href="http://www.r2d3.us/visual-intro-to-machine-learning-part-1/" target="_blank" rel="noopener"> A Visual Intro to Machine Learning</a>.</p>
<p>For guidelines on how to design with machine learning, start with Google’s<a href="https://pair.withgoogle.com/" target="_blank" rel="noopener"> People + AI Guidebook</a>. It contains tons of detailed guidance on how to utilize the potential of ML &amp; AI in a user-centric way.</p>
<p>If you’re in the Bay Area, there’s even an<a href="https://www.meetup.com/MLUXSF/" target="_blank" rel="noopener"> ML + UX meetup</a>! I recently attended a one-off New York version of this meetup, which is what inspired this post.</p>
