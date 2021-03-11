---
title: "Mind the gap - designing graphs with missing data"
date: 2021-03-11 13:47:36 +0000
dateadded: 2021-03-11 13:47:36 +0000
description: ""
link: "https://matthewstrom.com/writing/gap/"
category:
directory:
- _directory/matthew-ström.md
---
<p>Data-driven interfaces are on the rise. Financial District CEOs want to see a birds-eye view of their bottom line as much as Silicon Valley Co-founders want to watch their growth hackers hack. Each user has their own hopes and fears about data, but there’s one thing nobody wants to see: a blank space.</p>
<p>Unfortunately, errors happen. No database is perfect, and as designers and product owners, we have to prepare for the worst. So let’s look at a (real-world!) example from some recent work at <a href="http://planetary.io/" target="_blank" rel="noopener">Planetary</a>:</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/gap-1.png" alt="A line graph with missing data"><figcaption>A line graph with missing data</figcaption></figure>
<p>In this graph, the values for December 6th, 9th, 13th, and 14th are missing. What are the possible ways of handling this?</p>
<p>The first answer, of course, is “make sure the data is there.” But as I mentioned, there are likely going to be cases where we have to handle missing data — changes in the vendor APIs, hardware issues, acts of god — so let’s analyze a few solutions.</p>
<h2 id="solution-1%3A-do-nothing">Solution 1: do nothing</h2>
<p>This is what we’re currently doing. If we don’t have the data, we’re simply not drawing that portion of the graph.</p>
<p><strong>Pros:</strong></p>
<ul>
<li><strong>It’s not misleading</strong>: we don’t have this data, so we don’t display anything.</li>
<li><strong>It’s technically simple</strong>: we don’t have any other design or development concerns: no need to distinguish between “we have data for these days” and “we don’t have data for these other days.”</li>
</ul>
<p><strong>Cons:</strong></p>
<ul>
<li><strong>It lacks information</strong>: a user has no idea what’s going on here. If asked what this graph means, all they can say is “well, there are gaps in the graph.”</li>
<li><strong>It doesn’t look good</strong>: while missing data is not, by default, a reason to panic, having gap-filled graphs might inspire stress in our users.</li>
</ul>
<h2 id="solution-2%3A-fill-in-the-gaps">Solution 2: fill in the gaps</h2>
<p>Here’s what it would look like if we simply filled in the gaps by connecting the dates that we <em>do</em> have:</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/gap-2.png" alt="A line graph with gaps filled in"><figcaption>A line graph with gaps filled in</figcaption></figure>
<p><strong>Pros:</strong></p>
<ul>
<li><strong>It looks good</strong>: It makes it much easier to track the trends in the data that we do have — there was a big increase in the middle of the time period, and that’s easier to understand this way.</li>
<li><strong>It’s technically simple</strong>: Again, no tricks in design or development: if anything, this solution is slightly easier than not showing data we don’t have.</li>
</ul>
<p><strong>Cons:</strong></p>
<ul>
<li><strong>It’s misleading</strong>: By drawing a line between December 5th and 7th, we’re implying what the data was for December 6th. While training and close inspection might lead a user to doubt the interpolation, it’s a little too easy to take the smooth line for granted. Was December 6th lower than the 5th? Higher than the 7th? Showing the line here might lead to inaccurate conclusions.</li>
<li><strong>It lacks information</strong>: even though we’ve connected the dots, we can’t display anything for the most recent two days because we don’t have any points to extend the line. Again, we can’t give a user any idea of what happened these days.</li>
</ul>
<h2 id="solution-3%3A-error-states">Solution 3: error states</h2>
<p>What if we shaded in the regions for which we didn’t have data with some informative error state?</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/gap-3.png" alt="A line graph with error states where data is missing"><figcaption>A line graph with error states where data is missing</figcaption></figure>
<p><strong>Pros:</strong></p>
<ul>
<li><strong>It’s not misleading</strong>: While we don’t have data for those days, we do have some information about <em>why</em> — for the yellow regions, we couldn’t collect the data. For the gray region, we haven’t tried to collect yet. There are a number of different reasons why we don’t have data, and we can provide that to the user.</li>
<li><strong>It has lots of information</strong>: This approach allows a user to answer questions not only about the data, but about the state of the application. It’s the most informative of the solutions.</li>
</ul>
<p><strong>Cons:</strong></p>
<ul>
<li><strong>It’s technically complex</strong>: Implementing this solution is tricky, as it requires a number of steps to record the error state and then display the error state. In addition, a key needs to be present for this to be useful to untrained users.</li>
<li><strong>It might not look good</strong>: I say “might” because it really only gets ugly if we have lots of error states. Seeing lots of these errors could be anxiety-inducing for the user, even if the problem is on our end as the product manager.</li>
</ul>
<h2 id="conclusion">Conclusion</h2>
<p>As an advocate of user needs even over technical requirements, I prefer solution 3. But I’ve employed all three of these approaches in products, and each can be useful depending on the circumstance.</p>
<p>I’m curious to hear how others have addressed this problem. Opinions? Alternative solutions? I’m all ears.</p>
