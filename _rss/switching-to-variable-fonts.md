---
title: "Switching to variable fonts"
date: 2021-03-11 13:47:36 +0000
dateadded: 2021-03-11 13:47:36 +0000
description: ""
link: "https://matthewstrom.com/writing/variable-fonts/"
category:
directory:
- _directory/matthew-ström.md
---
<p>Ever since I first learned about variable fonts, I’ve wanted to use them in my own work. After learning that  <a href="https://github.com/adobe-fonts/source-serif-pro" target="_blank" rel="noopener">Source Serif</a> and <a href="https://rsms.me/inter/" target="_blank" rel="noopener">Inter</a> both had variable versions, I started switching this site over to use them. Here’s how I implemented the change, and what I learned along the way.</p>
<h2 id="what-are-variable-fonts%3F">What are variable fonts?</h2>
<p>Variable fonts are a new<sup class="footnote-ref"><a href="#fn1" id="fnref1">1</a></sup> type of font file. Instead of requiring individual files for bold and light weights, or regular or italic variations, you only need a single variable file.</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/variable-1.gif" alt="A responsive lettering example, courtesy of Erik van Blokland."><figcaption>A responsive lettering example, courtesy of Erik van Blokland.</figcaption></figure>
<p>Why use variable fonts? In addition to technical simplicity (1 font file instead of multiple), variable fonts tend to come in smaller files than their more traditional cousins. Smaller files mean faster load times. Faster load times mean a better internet.</p>
<h2 id="how-i-implemented-variable-fonts">How I implemented variable fonts</h2>
<p>I started with Clearleft’s <a href="https://medium.com/clear-left-thinking/how-to-use-variable-fonts-in-the-real-world-e6d73065a604" target="_blank" rel="noopener">case study of implementing variable fonts</a>. The instructions they provide are incredibly detailed and useful, so I won’t try to re-create them here.</p>
<p>Before I switched to variable fonts, I was loading Source Serif in Roman and Italic at a two different weights. I used typekit’s CSS-only loader, as it was super-speedy compared to the javascript equivalent. To get those two fonts from Typekit’s server took 4 requests, bringing the page to a total of 8 requests<sup class="footnote-ref"><a href="#fn2" id="fnref2">2</a></sup>.</p>
<table class="table--responsive l--mar-top-m l--mar-btm-m">
  <colgroup></colgroup>
  <colgroup span="5"></colgroup>
  <thead>
    <tr>
      <th class="table--header-empty"></th>
      <th class="t--align-right table--group-start">First Byte</th>
      <th class="t--align-right">Start Render</th>
      <th class="t--align-right">Requests</th>
      <th class="t--align-right">Bytes in</th>
      <th class="t--align-right table--group-end">Speed Index</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Typekit fonts</th>
      <td data-label="First Byte" class="t--align-right t--numbers-tabular table--group-start">0.21s</td>
      <td data-label="Start Render" class="t--align-right t--numbers-tabular">0.80s</td>
      <td data-label="Requests" class="t--align-right t--numbers-tabular">8</td>
      <td data-label="Bytes In" class="t--align-right t--numbers-tabular">80 KB</td>
      <td data-label="Speed Index" class="t--align-right t--numbers-tabular table--group-end">0.82s</td>
    </tr>
  </tbody>
</table>
<p>My initial attempt at including a variable version of Source Serif, along with introducing Inter, resulted in a surprisingly substantial <em>increase</em> in most metrics.</p>
<table class="table--responsive l--mar-top-m l--mar-btm-m">
  <colgroup></colgroup>
  <colgroup span="5"></colgroup>
  <thead>
    <tr>
      <th class="table--header-empty"></th>
      <th class="t--align-right table--group-start">First Byte</th>
      <th class="t--align-right">Start Render</th>
      <th class="t--align-right">Requests</th>
      <th class="t--align-right">Bytes in</th>
      <th class="t--align-right table--group-end">Speed Index</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Typekit</th>
      <td data-label="First Byte" class="t--align-right t--numbers-tabular table--group-start">0.21s</td>
      <td data-label="Start Render" class="t--align-right t--numbers-tabular">0.80s</td>
      <td data-label="Requests" class="t--align-right t--numbers-tabular">8</td>
      <td data-label="Bytes In" class="t--align-right t--numbers-tabular">80 KB</td>
      <td data-label="Speed Index" class="t--align-right t--numbers-tabular table--group-end">0.82s</td>
    </tr>
    <tr>
      <th scope="row">Variable</th>
      <td data-label="First Byte" class="t--align-right t--numbers-tabular table--group-start">0.22s</td>
      <td data-label="Start Render" class="t--align-right t--numbers-tabular">
        <span class="c--green t--size-s">(-0.1)</span> 0.70s</td>
      <td data-label="Requests" class="t--align-right t--numbers-tabular">
        <span class="c--green t--size-s">(-2)</span> 6</td>
      <td data-label="Bytes In" class="t--align-right t--numbers-tabular">
        <span class="c--red t--size-s">(+464)</span> 544 KB</td>
      <td data-label="Speed Index" class="t--align-right t--numbers-tabular table--group-end">
        <span class="c--red t--size-s">(+0.19)</span> 1.12s</td>
    </tr>
  </tbody>
</table>
<p>Looking into this, I realized that the variable font files were huge: Inter weighs in at 387kb, making up most of the difference. What happened? I thought variable fonts were supposed to be small?</p>
<p>It turns out that the variable font files I was using include a <em>massive</em> amount of characters: Diacritics for many languages, Cyrillic characters, Greek characters, and so on. I didn’t need most of those; I write in english, and system fonts can support automatic translations.</p>
<p>So I used a tool called <a href="https://github.com/filamentgroup/glyphhanger" target="_blank" rel="noopener">glyphhanger</a> to subset my fonts to just latin characters, removing most of the characters I wouldn’t need. In the case of Inter, this resulted in a 300kb reduction — that’s a <em>78% reduction.</em></p>
<p>With the new subset fonts, my numbers were looking much better:</p>
<table class="table--responsive l--mar-top-m l--mar-btm-m">
  <colgroup></colgroup>
  <colgroup span="5"></colgroup>
  <thead>
    <tr>
      <th class="table--header-empty"></th>
      <th class="t--align-right table--group-start">First Byte</th>
      <th class="t--align-right">Start Render</th>
      <th class="t--align-right">Requests</th>
      <th class="t--align-right">Bytes In</th>
      <th class="t--align-right table--group-end">Speed Index</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Typekit</th>
      <td data-label="First Byte" class="t--align-right t--numbers-tabular table--group-start">0.21s</td>
      <td data-label="Start Render" class="t--align-right t--numbers-tabular">0.80s</td>
      <td data-label="Requests" class="t--align-right t--numbers-tabular">8</td>
      <td data-label="Bytes In" class="t--align-right t--numbers-tabular">80 KB</td>
      <td data-label="Speed Index" class="t--align-right t--numbers-tabular table--group-end">0.82s</td>
    </tr>
    <tr>
      <th scope="row">Variable (subset)</th>
      <td data-label="First Byte" class="t--align-right t--numbers-tabular table--group-start">0.21s</td>
      <td data-label="Start Render" class="t--align-right t--numbers-tabular">
        <span class="c--green t--size-s">(-0.2) </span>0.60s</td>
      <td data-label="Requests" class="t--align-right t--numbers-tabular">
        <span class="c--green  t--size-s">(-2) </span>6</td>
      <td data-label="Bytes In" class="t--align-right t--numbers-tabular">
        <span class="c--red  t--size-s">(+82) </span>162 KB</td>
      <td data-label="Speed Index" class="t--align-right t--numbers-tabular table--group-end">
        <span class="c--green  t--size-s">(-0.17) </span>0.65s</td>
    </tr>
  </tbody>
</table>
<p>Fanstastic! The upsides were great:</p>
<ul>
<li><strong>1 new font</strong>, Inter (previously I was relying on system fonts for sans serif)</li>
<li>Access to the <strong>full spectrum of font weights</strong> (previously I only had regular and bold)</li>
<li>A Speed Index improvement of <strong>21%</strong></li>
</ul>
<p>And there was only one downside:</p>
<ul>
<li>The site downloads an extra 82kb on initial load :(</li>
</ul>
<p>But wait! Because I am serving the fonts myself, I have better control over caching. Before I made this update, I was relying on Typekit’s caching instructions, which only kept the css for a maximum of 10 minutes. Now, 100% of my static assets are cached for more than a week. This means return visitors will experience better performance.</p>
<h2 id="what-i-learned">What I learned</h2>
<p>Wrapping it all up:</p>
<ol>
<li><strong>Variable font support is approaching critical levels for wide adoption</strong> Almost all modern browsers support variable fonts, accounting for <a href="https://caniuse.com/#search=variable%20fonts" target="_blank" rel="noopener">79% of internet users</a>.</li>
<li><strong>There are high-quality variable fonts that you can download and use today</strong> Nick Sherman has created a <a href="https://v-fonts.com/" target="_blank" rel="noopener">variable font repository</a> if you’d like to browse and try what’s available.</li>
<li><strong>Variable fonts can improve performance if you subset carefully</strong> - While it’s not 100% out-of-the-box, there ar easy-to-use subsetting tools like <a href="https://github.com/filamentgroup/glyphhanger" target="_blank" rel="noopener">glyphanger</a> and <a href="https://github.com/fonttools/fonttools" target="_blank" rel="noopener">fonttools</a> that can help you over the finish line.</li>
</ol>
<p>Next time you’re booting up a project, give variable fonts a try.</p>
<h4 id="a-note-on-fallback-fonts">A note on fallback fonts</h4>
<p>Astute readers will note that I chose not to implement fallback fonts for older browsers. The reason for this is twofold: first, I’m lazy. I wanted to ship this update without getting in the weeds. Second, I don’t care if my site doesn’t look identical in all browsers ever. I am confident that it’ll look good in whatever fonts match my detailed <a href="https://gist.github.com/don1138/5761014" target="_blank" rel="noopener">system font stacks</a>.</p>
<hr>
<h2 id="update%3A-safari-12-bug">Update: Safari 12 bug</h2>
<p>When I originall published this post, I was experiencing a weird bug: in Safari, all instances of Inter were rendering in italic. No matter what I did, I couldn’t force Safari to use the normal (upright) version of Inter. I reached out for help:</p>
<blockquote class="twitter-tweet" data-conversation="none" data-dnt="true"><p lang="en" dir="ltr">For some strange reason, Inter shows up in italic on Safari, despite specifying `font-style: normal` in the font-face declaration. Any ideas why? <a href="https://twitter.com/rsms?ref_src=twsrc%5Etfw">@rsms</a> (2/2)</p>&mdash; Matthew Ström (@ilikescience) <a href="https://twitter.com/ilikescience/status/1102259490576052225?ref_src=twsrc%5Etfw">March 3, 2019</a></blockquote> <script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8"></script><br>
<p>My question was almost immediately answered by the creator of Inter, <a href="https://rsms.me/" target="_blank" rel="noopener">Rasmus Andersson</a>:</p>
<blockquote class="twitter-tweet" data-conversation="none" data-dnt="true"><p lang="en" dir="ltr">This is a known bug in Safari with variable fonts. You either need to use the single-axis variable fonts with Safari, or explicitly set the “slnt” axis position to 0 for :root and 1 for em, i, etc.</p>&mdash; Rasmus Andersson (@rsms) <a href="https://twitter.com/rsms/status/1102265361360052224?ref_src=twsrc%5Etfw">March 3, 2019</a></blockquote> <script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<blockquote class="twitter-tweet" data-conversation="none" data-dnt="true"><p lang="en" dir="ltr">Unless you need the intermediate italic grades, I’d recommend using the single-axis version of Inter. Should speed up your page loads in common cases as well (ie when no text is italic.)</p>&mdash; Rasmus Andersson (@rsms) <a href="https://twitter.com/rsms/status/1102267548530176000?ref_src=twsrc%5Etfw">March 3, 2019</a></blockquote> <script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> <br>
<p>And that’s exactly what I did: I replaced the single Inter font file with two files: one for the italic variant and one for the normal variant. As predicted, this fixed the bug. Hooray! Here’s the performance breakdown on a page that uses the same fonts as before (ie no italic sans-serif):</p>
<table class="table--responsive l--mar-top-m l--mar-btm-m">
  <colgroup></colgroup>
  <colgroup span="5"></colgroup>
  <thead>
    <tr>
      <th class="table--header-empty"></th>
      <th class="t--align-right table--group-start">First Byte</th>
      <th class="t--align-right">Start Render</th>
      <th class="t--align-right">Requests</th>
      <th class="t--align-right">Bytes In</th>
      <th class="t--align-right table--group-end">Speed Index</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Typekit</th>
      <td data-label="First Byte" class="t--align-right t--numbers-tabular table--group-start">0.21s</td>
      <td data-label="Start Render" class="t--align-right t--numbers-tabular">0.80s</td>
      <td data-label="Requests" class="t--align-right t--numbers-tabular">8</td>
      <td data-label="Bytes In" class="t--align-right t--numbers-tabular">80 KB</td>
      <td data-label="Speed Index" class="t--align-right t--numbers-tabular table--group-end">0.82s</td>
    </tr>
    <tr>
      <th scope="row">Variable (subset)</th>
      <td data-label="First Byte" class="t--align-right t--numbers-tabular table--group-start">0.21s</td>
      <td data-label="Start Render" class="t--align-right t--numbers-tabular">
        <span class="c--green t--size-s">(-0.2) </span>0.60s</td>
      <td data-label="Requests" class="t--align-right t--numbers-tabular">
        <span class="c--green  t--size-s">(-2) </span>6</td>
      <td data-label="Bytes In" class="t--align-right t--numbers-tabular">
        <span class="c--red  t--size-s">(+82) </span>162 KB</td>
      <td data-label="Speed Index" class="t--align-right t--numbers-tabular table--group-end">
        <span class="c--green  t--size-s">(-0.17) </span>0.65s</td>
    </tr>
     <tr>
      <th scope="row">Variable (single-axis)</th>
      <td data-label="First Byte" class="t--align-right t--numbers-tabular table--group-start">0.20s</td>
      <td data-label="Start Render" class="t--align-right t--numbers-tabular">
        <span class="c--green t--size-s">(-0.2) </span>0.60s</td>
      <td data-label="Requests" class="t--align-right t--numbers-tabular">
        <span class="c--green  t--size-s">(-2) </span>6</td>
      <td data-label="Bytes In" class="t--align-right t--numbers-tabular">
        <span class="c--red  t--size-s">(+97) </span>179 KB</td>
      <td data-label="Speed Index" class="t--align-right t--numbers-tabular table--group-end">
        <span class="c--green  t--size-s">(-0.22) </span>0.60s</td>
    </tr>
  </tbody>
</table>
<p>I’m loading even more data than with the single-axis font (why? I honestly have no idea), but see a net decrease in speed index due to faster rendering. I’ll be exploring this in more detail in the future, but for now, it’s a great start.</p>
<hr>
<section class="footnotes l--space-compact">
<div class="t--weight-bold l--pad-btm-s">Footnotes & References</div>
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>To say that variable fonts are new is slightly misleading. The concept of variable fonts has been around since the <a href="https://eyeondesign.aiga.org/parametric-and-variable-typeface-systems-shape-shifters-for-letterforms/" target="_blank" rel="noopener">1970’s</a>, and the technology to implement variable fonts on the web is <a href="https://medium.com/variable-fonts/https-medium-com-tiro-introducing-opentype-variable-fonts-12ba6cd2369" target="_blank" rel="noopener">at least three years old</a>. Until recently, browsers have been slow to support variable fonts. As of February 2019, however, <a href="https://caniuse.com/#search=variable%20fonts" target="_blank" rel="noopener">79% of internet users</a> benefit from websitses that use variable fonts. <a href="#fnref1" class="footnote-backref">↩︎</a></p>
</li>
<li id="fn2" class="footnote-item"><p>I used <a href="https://www.webpagetest.org/" target="_blank" rel="noopener">https://www.webpagetest.org/</a> for all of these measurements. Each result is the average of 3 runs. <a href="#fnref2" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
