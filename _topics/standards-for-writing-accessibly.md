---
title: "
					Standards for Writing Accessibly				"
date: 2020-01-23 15:20:00 +0000
dateadded: 2021-03-11 17:13:17 +0000
description: "
					
 Writing to meet WCAG2 standards can be a challenge, but it’s worthwhile. Albert Einstein, the archetypical genius and physicist, once said, “Any fool can make things bigger, more complex, and more violent. It takes a touch of genius—and a lot of courage—to move in the opposite direction.” 



 Hopefully, this entire book will help you better write for accessibility. So far, you’ve learned: 



  Why clarity is important  How to structure messages for error states and stress cases  How to test the effectiveness of the words you write  



 All that should help your writing be better for screen readers, give additional context to users who may need it, and be easier to parse. 



 But there are a few specific points that you may not otherwise think about, even after reading these pages.  



 Writing for Screen Readers 



 People with little or no sight interact with apps and websites in a much different way than sighted people do. Screen readers parse the elements on the screen (to the best of their abilities) and read it back to the user. And along the way, there are many ways this could go wrong. As the interface writer, your role is perhaps most important in giving screen reader users the best context. 



 Here are a few things to keep in mind about screen readers: 



  The average reading time for sighted readers is two to five words per second. Screen-reader users can comprehend text being read at an average of 35 syllables per second, which is significantly faster. Don’t be afraid to sacrifice brevity for clarity, especially when extra context is needed or useful.  People want to be able to skim long blocks of text, regardless of sight or audio, so it’s extremely important to structure your longform writing with headers, short paragraphs, and other content design best practices.   



 Write Chronologically, Not Spatially  



 Writing chronologically is about describing the order of things, rather than where they appear spatially in the interface. There are so many good reasons to do this (devices and browsers will render interfaces differently), but screen readers show you the most valuable reason. You’ll often be faced with writing tooltips or onboarding elements that say something like, “Click the OK button below to continue.” Or “See the instructions above to save your document.” 



 Screen readers will do their job and read those instructions aloud to someone who can’t see the spatial relationships between words and objects. While many times, they can cope with that, they shouldn’t have to. Consider screen reader users in your language. Embrace the universal experience shared by humans and rely on their intrinsic understanding of the top is first, bottom is last paradigm. Write chronologically, as in Figure 5.5. 



FIGURE 5.5 Password hint microcopy below the password field won’t help someone using a screen reader who hasn’t made it there yet.



 Rather than saying: 



  Click the OK button below to continue.  (A button that scrolls you to the top of a page): Go to top.  



 Instead, say: 



  Next, select OK to continue.  Go to beginning.  



 Write Left to Right, Top to Bottom 



 While you don’t want to convey spatial meaning in your writing, you still want to keep that spatial order in mind. 



 Have you ever purchased a service or a product, only to find out later that there were conditions you didn’t know about before you paid for it? Maybe you didn’t realize batteries weren’t included in that gadget, or that signing up for that social network, you were implicitly agreeing to provide data to third-party advertisers. 



 People who use screen readers face this all the time. 



 Most screen readers will parse information from left to write, from top to bottom.1 Think about a few things when reviewing the order and placement of your words. Is there information critical to performing an action, or making a decision, that appears after (to the right or below) an action item, like in Figure 5.5? If so, consider moving it up in the interface.  



 Instead, if there’s information critical to an action (rules around setting a password, for example, or accepting terms of service before proceeding), place it before the text field or action button. Even if it’s hidden in a tooltip or info button, it should be presented before a user arrives at a decision point. 



 Don’t Use Colors and Icons Alone  



 If you are a sighted American user of digital products, there’s a pretty good chance that if you see a message in red, you’ll interpret it as a warning message or think something’s wrong. And if you see a message in green, you’ll likely associate that with success. But while colors aid in conveying meaning to this type of user, they don’t necessarily mean the same thing to those from other cultures. 



 For example, although red might indicate excitement, or danger in the U.S. (broadly speaking), in other cultures it means something entirely different: 



  In China, it represents good luck.  In some former-Soviet, eastern European countries it’s the color strongly associated with Communism.  In India, it represents purity.   



 Yellow, which we in the U.S. often use to mean “caution” (because we’re borrowing a mental model from traffic lights), might convey another meaning for people in other cultures: 



  In Latin America, yellow is associated with death.  In Eastern and Asian cultures, it’s a royal color—sacred and often imperial.   



 And what about users with color-blindness or low to no vision? And what about screen readers? Intrinsic meaning from the interface color means nothing for them. Be sure to add words that bear context so that if you heard the message being read aloud, you would understand what was being said, as in Figure 5.6. 



FIGURE 5.6 While a simple in-app message warning a user to save their work before proceeding is more effective, visually, if it is red and has a warning icon, as seen on the left, you should provide more context when possible. The example on the right explicitly says that a user won’t be able to proceed to the next step before saving their work.




 Describe the Action, Not the Behavior 



 Touch-first interfaces have been steadily growing and replacing keyboard/mouse interfaces for years, so no longer are users “clicking” a link or a button. But they’re not necessarily “tapping” it either, especially if they’re using a voice interface or an adaptive device. 



 Instead of microcopy that includes behavioral actions like: 



  Click  Tap  Press  See  



 Try device-agnostic words that describe the action, irrespective of the interface, like: 



  Choose  Select  View  



 There are plenty of exceptions to this rule. If your interface requires a certain action to execute a particular function, and you need to teach the user how their gesture affects the interface (“Pinch to zoom out,” for example), then of course you need to describe the behavior. But generally, the copy you’re writing will be simpler and more consistent if you stick with the action in the context of the interface itself. 
				"
link: "
					https://alistapart.com/article/standards-for-writing-accessibly/				"
category:
directory: _directory/a-list-apart.md
---
