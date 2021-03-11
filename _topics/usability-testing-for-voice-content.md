---
title: "
					Usability Testing for Voice Content				"
date: 2020-04-09 14:00:00 +0000
dateadded: 2021-03-11 17:13:17 +0000
description: "
					
 It’s an important time to be in voice design. Many of us are turning to voice assistants in these times, whether for comfort, recreation, or staying informed. As the interest in interfaces driven by voice continues to reach new heights around the world, so too will users’ expectations and the best practices that guide their design. 



 Voice interfaces (also known as voice user interfaces or VUIs) have been reinventing how we approach, evaluate, and interact with user interfaces. The impact of conscious efforts to reduce close contact between people will continue to increase users’ expectations for the availability of a voice component on all devices, whether that entails a microphone icon indicating voice-enabled search or a full-fledged voice assistant waiting patiently in the wings for an invocation. 



 But voice interfaces present inherent challenges and surprises. In this relatively new realm of design, the intrinsic twists and turns in spoken language can make things difficult for even the most carefully considered voice interfaces. After all, spoken language is littered with fillers (in the linguistic sense of utterances like hmm and um), hesitations and pauses, and other interruptions and speech disfluencies that present puzzling problems for designers and implementers alike. 



 Once you’ve built a voice interface that introduces information or permits transactions in a rich way for spoken language users, the easy part is done. Nonetheless, voice interfaces also surface unique challenges when it comes to usability testing and robust evaluation of your end result. But there are advantages, too, especially when it comes to accessibility and cross-channel content strategy. The fact that voice-driven content lies on the opposite extreme of the spectrum from the traditional website confers it an additional benefit: it’s an effective way to analyze and stress-test just how channel-agnostic your content truly is. 



 The quandary of voice usability 



 Several years ago, I led a talented team at Acquia Labs to design and build a voice interface for Digital Services Georgia called Ask GeorgiaGov, which allowed citizens of the state of Georgia to access content about key civic tasks, like registering to vote, renewing a driver’s license, and filing complaints against businesses. Based on copy drawn directly from the frequently asked questions section of the Georgia.gov website, it was the first Amazon Alexa interface integrated with the Drupal content management system ever built for public consumption. Built by my former colleague Chris Hamper, it also offered a host of impressive features, like allowing users to request the phone number of individual government agencies for each query on a topic. 



 Designing and building web experiences for the public sector is a uniquely challenging endeavor due to requirements surrounding accessibility and frequent budgetary challenges. Out of necessity, governments need to be exacting and methodical not only in how they engage their citizens and spend money on projects but also how they incorporate new technologies into the mix. For most government entities, voice is a completely different world, with many potential pitfalls. 



 At the outset of the project, the Digital Services Georgia team, led by Nikhil Deshpande, expressed their most important need: a single content model across all their content irrespective of delivery channel, as they only had resources to maintain a single rendition of each content item. Despite this editorial challenge, Georgia saw Alexa as an exciting opportunity to open new doors to accessible solutions for citizens with disabilities. And finally, because there were relatively few examples of voice usability testing at the time, we knew we would have to learn on the fly and experiment to find the right solution. 



 Eventually, we discovered that all the traditional approaches to usability testing that we’d executed for other projects were ill-suited to the unique problems of voice usability. And this was only the beginning of our problems. 



 How voice interfaces improve accessibility outcomes 



 Any discussion of voice usability must consider some of the most experienced voice interface users: people who use assistive devices. After all, accessibility has long been a bastion of web experiences, but it has only recently become a focus of those implementing voice interfaces. In a world where refreshable Braille displays and screen readers prize the rendering of web-based content into synthesized speech above all, the voice interface seems like an anomaly. But in fact, the exciting potential of Amazon Alexa for disabled citizens represented one of the primary motivations for Georgia’s interest in making their content available through a voice assistant. 



 Questions surrounding accessibility with voice have surfaced in recent years due to the perceived user experience benefits that voice interfaces can offer over more established assistive devices. Because screen readers make no exceptions when they recite the contents of a page, they can occasionally present superfluous information and force the user to wait longer than they’re willing. In addition, with an effective content schema, it can often be the case that voice interfaces facilitate pointed interactions with content at a more granular level than the page itself. 



 Though it can be difficult to convince even the most forward-looking clients of accessibility’s value, Georgia has been not only a trailblazer but also a committed proponent of content accessibility beyond the web. The state was among the first jurisdictions to offer a text-to-speech (TTS) phone hotline that read web pages aloud. After all, state governments must serve all citizens equally—no ifs, ands, or buts. And while these are still early days, I can see voice assistants becoming new conduits, and perhaps more efficient channels, by which disabled users can access the content they need. 



 Managing content destined for discrete channels 



 Whereas voice can improve accessibility of content, it’s seldom the case that web and voice are the only channels through which we must expose information. For this reason, one piece of advice I often give to content strategists and architects at organizations interested in pursuing voice-driven content is to never think of voice content in isolation. Siloing it is the same misguided approach that has led to mobile applications and other discrete experiences delivering orphaned or outdated content to a user expecting that all content on the website should be up-to-date and accessible through other channels as well. 



 After all, we’ve trained ourselves for many years to think of content in the web-only context rather than across channels. Our closely held assumptions about links, file downloads, images, and other web-based marginalia and miscellany are all aspects of web content that translate poorly to the conversational context—and particularly the voice context. Increasingly, we all need to concern ourselves with an omnichannel content strategy that straddles all those channels in existence today and others that will doubtlessly surface over the horizon. 



 With the advantages of structured content in Drupal 7, Georgia.gov already had a content model amenable to interlocution in the form of frequently asked questions (FAQs). While question-and-answer formats are convenient for voice assistants because queries for content tend to come in the form of questions, the returned responses likewise need to be as voice-optimized as possible. 



 For Georgia.gov, the need to preserve a single rendition of all content across all channels led us to perform a conversational content audit, in which we read aloud all of the FAQ pages, putting ourselves in the shoes of a voice user, and identified key differences between how a user would interpret the written form and how they would parse the spoken form of that same content. After some discussion with the editorial team at Georgia, we opted to limit calls to action (e.g., “Read more”), links lacking clear context in surrounding text, and other situations confusing to voice users who cannot visualize the content they are listening to. 



 Here’s a table containing examples of how we converted certain text on FAQ pages to counterparts more appropriate for voice. Reading each sentence aloud, one by one, helped us identify cases where users might scratch their heads and say “Huh?” in a voice context. 







Before
After




Learn how to change your name on your Social Security card.
The Social Security Administration can help you change your name on your Social Security card.


You can receive payments through either a debit card or direct deposit. Learn more about payments.
You can receive payments through either a debit card or direct deposit.


Read more about this.
In Georgia, the Family Support Registry typically pulls payments directly from your paycheck. However, you can send your own payments online through your bank account, your credit card, or Western Union. You may also send your payments by mail to the address provided in your court order.







 In areas like content strategy and content governance, content audits have long been key to understanding the full picture of your content, but it doesn’t end there. Successful content audits can run the gamut from automated checks for orphaned content or overly wordy articles to more qualitative analyses of how content adheres to a specific brand voice or certain design standards. For a content strategy truly prepared for channels both here and still to come, a holistic understanding of how users will interact with your content in a variety of situations is a baseline requirement today. 



 Other conversational interfaces have it easier 



 Spoken language is inherently hard. Even the most gifted orators can have trouble with it. It’s littered with mistakes, starts and stops, interruptions, hesitations, and a vertiginous range of other uniquely human transgressions. The written word, because it’s committed instantly to a mostly permanent record, is tame, staid, and carefully considered in comparison. 



 When we talk about conversational interfaces, we need to draw a clear distinction between the range of user experiences that traffic in written language rather than spoken language. As we know from the relative solidity of written language and literature versus the comparative transience of spoken language and oral traditions, in many ways the two couldn’t be more different from one another. The implications for designers are significant because spoken language, from the user’s perspective, lacks a graphical equivalent to which those scratching their head can readily refer. We’re dealing with the spoken word and aural affordances, not pixels, written help text, or visual affordances. 



 Why written conversational interfaces are easier to evaluate 



 One of the privileges that chatbots and textbots enjoy over voice interfaces is the fact that by design, they can’t hide the previous steps users have taken. Any conversational interface user working in the written medium has access to their previous history of interactions, which can stretch back days, weeks, or months: the so-called backscroll. A flight passenger communicating with an airline through Facebook Messenger, for example, knows that they can merely scroll up in the chat history to confirm that they’ve already provided the company with their e-ticket number or frequent flyer account information. 



 This has outsize implications for information architecture and conversational wayfinding. Since chatbot users can consult their own written record, it’s much harder for things to go completely awry when they make a move they didn’t intend. Recollection is much more difficult when you have to remember what you said a few minutes ago off the top of your head rather than scrolling up to the information you provided a few hours or weeks ago. An effective chatbot interface may, for example, enable a user to jump back to a much earlier, specific place in a conversation’s history.An effective chatbot interface may, for example, enable a user to jump back to a much earlier, specific place in a conversation’s history. Voice interfaces that live perpetually in the moment have no such luxury. 



 Eye tracking only works for visual components 



 In many cases, those who work with chatbots and messaging bots (especially those leveraging text messages or other messaging services like Facebook Messenger, Slack, or WhatsApp) have the unique privilege of benefiting from a visual component. Some conversational interfaces now insert other elements into the conversational flow between a machine and a person, such as embedded conversational forms (like SPACE10’s Conversational Form) that allow users to enter rich input or select from a range of possible responses. 



 The success of eye tracking in more traditional usability testing scenarios highlights its appropriateness for visual interfaces such as websites, mobile applications, and others. However, from the standpoint of evaluating voice interfaces that are entirely aural, eye tracking serves only the limited (but still interesting from a research perspective) purpose of assessing where the test subject is looking while speaking with an invisible interlocutor—not whether they are able to use the interface successfully. Indeed, eye tracking is only a viable option for voice interfaces that have some visual component, like the Amazon Echo Show. 



 Think-aloud and concurrent probing interrupt the conversational flow 



 A well-worn approach for usability testing is think-aloud, which allows for users working with interfaces to present their frequently qualitative impressions of interfaces verbally while interacting with the user experience in question. Paired with eye tracking, think-aloud adds considerable dimension to a usability test for visual interfaces such as websites and web applications, as well as other visually or physically oriented devices. 



 Another is concurrent probing (CP). Probing involves the use of questions to gather insights about the interface from users, and Usability.gov describes two types: concurrent, in which the researcher asks questions during interactions, and retrospective, in which questions only come once the interaction is complete. 



 Conversational interfaces that utilize written language rather than spoken language can still be well-suited to think-aloud and concurrent probing approaches, especially for the components in the interface that require manual input, like conversational forms and other traditional UI elements interspersed throughout the conversation itself. 



 But for voice interfaces, think-aloud and concurrent probing are highly questionable approaches and can catalyze a variety of unintended consequences, including accidental invocations of trigger words (such as Alexa mishearing “selected” as “Alexa”) and introduction of bad data (such as speech transcription registering both the voice interface and test subject). After all, in a hypothetical think-aloud or CP test of a voice interface, the user would be responsible for conversing with the chatbot while simultaneously offering up their impressions to the evaluator overseeing the test. 



 Voice usability tests with retrospective probing 



 Retrospective probing (RP), a lesser-known approach for usability testing, is seldom seen in web usability testing due to its chief weakness: the fact that we have awful memories and rarely remember what occurred mere moments earlier with anything that approaches total accuracy. (This might explain why the backscroll has joined the pantheon of rigid recordkeeping currently occupied by cuneiform, the printing press, and other means of concretizing information.) 



 For users of voice assistants lacking scrollable chat histories, retrospective probing introduces the potential for subjects to include false recollections in their assessments or to misinterpret the conclusion of their conversations. That said, retrospective probing permits the participant to take some time to form their impressions of an interface rather than dole out incremental tidbits in a stream of consciousness, as would more likely occur in concurrent probing. 



 What makes voice usability tests unique 



 Voice usability tests have several unique characteristics that distinguish them from web usability tests or other conversational usability tests, but some of the same principles unify both visual interfaces and their aural counterparts. As always, “test early, test often” is a mantra that applies here, as the earlier you can begin testing, the more robust your results will be. Having an individual to administer a test and another to transcribe results or watch for signs of trouble is also an effective best practice in settings beyond just voice usability. 



 Interference from poor soundproofing or external disruptions can derail a voice usability test even before it begins. Many large organizations will have soundproof rooms or recording studios available for voice usability researchers. For the vast majority of others, a mostly silent room will suffice, though absolute silence is optimal. In addition, many subjects, even those well-versed in web usability tests, may be unaccustomed to voice usability tests in which long periods of silence are the norm to establish a baseline for data. 



 How we used retrospective probing to test Ask GeorgiaGov 



 For Ask GeorgiaGov, we used the retrospective probing approach almost exclusively to gather a range of insights about how our users were interacting with voice-driven content. We endeavored to evaluate interactions with the interface early and diachronically. In the process, we asked each of our subjects to complete two distinct tasks that would require them to traverse the entirety of the interface by asking questions (conducting a search), drilling down into further questions, and requesting the phone number for a related agency. Though this would be a significant ask of any user working with a visual interface, the unidirectional focus of voice interface flows, by contrast, reduced the likelihood of lengthy accidental detours. 



 Here are a couple of example scenarios: 




 
 You have a business license in Georgia, but you’re not sure if you have to register on an annual basis. Talk with Alexa to find out the information you need. At the end, ask for a phone number for more information. 
 You’ve just moved to Georgia and you know you need to transfer your driver’s license, but you’re not sure what to do. Talk with Alexa to find out the information you need. At the end, ask for a phone number for more information. 
 




 We also peppered users with questions after the test concluded to learn about their impressions through retrospective probing: 



  “On a scale of 1–5, based on the scenario, was the information you received helpful? Why or why not?”  “On a scale of 1–5, based on the scenario, was the content presented clear and easy to follow? Why or why not?”  “What’s the answer to the question that you were tasked with asking?”  



 Because state governments also routinely deal with citizen questions having to do with potentially traumatic issues such as divorce and sexual harassment, we also offered the choice for participants to opt out of certain categories of tasks. 



 While this testing procedure yielded compelling results that indicated our voice interface was performing at the level it needed to despite its experimental nature, we also ran into considerable challenges during the usability testing process. Restoring Amazon Alexa to its initial state and troubleshooting issues on the fly proved difficult during the initial stages of the implementation, when bugs were still common. 



 In the end, we found that many of the same lessons that apply to more storied examples of usability testing were also relevant to Ask GeorgiaGov: the importance of testing early and testing often, the need for faithful yet efficient transcription, and the surprising staying power of bugs when integrating disparate technologies. Despite Ask GeorgiaGov’s many similarities to other interface implementations in terms of technical debt and the role of usability testing, we were overjoyed to hear from real Georgians whose engagement with their state government could not be more different from before. 



 Conclusion 



 Many of us may be building interfaces for voice content to experiment with newfangled channels, or to build for disabled people and people newer to the web. Now, they are necessities for many others, especially as social distancing practices continue to take hold worldwide. Nonetheless, it’s crucial to keep in mind that voice should be only one component of a channel-agnostic strategy equipped for content ripped away from its usual contexts. Building usable voice-driven content experiences can teach us a great deal about how we should envisage our milieu of content and its future in the first place. 



 Gone are the days when we could write a page in HTML and call it a day; content now needs to be rendered through synthesized speech, augmented reality overlays, digital signage, and other environments where users will never even touch a personal computer. By focusing on structured content first and foremost with an eye toward moving past our web-based biases in developing our content for voice and others, we can better ensure the effectiveness of our content on any device and in any form factor. 



 Eight months after we finished building Ask GeorgiaGov in 2017, we conducted a retrospective to inspect the logs amassed over the past year. The results were striking. Vehicle registration, driver’s licenses, and the state sales tax comprised the most commonly searched topics. 79.2% of all interactions were successful, an achievement for one of the first content-driven Alexa skills in production, and 71.2% of all interactions led to the issuance of a phone number that users could call for further information. 



 But deep in the logs we implemented for the Georgia team’s convenience, we found a number of perplexing 404 Not Found errors related to a search term that kept being recorded over and over again as “Lawson’s.” After some digging and consulting the native Georgians in the room, we discovered that one of our dear users with a particularly strong drawl was repeatedly pronouncing “license” in her native dialect to no avail. 



 As this anecdote highlights, just as no user experience can be truly perfect for everyone, voice content is an environment where imperfections can highlight considerations we missed in developing cross-channel content. And just as we have much to learn when it comes to the new shapes content can take as it jumps off the screen and out the window, it seems our voice interfaces still have a ways to go before they take over the world too. 



 Special thanks to Nikhil Deshpande for his feedback during the writing process. 
				"
link: "
					https://alistapart.com/article/usability-testing-for-voice-content/				"
category:
directory: _directory/a-list-apart.md
---
