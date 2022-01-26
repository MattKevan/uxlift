---
title: "
					A Content Model Is Not a Design System				"
date: 2021-09-23 14:00:00 +0000
dateadded: 2022-01-26 19:49:50 +0000
description: "
					
 Do you remember when having a great website was enough? Now, people are getting answers from Siri, Google search snippets, and mobile apps, not just our websites. Forward-thinking organizations have adopted an omnichannel content strategy, whose mission is to reach audiences across multiple digital channels and platforms. 



 But how do you set up a content management system (CMS) to reach your audience now and in the future? I learned the hard way that creating a content model—a definition of content types, attributes, and relationships that let people and systems understand content—with my more familiar design-system thinking would capsize my customer’s omnichannel content strategy. You can avoid that outcome by creating content models that are semantic and that also connect related content.&nbsp; 



 I recently had the opportunity to lead the CMS implementation for a Fortune 500 company. The client was excited by the benefits of an omnichannel content strategy, including content reuse, multichannel marketing, and robot delivery—designing content to be intelligible to bots, Google knowledge panels, snippets, and voice user interfaces.&nbsp; 



 A content model is a critical foundation for an omnichannel content strategy, and for our content to be understood by multiple systems, the model needed semantic types—types named according to their meaning instead of their presentation. Our goal was to let authors create content and reuse it wherever it was relevant. But as the project proceeded, I realized that supporting content reuse at the scale that my customer needed required the whole team to recognize a new pattern. 



 Despite our best intentions, we kept drawing from what we were more familiar with: design systems. Unlike web-focused content strategies, an omnichannel content strategy can’t rely on WYSIWYG tools for design and layout. Our tendency to approach the content model with our familiar design-system thinking constantly led us to veer away from one of the primary purposes of a content model: delivering content to audiences on multiple marketing channels. 



 Two essential principles for an effective content model 



 We needed to help our designers, developers, and stakeholders understand that we were doing something very different from their prior web projects, where it was natural for everyone to think about content as visual building blocks fitting into layouts. The previous approach was not only more familiar but also more intuitive—at least at first—because it made the designs feel more tangible. We discovered two principles that helped the team understand how a content model differs from the design systems that we were used to: 



  Content models must define semantics instead of layout.  And content models should connect content that belongs together.  



 Semantic content models 



 A semantic content model uses type and attribute names that reflect the meaning of the content, not how it will be displayed. For example, in a nonsemantic model, teams might create types like teasers, media blocks, and cards. Although these types might make it easy to lay out content, they don’t help delivery channels understand the content’s meaning, which in turn would have opened the door to the content being presented in each marketing channel. In contrast, a semantic content model uses type names like product, service, and testimonial so that each delivery channel can understand the content and use it as it sees fit.&nbsp; 



 When you’re creating a semantic content model, a great place to start is to look over the types and properties defined by Schema.org, a community-driven resource for type definitions that are intelligible to platforms like Google search. 



 A semantic content model has several benefits: 



  Even if your team doesn’t care about omnichannel content, a semantic content model decouples content from its presentation so that teams can evolve the website’s design without needing to refactor its content. In this way, content can withstand disruptive website redesigns.&nbsp;  A semantic content model also provides a competitive edge. By adding structured data based on Schema.org’s types and properties, a website can provide hints to help Google understand the content, display it in search snippets or knowledge panels, and use it to answer voice-interface user questions. Potential visitors could discover your content without ever setting foot in your website.  Beyond those practical benefits, you’ll also need a semantic content model if you want to deliver omnichannel content. To use the same content in multiple marketing channels, delivery channels need to be able to understand it. For example, if your content model were to provide a list of questions and answers, it could easily be rendered on a frequently asked questions (FAQ) page, but it could also be used in a voice interface or by a bot that answers common questions.  



 For example, using a semantic content model for articles, events, people, and locations lets A List Apart provide cleanly structured data for search engines so that users can read the content on the website, in Google knowledge panels, and even with hypothetical voice interfaces in the future. 







 Content models that connect 



 After struggling to describe what makes a good content model, I’ve come to realize that the best models are those that are semantic and that also connect related content components (such as a FAQ item’s question and answer pair), instead of slicing up related content across disparate content components. A good content model connects content that should remain together so that multiple delivery channels can use it without needing to first put those pieces back together. 



 Think about writing an article or essay. An article’s meaning and usefulness depends upon its parts being kept together. Would one of the headings or paragraphs be meaningful on their own without the context of the full article? On our project, our familiar design-system thinking often led us to want to create content models that would slice content into disparate chunks to fit the web-centric layout. This had a similar impact to an article that were to have been separated from its headline. Because we were slicing content into standalone pieces based on layout, content that belonged together became difficult to manage and nearly impossible for multiple delivery channels to understand. 



 To illustrate, let’s look at how connecting related content applies in a real-world scenario. The design team for our customer presented a complex layout for a software product page that included multiple tabs and sections. Our instincts were to follow suit with the content model. Shouldn’t we make it as easy and as flexible as possible to add any number of tabs in the future? 



 Because our design-system instincts were so familiar, it felt like we had needed a content type called “tab section” so that multiple tab sections could be added to a page. Each tab section would display various types of content. One tab might provide the software’s overview or its specifications. Another tab might provide a list of resources.&nbsp; 



 Our inclination to break down the content model into “tab section” pieces would have led to an unnecessarily complex model and a cumbersome editing experience, and it would have also created content that couldn’t have been understood by additional delivery channels. For example, how would another system have been able to tell which “tab section” referred to a product’s specifications or its resource list—would that other system have to have resorted to counting tab sections and content blocks? This would have prevented the tabs from ever being reordered, and it would have required adding logic in every other delivery channel to interpret the design system’s layout. Furthermore, if the customer were to have no longer wanted to display this content in a tab layout, it would have been tedious to migrate to a new content model to reflect the new page redesign. 



A content model based on design components is unnecessarily complex, and it’s unintelligible to systems.



 We had a breakthrough when we discovered that our customer had a specific purpose in mind for each tab: it would reveal specific information such as the software product’s overview, specifications, related resources, and pricing. Once implementation began, our inclination to focus on what’s visual and familiar had obscured the intent of the designs. With a little digging, it didn’t take long to realize that the concept of tabs wasn’t relevant to the content model. The meaning of the content that they were planning to display in the tabs was what mattered. 



 In fact, the customer could have decided to display this content in a different way—without tabs—somewhere else. This realization prompted us to define content types for the software product based on the meaningful attributes that the customer had wanted to render on the web. There were obvious semantic attributes like name and description as well as rich attributes like screenshots, software requirements, and feature lists. The software’s product information stayed together because it wasn’t sliced across separate components like “tab sections” that were derived from the content’s presentation. Any delivery channel—including future ones—could understand and present this content. 



A good content model connects content that belongs together so it can be easily managed and reused.



 Conclusion 



 In this omnichannel marketing project, we discovered that the best way to keep our content model on track was to ensure that it was semantic (with type and attribute names that reflected the meaning of the content) and that it kept content together that belonged together (instead of fragmenting it). These two concepts curtailed our temptation to shape the content model based on the design. So if you’re working on a content model to support an omnichannel content strategy—or even if you just want to make sure that Google and other interfaces understand your content—remember: 



  A design system isn’t a content model. Team members may be tempted to conflate them and to make your content model mirror your design system, so you should protect the semantic value and contextual structure of the content strategy during the entire implementation process. This will let every delivery channel consume the content without needing a magic decoder ring.  If your team is struggling to make this transition, you can still reap some of the benefits by using Schema.org–based structured data in your website. Even if additional delivery channels aren’t on the immediate horizon, the benefit to search engine optimization is a compelling reason on its own.  Additionally, remind the team that decoupling the content model from the design will let them update the designs more easily because they won’t be held back by the cost of content migrations. They’ll be able to create new designs without the obstacle of compatibility between the design and the content, and ​they’ll be ready for the next big thing.&nbsp;  



 By rigorously advocating for these principles, you’ll help your team treat content the way that it deserves—as the most critical asset in your user experience and the best way to connect with your audience. 
				"
link: "
					https://alistapart.com/article/a-content-model-is-not-a-design-system/				"
category:
directory: _directory/a-list-apart.md
---
