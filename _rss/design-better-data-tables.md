---
title: "Design better data tables"
date: 2021-03-11 13:47:36 +0000
dateadded: 2021-03-11 13:47:36 +0000
description: ""
link: "https://matthewstrom.com/writing/tables/"
category:
directory:
- _directory/matthew-ström.md
---
<p><strong>Poor tables.</strong> Where did they go wrong?</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/tables-0.png" alt="Table tetris"><figcaption>Table tetris</figcaption></figure>
<p>After being the bread and butter of the web for most of its early history, tables were cast aside by many designers for newer, trendier layouts. But while they might be making fewer appearances on the web these days, data tables still collect and organize much of the information we interact with on a day-to-day basis.</p>
<p>For instance, there’s what I consider to be the mother of all tables: The United States’ “Harmonized Tariff Schedule,” a table that stretches over 3,550 pages and lists every single good that can be imported into the US, including such thrilling entries as “Men’s or boys’ overcoats, carcoats, capes, cloaks, anoraks (including ski-jackets), windbreakers and similar articles (including padded, sleeveless jackets).”</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/tables-1.png" alt="What is a carcoat, anyway?"><figcaption>What is a carcoat, anyway?</figcaption></figure>
<p>The ire raised by data tables is due, no doubt, to just how awful they can look when they’re not well designed. The design of a table is its linchpin: if it’s done right, it makes complex data easy to scan and compare. If it’s done wrong, it can render information completelyincomprehensible.</p>
<p>So let’s do it right, right?</p>
<h2 id="know-your-numerals">Know your numerals</h2>
<p>Not all numbers were created equal. I’m not talking about π and ∞ (though I often do, at parties); I’m talking about numbers that are either <em>tabular</em> or <em>oldstyle</em>, either <em>lining</em> or <em>proportional</em>.</p>
<p>Here’s a quick illustration of the difference between <em>oldstyle</em> and <em>lining</em> figures.</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/tables-2.png" alt="Oldstyle vs. lining figures"><figcaption>Oldstyle vs. lining figures</figcaption></figure>
<p>Oldstyle figures look nice in sentences, where they better match the size and spacing of lower-case letters; lining figures are more uniform, and reinforce the grid-like structure of the table.</p>
<p>The difference between <em>proportional</em> and <em>tabular</em> figures is not quite so obvious:</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/tables-3.png" alt="Proportional vs. tabular figures"><figcaption>Proportional vs. tabular figures</figcaption></figure>
<p>Proportional figures are designed to match the color — that is, the general sizing and spacing — of the typeface. Tabular figures, on the other hand, are all identically-sized, so that columns of numbers line up properly. While the difference may not seem great on the scale of one or two lines, using tabular figures makes scanning large tables significantly easier and less error-prone.</p>
<h3 id="a-technical-note-on-using-tabular-lining-figures">A technical note on using tabular lining figures</h3>
<p>When designing, you’ll need to do a bit of work to ensure the numerals you’re using are the correct ones (tabular lining figures aren’t typically the default). Adobe Products have an “opentype” panel that can be used to set the figures properly, and CSS provides a <a href="https://css-tricks.com/almanac/properties/f/font-feature-settings/" target="_blank" rel="noopener">slightly-cryptic syntax </a>for enabling this feature. Beyond that, some basic googling should lead you down the right path.</p>
<p>But now for the bad news: not all typefaces have true tabular lining figures available. The <a href="https://www.myfonts.com/fonts/fontfont/ff-meta/" target="_blank" rel="noopener">ones that do tend to be pretty expensive</a>. There are a few exceptions: The excellent <a href="https://fonts.google.com/specimen/Work+Sans" target="_blank" rel="noopener">Work Sans</a> is a free typeface that has true tabular lining figures.</p>
<p>If you can’t find a suitable typeface that has tabular lining figures, a good fallback is monospace fonts— while they tend to have a more “source code” look, they’ll always be well-suited to displaying numbers in tables. Additionally, the new Apple system default typeface San Francisco has excellent tabular lining figures and looks great at small sizes.</p>
<h2 id="alignment-matters">Alignment Matters</h2>
<p>3½ simple rules to follow:</p>
<p><strong>1. Numerical data is right-aligned</strong><br>
<strong>2. Textual data is left-aligned</strong><br>
<strong>3. Headers are aligned with their data</strong><br>
<strong>3½. Don’t use center alignment.</strong></p>
<figure data-type="image"><img src="https://matthewstrom.com/images/tables-4.png" alt="List of U.S. states by historical population — Wikipedia"><figcaption>List of U.S. states by historical population — Wikipedia</figcaption></figure>
<p>Numerical data is read right-to-left; that is, we compare numbers by first looking at their ones digit, then their tens, then their hundreds, and so on. This is also how most people learn arithmetic — start on the right and move left, carrying digits as you go.<sup class="footnote-ref"><a href="#fn1" id="fnref1">1</a></sup> Therefore, tables should keep numerical data right-aligned.</p>
<p>Textual data is read (in English) from left-to-right. Comparing textual elements is typically done by sorting into alphabetical order: if two entries start with the same letter, the second letter is used, and so on. Trying to quickly scan text can be infuriating if it’s not left-aligned.</p>
<p>Headers, generally, should carry whatever alignment their data has.This keeps the vertical lines of the table clean, and provides consistency and context.</p>
<p>Center alignment causes the lines of the table to become “ragged,” which makes it much harder to scan entries, often necessitating extra dividers and graphical elements.</p>
<h3 id="consistent-significant-figures-%3D-better-alignment">Consistent Significant Figures = Better alignment</h3>
<p>One easy way to keep your tables properly aligned is to keep the same number of significant figures — usually the number of digits after the decimal — consistent within each column. Significant figures is a whole rabbit hole ofa topic, so I’ll keep my advice here brief: the fewer sig figs you can get by with, the better.</p>
<h2 id="fewer%2C-clearer-labels">Fewer, Clearer Labels</h2>
<p>Providing labels to accompany your data is crucial. These pieces of accompanying context allow a data table to be read by a wider audience, in a broader set of circumstances.</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/tables-5.png" alt="Mississippi River Flood Stage Forecast - NOAA"><figcaption>Mississippi River Flood Stage Forecast - NOAA</figcaption></figure>
<h3 id="title">Title</h3>
<p>It might sound like conventional wisdom, but giving your data table a clear and succinct title is as important as any other design decision you make. With a good title, tables are portable: they can be used in a number of different contexts, as well as cited from external sources.</p>
<h3 id="units">Units</h3>
<p>The most common label used in tables is the unit of measurement for the data; often, it’s repeated along with every single data point. Instead of repeating the label, only include it with the first data point in each column.</p>
<h3 id="headers">Headers</h3>
<p>Keep headers as short as possible; the design of the data table should be focused around the data itself, and long header labels can occupy a lot of visual space.</p>
<h2 id="as-little-ink-as-possible">As little ink as possible</h2>
<p>When deciding how to style the graphic elements of a table, the goal should always be to reduce the table’s footprint without losing structural fidelity.One of the ways you can accomplish this is by using as little “ink” as possible — that is, whenever possible, choose not to style an element.</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/tables-6.png" alt="2016 National League Batting Statistics - BaseballReference"><figcaption>2016 National League Batting Statistics - BaseballReference</figcaption></figure>
<h3 id="rules">Rules</h3>
<p>If you’ve properly aligned the data points in your table, rules become redundant. The primary benefit they provide is in allowing you to reduce the space between elements, while still being able to differentiate between elements. Even when used, rules should be extremely light to not interfere with quick scanning.</p>
<p>Horizontal rules are the most useful, as they allow you to significantly reduce the vertical space occupied by long tables, making faster work of comparing lots of values or seeing trends over time.</p>
<p>One unsubstantiated opinion I have about rules is that <strong>zebra striping is bad</strong>. Really, really bad.Take it or leave it.</p>
<h3 id="backgrounds">Backgrounds</h3>
<p>Backgrounds are most useful when indicating differences in the domain of data: switching between single values and sums or averages, for example. Highlighting values, providing additional context to data, or indicating changes in values from previous periods can be done without backgrounds, using graphical elements like ✻, † (one of my faves), or ▵.</p>
<p>Additionally, tables should be monochromatic. Using colors to provide organizational context or added meaning increases the likelihood of misinterpretation or error, and causes usability problems for those with impaired vision.</p>
<h2 id="in-conclusion">In conclusion</h2>
<p>Tables might be <a href="https://medium.com/mission-log/well-designed-interfaces-look-boring-568faa4559e0#.e6301amez" target="_blank" rel="noopener">boring</a>, but they are such a major element of any data-rich document that they’re worth every ounce of design thinking we can apply to them. By designing more efficient, clearer, and easier-to-use tables, you can vastly improve the often-painful experience of analyzing and understanding large sets of data.</p>
<h3 id="further-reading-%26-inspiration">Further Reading &amp; Inspiration</h3>
<p><a href="http://fivethirtyeight.com/features/the-rise-and-rise-of-nneka-ogwumike/" target="_blank" rel="noopener">FiveThirtyEight</a> has always been a great source of inspiration— they set their numerical data in a typeface called <a href="https://www.myfonts.com/fonts/tipografiaramis/decima-mono/" target="_blank" rel="noopener">Decima Mono</a>, which is specifically designed to fit lots of data in a small space.</p>
<p><a href="http://practicaltypography.com/" target="_blank" rel="noopener">Butterick’s Practical Typography</a> is my go-to for all things typographical, and the kind of reference you keep multiple copies of — it’s so practical!</p>
<p>Lastly, no article on data design would be complete without an <a href="http://www.edwardtufte.com/bboard/q-and-a-fetch-msg?msg_id=00041I" target="_blank" rel="noopener">Edward Tufte</a> shoutout. His insightful writing on design is indispensable.</p>
<hr>
<p>Special thanks to <a href="https://medium.com/u/40a07ef54f77" target="_blank" rel="noopener">kontur</a>, <a href="https://medium.com/u/98d7858573d" target="_blank" rel="noopener">Nathan D Huening</a>, <a href="https://medium.com/u/aae529a3f8b0" target="_blank" rel="noopener">Robin Rendle</a>, <a href="https://medium.com/u/ed2d267a9408" target="_blank" rel="noopener">Scott Dawson</a>, <a href="https://medium.com/u/529ce6387b3b" target="_blank" rel="noopener">Karen Bachmann</a>, and <a href="https://medium.com/u/4e07ae4204f0" target="_blank" rel="noopener">Kelly Jepsen</a> for catching errors in this story.</p>
<hr>
<section class="footnotes l--space-compact">
<div class="t--weight-bold l--pad-btm-s">Footnotes & References</div>
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>For other interesting approaches to arithmetic, check out how Japanese children use a <a href="https://www.youtube.com/watch?v=Px_hvzYS3_Y" target="_blank" rel="noopener">Soroban</a> or how <a href="https://www.khanacademy.org/math/arithmetic/multiplication-division/lattice-multiplication/v/lattice-multiplication" target="_blank" rel="noopener">lattice multiplication</a> works. <a href="#fnref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
