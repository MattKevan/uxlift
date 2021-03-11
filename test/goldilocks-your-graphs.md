---
title: "Goldilocks your graphs"
date: 2015-11-11 00:00:00 +0000
dateadded: 2021-03-11 15:43:17 +0000
description: ""
link: "https://matthewstrom.com/writing/goldilocks/"
category:
directory:
- _directory/matthew-ström.md
---
<p>Data visualization is everywhere. From analytics platforms to infographics, across newsrooms and social media channels, there are vast swaths of the internet devoted to delivering data in non-tabular format. There are entire blogs devoted to the subject, such as the ubiquitous <a href="http://fivethirtyeight.com/" target="_blank" rel="noopener">Five Thirty Eight</a> and the up-and-coming <a href="http://poly-graph.co/" target="_blank" rel="noopener">Polygraph</a>. With such an immense interest in seeing and understanding complex data, designers are constantly challenged to produce images that both catch a viewer’s eye and accurately depict the information at hand.</p>
<p>With such a high demand, there are (inevitably) a great number of approaches being employed; some to great success, others to embarrassing failure. It’s possible, then, to learn from these approaches to create data visualizations that are good-looking <strong>and</strong> informative.</p>
<ol>
<li><strong>Label everything in plain english.</strong> By “plain english,” I mean “words that you speak out loud regularly.” Depending on where you work, you might say phrases like “regular spectral density potential” regularly — so instead think of words your <em>audience</em> speaks out loud regularly.</li>
<li><strong>Show highs and lows, let the viewer fill in the rest.</strong> Most graphs fall victim to “too many axes” syndrome: lots and lots of grid lines dividing up the space, ostensibly to give the viewer a hand in judging the data. However, humans are pretty good at spatial estimation, so only plot the maximum and minimum on each axis.</li>
<li><strong>Give your graph a title.</strong> For such a seemingly obvious component, the title is often forgotten. What do you want your viewer to get out of a graph? If you answer this question in a title above the graph, you’ll provide the viewer with vital context and a good sense of what they’re looking at.</li>
</ol>
<p>Let’s say I’m preparing a graph for a client who makes pizzas. They’re interested to see how their pizza production rates have fluctuated over the last four months. Here are a few examples of how these three guidelines can be applied (or not).</p>
<h2 id="too-cold%3A-the-power-point-approach">Too cold: the Power Point approach</h2>
<p>In every board room in the world, there’s a laser pointer landing on a graph that looks like this:</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/goldilocks-1.png" alt="A graph with too much ink"><figcaption>A graph with too much ink</figcaption></figure>
<p>This graph has everything: big numbers, lots of lines, overly redundant labeling. There’s no way you could misinterpret this!</p>
<p><strong>Is everything labeled in plain english?</strong> Well, it’s labeled. But isn’t “July first” much easier to say than “seven-one-twenty-fifteen?”</p>
<p><strong>Are the highs and lows shown?</strong> This is an example of over-labeling. We’re only looking at four months here — no need for all the lines.</p>
<p><strong>Does the graph have a title?</strong> It does! But it’s a little too literal.</p>
<h2 id="too-hot%3A-the-dribbble-approach">Too hot: the Dribbble approach</h2>
<p>If you look at the front page of <a href="http://dribbble.com/" target="_blank" rel="noopener">Dribbble</a>, chances are there’s some sort of data visualization being done. And more often than not, it looks something like this:</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/goldilocks-2.png" alt="A graph with too much style"><figcaption>A graph with too much style</figcaption></figure>
<p>Of course, there are good examples of data viz on Dribbble and other showcase sites, but in many cases, the design is being done from a strictly aesthetic point.</p>
<p><strong>Is everything labeled in plain english?</strong> Nope. Nothing is labeled.</p>
<p><strong>Are the highs and lows shown?</strong> No! I have no sense of scale.</p>
<p><strong>Does the graph have a title?</strong> Kind of. But it’s not very descriptive.</p>
<h2 id="just-right%3A-the-goldilocks-approach">Just right: the goldilocks approach</h2>
<p>Let’s split the difference between these two. We’ll show what’s necessary to preserve the aesthetic qualities, but label clearly and simply to ensure accuracy:</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/goldilocks-3.png" alt="A graph with the right balance between style and information"><figcaption>A graph with the right balance between style and information</figcaption></figure>
<p>Much better.</p>
<p><strong>Is everything labeled in plain english?</strong> Yes. We’re really clear about the time scale, as well as the domain and purpose of the graph.</p>
<p><strong>Are the highs and lows shown?</strong> They are! Also, the extra zeros on the numbers are truncated to save some space.</p>
<p><strong>Does the graph have a title?</strong> It does; “…last 4 months” spells out the time frame in a much simpler manner than “7/1/2015 to 10/31/2015.”</p>
<h2 id="conclusion">Conclusion</h2>
<p>These examples and guidelines are a (biased) set of tools for making good-looking and useful graphs. There are a huge number of topics I’ve glossed over, each of which holds innumerable hints on properly visualizing data; for more information, read the works of <a href="http://www.edwardtufte.com/tufte/" target="_blank" rel="noopener">Edward Tufte</a>, a critic of poor data visualization and a proponent of the just-right approach.</p>
<p>Lastly, no approach is successful without constant improvement and experimentation. Edit frequently and update your methods constantly. By refining and revisiting, you’ll find the happy medium between overwrought powerpoint and abstract art doodle.</p>
