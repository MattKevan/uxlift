---
title: "
					Making Room for Variation				"
date: 2019-12-12 14:30:03 +0000
dateadded: 2021-03-11 17:13:17 +0000
description: "
					
 Making a brand feel unified, cohesive, and harmonious while also leaving
room for experimentation is a tough balancing act. It’s one of the most
challenging aspects of a design system.  



 Graphic designer and Pentagram partner Paula Scher faced this
challenge with the visual identity for the Public Theater in New York. As she
explained in a talk at Beyond Tellerrand:  




 
 I began to realize that if you made everything the same, it
was boring after the first year. If you changed it individually for each play,
the theater lost recognizability. The thing to do, which I totally got for the
first time after working there at this point for 17 years, is what they needed
to have were seasons.  
 You could take the typography and the color system for the summer festival, the Shakespeare in the Park Festival, and you could begin to translate it into posters by flopping the colors, but using some of the same motifs, and you could create entire seasons out of the graphics. That would become its own standards manual where I have about six different people making these all year (http://bkaprt.com/eds/04-01/). 
 




 Scher’s strategy was to retain the Public Theater’s visual language every year, but to vary some of its elements (Fig 4.1–2). Colors would be swapped. Text would skew in different directions. New visual motifs would be introduced. The result is that each season coheres in its own way, but so does the identity of the Public Theater as a whole.  



Fig 4.1: The posters for the 2014/15 season featured the wood type style the Public Theater is known for, but the typography was skewed. The color palette was restrained to yellow, black, and white, which led to a dynamic look when coupled with the skewed type (http://bkaprt.com/eds/04-02/).



Fig 4.2: For the 2018 season, the wood type letterforms were extended on a field of gradated color. The grayscale cut-out photos we saw in the 2014/15 season persisted, but this time in lower contrast to fit better with the softer color tones (http://bkaprt.com/eds/04-03/).



 Even the most robust or thoroughly planned systems will need to account for variation at some point. As soon as you release a design system, people will ask you how to deviate from it, and you’ll want to be armed with persuasive answers. In this chapter, I’m going to talk about what variation means for a design system, how to know when you need it, and how to manage it in a scalable way.  



 What Is Variation? 



 We’ve spent most of this book talking about the importance of
unity, cohesion, and harmony in a design system. So why are we talking about
variation? Isn’t that at odds with all of the goals we’ve set until now?  



 Variation is a deviation from established patterns, and it can
exist at every level of the system. At the component level, for instance, a
team may discover that they need a component to behave in a slightly different
way; maybe this particular component needs to appear without a photo, for
example. At a design-language level, you may have a team that has a different
audience, so they want to adjust their brand identity to serve that audience
better. You can even have variation at the level of design principles: if a
team is working on a product that is functionally different from your core
product, they may need to adjust their principles to suit that context.  



 There are three kinds of deviations that come up in a design
system: 



  Unintentional divergence typically happens when designers can’t find the information they’re looking for. They may not know that a certain solution exists within a system, so they create their own style. Clear, easy-to-find documentation and usage guidelines can help your team avoid unintentional variation.  Intentional but unnecessary divergence usually results from designers not wanting to feel constrained by the system, or believing they have a better solution. Making sure your team knows how to push back on and contribute to the system can help mitigate this kind of variation.   Intentional, meaningful divergence is the goal of an expressive design system. In this case, the divergence is meaningful because it solves a very specific user problem that no existing pattern solves.  



 We want to enable intentional, meaningful variation. To do this, we need to understand the needs and contexts for variation. 



 Contexts for Variation  



 Every variation we add makes our design system more complicated. Therefore, we need to take care to find the right moments for variation. Three big contextual changes are served by variation: brand, audience, and environment.  



 Brand 



 If you’re creating a system for multiple brands, each with its own
brand language, then your system needs to support variations to reflect those
brands.  



 The key here is to find the common core elements and then set
some criteria for how you should deviate. When we were creating the design
system for our websites at Vox Media, we constantly debated which elements
should feel more expressive. Should a footer be standardized, or should we
allow for tons of customization? We went back to our core goals: our users were
ultimately visiting our websites to consume editorial content. So the
variations should be in service of the content, writing style, and tone of
voice for each brand.  



 The newsletter modules across Vox Media brands were an example of unnecessary variation. They were consistent in functionality and layout, but had variations in type, color, and visual treatments like borders (Fig 4.3). There was quite a bit of custom design within a very small area: Curbed’s newsletter component had a skewed background, for example, while Eater’s had a background image. Because these modules were so consistent in their user goals, we decided to unify their design and create less variation (Fig 4.4). 







Fig 4.3: Older versions of Vox Media’s newsletter modules contained lots of unnecessary visual variation.




Fig 4.4: The new, unified newsletter modules.



 The unified design cleaned up some technical debt. In the
previous design, each newsletter module had CSS overrides to achieve distinct
styling. Some modules even had overrides on the primary button color so it
would work better with the background color. Little CSS overrides like this add
up over time. Whenever we released a new change, we’d have to manually update
the spots containing CSS overrides.  



 The streamlined design also placed a more appropriate emphasis on
the newsletter module. While important, this module isn’t the star of the page.
It doesn’t need loud backgrounds or fancy shapes to command attention,
especially since it’s placed around article content. Variation in this module
wasn’t necessary for expressing the brands. 



 On the other hand, consider the variation in Vox Media’s global header components. When we were redesigning the Verge, its editorial teams were vocal about wanting more latitude to art-direct the page, guide attention toward big features, and showcase custom illustrations. We addressed this by creating a masthead component (Fig 4.5) that sits on top of the global header on homepages. It contains a logo, tagline, date, and customizable background image. Though at the time this was a one-off component, we felt that the variation was valuable because it would strengthen the Verge’s brand voice.  






Fig 4.5: Examples of the Verge's masthead component



 The Verge team commissions or makes original art that changes throughout the day. The most exciting part is that they can use the masthead and a one-up hero when they drop a big feature and use these flexible components to art-direct the page (Fig 4.6). Soon after launch, the Verge masthead even got a Twitter fan account (@VergeTaglines) that tweets every time the image changes.  






Fig 4.6: The Verge uses two generic components, the masthead and one-up hero, to art-direct its homepages.



 Though this component was built specifically for the Verge, it soon gained broader application with other brands that share Vox’s publishing platform, Chorus. The McElroy Family website, for example, needed to convey its sense of humor and Appalachian roots; the masthead component shines with an original illustration featuring an adorable squirrel (Fig 4.7).  



Fig 4.7: The McElroy Family site uses the same masthead component as the Verge to display a custom illustration.



Fig 4.8: The same masthead component on the Chicago Sun-Times site.



 The Chicago Sun-Times—another Chorus platform site—is very different in content, tone, and audience from The McElroy Family, but the masthead component is just as valuable in conveying the tone of the organization’s high-quality investigative journalism and breaking news coverage (Fig 4.8).  



 Why did the masthead variation work well while the newsletter variation didn’t? The variations on the newsletter design were purely visual. When we created them, we didn’t have a strategy for how variation should work; instead, we were looking for any opportunity to make the brands feel distinct. The masthead variation, by contrast, tied directly into the brand strategy. Even though it began as a one-off for the Verge, it was flexible and purposeful enough to migrate to other brands.  



 Audience 



 The next contextual variation comes from audience. If your
products serve different audiences who all need different things, then your
system may need to adapt to fit those needs.  



 A good example of this is Airbnb’s listing pages. In addition to
their standard listings, they also have Airbnb Plus—one-of-a-kind, high quality
rentals at higher price points. Audiences booking a Plus listing are probably
looking for exceptional quality and attention to detail.  



 Both Airbnb’s standard listing page and Plus listing page are immediately recognizable as belonging to the same family because they use many consistent elements (Fig 4.9). They both use Airbnb’s custom font, Cereal. They both highlight photography. They both use many of the same components, like the date picker. The iconography is the same. 






Fig 4.9: The same brand elements in Airbnb’s standard listings (above) are used in their Plus listings (below), but with variations that make the listing styles distinct.



 However, some of the
design choices convey a different attitude. Airbnb Plus uses larger
typography, airier vertical space, and a lighter weight of Cereal. It has a
more understated color palette, with a deeper color on the call to action.
These choices make Airbnb Plus feel like a more premium experience. You can see
they’ve adjusted the density, weight, and scale levers to achieve a more
elegant and sophisticated aesthetic.  



 The standard listing page, on the other hand, is more functional,
with the booking module front and center. The Plus design pulls the density and
weight levers in a lighter, airier direction. The standard listing page has
less size contrast between elements, making it feel more functional.  



 Because they use the same core building blocks—the same typography, iconography, and components—both experiences feel like Airbnb. However, the variations in spacing, typographic weights, and color help distinguish the standard listing from the premium listing. 



 Environment 



 I’ve mainly been talking about adding variation to a system to
allow for a range of content tones, but you may also need your system to scale
based on environmental contexts. “Environment” in this context asks: Where will
your products be used? Will that have an impact on the experience? Environments
are the various constraints and pressures that surround and inform an
experience. That can include lighting, ambient noise, passive or active
engagement, expected focus level, or devices.  



 Shopify’s Polaris design system initially grew out of Shopify’s Store
Management product. When the Shopify Retail team kicked off a project to design
the next generation point-of-sale (POS) system, they realized that the
patterns in Polaris didn’t exactly fit their needs. The POS system needed to
work well in a retail space, often under bright lighting. The app needed to be
used at arm’s length, twenty-four to thirty-six inches away from the merchant.
And unlike the core admin, where the primary interaction is between the
merchant and the UI, merchants using the POS system needed to prioritize their
interactions with their customers instead of the UI. The Retail team wanted
merchants to achieve an “eyes-closed” level of mastery over the UI so they
could maintain eye contact with their customers.  



 The Retail team decided that the existing color palette, which
only worked on a light background, would not be clear enough under the bright
lights of a retail shop. The type scale was also too small to be used at arm’s
length. And in order for merchants to use the POS system without breaking eye
contact with customers, the buttons and other UI elements would need to be much
larger.  



 The Retail team recognized that the current design system didn’t support a variety of environmental scenarios. But after talking with the Polaris team, they realized that other teams would benefit from the solutions they created. The Warehouse team, for example, was also developing an app that needed to be used at arm’s length under bright lights. This work inspired the Polaris team to create a dark mode for the system (Fig 4.10).  



Fig 4.10: Polaris light mode (left) and dark mode (right).



 This feedback loop between product team and design system team is
a great example of how to build the right variation into your system. Build
your system around helping your users navigate your product more clearly and serving
content needs and you’ll unlock scalable expression.  
				"
link: "
					https://alistapart.com/article/making-room-for-variation/				"
category:
directory: _directory/a-list-apart.md
---
