---
title: "
					Designing Inclusive Content Models				"
date: 2021-02-18 15:00:00 +0000
dateadded: 2021-03-11 17:13:17 +0000
description: "
					
 In the 1920s, Robert Moses designed a system of parkways surrounding New York City. His designs, which included overpasses too low for public buses, have become an often-cited example of exclusionary design and are argued by biographer Robert A. Caro to represent a purposeful barrier between the city’s Black and Puerto Rican residents and nearby beaches.&nbsp; 



 Regardless of the details of Moses’s parkway project, it’s a particularly memorable reminder of the political power of design and the ways that choices can exclude various groups based on abilities and resources. The growing interest in inclusive design highlights questions of who can participate, and in relation to the web, this has often meant a focus on accessibility and user experience, as well as on questions related to team diversity and governance.&nbsp; 



 But principles of inclusive design should also play a role early in the design and development process, during content modeling. Modeling defines what content objects consist of and, by extension, who will be able to create them. So if web professionals are interested in inclusion, we need to go beyond asking who can access content and also think about how the design of content can install barriers that make it difficult for some people to participate in creation.&nbsp; 



 Currently, content models are primarily seen as mirrors that reflect inherent structures in the world. But if the world is biased or exclusionary, this means our content models will be too. Instead, we need to approach content modeling as an opportunity to filter out harmful structures and create systems in which more people can participate in making the web. Content models designed for inclusivity welcome a variety of voices and can ultimately increase products’ diversity and reach. 



 Content models as mirrors 



 Content models are tools for describing the objects that will make up a project, their attributes, and the possible relations between them. A content model for an art museum, for example, would typically describe, among other things, artists (including attributes such as name, nationality, and perhaps styles or schools), and artists could then be associated with artworks, exhibitions, etc. (The content model would also likely include objects like blog posts, but in this article we’re interested in how we model and represent objects that are “out there” in the real world, rather than content objects like articles and quizzes that live natively on websites and in apps.) 



 The common wisdom when designing content models is to go out and research the project’s subject domain by talking with subject matter experts and project stakeholders. As Mike Atherton and Carrie Hane describe the process in Designing Connected Content, talking with the people who know the most about a subject domain (like art in the museum example above) helps to reveal an “inherent” structure, and discovering or revealing that structure ensures that your content is complete and comprehensible. 



 Additional research might go on to investigate how a project’s end users understand a domain, but Atherton and Hane describe this stage as mostly about terminology and level of detail. End users might use a different word than experts do or care less about the nuanced distinctions between Fauvism and neo-Expressionism, but ultimately, everybody is talking about the same thing. A good content model is just a mirror that reflects the structure you find.&nbsp;&nbsp; 



 Cracks in the mirrors 



 The mirror approach works well in many cases, but there are times when the structures that subject matter experts perceive as inherent are actually the products of biased systems that quietly exclude. Like machine learning algorithms trained on past school admissions or hiring decisions, existing structures tend to work for some people and harm others. Rather than recreating these structures, content modelers should consider ways to improve them.&nbsp; 



 A basic example is LinkedIn’s choice to require users to specify a company when creating a new work experience. Modeling experience in this way is obvious to HR managers, recruiters, and most people who participate in conventional career paths, but it assumes that valuable experience is only obtained through companies, and could potentially discourage people from entering other types of experiences that would allow them to represent alternative career paths and shape their own stories. 



Figure 1. LinkedIn’s current model for experience includes Company as a required attribute.




 These kinds of mismatches between required content attributes and people’s experiences either create explicit barriers (“I can’t participate because I don’t know how to fill in this field”) or increase the labor required to participate (“It’s not obvious what I should put here, so I’ll have to spend time thinking of a workaround”).&nbsp; 



 Setting as optional fields that might not apply to everyone is one inclusive solution, as is increasing the available options for responses requiring a selection. However, while gender-inclusive choices provide an inclusive way to handle form inputs, it’s also worth considering when business objectives would be met just as well by providing open text inputs that allow users to describe themselves in their own terms.&nbsp; 



 Instead of LinkedIn’s highly prescribed content, for example, Twitter bios’ lack of structure lets people describe themselves in more inclusive ways. Some people use the space to list formal credentials, while others provide alternate forms of identification (e.g., mother, cyclist, or coffee enthusiast) or jokes. Because the content is unstructured, there are fewer expectations about its use, taking pressure off those who don’t have formal credentials and giving more flexibility to those who do.&nbsp; 



 Browsing the Twitter bios of designers, for example, reveals a range of identification strategies, from listing credentials and affiliations to providing broad descriptions.&nbsp; 



Figure 2. Veerle Pieters’s Twitter bio uses credentials, affiliations, and personal interests.&nbsp; 



Figure 3. Jason Santa Maria’s Twitter bio uses a broad description.&nbsp; 



Figure 4. Erik Spiekermann’s Twitter bio uses a single word. 



 In addition to considering where structured content might exclude, content modelers should also consider how length guidelines can implicitly create barriers for content creators. In the following section, we look at a project in which we chose to reduce the length of contributor bios as a way to ensure that our content model didn’t leave anyone out.&nbsp; 



 Live in America 



 Live in America is a performing arts festival scheduled to take place in October 2021 in Bentonville, Arkansas. The goal of the project is to survey the diversity of live performance from across the United States, its territories, and Mexico, and bring together groups of artists that represent distinct local traditions. Groups of performers will come from Alabama, Las Vegas, Detroit, and the border city of El Paso–Juárez. Indigineous performers from Albuquerque are scheduled to put on a queer powwow. Performers from Puerto Rico will organize a cabaret.&nbsp; 



 An important part of the festival’s mission is that many of the performers involved aren’t integrated into the world of large art institutions, with their substantial fiscal resources and social connections. Indeed, the project’s purpose is to locate and showcase examples of live performance that fly under curators’ radars and that, as a result of their lack of exposure, reveal what makes different communities truly unique.&nbsp; 



 As we began to think about content modeling for the festival’s website, these goals had two immediate consequences: 



 First, the idea of exploring the subject domain of live performance doesn’t exactly work for this project because the experts we might have approached would have told us about a version of the performing arts world that festival organizers were specifically trying to avoid. Experts’ mental models of performers, for example, might include attributes like residencies, fellowships and grants, curricula vitae and awards, artist statements and long, detailed bios. All of these attributes might be perceived as inherent or natural within one, homogenous community—but outside that community they’re not only a sign of misalignment, they represent barriers to participation. 



 Second, the purposeful diversity of festival participants meant that locating a shared mental model wasn’t the goal. Festival organizers want to preserve the diversity of the communities involved, not bring them all together or show how they’re the same. It’s important that people in Las Vegas think about performance differently than people in Alabama and that they structure their projects and working relationships in distinct ways.&nbsp; 



 Content modeling for Live in America involved defining what a community is, what a project is, and how these are related. But one of the most interesting challenges we faced was how to model a person—what attributes would stand in for the people that would make the event possible.&nbsp; 



 It was important that we model participants in a way that preserved and highlighted diversity and also in a way that included everyone—that let everyone take part in their own way and that didn’t overburden some people or ask them to experience undue anxiety or perform extra work to make themselves fit within a model of performance that didn’t match their own.&nbsp; 



 Designing an inclusive content model for Live in America meant thinking hard about what a bio would look like. Some participants come from the institutionalized art world, where bios are long and detailed and often engage in intricate and esoteric forms of credentialing. Other participants create art but don’t have the same resources. Others are just people who were chosen to speak for and about their communities: writers, chefs, teachers, and musicians.&nbsp; 



 The point of the project is to highlight both performance that has not been recognized and the people who have not been recognized for making it. Asking for a written form that has historically been built around institutional recognition would only highlight the hierarchies that festival organizers want to leave behind. 



 The first time we brought up the idea of limiting bios to five words, our immediate response was, “Can we get away with that?” Would some artists balk at not being allowed the space to list their awards? It’s a ridiculously simple idea, but it also gets at the heart of content modeling: what are the things and how do we describe them? What are the formats and limitations that we put on the content that would be submitted to us? What are we asking of the people who will write the content? How can we configure the rules so that everyone can participate? 



 Five-word bios place everyone on the same ground. They ask everyone to create something new but also manageable. They’re comparable. They set well-known artists next to small-town poets, and let them play together. They let in diverse languages, but keep out the historical structures that set people apart. They’re also fun: 



  Byron F. Aspaas of Albuquerque is “Diné. Táchii'nii nishłį́ Tódichii'nii bashishchiin.”  Danny R.W. Baskin of Northwest Arkansas is “Baroque AF but eating well.”  Brandi Dobney of New Orleans is “Small boobs, big dreams.”  Imani Mixon of Detroit is “best dresser, dream catcher, storyteller.”  Erika P. Rodríguez of Puerto Rico is “Anti-Colonialist Photographer. Caribeña. ♡ Ice Cream.”  David Dorado Romo of El Paso–Juárez is “Fonterizo historian wordsmith saxophonist glossolalian.”  Mikayla Whitmore of Las Vegas is “hold the mayo, thank you.”  Mary Zeno of Alabama is “a down home folk poet.”  



 Modeling for inclusion 



 We tend to think of inclusive design in terms of removing barriers to access, but content modeling also has an important role to play in ensuring that the web is a place where there are fewer barriers to creating content, especially for people with diverse and underrepresented backgrounds. This might involve rethinking the use of structured content or asking how length guidelines might create burdens for some people. But regardless of the tactics, designing inclusive content models begins by acknowledging the political work that these models perform and asking whom they include or exclude from participation.&nbsp; 



 All modeling is, after all, the creation of a world. Modelers establish what things exist and how they relate to each other. They make some things impossible and others so difficult that they might as well be. They let some people in and keep others out. Like overpasses that prevent public buses from reaching the beach, exclusionary models can quietly shape the landscape of the web, exacerbating the existing lack of diversity and making it harder for those who are already underrepresented to gain entry. 



 As discussions of inclusive design continue to gain momentum, content modeling should play a role precisely because of the world-building that is core to the process. If we’re building worlds, we should build worlds that let in as many people as possible. To do this, our discussions of content modeling need to include an expanded range of metaphors that go beyond just mirroring what we find in the world. We should also, when needed, filter out structures that are harmful or exclusionary. We should create spaces that ask the same of everyone and that use the generativity of everyone’s responses to create web products that emerge out of more diverse voices. 
				"
link: "
					https://alistapart.com/article/designing-inclusive-content-models/				"
category:
directory: _directory/a-list-apart.md
---
