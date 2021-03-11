---
title: "Designing with code"
date: 2018-08-31 00:00:00 +0000
dateadded: 2021-03-11 15:43:17 +0000
description: ""
link: "https://matthewstrom.com/writing/designing-with-code/"
category:
directory:
- _directory/matthew-ström.md
---
<figure data-type="image"><img src="https://matthewstrom.com/images/code-0.jpg" alt=""></figure>
<p>We’re in the middle of a design tool renaissance. In the 8 years since Sketch 1.0 was released, there’s been a wave of competition among traditional design tools. And as the number of tools available to designers grows exponentially, ideas that were once considered fringe are finding a broader audience.</p>
<p>One of these ideas will significantly change the way digital products are designed: integrating design and code at a deep level. Figma can update a React code base in real time; InVision, Abstract, and Zeplin have done away with design-developer handoff documents; Framer’s new Framer X can render interactive React components directly into its workspace. These examples are just a hint of what’s to come.</p>
<p>For designers like me who enjoy coding, this revolution was inevitable. My own work is shaped by my knowledge of CSS, HTML, and Javascript. But for me — and many other designers — design usually comes before code. Rarely (if ever) does it happen the other way around.</p>
<p>Recently I’ve had a few opportunities to use code to create design. In two of my bigger projects at The Wall Street Journal, writing code has led to new ideas. Problems that typically plague early designs — e.g. “how does this look with real content?” — are easy to solve. By exploring visual ideas directly in code, I’ve started to see the amazing potential of code as a design tool.</p>
<h1 id="case-1%3A-wsj.-magazine">Case 1: WSJ. Magazine</h1>
<p>I started at The Wall Street Journal in August of 2017. One of the first projects I began was the re-design of the WSJ. Magazine homepage.</p>
<p>WSJ. Magazine is a premium fashion, art, and lifestyle magazine. The content is first-rate: regular features on film and tv celebrities, the biggest names in fashion and art, and trend-setting food and culture. Until this re-design, the magazine had no presence of its own online.</p>
<h2 id="designing%2C-the-old-way">Designing, the old way</h2>
<p>As my initial ideas took shape in Sketch, I was using a mouse pointer to draw rectangles full of text and images. Pixel perfection was easy and rewarding, and I had the luxury of millions of tiny adjustments. I fussed over whether 10 pixels is too much space for a gutter, or if 14-point type is too small for a byline. I did designer stuff.</p>
<p>I filled the whole page with these small, rectangular pieces. Everything was aligned to a grid. I was subconsciously selecting photography and headlines that suited my very space-conscious tendencies, and ignoring the content that upset the balance.</p>
<p>This way of designing should be familiar to anyone who’s used Sketch, Adobe Illustrator, Photoshop, or even newer products like Inivision Studio or Framer. It’s the status quo of product design.</p>
<h2 id="breaking-the-grid">Breaking the grid</h2>
<p>One weekend, I decided it’d be fun to prototype my design ideas in code (and it was!). The symbol system I’d set up in Sketch was starting to slow under the weight of all the content, and I figured a browser might perform better. Also, I’d been wanting to try out the new css grid specifications, and hone my growing experience with flexbox.</p>
<p>After a few hours, things were <em>almost</em> perfect. I put my computer down, intending to come back later to put the finishing touches on the prototype.</p>
<p>The next time I opened the project, I was struck by how much better the page looked in its unfinished state. I was seeing it through a traditional design lens: because it didn’t match the Sketch file, it was incomplete.</p>
<p>The areas for the stories didn’t adhere to a strict grid. There was asymmetrical and unusual space around the elements, and a ragged edge was drawing my focus. But the more time I spent with the code, the more ways I found to experiment. Eventually, rather than fiddling with the exact pixels, I was taking screen shots from my browser and pasting them back into Sketch.</p>
<h2 id="happy-accidents">Happy accidents</h2>
<p>In my inexperience, I neglected to write media queries to indicate how the page should adapt to small screens. As a result, stories overflowed the edge of the browser, requiring a user to swipe across the page to see more content.</p>
<p>Bob Ross was right: we don’t make mistakes, we have happy accidents.</p>
<p>This “accident” felt exciting and new. In Sketch, I work with static screens full of an infinite canvas, so overflow just doesn’t happen — everything is always on the virtual table. However, swiping left and right is a comfortable navigation pattern on small touchscreen devices (thanks Tinder), especially if content is obviously falling out of frame. Without seeing this happen in a browser on my phone, I might never have thought to try it.</p>
<h1 id="case-2%3A-a-new-homepage-for-wsj.com">Case 2: A new homepage for WSJ.com</h1>
<p>The homepage of WSJ.com is one of the most important parts of the Wall Street Journal’s web product. It’s hard to overstate this: in an average month, the WSJ.com homepage is seen tens of millions of times by millions of people. Over the summer of 2018, I began to completely re-build the design language of the WSJ.com homepage. Naturally, I felt overwhelmed. Where should I start?</p>
<p>In taking stock of the work to be done, I realized that one component — the story card that links to each article — accounts for 80% of the page. With that in mind, I set out to create a simple, flexible system that could unify the 100+ stories on the homepage.</p>
<h2 id="background%3A-story-cards">Background: Story cards</h2>
<p>The current WSJ.com homepage was built in 2014. During that project, the engineering team decided to take a risk on a new piece of technology from Facebook called React. Building with React meant having extremely configurable components; stories could be displayed in a huge variety of ways, depending on a host of variables.</p>
<p>As new card configurations were designed and developed, they were named and categorized; “LS-LEAD” was followed by “LS-LEAD-NO-IMAGE” and “LS-LEAD-ALT,” and layouts like “SPOTLIGHT-SEVEN” were built with these components.</p>
<p>As more layers were built up on top of the story cards, the low-level concepts — headline size, media position, timestamps and related stories — were abstracted away in favor of coarser, bigger-picture changes. Editors could make major changes to the layout of the page by updating 1 value instead of 100.</p>
<h2 id="taking-it-down-to-the-studs">Taking it down to the studs</h2>
<p>Right away, I again found Sketch to be lacking. In preparing for user testing, I spent more time copying and pasting content than actually designing. Ideally, I wanted to provide a list of stories to my designs, and have the page rendered with the content of those stories, with as little tweaking as possible.</p>
<p>So again, one weekend, I rolled up my sleeves and built (from scratch!) a terribly inefficient application that would render a version of the WSJ homepage in HTML and CSS.</p>
<p>In the process, I exposed the low-level configurations of individual story cards. Tweaking them was <strong>fun.</strong> It was <strong>unpredictable.</strong> It was everything that pixel perfection in Sketch was not.</p>
<p>I could send a story into a component with some options like this:</p>
<pre class="language-json"><code class="language-json"><span class="token punctuation">{</span><br>  <span class="token property">"headline"</span><span class="token operator">:</span> <span class="token punctuation">{</span><br>    <span class="token property">"size"</span><span class="token operator">:</span> <span class="token string">"l"</span><br>  <span class="token punctuation">}</span><span class="token punctuation">,</span><br>  <span class="token property">"byline"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span><br>  <span class="token property">"media"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span><br>  <span class="token property">"bullets"</span><span class="token operator">:</span> <span class="token boolean">false</span><br><span class="token punctuation">}</span></code></pre>
<p>But if I changed those parameters slightly, I could render a completely different variation in less than 60 seconds.</p>
<h2 id="design-by-multiplication">Design by multiplication</h2>
<p>In my simple prototype, there are <strong>26 configurable features</strong> for each article card. That means, for just one story, there are <strong>well over 1,000,000 possible cards</strong> (truly, closer to 60 million)! Managing this system in Sketch would be an unmaintainable nightmare.</p>
<p>But in code, this component is roughly 300 lines between CSS and HTML. A tiny bit of NodeJS fills in the cards with live data from the WSJ.com home page. I can make small changes to parts of the component and see how the system reacts in a matter of seconds. This multiplicative process means that small changes have a huge output, making my designs much more comprehensive in the process.<sup class="footnote-ref"><a href="#fn1" id="fnref1">1</a></sup></p>
<h1 id="conclusion">Conclusion</h1>
<p>As new design software begins to emerge, code will be a central part of the tools available to designers. But don’t wait for a Framer X invite — or whatever new beta program comes next. You can get started using code as a design tool now. Here’s some recommendations for ways to start exploring:</p>
<ul>
<li>Wes Bos has some <a href="https://wesbos.com/courses/" target="_blank" rel="noopener">fantastic courses</a> on CSS and Javascript, including an intro to React and Node. His classes revolve around fun projects, and his style of teaching is highly entertaining.</li>
<li>Daniel Schiffman has a <a href="https://shiffman.net/videos/" target="_blank" rel="noopener">ton of great videos</a> on creative coding. The way he demonstrates his process — thinking through problems and working out solutions — and revels in what he makes is earnest and delightful.</li>
<li><a href="https://www.codecademy.com/learn/paths/web-development" target="_blank" rel="noopener">Codecademy</a> has very thorough courses and interactive lessons. I’ve occasionally gone back and done their intro series on Javascript just to brush up.</li>
</ul>
<p>There’s also a vibrant community of engineers and designers on twitter who have inspired me to use code as a design tool. If you find yourself coding to design, feel free to say hi; I’m <a href="https://twitter.com/ilikescience" target="_blank" rel="noopener">@ilikescience</a>.</p>
<hr>
<p>Update 12/22/19: Some images have been removed at the request of Dow Jones.</p>
<hr>
<section class="footnotes l--space-compact">
<div class="t--weight-bold l--pad-btm-s">Footnotes & References</div>
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>I want to dig into this process more in a future essay, but for now I’d suggest reading Jon Gold’s excellent <a href="https://jon.gold/2016/06/declarative-design-tools/" target="_blank" rel="noopener">Declarative Design Tools</a> <a href="#fnref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
