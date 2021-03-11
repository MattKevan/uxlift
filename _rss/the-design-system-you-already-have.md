---
title: "The design system you already have"
date: 2021-03-11 13:47:36 +0000
dateadded: 2021-03-11 13:47:36 +0000
description: ""
link: "https://matthewstrom.com/writing/the-design-system-you-already-have/"
category:
directory:
- _directory/matthew-ström.md
---
<figure data-type="image"><img src="https://matthewstrom.com/images/ds-0.jpg" alt="I’m so sorry"><figcaption>I’m so sorry</figcaption></figure>
<p>With beautiful design systems like <a href="https://polaris.shopify.com/" target="_blank" rel="noopener">Polaris</a>, <a href="https://www.lightningdesignsystem.com/" target="_blank" rel="noopener">Lightning</a>, and <a href="https://www.carbondesignsystem.com/" target="_blank" rel="noopener">Carbon</a> for inspiration, it’s tempting to open up a Sketch file and start your own. A fresh start: all the freedom in the world. Finally, a great-looking date picker.</p>
<p>But wait! <strong>You already have a design system.</strong></p>
<p>If you look close enough at your production code, you’ll see the tell-tale signs. Your engineering friends can point out the components (what you might call molecules or atoms) and variables (design tokens). Ask the engineers how and why they wrote the code: you’ll hear many of the same concepts that designers use when creating a design system.</p>
<p>This underwhelming realization is what I like to call a Black Triangle moment, after <a href="http://rampantgames.com/blog/?p=7745" target="_blank" rel="noopener">Jay Barnson’s story of building games</a>:</p>
<div style="background: rgba(0, 0, 0, 0.075); padding: 1.25em; margin: 3em 0">
<p><span style="color: #333; float: left; font-size: 2.5em; line-height: 1; margin-right: 10px;">▲</span> In October of 1994, I’d just started as an honest-to-goodness videogame programmer at a small startup called SingleTrac which later went on to fame and glory (but unfortunately not much in the way of fortune) with such titles as <strong>Warhawk</strong>, the <strong>Twisted Metal</strong> series, and the <strong>Jet Moto</strong> series. But at the time, the company was less than 20 employees in size and had only been officially in business for about a month. It was sometime in my first week possibly my first or second day. In the main engineering room, there was a whoop and cry of success.</p>
<p>Our company financial controller and acting HR lady, Jen, came in to see what incredible things the engineers and artists had come up with. Everyone was staring at a television set hooked up to a development box for the Sony Playstation. There, on the screen, against a single-color background, was a black triangle.</p>
<p>“It’s a black triangle,” she said in an amused but sarcastic voice. One of the engine programmers tried to explain, but she shook her head and went back to her office. I could almost hear her thoughts… “We’ve got ten months to deliver two games to Sony, and they are cheering over a black triangle? <em>THAT</em> took them nearly a month to develop?”</p>
<p>What she later came to realize (and explain to others) was that the black triangle was a pioneer. It wasn’t just that we’d managed to get a triangle onto the screen. That could be done in about a day. It was the journey the triangle had taken to get up on the screen. It had passed through our new modeling tools, through two different intermediate converter programs, had been loaded up as a complete database, and been rendered through a fairly complex scene hierarchy, fully textured and lit (though there were no lights, so the triangle came out looking black). The black triangle demonstrated that the foundation was finally complete the core of a fairly complex system was completed, and we were now ready to put it to work doing cool stuff. By the end of the day, we had complete models on the screen, manipulating them with the controllers. Within a week, we had an environment to move the model through.</p>
<p>- <a href="http://rampantgames.com/blog/?p=7745" target="_blank" rel="noopener">Jay Barnson</a></p>
</div>
<p>Your design system probably doesn’t look as clean and user-friendly as <a href="https://atlassian.design/" target="_blank" rel="noopener">Atlassian’s Design System</a>, or as thoughtful and extensible as <a href="https://material.io/" target="_blank" rel="noopener">Material</a>. But if you’ve used Gmail lately, you know the truth: not even Google’s design system looks as good as Material.</p>
<p>Instead of drawing a whole new set of components, start with the components you already have in production. Document them meticulously. Create a single source of truth for design, warts and all. Work with engineering to automate the process of deploying components — even if you don’t change the design at all.</p>
<p>Build your own Black Triangle, then move on to the cool stuff.</p>
