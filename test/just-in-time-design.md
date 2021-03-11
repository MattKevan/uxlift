---
title: "Just-in-time design"
date: 2018-11-12 00:00:00 +0000
dateadded: 2021-03-11 15:43:17 +0000
description: ""
link: "https://matthewstrom.com/writing/just-in-time-design/"
category:
directory:
- _directory/matthew-ström.md
---
<figure data-type="image"><img src="https://matthewstrom.com/images/jit-0.jpg" alt="photo by Tools for motivation"><figcaption>photo by <a href="https://unsplash.com/photos/dcSLXvvaLXM?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="noopener">Tools for motivation</a></figcaption></figure>
<p>There is a disconnect between product design and product engineering.</p>
<p>Three factors contribute to this disconnect:</p>
<ol>
<li><strong>Products get shipped faster every day</strong>. DevOps teams automate huge amounts of the delivery process, enabling engineering teams to ship code many times every day.</li>
<li><strong>Designers have access to more information than ever before</strong>. UX research, product analytics, and tight-knit product teams provide torrents of data. Designers are always learning, and their designs evolve to reflect their understanding.</li>
<li><strong>Implementing a design hasn’t changed much.</strong> The design implementation process hasn’t changed much since the days of slicing PSDs. Design systems are beginning to automate some of the work, but turning mockups into code is slow. Waterfall (or other forms of one-step-at-a-time development) is still the standard practice for this transition.</li>
</ol>
<p>In response to this disconnect, designers are often working at least one sprint ahead of engineers. While one sprint might not seem like much of a lag, a typical product team learns a lot after the design hand-off.</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/jit-1.jpg" alt="The traditional process of delivering design"><figcaption>The traditional process of delivering design</figcaption></figure>
<p>After seeing the final designs:</p>
<ul>
<li>The engineering team discusses the work every day in stand-ups.</li>
<li>The product team provides feedback and refines metrics and goals.</li>
<li>UX research shares insights into user’s real-world experience.</li>
</ul>
<p>To stay one sprint ahead, design can’t deliver on this knowledge until the next sprint. It all starts to be reminiscent of the <a href="https://www.youtube.com/watch?v=mhVbLJvYP8s" target="_blank" rel="noopener">“Pre-taped Call-in Show”</a> from Mr. Show.</p>
<p>Instead of working ahead, we should finish designing as close to the end of a sprint as possible: just-in-time design.</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/jit-2.jpg" alt="Delivering design just in time"><figcaption>Delivering design just in time</figcaption></figure>
<h2 id="just-in-time-manufacturing">Just-in-time manufacturing</h2>
<p>Just-in-time design takes its name from <a href="https://en.wikipedia.org/wiki/Just-in-time_manufacturing" target="_blank" rel="noopener">Just-in-time manufacturing</a> (abbreviated JIT). JIT is a way of moving materials through a production process in which each step starts as soon as the necessary components arrive. Parts continue down the line only when needed. Extra inventory is wasteful, and workers put an extreme focus on quality.</p>
<p>JIT originated in Japan to maximize the output of a small amount of factories and resources. Along with then-novel practices like <a href="https://en.wikipedia.org/wiki/Kanban" target="_blank" rel="noopener">kanban</a> and <a href="https://en.wikipedia.org/wiki/Kaizen" target="_blank" rel="noopener">kaizen</a>, JIT helped Japan rebuild their industrial manufacturing capacity after World War II. This method has gone on to influence American companies like Dell, Harley Davidson, and General Electric.</p>
<p>We can apply JIT to design by following some of the key principles outlined by Mehran Sepehri in <em><a href="https://www.amazon.com/Just-Time-Not-Japan-Implementation/dp/0935406786/ref=sr_1_2?s=books&amp;ie=UTF8&amp;qid=1542072278&amp;sr=1-2&amp;keywords=Just-in-time%2C+not+just+Japan" target="_blank" rel="noopener">Just in Time, Not Just in Japan</a>.</em></p>
<h3 id="housekeeping%3A-physical-organization-and-discipline">Housekeeping: physical organization and discipline</h3>
<p><strong>Invest in a design system</strong>. Organized and reusable design elements benefits just-in-time design in two ways:</p>
<ol>
<li>Breaking designs down into independent components makes it easier to ship in smaller increments.</li>
<li>A shared set of design tools enables engineers to ship faster and opens the way to automation.</li>
</ol>
<h3 id="lot-sizes-of-one%3A-the-ultimate-lot-size-and-flexibility">Lot sizes of one: the ultimate lot size and flexibility</h3>
<p><strong>Ship in the smallest increment possible.</strong> The “lot size” in manufacturing refers to the number of parts that get delivered as a group. For just-in-time design, delivering in smaller batches make it much easier to see the impact of each change.</p>
<p>Delivering in smaller increments also makes the feedback loops more forgiving. If one design doesn’t achieve the desired outcome, the next design is adjusted and improved.</p>
<p>Faster feedback cycles provide real-world insights on a regular basis. For instance, if a big redesign takes 6 months and only shipped when it’s 100% ready, the team is waiting 6 months to find out if their designs were effective. If the team breaks the work into 6 parts and delivers one part a month, they learn much sooner if their designs are effective and can adjust as they go.</p>
<h3 id="streamlining-movements%3A-smoothing-materials-handling">Streamlining movements: smoothing materials handling</h3>
<p><strong>Get embedded in the team.</strong> Designers should use sprint planning, grooming, standup, and retro as opportunities to provide design to — and recieve feedback from — the rest of the team. Designs can take the form of written or verbal descriptions, not just wireframes and high-fidelity mockups.</p>
<p><strong>Use a handoff tool.</strong> Tools like Zeplin, Abstract, or Invision Inspect make it much easier for designs to flow from designers to engineers — no matter what <a href="https://twitter.com/brad_frost/status/1049765406150483969" target="_blank" rel="noopener">Dan Mall says</a>.</p>
<h3 id="pull-system-%E2%80%94-signal-%5Bkanban%5D-replenishment%2Fresupply-systems.">Pull system — signal [kanban] replenishment/resupply systems.</h3>
<p><strong>Only design what’s needed.</strong> Use constant communication between engineering and product partners to understand what your collaborators will need next. Then, plan on delivering <em>only what is needed</em>, and nothing more. Use the agile process — grooming, planning, and retro — to find any shortfalls or excesses.</p>
<p><strong>Avoid creating a backlog of designs.</strong> Designs don’t age well. In the time between finishing design and shipping code, it’s likely that you’ll learn something new that changes your understanding. If you’re producing more design than can be implemented, focus more on the quality of each design.</p>
<h2 id="conclusion">Conclusion</h2>
<p>The disconnect between designers and engineers is a common source of frustration in any product-focused company.</p>
<p>Continuously delivering small iterations based on the team’s needs can transform the product development process. This approach shifts the focus away from highly-produced, out-of-date, difficult-to-maintain design, opening up the process to tighter collaboration and a higher standard of quality.</p>
<hr>
<p>Special thanks to <a href="https://www.linkedin.com/in/danalcalde" target="_blank" rel="noopener">Dan Alcalde</a> and <a href="https://mobile.twitter.com/adellecharles" target="_blank" rel="noopener">Adelle Charles</a> for contributing to this essay.</p>
