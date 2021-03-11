---
title: "Tiny data visualizations"
date: 2016-02-08 00:00:00 +0000
dateadded: 2021-03-11 15:43:17 +0000
description: ""
link: "https://matthewstrom.com/writing/tiny-data-viz/"
category:
directory:
- _directory/matthew-ström.md
---
<p><em>This is a direct translation of a talk I gave at the NYC D3.js meetup in January of 2016. If you’d like to see a video of the talk, you can check it out on <a href="https://www.youtube.com/watch?v=Gtlb8VIszrU" target="_blank" rel="noopener">YouTube</a></em>.</p>
<p>Have you seen <a href="http://www.nytimes.com/interactive/2016/01/28/upshot/donald-trump-twitter-insults.html" target="_blank" rel="noopener">this comprehensive list of Donald Trump’s insults</a>? Or maybe <a href="http://projects.fivethirtyeight.com/election-2016/primary-forecast/new-hampshire-republican/" target="_blank" rel="noopener">this detailed rundown of the 2016 Primaries</a>? Data is a big deal in the newsroom right now, and in 2016, we’ll likely see data take on an even bigger role in reporting feature stories.</p>
<p>The New York Times is just one example of an organization increasingly banking on data-driven reporting: in the Politics section of nytimes.com there is a blog called <a href="http://www.nytimes.com/upshot/" target="_blank" rel="noopener">The Upshot</a> that consistently uses analysis of detailed data sets to reveal surprising insights about news events on the front page. They typically include charts and diagrams to bolster their reporting: large, interactive explorations that are driving more and more traffic for the paper every day.</p>
<p>The Upshot, FiveThirtyEight and Buzzfeed, all of these publications are treating data visualization the same way that financial papers like the Wall Street Journal treat them: alongside the story, illustrating the story, but not integral to the story itself.</p>
<p>So what does data look like when it’s used as part of the story itself? How can we treat it as we treat verbs and nouns, integrated into, instead of apart from, the story?</p>
<h2 id="enter-sparklines">Enter Sparklines</h2>
<blockquote>
<p>A sparkline is a small intense, simple, word-sized graphic with typographic resolution. Sparklines mean that graphics are no longer cartoonish special occasions with captions and boxes, but rather sparkline graphics can be everywhere a word or number can be: embedded in a sentence, table, headline, map, spreadsheet, graphic. Data graphics should have the resolution of typography.  – Edward Tufte, Beautiful Evidence, 46–63</p>
</blockquote>
<p>Edward Tufte describes sparklines in his book <em>Beautiful Evidence</em> as being word-sized graphics. “Typographic Resolution” is his key identifier of a sparkline, and he goes back to this distinction repeatedly without quite defining it. So what does “Typographic Resolution” mean?</p>
<p>Emojis are one example of word-sized graphics that we use every day: these pieces of design have typographic resolution, as they sit directly with the text to add meaning or change context. Emojis can turn “thanks 😀” into “thanks 😕”; a lot of meaning is imparted with a very small symbol.</p>
<h2 id="sparklines-in-practice">Sparklines in practice</h2>
<p>Let’s look at a data table that might benefit from sparklines.</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/tinydata-1.png" alt="A basic data table"><figcaption>A basic data table</figcaption></figure>
<p>This is a typographic table: just numbers and letters, spelling out the top 10 index funds over the past 4 years. We can add a small chart to each line with the historic trends for that fund.</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/tinydata-2.png" alt="A basic data table with added sparklines"><figcaption>A basic data table with added sparklines</figcaption></figure>
<p>This adds 120 more data points to each line, demonstrating the volatility of each fund, as well as demonstrating the forces of market cohesion and highlighting market-wide events.</p>
<p>In fact, we can make this chart far more compact by eliminating the numbers on the right, replacing milestones with historic trends. Some audiences might not need to quantify the specific returns of the funds, and for them, we can add data and reduce complexity.</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/tinydata-3.png" alt="A basic data table with columns replaced by sparklines"><figcaption>A basic data table with columns replaced by sparklines</figcaption></figure>
<p>For the right audience, this compact display of data is just as easy to parse as the original. It might be argued that it’s easier, in fact: the lines resonate aesthetically with our natural instinct to find patterns, using multiple mental modes to add additional dimensions to the data.</p>
<h2 id="designing-charts-to-be-tiny">Designing Charts to be Tiny</h2>
<p>Simply taking normal-sized charts and sizing them down doesn’t accomplish the kind of efficiency of space we’re looking for with our new visualizations. In order to succeed, charts have to be designed with their size in mind.</p>
<p>That can look something like this:</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/tinydata-4.png" alt="A sparkline in practice"><figcaption>A sparkline in practice</figcaption></figure>
<p>This is a proprietary platform that Planetary designed for The Daily Beast. It displays information about system-wide averages, local maximum and minimum, and current state into a small visualization that accompanies each report.</p>
<p>This approach also applies to paragraph-level charts. This is an example of how we might take a story about market performance and integrate charts into it:</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/tinydata-5.png" alt="Source: http://www.nytimes.com/2016/01/05/business/international/stocks-asia-markets-china.html"><figcaption>Source: http://www.nytimes.com/2016/01/05/business/international/stocks-asia-markets-china.html</figcaption></figure>
<p>These charts are designed with tininess in mind. They don’t include text or axes. They use very few colors or patterns. They focus on one piece of information and don’t try to draw correlations or associations. This simplicity allows them to add value without adding noise.</p>
<h2 id="tools-to-make-tiny-charts">Tools to make tiny charts</h2>
<p>There are a number of tools available to designers and developers that make it easy to embed tiny charts into paragraphs of text:</p>
<p><strong>1. D3.js</strong></p>
<p>A developer named Tom Noda has written up a <a href="http://www.tnoda.com/blog/2013-12-19" target="_blank" rel="noopener">great tutorial for rendering small charts in D3</a>. He deftly addresses some of the technical challenges, such as smoothing and asynchronous datafetching.</p>
<p><strong>2. FF Chartwell</strong></p>
<p>While we don’t normally think of fonts as software, they are actually complex pieces of code, capable of really interesting applications.</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/tinydata-6.png" alt="FF Chartwell"><figcaption>FF Chartwell</figcaption></figure>
<p><a href="https://www.fontshop.com/families/ff-chartwell" target="_blank" rel="noopener">FF Chartwell</a>, a font originally published by FontFont, can parse numbers into a variety of different visualizations. It uses the inherent qualities of the text — color, style, and size — to style the charts and graphs. And because it’s a font, it can be embedded into web pages and rendered alongside other text; this takes advantage of the optimizations done by browsers when rendering text. It’s nothing short of black magic.</p>
<p><strong>In Conclusion</strong></p>
<p>We see the value of data visualization more and more each day, as large and interactive charts are published alongside stories in major publications. Newsrooms that explore the realm of word-sized charts, making data a central and essential component to stories, will stand apart; the next frontier of data is integration with the text of our stories.</p>
