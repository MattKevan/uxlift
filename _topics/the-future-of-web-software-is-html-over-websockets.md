---
title: "
					The Future of Web Software Is HTML-over-WebSockets				"
date: 2021-02-25 15:00:00 +0000
dateadded: 2021-03-11 17:13:17 +0000
description: "
					
 The future of web-based software architectures is already taking form, and this time it’s server-rendered (again). Papa’s got a brand new bag: HTML-over-WebSockets and broadcast everything all the time. 



 The dual approach of marrying a Single Page App with an API service has left many dev teams mired in endless JSON wrangling and state discrepancy bugs across two layers. This costs dev time, slows release cycles, and saps the bandwidth for innovation. 



 But a new WebSockets-driven approach is catching web developers’ attention. One that reaffirms the promises of classic server-rendered frameworks: fast prototyping, server-side state management, solid rendering performance, rapid feature development, and straightforward SEO. One that enables multi-user collaboration and reactive, responsive designs without building two separate apps. The end result is a single-repo application that feels to users just as responsive as a client-side all-JavaScript affair, but with straightforward templating and far fewer loading spinners, and no state misalignments, since state only lives in one place. All of this sets us up for a considerably easier (and faster!) development path.&nbsp; 



 Reclaiming all of that time spent addressing architecture difficulties grants you a pool of surplus hours that you can use to do awesome. Spend your dev budget, and your company’s salary budget, happily building full-stack features yourself, and innovating on things that benefit your company and customers.&nbsp; 



 And in my opinion, there’s no better app framework for reclaiming tedious development time than Ruby on Rails. Take another look at the underappreciated Stimulus. Beef up the View in your MVC with ViewComponents. Add in the CableReady and StimulusReflex libraries for that Reactive Rails (as it has been dubbed) new car smell, and you’re off to the races. But we’ll get back to Rails in a bit... 



 This all started with web frameworks... 



 Web frameworks burst onto the scene around 2005 amidst a sea of mostly figure-it-out-for-yourself scripting language libraries glued together and thrown onto hand-maintained Apache servers. This new architecture promised developers a more holistic approach that wrapped up all the fiddly stuff in no-touch conventions, freeing developers to focus on programming ergonomics, code readability, and fast-to-market features. All a developer had to do was learn the framework’s core language, get up to speed on the framework itself and its conventions, and then start churning out sophisticated web apps while their friends were still writing XML configuration files for all those other approaches. 



 Despite the early criticisms that always plague new approaches, these server-rendered frameworks became tools of choice, especially for fast-moving startups—strapped for resources—that needed an attractive, feature-rich app up yesterday. 



 But then the JavaScript everything notion took hold... 



 As the web development world pushed deeper into the 2010s, the tides began to turn, and server-rendered frameworks took something of a backseat to the Single Page Application, wholly built in JavaScript and run entirely on the client’s computer. At many companies, the “server” became relegated to hosting an API data service only, with most of the business logic and all of the HTML rendering happening on the client, courtesy of the big ’ol package of JavaScript that visitors were forced to download when they first hit the site.&nbsp; 



 This is where things started to get ugly. 



 Fast-forward to 2020 and the web isn’t getting any faster, as we were promised it would with SPAs. Shoving megabytes of JavaScript down an iPhone 4’s throat doesn’t make for a great user experience. And if you thought building a professional web app took serious resources, what about building a web app and an API service and a communication layer between them? Do we really believe that every one of our users is going to have a device capable of digesting 100 kB of JSON and rendering a complicated HTML table faster than a server-side app could on even a mid-grade server? 



 Developing and hosting these JavaScript-forward apps didn’t get any cheaper either. In many cases we’re now doing twice the work, and maybe even paying twice the developers, to achieve the same results we had before with server-side app development. 



 In 2005, app frameworks blew everyone’s minds with “build a blog app in 15 minutes” videos. Fifteen years later, doing the same thing with an SPA approach can require two codebases, a JSON serialization layer, and dozens of spinners all over the place so we can still claim a 50ms First Contentful Paint. Meanwhile, the user watches some blank gray boxes, hoping for HTML to finally render from all the JSON their browser is requesting and digesting.&nbsp; 



 How did we get here? This is not my beautiful house! Were we smart in giving up all of that server-rendered developer happiness and doubling down on staff and the time to implement in order to chase the promise of providing our users some fancier user interfaces? 



 Well. Yes. Sort of. 



 We’re not building web software for us. We’re building it for them. The users of our software have expectations of how it’s going to work for them. We have to meet them where they are. Our users are no longer excited about full-page refreshes and ugly Rube Goldberg-ian multi-form workflows. The SPA approach was the next logical leap from piles of unorganized spaghetti JavaScript living on the server. The problem, though: it was a 5% improvement, not a 500% improvement.&nbsp; 



 Is 5% better worth twice the work? What about the developer cost? 



 Bedazzling the web app certainly makes things fancier from the user’s perspective. Done well, it can make the app feel slicker and more interactive, and it opens up a wealth of new non-native interaction elements. Canonizing those elements as components was the next natural evolution. Gone are the days of thinking through how an entire HTML document could be mutated to give the illusion of the user interacting with an atomic widget on the page—now, that can be implemented directly, and we can think about our UX in terms of component breakdowns. But, alas, the costs begin to bite us almost immediately. 



 Go ahead, write that slick little rating stars component. Add some cool animations, make the mouseover and click area feel good, give some endorphin-generating feedback when a selection is made. But now what? In a real app, we need to persist that change, right? The database has to be changed to reflect this new state, and the app in front of the user’s eyes needs to reflect that new reality too.&nbsp; 



 In the old days, we’d give the user a couple star GIFs, each a link that hit the same server endpoint with a different param value. Server-side, we’d save that change to the database, then send back a whole new HTML page for their browser to re-render; maybe we’d even get fancy and use AJAX to do it behind the scenes, obviating the need for the full HTML and render. Let’s say the former costs x in developer time and salary (and we won’t even talk about lost opportunity cost for features rolled out too late for the market). In that case, the fancy AJAX-based approach costs x + n (you know, some “extra JavaScript sprinkles”), but the cost of lots and lots of n grows as our app becomes more and more of a JavaScript spaghetti sprinkles mess. 



 Over in the SPA world, we’re now writing JavaScript in the client-side app and using JSX or Handlebars templates to render the component, then code to persist that change to the front-end data store, then a PUT request to the API, where we’re also writing an API endpoint to handle the request, a JSON serializer (probably with its own pseudo-template) to package up our successful response, and then front-end code to ensure we re-render the component (and some branching logic to maybe rollback and re-render the client-side state change if the backend failed on us). This costs a lot more than even x + n in developer time and salary. And if you’ve split your team into “front-end” and “back-end” people, you might as well go ahead and double that cost (both time and money) for many non-trivial components where you need two different people to finish the implementation. Sure, the SPA mitigates some of the ever-growing spaghetti problem, but at what cost for a business racing to be relevant in the market or get something important out to the people who need it? 



 One of the other arguments we hear in support of the SPA is the reduction in cost of cyber infrastructure. As if pushing that hosting burden onto the client (without their consent, for the most part, but that’s another topic) is somehow saving us on our cloud bills. But that’s ridiculous. For any non-trivial application, you’re still paying for a server to host the API and maybe another for the database, not to mention load balancers, DNS, etc. And here’s the thing: none of that cost even comes close to what a software company pays its developers! Seriously, think about it. I’ve yet to work at any business where our technical infrastructure was anything more than a fraction of our salary overhead. And good developers expect raises. Cloud servers generally just get cheaper over time. 



 If you want to be efficient with your money—especially as a cash-strapped startup—you don’t need to cheap out on cloud servers; you need to get more features faster out of your existing high-performance team. 



 In the old, old days, before the web frameworks, you’d pay a developer for six weeks to finally unveil…the log-in page. Cue the sad trombone. Then frameworks made that log-in page an hour of work, total, and people were launching web startups overnight. The trumpets sound! Now, with our SPA approach, we’re back to a bunch of extra work. It’s costing us more money because we’re writing two apps at once. There’s that trombone again... 



 We’re paying a lot of money for that 5% user experience improvement. 



 But what if we could take the best client-side JavaScript ideas and libraries from that 5% improvement and reconnect them with the developer ergonomics and salary savings of a single codebase? What if components and organized JavaScript could all live in one rock-solid app framework optimized for server-side rendering? What if there is a path to a 500% jump? 



 Sound impossible? It’s not. I’ve seen it, like C-beams glittering in the dark near the Tannhäuser Gate. I’ve built that 500% app, in my free time, with my kids running around behind me barking like dogs. Push broadcasts to logged-in users. Instant updates to the client-side DOM in milliseconds. JavaScript-driven 3D animations that interact with real-time chat windows. All in a single codebase, running on the same server hardware I’d use for a “classic” server-rendered app (and maybe I can even scale that hardware down since I’m rendering HTML fragments more often than full-page documents). No separate front-end app. Clean, componentized JavaScript and server-side code, married like peanut butter and jelly. It’s real, I tell you! 



 Socket to me! (Get it? Get it? Ah, nevermind...) 



 Finalized in 2011, support for WebSockets in modern browsers ramped up throughout the 2010s and is now fully supported in all modern browsers. With the help of a small bit of client-side JavaScript, you get a full-duplex socket connection between browser and server. Data can pass both ways, and can be pushed from either side at any time, no user-initiated request needed. 



 Like the game industry’s ever-expanding moves into cloud-based gaming, the future of web apps is not going to be about pushing even heavier obligations onto the user/client, but rather the opposite: let the client act as a thin terminal that renders the state of things for the human. WebSockets provide the communication layer, seamless and fast; a direct shot from the server to the human. 



 But this wasn’t terribly easy for many developers to grok at first. I sure didn’t. And the benefits weren’t exactly clear either. After years (decades, even) of wrapping our heads around the HTTP request cycle, to which all server-handled features must conform, adopting this WebSocket tech layer required a lot of head scratching. As with many clever new technologies or protocols, we needed a higher-level abstraction that provided something really effective for getting a new feature in front of a user, fast. 



 Enter HTML-over-WebSockets... 



 Want a hyper-responsive datalist typeahead that is perfectly synced with the database? On every keystroke, send a query down the WebSocket and get back precisely the changed set of option tags, nothing more, nothing less. 



 How about client-side validations? Easy. On every input change, round up the form values and send ’em down the WebSocket. Let your server framework validate and send back changes to the HTML of the form, including any errors that need to be rendered. No need for JSON or complicated error objects. 



 User presence indicators? Dead simple. Just check who has an active socket connection. 



 What about multi-user chat? Or document collaboration? In classic frameworks and SPAs, these are the features we put off because of their difficulty and the code acrobatics needed to keep everyone’s states aligned. With HTML-over-the-wire, we’re just pushing tiny bits of HTML based on one user’s changes to every other user currently subscribed to the channel. They’ll see exactly the same thing as if they hit refresh and asked the server for the entire HTML page anew. And you can get those bits to every user in under 30ms. 



 We’re not throwing away the promise of components either. Where this WebSockets-based approach can be seen as a thick server/thin client, so too can our components. It’s fractal, baby! Make that component do delightful things for the user with smart JavaScript, and then just ask the server for updated HTML, and mutate the DOM. No need for a client-side data store to manage the component’s state since it’ll render itself to look exactly like what the server knows it should look like now. The HTML comes from the server, so no need for JSX or Handlebars or &lt;insert other JavaScript templating library here&gt;. The server is always in control: rendering the initial component’s appearance and updating it in response to any state change, all through the socket.&nbsp; 



 And there’s nothing saying you have to use those socket channels to send only HTML. Send a tiny bit of text, and have the client do something smart. Send a chat message from one user to every other user, and have their individual clients render that message in whatever app theme they’re currently using. Imagine the possibilities! 



 But it’s complex/expensive/requires a bunch of new infrastructure, right? 



 Nope. Prominent open-source web servers support it natively, generally without needing any kind of extra configuration or setup. Many server-side frameworks will automatically ship the JS code to the client for native support in communicating over the socket. In Rails, for example, setting up your app to use WebSockets is as easy as configuring the built-in ActionCable and then deploying as usual on the same hardware you would have used otherwise. Anecdotally, the typical single Rails server process seems to be perfectly happy supporting nearly 4,000 active connections. And you can easily swap in the excellent AnyCable to bump that up to around 10,000+ connections per node by not relying on the built-in Ruby WebSocket server. Again, this is on the usual hardware you’d be running your web server on in the first place. You don’t need to set up any extra hardware or increase your cloud infrastructure. 



 This new approach is quickly appearing as extensions, libraries, or alternative configurations in a variety of languages and web frameworks, from Django’s Sockpuppet to Phoenix’s LiveView and beyond. Seriously, go dig around for WebSockets-based libraries for your favorite app framework and then step into a new way of thinking about your app architectures. Build something amazing and marvel at the glorious HTML bits zipping along on the socket, like jet fighters passing in the night. It’s more than a new technical approach; it’s a new mindset, and maybe even a new wellspring of key app features that will drive your startup success. 



 But I’d be remiss if I didn’t highlight for the reader my contender for Best Framework in a Leading Role. Sure, any app framework can adopt this approach, but for my money, there’s a strong case to be made that the vanguard could be Ruby on Rails.&nbsp; 



 So we come back around to Rails, 15 years on from its launch... 



 Set up a Rails 6 app with the latest versions of Turbolinks, Stimulus, StimulusReflex, CableReady, and GitHub’s ViewComponent gem, and you can be working with Reactive Rails in a way that simultaneously feels like building a classic Rails app and like building a modern, componentized SPA, in a single codebase, with all the benefits of server-side rendering, HTML fragment caching, easy SEO, rock-solid security, and the like. You’ll suddenly find your toolbelt bursting with straightforward tools to solve previously daunting challenges. 



 Oh, and with Turbolinks, you also get wrappers allowing for hybrid native/HTML UIs in the same codebase. Use a quick deploy solution like Heroku or Hatchbox, and one developer can build a responsive, reactive, multi-platform app in their spare time. Just see this Twitter clone if you don’t believe me.&nbsp; 



 OK, that all sounds exciting, but why Rails specifically? Isn’t it old and boring? You already said any framework can benefit from this new WebSocket, DOM-morphing approach, right?&nbsp; 



 Sure. But where Rails has always shined is in its ability to make rapid prototyping, well…rapid, and in its deep ecosystem of well-polished gems. Rails also hasn’t stopped pushing the envelope forward, with the latest version 6.1.3 of the framework boasting a ton of cool features.&nbsp; 



 If you’ve got a small, resource-strapped team, Rails (and Ruby outside of the framework) still serves as a potent force multiplier that lets you punch way above your weight, which probably explains the $92 billion in revenue it’s helped drive over the years. With this new approach, there’s a ton more weight behind that punch. While your competitors are fiddling with their JSON serializers and struggling to optimize away all the loading spinners, you’re rolling out a new multi-user collaborative feature every week…or every day.&nbsp; 



 You win. Your fellow developers win. Your business wins. And, most importantly, your users win. 



 That’s what Rails promised from the day it was released to the community. That’s why Rails spawned so many imitators in other languages, and why it saw such explosive growth in the startup world for years. And that same old rapid prototyping spirit, married to this new HTML-over-the-wire approach, positions Rails for a powerful resurgence.&nbsp; 



 Ruby luminary and author of The Ruby Way, Obie Fernandez, seems to think so. 



 Heck, even Russ Hanneman thinks this approach with StimulusReflex is the new hotness. 



 And the good folks over at Basecamp (creators of Rails in the first place), dropped their own take on the concept, Hotwire, just in time for the 2020 holidays, so your options for tackling this new and exciting technique continue to expand. 



 Don’t call it a comeback, because Rails has been here for years. With this new architectural approach, brimming with HTML-over-WebSockets and full-duplex JavaScript interactions, Rails becomes something new, something beautiful, something that demands attention (again).&nbsp; 



 Reactive Rails, with StimulusReflex and friends, is a must-look for anyone exhausted from toiling with JSON endpoints or JSX, and I’m super excited to see the new crop of apps that it enables. 
				"
link: "
					https://alistapart.com/article/the-future-of-web-software-is-html-over-websockets/				"
category:
directory: _directory/a-list-apart.md
---
