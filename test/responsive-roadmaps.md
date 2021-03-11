---
title: "Responsive roadmaps"
date: 2019-05-08 00:00:00 +0000
dateadded: 2021-03-11 15:43:17 +0000
description: ""
link: "https://matthewstrom.com/writing/responsive-roadmaps/"
category:
directory:
- _directory/matthew-ström.md
---
<p>Shane Parrish’s essay <a href="https://fs.blog/2015/11/map-and-territory/" target="_blank" rel="noopener"><em>The Map is Not the Territory</em></a> begins:</p>
<blockquote>
<p>The map of reality is not reality. Even the best maps are imperfect. That’s because they are reductions of what they represent.</p>
</blockquote>
<p>The same is true for product roadmaps. Understanding and applying Parrish’s mental model is the key to designing a more usable, more maintainable, and more accurate roadmap.</p>
<h2 id="what-maps-miss">What maps miss</h2>
<p>Returning to Parish’s quote: “[Maps are] reductions of what they represent.” Map makers have choices when reducing the information they are representing. Take a map of the earth’s surface, for example:</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/maps-0.jpg" alt="The Mercator Projection"><figcaption>The Mercator Projection</figcaption></figure>
<p><strong>The Mercator projection</strong> keeps information about straight lines of travel, but reduces information about areas of land. As a result, the map works great for ocean navigation, but grossly distorts the actual size of the continents<sup class="footnote-ref"><a href="#fn1" id="fnref1">1</a></sup>.</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/maps-1.jpg" alt="The Robinson Projection"><figcaption>The Robinson Projection</figcaption></figure>
<p><strong>The Robinson projection</strong> keeps information about the general shape, size, and location of the continents, but reduces the accuracy of measurements over long distances. This results in a map that’s great for teaching children about geography, but would be useless as a navigational aid.</p>
<p>Product roadmaps are reductions, too. Roadmaps reduce product strategy down to a very digestible (and very power-pointable) format. In doing so, roadmap-makers ask questions: who will be using this map? Is it for education, or navigation? Which information should be preserved, and which can be distorted?</p>
<h2 id="what-traditional-roadmaps-miss">What traditional roadmaps miss</h2>
<figure data-type="image"><img src="https://matthewstrom.com/images/maps-2.jpg" alt="A modern roadmap in Gantt chart format"><figcaption>A modern roadmap in Gantt chart format</figcaption></figure>
<p>Most modern product roadmaps look like this: One axis is time, the other is goals. Each goal is painted across a span of time, representing when the goal is to be achieved.</p>
<p>This format, called a Gantt chart, was invented more than 100 years ago. By visualizing complicated processes over long periods of time, Gantt charts enabled factory managers to identify and eliminate inefficiency.</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/maps-3.jpg" alt="How a Gantt chart looked 100 years ago"><figcaption>How a Gantt chart looked 100 years ago</figcaption></figure>
<p>The measurement-driven approach to work (sometimes called <em>scientific management</em> or <em>Taylorism</em>) was a major innovation during the second industrial revolution. Precise planning and management enabled workers to understand and control the intricacies of mass manufacturing.</p>
<p>Over the past century, the nature of work has changed for most people. Instead of overseeing assembly lines of human-operated machines with interchangeable parts, most managers oversee cross-functional teams comprising knowledge workers and specialized technicians.</p>
<p>But we still use Gantt charts. We think our roadmap looks like this:</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/maps-4.jpg" alt="A tidy (but naive) roadmap"><figcaption>A tidy (but naive) roadmap</figcaption></figure>
<p>When in reality, it looks like this:</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/maps-5.jpg" alt="An ugly (but realistic) roadmap"><figcaption>An ugly (but realistic) roadmap</figcaption></figure>
<p>Gantt charts make sense of complicated processes. But software development isn’t merely complicated. It is complex, unpredictable, and at times chaotic. Traditional roadmaps can’t make sense of complexity.</p>
<p>Gantt charts visualize output. But software teams don’t succeed on output alone; our work is no longer about our output in widgets-per-day; we now drive <em>outcomes,</em> real impact to our customers’ lives. Traditional roadmaps can’t visualize outcomes.</p>
<p>Instead of trying to precisely predict the order and magnitude of our output, let’s draw a <strong>responsive roadmap</strong><sup class="footnote-ref"><a href="#fn2" id="fnref2">2</a></sup> that visualizes the process of turning uncertainty and complexity into outcomes and output.</p>
<h1 id="what-is-a-responsive-roadmap%3F">What is a responsive roadmap?</h1>
<p>A responsive roadmap is a <strong>story of how a team will accomplish their goals.</strong> Any team can create, publish, and maintain their own roadmap.</p>
<p>A responsive roadmap consists of four elements:</p>
<ol>
<li><strong>An ambitious objective</strong> that guides all the work your team is doing,</li>
<li><strong>Measurable key results</strong> that tell you if you’re on the right track,</li>
<li><strong>Concrete targets</strong> that will move the needle of your key result, and</li>
<li><strong>Current projects</strong> that you have undertaken to reach your next target.</li>
</ol>
<figure data-type="image"><img src="https://matthewstrom.com/images/maps-6.png" alt="A responsive roadmap"><figcaption>A responsive roadmap</figcaption></figure>
<p>Your responsive roadmap is a snapshot of your current work, as well as a model of how you’ll process uncertainty over time.</p>
<p>A responsive roadmap is not a sequence. The team can work on a task, condition, key result, and objective simultaneously. For instance:</p>
<p><strong>Objective:</strong> Make our checkout flow feel instantaneous<br>
<strong>Key Result</strong>: 99% of checkout sessions last less than 5 seconds<br>
<strong>Target</strong>: Billing details form should load in 100ms<br>
<strong>Project</strong>: Remove jQuery<sup class="footnote-ref"><a href="#fn3" id="fnref3">3</a></sup> dependency</p>
<p>Each step in a responsive roadmap includes an increasing amount of uncertainty. As you move from projects out to missions, exactly how and when you’ll achieve that goal become fuzzier.</p>
<p>In our example, I can say with a high degree of certainty exactly how I’ll remove our jQuery dependency, and that it’ll take a few hours.</p>
<p>The team’s next target, loading the billing details form quickly, will probably involve a few more projects, but we can’t say for certain if it’ll take a few days or a few weeks.</p>
<p>We’ll need to plan a few more targets to get to a 5-second checkout process, but we’ll be learning a lot before we accomplish the desired result. Along the way, another team might help us by improving our design system, so our plans will need to change. Knowing what we don’t know, it’s in our best interest to not spend too much time planning that far out.</p>
<p>Finally, we’ll only have an instantaneous-feeling checkout flow if we do everything else right. If we commit to that mission and use it to align the rest of our work, we can continuously make progress and report back.</p>
<h2 id="how-to-create-and-publish-a-responsive-roadmap">How to create and publish a responsive roadmap</h2>
<p>Creating a responsive roadmap doesn’t require fancy software. All you need is:</p>
<ul>
<li><strong>An accessible record of your roadmap</strong> - Google Docs, Confluence, or Miro work great.</li>
<li><strong>A short recurring meeting to update your roadmap</strong> - an hour every month should be sufficient. If you’re working in sprints, time your roadmap meeting with your working rhythm.</li>
</ul>
<p>During your first few meetings, walk through the following statements in order:</p>
<ol>
<li><strong>We know what our objective is.</strong>  <br>
If false, spend the meeting defining objectives. If true, continue →</li>
<li><strong>We have a measurable key result that will tell us if we’re on the right track.</strong> <br>
If false, spend the meeting defining key results. If true, continue →</li>
<li><strong>We have a concrete target that will move the needle of our key result.</strong> <br>
If false, spend the meeting defining targets. If true, continue →</li>
<li><strong>Everyone has a project to work on to get to our next project.</strong> <br>
If false, spend the meeting defining projects. If true, the meeting is over!</li>
</ol>
<figure data-type="image"><img src="https://matthewstrom.com/images/maps-7.png" alt="How to build a responsive roadmap"><figcaption>How to build a responsive roadmap</figcaption></figure>
<p>After you’ve written down your first objective, key results, targets, and projects, you’re ready to publish your roadmap. If you’re using a cloud-based tool, make a short, easy-to-remember link to your roadmap. If you’re working offline, use something ephemeral like a whiteboard or large post-it.</p>
<p>After you’ve published your roadmap for the first time, keeping it up-to-date is simple. At your regular roadmap meeting, run the previous statement in reverse order:</p>
<ol>
<li><strong>We know what projects we’ll work on next.</strong> <br>
If false, define more projects to hit your next target. If true, continue →</li>
<li><strong>We know what target we’ll work on next to move the needle of our key result.</strong> <br>
If false, define the next target for the team. If true, continue →</li>
<li><strong>Once we achieve our current key result, we know what key result we’ll seek next.</strong> <br>
If false, define the next key result. If true, continue →</li>
<li><strong>Once we accomplish our current objective, we know what objective we’ll focus on next.</strong> <br>
If false, define your next objective. If true, congratulations! You’ve planned all you need to plan.</li>
</ol>
<p>Add your changes do the document, and you’re up-to-date!</p>
<p>In this mindset, the team is always working one level of uncertainty ahead. Practically, teams will spend almost all of their time defining projects. But when the team closes in on a target condition, key result, or objective, they’ll be prepared to transition seamlessly to the next.</p>
<p>Crucially, continuous integration removes the need for onerous quarterly roadmap planning. At any time, any member of the organization can look at the responsive roadmap to get see what the team is working on now, where they’re headed, what results they are driving, and their high-level initiative.</p>
<h2 id="how-to-use-a-responsive-roadmap-to-align">How to use a responsive roadmap to align</h2>
<p>Different levels of your responsive roadmap are useful for coordinating at the various levels of your organization.</p>
<ul>
<li><strong>Objectives</strong> are useful for connecting your work to a high-level organization vision, your so-called “north star.”</li>
<li><strong>Key Results,</strong> when written well, coordinate your work with the strategic initiatives of executive stakeholders. Key results create accountability without succumbing to <a href="https://en.wikipedia.org/wiki/Goodhart%27s_law" target="_blank" rel="noopener">Goodhart’s law</a>.</li>
<li><strong>Targets</strong> create alignment across functional groups: at Bitly, they tell marketing and sales teams know what to expect from feature teams. Targets also map neatly to what agile software development calls an epic.</li>
<li><strong>Projects</strong> align teammates day-to-day. Projects also map to what agile software development calls stories…They answer the question “what are you working on?” with a pull request (just check Jira!) rather than a synchronous status meeting.</li>
</ul>
<h3 id="what-about-deadlines%3F">What about deadlines?</h3>
<p>Due to its complexity, software development is <a href="https://erikbern.com/2019/04/15/why-software-projects-take-longer-than-you-think-a-statistical-model.html" target="_blank" rel="noopener">notoriously difficult to estimate</a>. But businesses need deadlines to plan many vital functions — it’s a good thing that I get my paycheck reliably on the first and fifteenth of the month. This is one of the most challenging parts of planning software development. We know our estimates are bad, but we have to make them anyway.</p>
<p>Avoid putting deadlines on Objectives and Key Results. Most teams just can’t know if they’ll strike gold and surpass their goal quickly or get stuck in a quagmire of technical debt and shifting requirements. Constant learning and re-evaluating is part of great teamwork, and deadlines tend to put a damper on experimentation and innovation.</p>
<p>Instead, put your <em>targets</em> on a calendar. Since these targets will likely be a few cycles out (weeks to months), teams will have enough time to coordinate go-to-market and customer support plans.</p>
<h2 id="all-maps-are-wrong%2C-but-some-are-useful">All maps are wrong, but some are useful</h2>
<p>The statistician George Box said that “all [statistical] models are wrong but some are useful.” The same is true for maps. All maps are right in some regard (the Mercator projection’s  straight lines across the Atlantic ocean), but wrong in others (the Mercator projection’s continents).</p>
<p>Traditional project roadmaps are right about our knowledge in a moment of time. They are good records of our beliefs about the correct sequence and magnitude of our work. But these roadmaps are wrong about the reality of work, and almost every roadmap I’ve ever used goes out the window as soon as the work starts. No battle plan ever survives contact with the enemy.</p>
<p>Responsive roadmaps are right about the nature of work: it is full of uncertainty and subject to change. They are wrong about what we’ll be doing in the future; the farther out we look, the less accurate a responsive roadmap is. That tradeoff affords us time to focus in the present on delivering at the highest level of quality.</p>
<hr>
<p><em>Special thanks to <a href="https://twitter.com/lauradhahn" target="_blank" rel="noopener">Laura Hahn</a> and <a href="http://joshpetersel.com/" target="_blank" rel="noopener">Josh Petersel</a> for contributing to early drafts of this essay.</em></p>
<hr>
<section class="footnotes l--space-compact">
<div class="t--weight-bold l--pad-btm-s">Footnotes & References</div>
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>My favorite tool for un-learning the biases of the Mercator Projection is the website <a href="https://thetruesize.com/#?borders=1~!MTY5MjMxNzk.MjI1MTQwMQ*MzM0ODUzMjI(NDAwNjgwNw~!CONTIGUOUS_US*MTAwMjQwNzU.MjUwMjM1MTc(MTc1)MA~!IN*NTI2NDA1MQ.Nzg2MzQyMQ)MQ~!CN*OTkyMTY5Nw.NzMxNDcwNQ(MjI1)Mg" target="_blank" rel="noopener">The True Size Of</a>. The default view — showing that the area of China, India, and the contiguous US all fit within the landmass of Africa — is stunning. <a href="#fnref1" class="footnote-backref">↩︎</a></p>
</li>
<li id="fn2" class="footnote-item"><p>This is a reference to the<a href="https://www.responsive.org/manifesto" target="_blank" rel="noopener"> Responsive Manifesto</a>, an attempt to describe modern organizational tensions. <a href="#fnref2" class="footnote-backref">↩︎</a></p>
</li>
<li id="fn3" class="footnote-item"><p>jQuery is a third-party javascript library that used to be essential in web applications. <a href="#fnref3" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
