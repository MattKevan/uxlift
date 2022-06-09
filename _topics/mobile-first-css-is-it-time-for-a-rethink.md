---
title: "
					Mobile-First CSS - Is It Time for a Rethink?				"
date: 2022-06-09 02:13:10 +0000
dateadded: 2022-06-10 00:01:13 +0100
description: "
					
 The mobile-first design methodology is great—it focuses on what really matters to the user, it’s well-practiced, and it’s been a common design pattern for years. So developing your CSS mobile-first should also be great, too…right?&nbsp; 



 Well, not necessarily. Classic mobile-first CSS development is based on the principle of overwriting style declarations: you begin your CSS with default style declarations, and overwrite and/or add new styles as you add breakpoints with min-width media queries for larger viewports (for a good overview see “What is Mobile First CSS and Why Does It Rock?”). But all those exceptions create complexity and inefficiency, which in turn can lead to an increased testing effort and a code base that’s harder to maintain. Admit it—how many of us willingly want that? 



 On your own projects, mobile-first CSS may yet be the best tool for the job, but first you need to evaluate just how appropriate it is in light of the visual design and user interactions you’re working on. To help you get started, here’s how I go about tackling the factors you need to watch for, and I’ll discuss some alternate solutions if mobile-first doesn’t seem to suit your project. 



 Advantages of mobile-first 



 Some of the things to like with mobile-first CSS development—and why it’s been the de facto development methodology for so long—make a lot of sense: 



 Development hierarchy. One thing you undoubtedly get from mobile-first is a nice development hierarchy—you just focus on the mobile view and get developing.&nbsp; 



 Tried and tested. It’s a tried and tested methodology that’s worked for years for a reason: it solves a problem really well. 



 Prioritizes the mobile view. The mobile view is the simplest and arguably the most important, as it encompasses all the key user journeys, and often accounts for a higher proportion of user visits (depending on the project).&nbsp; 



 Prevents desktop-centric development. As development is done using desktop computers, it can be tempting to initially focus on the desktop view. But thinking about mobile from the start prevents us from getting stuck later on; no one wants to spend their time retrofitting a desktop-centric site to work on mobile devices! 



 Disadvantages of mobile-first 



 Setting style declarations and then overwriting them at higher breakpoints can lead to undesirable ramifications: 



 More complexity. The farther up the breakpoint hierarchy you go, the more unnecessary code you inherit from lower breakpoints.&nbsp; 



 Higher CSS specificity. Styles that have been reverted to their browser default value in a class name declaration now have a higher specificity. This can be a headache on large projects when you want to keep the CSS selectors as simple as possible. 



 Requires more regression testing. Changes to the CSS at a lower view (like adding a new style) requires all higher breakpoints to be regression tested. 



 The browser can’t prioritize CSS downloads. At wider breakpoints, classic mobile-first min-width media queries don’t leverage the browser’s capability to download CSS files in priority order. 



 The problem of property value overrides 



 There is nothing inherently wrong with overwriting values; CSS was designed to do just that. Still, inheriting incorrect values is unhelpful and can be burdensome and inefficient. It can also lead to increased style specificity when you have to overwrite styles to reset them back to their defaults, something that may cause issues later on, especially if you are using a combination of bespoke CSS and utility classes. We won’t be able to use a utility class for a style that has been reset with a higher specificity. 



 With this in mind, I’m developing CSS with a focus on the default values much more these days. Since there’s no specific order, and no chains of specific values to keep track of, this frees me to develop breakpoints simultaneously. I concentrate on finding common styles and isolating the specific exceptions in closed media query ranges (that is, any range with a max-width set).&nbsp; 



 This approach opens up some opportunities, as you can look at each breakpoint as a clean slate. If a component’s layout looks like it should be based on Flexbox at all breakpoints, it’s fine and can be coded in the default style sheet. But if it looks like Grid would be much better for large screens and Flexbox for mobile, these can both be done entirely independently when the CSS is put into closed media query ranges. Also, developing simultaneously requires you to have a good understanding of any given component in all breakpoints up front. This can help surface issues in the design earlier in the development process. We don’t want to get stuck down a rabbit hole building a complex component for mobile, and then get the designs for desktop and find they are equally complex and incompatible with the HTML we created for the mobile view!&nbsp; 



 Though this approach isn’t going to suit everyone, I encourage you to give it a try. There are plenty of tools out there to help with concurrent development, such as Responsively App, Blisk, and many others.&nbsp; 



 Having said that, I don’t feel the order itself is particularly relevant. If you are comfortable with focusing on the mobile view, have a good understanding of the requirements for other breakpoints, and prefer to work on one device at a time, then by all means stick with the classic development order. The important thing is to identify common styles and exceptions so you can put them in the relevant stylesheet—a sort of manual tree-shaking process! Personally, I find this a little easier when working on a component across breakpoints, but that’s by no means a requirement. 



 Closed media query ranges in practice&nbsp; 



 In classic mobile-first CSS we overwrite the styles, but we can avoid this by using media query ranges. To illustrate the difference (I’m using SCSS for brevity), let’s assume there are three visual designs:&nbsp; 



  smaller than 768  from 768 to below 1024  1024 and anything larger&nbsp;  



 Take a simple example where a block-level element has a default padding of “20px,” which is overwritten at tablet to be “40px” and set back to “20px” on desktop. 






 Classic min-width mobile-first 
 .my-block {
  padding: 20px;
  @media (min-width: 768px) {
    padding: 40px;
  }
  @media (min-width: 1024px) {
    padding: 20px;
  }
} 
 Closed media query range 
 .my-block {
  padding: 20px;
  @media (min-width: 768px) and (max-width: 1023.98px) {
    padding: 40px;
  }
} 






 The subtle difference is that the mobile-first example sets the default padding to “20px” and then overwrites it at each breakpoint, setting it three times in total. In contrast, the second example sets the default padding to “20px” and only overrides it at the relevant breakpoint where it isn’t the default value (in this instance, tablet is the exception). 



 The goal is to:&nbsp; 



  Only set styles when needed.&nbsp;  Not set them with the expectation of overwriting them later on, again and again.&nbsp;  



 To this end, closed media query ranges are our best friend. If we need to make a change to any given view, we make it in the CSS media query range that applies to the specific breakpoint. We’ll be much less likely to introduce unwanted alterations, and our regression testing only needs to focus on the breakpoint we have actually edited.&nbsp; 



 Taking the above example, if we find that .my-block spacing on desktop is already accounted for by the margin at that breakpoint, and since we want to remove the padding altogether, we could do this by setting the mobile padding in a closed media query range.  




 .my-block {
&nbsp; @media (max-width: 767.98px) {
&nbsp;&nbsp;&nbsp;&nbsp;padding: 20px;
&nbsp;&nbsp;}
&nbsp; @media (min-width: 768px) and (max-width: 1023.98px) {
&nbsp;&nbsp;&nbsp;&nbsp;padding: 40px;
&nbsp;&nbsp;}
} 




 The browser default padding for our block is “0,” so instead of adding a desktop media query and using unset or “0” for the padding value (which we would need with mobile-first), we can wrap the mobile padding in a closed media query (since it is now also an exception) so it won’t get picked up at wider breakpoints. At the desktop breakpoint, we won’t need to set any padding style, as we want the browser default value. 



 Bundling versus separating the CSS 



 Back in the day, keeping the number of requests to a minimum was very important due to the browser’s limit of concurrent requests (typically around six). As a consequence, the use of image sprites and CSS bundling was the norm, with all the CSS being downloaded in one go, as one stylesheet with highest priority.&nbsp; 



 With HTTP/2 and HTTP/3 now on the scene, the number of requests is no longer the big deal it used to be. This allows us to separate the CSS into multiple files by media query. The clear benefit of this is the browser can now request the CSS it currently needs with a higher priority than the CSS it doesn’t. This is more performant and can reduce the overall time page rendering is blocked. 



 Which HTTP version are you using? 



 To determine which version of HTTP you’re using, go to your website and open your browser’s dev tools. Next, select the Network tab and make sure the Protocol column is visible. If “h2” is listed under Protocol, it means HTTP/2 is being used.&nbsp; 



 Note: to view the Protocol in your browser’s dev tools, go to the Network tab, reload your page, right-click any column header (e.g., Name), and check the Protocol column. 



Note: for a summarized comparison, see ImageKit’s “HTTP/2 vs. HTTP/1.”



 Also, if your site is still using HTTP/1...WHY?!! What are you waiting for? There is excellent user support for HTTP/2. 



 Splitting the CSS 



 Separating the CSS into individual files is a worthwhile task. Linking the separate CSS files using the relevant media attribute allows the browser to identify which files are needed immediately (because they’re render-blocking) and which can be deferred. Based on this, it allocates each file an appropriate priority. 



 In the following example of a website visited on a mobile breakpoint, we can see the mobile and default CSS are loaded with “Highest” priority, as they are currently needed to render the page. The remaining CSS files (print, tablet, and desktop) are still downloaded in case they’ll be needed later, but with “Lowest” priority.&nbsp; 







 With bundled CSS, the browser will have to download the CSS file and parse it before rendering can start.  While, as noted, with the CSS separated into different files linked and marked up with the relevant media attribute, the browser can prioritize the files it currently needs. Using closed media query ranges allows the browser to do this at all widths, as opposed to classic mobile-first min-width queries, where the desktop browser would have to download all the CSS with Highest priority. We can’t assume that desktop users always have a fast connection. For instance, in many rural areas, internet connection speeds are still slow.&nbsp; 



 The media queries and number of separate CSS files will vary from project to project based on project requirements, but might look similar to the example below. 







 Bundled CSS 
&lt;link href="site.css" rel="stylesheet"&gt;  
 This single file contains all the CSS, including all media queries, and it will be downloaded with Highest priority. 


 Separated CSS 
&lt;link href="default.css" rel="stylesheet"&gt;&lt;link href="mobile.css" media="screen and (max-width: 767.98px)" rel="stylesheet"&gt;&lt;link href="tablet.css" media="screen and (min-width: 768px) and (max-width: 1083.98px)" rel="stylesheet"&gt;&lt;link href="desktop.css" media="screen and (min-width: 1084px)" rel="stylesheet"&gt;&lt;link href="print.css" media="print" rel="stylesheet"&gt;  
 Separating the CSS and specifying a media attribute value on each link tag allows the browser to prioritize what it currently needs. Out of the five files listed above, two will be downloaded with Highest priority: the default file, and the file that matches the current media query. The others will be downloaded with Lowest priority. 







 Depending on the project’s deployment strategy, a change to one file (mobile.css, for example) would only require the QA team to regression test on devices in that specific media query range. Compare that to the prospect of deploying the single bundled site.css file, an approach that would normally trigger a full regression test. 



 Moving on 



 The uptake of mobile-first CSS was a really important milestone in web development; it has helped front-end developers focus on mobile web applications, rather than developing sites on desktop and then attempting to retrofit them to work on other devices. 



 I don’t think anyone wants to return to that development model again, but it’s important we don’t lose sight of the issue it highlighted: that things can easily get convoluted and less efficient if we prioritize one particular device—any device—over others. For this reason, focusing on the CSS in its own right, always mindful of what is the default setting and what’s an exception, seems like the natural next step. I’ve started noticing small simplifications in my own CSS, as well as other developers’, and that testing and maintenance work is also a bit more simplified and productive.&nbsp; 



 In general, simplifying CSS rule creation whenever we can is ultimately a cleaner approach than going around in circles of overrides. But whichever methodology you choose, it needs to suit the project. Mobile-first may—or may not—turn out to be the best choice for what’s involved, but first you need to solidly understand the trade-offs you’re stepping into. 
				"
link: "
					https://alistapart.com/article/mobile-first-css-is-it-time-for-a-rethink/				"
category:
directory: _directory/a-list-apart.md
---
