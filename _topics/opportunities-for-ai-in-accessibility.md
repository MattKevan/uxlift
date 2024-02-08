---
title: "
					Opportunities for AI in Accessibility				"
date: 2024-02-07 14:00:00 +0000
dateadded: 2024-02-08 00:01:45 +0000
description: "
					
 In reading Joe Dolson’s recent piece on the intersection of AI and accessibility, I absolutely appreciated the skepticism that he has for AI in general as well as for the ways that many have been using it. In fact, I’m very skeptical of AI myself, despite my role at Microsoft as an accessibility innovation strategist who helps run the AI for Accessibility grant program. As with any tool, AI can be used in very constructive, inclusive, and accessible ways; and it can also be used in destructive, exclusive, and harmful ones. And there are a ton of uses somewhere in the mediocre middle as well. 



 I’d like you to consider this a “yes… and” piece to complement Joe’s post. I’m not trying to refute any of what he’s saying but rather provide some visibility to projects and opportunities where AI can make meaningful differences for people with disabilities. To be clear, I’m not saying that there aren’t real risks or pressing issues with AI that need to be addressed—there are, and we’ve needed to address them, like, yesterday—but I want to take a little time to talk about what’s possible in hopes that we’ll get there one day. 



 Alternative text 



 Joe’s piece spends a lot of time talking about computer-vision models generating alternative text. He highlights a ton of valid issues with the current state of things. And while computer-vision models continue to improve in the quality and richness of detail in their descriptions, their results aren’t great. As he rightly points out, the current state of image analysis is pretty poor—especially for certain image types—in large part because current AI systems examine images in isolation rather than within the contexts that they’re in (which is a consequence of having separate “foundation” models for text analysis and image analysis). Today’s models aren’t trained to distinguish between images that are contextually relevant (that should probably have descriptions) and those that are purely decorative (which might not need a description) either. Still, I still think there’s potential in this space. 



 As Joe mentions, human-in-the-loop authoring of alt text should absolutely be a thing. And if AI can pop in to offer a starting point for alt text—even if that starting point might be a prompt saying What is this BS? That’s not right at all… Let me try to offer a starting point—I think that’s a win. 



 Taking things a step further, if we can specifically train a model to analyze image usage in context, it could help us more quickly identify which images are likely to be decorative and which ones likely require a description. That will help reinforce which contexts call for image descriptions and it’ll improve authors’ efficiency toward making their pages more accessible. 



 While complex images—like graphs and charts—are challenging to describe in any sort of succinct way (even for humans), the image example shared in the GPT4 announcement points to an interesting opportunity as well. Let’s suppose that you came across a chart whose description was simply the title of the chart and the kind of visualization it was, such as: Pie chart comparing smartphone usage to feature phone usage among US households making under $30,000 a year. (That would be a pretty awful alt text for a chart since that would tend to leave many questions about the data unanswered, but then again, let’s suppose that that was the description that was in place.) If your browser knew that that image was a pie chart (because an onboard model concluded this), imagine a world where users could ask questions like these about the graphic: 



 
 Do more people use smartphones or feature phones? 



 How many more? 



 Is there a group of people that don’t fall into either of these buckets? 



 How many is that? 
 



 Setting aside the realities of large language model (LLM) hallucinations—where a model just makes up plausible-sounding “facts”—for a moment, the opportunity to learn more about images and data in this way could be revolutionary for blind and low-vision folks as well as for people with various forms of color blindness, cognitive disabilities, and so on. It could also be useful in educational contexts to help people who can see these charts, as is, to understand the data in the charts. 



 Taking things a step further: What if you could ask your browser to simplify a complex chart? What if you could ask it to isolate a single line on a line graph? What if you could ask your browser to transpose the colors of the different lines to work better for form of color blindness you have? What if you could ask it to swap colors for patterns? Given these tools’ chat-based interfaces and our existing ability to manipulate images in today’s AI tools, that seems like a possibility. 



 Now imagine a purpose-built model that could extract the information from that chart and convert it to another format. For example, perhaps it could turn that pie chart (or better yet, a series of pie charts) into more accessible (and useful) formats, like spreadsheets. That would be amazing! 



 Matching algorithms 



 Safiya Umoja Noble absolutely hit the nail on the head when she titled her book Algorithms of Oppression. While her book was focused on the ways that search engines reinforce racism, I think that it’s equally true that all computer models have the potential to amplify conflict, bias, and intolerance. Whether it’s Twitter always showing you the latest tweet from a bored billionaire, YouTube sending us into a Q-hole, or Instagram warping our ideas of what natural bodies look like, we know that poorly authored and maintained algorithms are incredibly harmful. A lot of this stems from a lack of diversity among the people who shape and build them. When these platforms are built with inclusively baked in, however, there’s real potential for algorithm development to help people with disabilities. 



 Take Mentra, for example. They are an employment network for neurodivergent people. They use an algorithm to match job seekers with potential employers based on over 75 data points. On the job-seeker side of things, it considers each candidate’s strengths, their necessary and preferred workplace accommodations, environmental sensitivities, and so on. On the employer side, it considers each work environment, communication factors related to each job, and the like. As a company run by neurodivergent folks, Mentra made the decision to flip the script when it came to typical employment sites. They use their algorithm to propose available candidates to companies, who can then connect with job seekers that they are interested in; reducing the emotional and physical labor on the job-seeker side of things. 



 When more people with disabilities are involved in the creation of algorithms, that can reduce the chances that these algorithms will inflict harm on their communities. That’s why diverse teams are so important. 



 Imagine that a social media company’s recommendation engine was tuned to analyze who you’re following and if it was tuned to priorite follow recommendations for people who talked about similar things but who were different in some key ways from your existing sphere of influence. For example, if you were to follow a bunch of nondisabled white male academics who talk about AI, it could suggest that you follow academics who are disabled or aren’t white or aren’t male who also talk about AI. If you took its recommendations, perhaps you’d get a more holistic and nuanced understanding of what’s happening in the AI field. These same systems should also use their understanding of biases about particular communities—including, for instance, the disability community—to make sure that they aren’t recommending any of their users follow accounts that perpetuate biases against (or, worse, spewing hate toward) those groups. 



 Other ways that AI can helps people with disabilities 



 If I weren’t trying to put this together between other tasks, I’m sure that I could go on and on, providing all kinds of examples of how AI could be used to help people with disabilities, but I’m going to make this last section into a bit of a lightning round. In no particular order: 



 
 Voice preservation. You may have seen the VALL-E paper or Apple’s Global Accessibility Awareness Day announcement or you may be familiar with the voice-preservation offerings from Microsoft, Acapela, or others. It’s possible to train an AI model to replicate your voice, which can be a tremendous boon for people who have ALS (Lou Gehrig’s disease) or motor-neuron disease or other medical conditions that can lead to an inability to talk. This is, of course, the same tech that can also be used to create audio deepfakes, so it’s something that we need to approach responsibly, but the tech has truly transformative potential. 



 Voice recognition. Researchers like those in the Speech Accessibility Project are paying people with disabilities for their help in collecting recordings of people with atypical speech. As I type, they are actively recruiting people with Parkinson’s and related conditions, and they have plans to expand this to other conditions as the project progresses. This research will result in more inclusive data sets that will let more people with disabilities use voice assistants, dictation software, and voice-response services as well as control their computers and other devices more easily, using only their voice. 



 Text transformation. The current generation of LLMs is quite capable of adjusting existing text content without injecting hallucinations. This is hugely empowering for people with cognitive disabilities who may benefit from text summaries or simplified versions of text or even text that’s prepped for Bionic Reading. 
 



 The importance of diverse teams and data 



 We need to recognize that our differences matter. Our lived experiences are influenced by the intersections of the identities that we exist in. These lived experiences—with all their complexities (and joys and pain)—are valuable inputs to the software, services, and societies that we shape. Our differences need to be represented in the data that we use to train new models, and the folks who contribute that valuable information need to be compensated for sharing it with us. Inclusive data sets yield more robust models that foster more equitable outcomes. 



 Want a model that doesn’t demean or patronize or objectify people with disabilities? Make sure that you have content about disabilities that’s authored by people with a range of disabilities, and make sure that that’s well represented in the training data. 



 Want a model that doesn’t use ableist language? You may be able to use existing data sets to build a filter that can intercept and remediate ableist language before it reaches readers. That being said, when it comes to sensitivity reading, AI models won’t be replacing human copy editors anytime soon.&nbsp; 



 Want a coding copilot that gives you accessible recommendations from the jump? Train it on code that you know to be accessible. 



 



 I have no doubt that AI can and will harm people… today, tomorrow, and well into the future. But I also believe that we can acknowledge that and, with an eye towards accessibility (and, more broadly, inclusion), make thoughtful, considerate, and intentional changes in our approaches to AI that will reduce harm over time as well. Today, tomorrow, and well into the future. 



 



 Many thanks to Kartik Sawhney for helping me with the development of this piece, Ashley Bischoff for her invaluable editorial assistance, and, of course, Joe Dolson for the prompt. 
				"
link: "
					https://alistapart.com/article/opportunities-for-ai-in-accessibility/				"
category:
directory: _directory/a-list-apart.md
---
