---
title: "
					Breaking Out of the Box				"
date: 2021-12-09 15:00:00 +0000
dateadded: 2022-01-26 19:49:50 +0000
description: "
					
 CSS is about styling boxes. In fact, the whole web is made of boxes, from the browser viewport to elements on a page. But every once in a while a new feature comes along that makes us rethink our design approach. 



 Round displays, for example, make it fun to play with circular clip areas. Mobile screen notches and virtual keyboards offer challenges to best organize content that stays clear of them. And dual screen or foldable devices make us rethink how to best use available space in a number of different device postures. 



Sketches of a round display, a common rectangular mobile display, and a device with a foldable display.



 These recent evolutions of the web platform made it both more challenging and more interesting to design products. They’re great opportunities for us to break out of our rectangular boxes. 



 I’d like to talk about a new feature similar to the above: the Window Controls Overlay for Progressive Web Apps (PWAs). 



 Progressive Web Apps are blurring the lines between apps and websites. They combine the best of both worlds. On one hand, they’re stable, linkable, searchable, and responsive just like websites. On the other hand, they provide additional powerful capabilities, work offline, and read files just like native apps. 



 As a design surface, PWAs are really interesting because they challenge us to think about what mixing web and device-native user interfaces can be. On desktop devices in particular, we have more than 40 years of history telling us what applications should look like, and it can be hard to break out of this mental model. 



 At the end of the day though, PWAs on desktop are constrained to the window they appear in: a rectangle with a title bar at the top. 



 Here’s what a typical desktop PWA app looks like: 



Sketches of two rectangular user interfaces representing the desktop Progressive Web App status quo on the macOS and Windows operating systems, respectively.&nbsp;



 Sure, as the author of a PWA, you get to choose the color of the title bar (using the Web Application Manifest theme_color property), but that’s about it. 



 What if we could think outside this box, and reclaim the real estate of the app’s entire window? Doing so would give us a chance to make our apps more beautiful and feel more integrated in the operating system. 



 This is exactly what the Window Controls Overlay offers. This new PWA functionality makes it possible to take advantage of the full surface area of the app, including where the title bar normally appears. 



 About the title bar and window controls 



 Let’s start with an explanation of what the title bar and window controls are. 



 The title bar is the area displayed at the top of an app window, which usually contains the app’s name. Window controls are the affordances, or buttons, that make it possible to minimize, maximize, or close the app’s window, and are also displayed at the top. 



A sketch of a rectangular application user interface highlighting the title bar area and window control buttons.



 Window Controls Overlay removes the physical constraint of the title bar and window controls areas. It frees up the full height of the app window, enabling the title bar and window control buttons to be overlaid on top of the application’s web content.&nbsp; 



A sketch of a rectangular application user interface using Window Controls Overlay. The title bar and window controls are no longer in an area separated from the app’s content.



 If you are reading this article on a desktop computer, take a quick look at other apps. Chances are they’re already doing something similar to this. In fact, the very web browser you are using to read this uses the top area to display tabs. 



A screenshot of the top area of a browser’s user interface showing a group of tabs that share the same horizontal space as the app window controls.



 Spotify displays album artwork all the way to the top edge of the application window. 



A screenshot of an album in Spotify’s desktop application. Album artwork spans the entire width of the main content area, all the way to the top and right edges of the window, and the right edge of the main navigation area on the left side. The application and album navigation controls are overlaid directly on top of the album artwork.



 Microsoft Word uses the available title bar space to display the auto-save and search functionalities, and more. 



A screenshot of Microsoft Word’s toolbar interface. Document file information, search, and other functionality appear at the top of the window, sharing the same horizontal space as the app’s window controls.



 The whole point of this feature is to allow you to make use of this space with your own content while providing a way to account for the window control buttons. And it enables you to offer this modified experience on a range of platforms while not adversely affecting the experience on browsers or devices that don’t support Window Controls Overlay. After all, PWAs are all about progressive enhancement, so this feature is a chance to enhance your app to use this extra space when it’s available. 



 Let’s use the feature 



 For the rest of this article, we’ll be working on a demo app to learn more about using the feature. 



 The demo app is called 1DIV. It’s a simple CSS playground where users can create designs using CSS and a single HTML element. 



 The app has two pages. The first lists the existing CSS designs you’ve created: 



A screenshot of the 1DIV app displaying a thumbnail grid of CSS designs a user created.



 The second page enables you to create and edit CSS designs: 



A screenshot of the 1DIV app editor page. The top half of the window displays a rendered CSS design, and a text editor on the bottom half of the window displays the CSS used to create it.



 Since I’ve added a simple web manifest and service worker, we can install the app as a PWA on desktop. Here is what it looks like on macOS: 



Screenshots of the 1DIV app thumbnail view and CSS editor view on macOS. This version of the app’s window has a separate control bar at the top for the app name and window control buttons.



 And on Windows: 



Screenshots of the 1DIV app thumbnail view and CSS editor view on the Windows operating system. This version of the app’s window also has a separate control bar at the top for the app name and window control buttons.



 Our app is looking good, but the white title bar in the first page is wasted space. In the second page, it would be really nice if the design area went all the way to the top of the app window. 



 Let’s use the Window Controls Overlay feature to improve this. 



 Enabling Window Controls Overlay 



 The feature is still experimental at the moment. To try it, you need to enable it in one of the supported browsers. 



 As of now, it has been implemented in Chromium, as a collaboration between Microsoft and Google. We can therefore use it in Chrome or Edge by going to the internal about://flags page, and enabling the Desktop PWA Window Controls Overlay flag. 



 Using Window Controls Overlay 



 To use the feature, we need to add the following display_override member to our web app’s manifest file: 



 {
  "name": "1DIV",
  "description": "1DIV is a mini CSS playground",
  "lang": "en-US",
  "start_url": "/",
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display_override": [
    "window-controls-overlay"
  ],
  "icons": [
    ...
  ]
}
 



 On the surface, the feature is really simple to use. This manifest change is the only thing we need to make the title bar disappear and turn the window controls into an overlay. 



 However, to provide a great experience for all users regardless of what device or browser they use, and to make the most of the title bar area in our design, we’ll need a bit of CSS and JavaScript code. 



 Here is what the app looks like now: 



Screenshot of the 1DIV app thumbnail view using Window Controls Overlay on macOS. The separate top bar area is gone, but the window controls are now blocking some of the app’s interface



 The title bar is gone, which is what we wanted, but our logo, search field, and NEW button are partially covered by the window controls because now our layout starts at the top of the window. 



 It’s similar on Windows, with the difference that the close, maximize, and minimize buttons appear on the right side, grouped together with the PWA control buttons: 



Screenshot of the 1DIV app thumbnail display using Window Controls Overlay on the Windows operating system. The separate top bar area is gone, but the window controls are now blocking some of the app’s content.



 Using CSS to keep clear of the window controls 



 Along with the feature, new CSS environment variables have been introduced: 



  titlebar-area-x  titlebar-area-y  titlebar-area-width  titlebar-area-height  



 You use these variables with the CSS env() function to position your content where the title bar would have been while ensuring it won’t overlap with the window controls. In our case, we’ll use two of the variables to position our header, which contains the logo, search bar, and NEW button.&nbsp; 



 header {
  position: absolute;
  left: env(titlebar-area-x, 0);
  width: env(titlebar-area-width, 100%);
  height: var(--toolbar-height);
}
 



 The titlebar-area-x variable gives us the distance from the left of the viewport to where the title bar would appear, and titlebar-area-width is its width. (Remember, this is not equivalent to the width of the entire viewport, just the title bar portion, which as noted earlier, doesn’t include the window controls.) 



 By doing this, we make sure our content remains fully visible. We’re also defining fallback values (the second parameter in the env() function) for when the variables are not defined (such as on non-supporting browsers, or when the Windows Control Overlay feature is disabled). 



Screenshot of the 1DIV app thumbnail view on macOS with Window Controls Overlay and our CSS updated. The app content that the window controls had been blocking has been repositioned.



Screenshot of the 1DIV app thumbnail view on the Windows operating system with Window Controls Overlay and our updated CSS. The app content that the window controls had been blocking has been repositioned.



 Now our header adapts to its surroundings, and it doesn’t feel like the window control buttons have been added as an afterthought. The app looks a lot more like a native app. 



 Changing the window controls background color so it blends in 



 Now let’s take a closer look at our second page: the CSS playground editor. 



Screenshots of the 1DIV app CSS editor view with Window Controls Overlay in macOS and Windows, respectively. The window controls overlay areas have a solid white background color, which contrasts with the hot pink color of the example CSS design displayed in the editor.



 Not great. Our CSS demo area does go all the way to the top, which is what we wanted, but the way the window controls appear as white rectangles on top of it is quite jarring. 



 We can fix this by changing the app’s theme color. There are a couple of ways to define it: 



  PWAs can define a theme color in the web app manifest file using the theme_color manifest member. This color is then used by the OS in different ways. On desktop platforms, it is used to provide a background color to the title bar and window controls.  Websites can use the theme-color meta tag as well. It’s used by browsers to customize the color of the UI around the web page. For PWAs, this color can override the manifest theme_color.  



 In our case, we can set the manifest theme_color to white to provide the right default color for our app. The OS will read this color value when the app is installed and use it to make the window controls background color white. This color works great for our main page with the list of demos. 



 The theme-color meta tag can be changed at runtime, using JavaScript. So we can do that to override the white with the right demo background color when one is opened. 



 Here is the function we’ll use: 



 function themeWindow(bgColor) {
  document.querySelector("meta[name=theme-color]").setAttribute('content', bgColor);
} 



 With this in place, we can imagine how using color and CSS transitions can produce a smooth change from the list page to the demo page, and enable the window control buttons to blend in with the rest of the app’s interface. 



Screenshot of the 1DIV app CSS editor view on the Windows operating system with Window Controls Overlay and updated CSS demonstrating how the window control buttons blend in with the rest of the app’s interface.



 Dragging the window 



 Now, getting rid of the title bar entirely does have an important accessibility consequence: it’s much more difficult to move the application window around. 



 The title bar provides a sizable area for users to click and drag, but by using the Window Controls Overlay feature, this area becomes limited to where the control buttons are, and users have to very precisely aim between these buttons to move the window. 



 Fortunately, this can be fixed using CSS with the app-region property. This property is, for now, only supported in Chromium-based browsers and needs the -webkit- vendor prefix.&nbsp; 



 To make any element of the app become a dragging target for the window, we can use the following:&nbsp; 



 -webkit-app-region: drag; 



 It is also possible to explicitly make an element non-draggable:&nbsp; 



 -webkit-app-region: no-drag;&nbsp; 



 These options can be useful for us. We can make the entire header a dragging target, but make the search field and NEW button within it non-draggable so they can still be used as normal. 



 However, because the editor page doesn’t display the header, users wouldn’t be able to drag the window while editing code. So let's use a different approach. We’ll create another element before our header, also absolutely positioned, and dedicated to dragging the window. 



 &lt;div class="drag"&gt;&lt;/div&gt;
&lt;header&gt;...&lt;/header&gt; 



 .drag {
  position: absolute;
  top: 0;
  width: 100%;
  height: env(titlebar-area-height, 0);
  -webkit-app-region: drag;
} 



 With the above code, we’re making the draggable area span the entire viewport width, and using the titlebar-area-height variable to make it as tall as what the title bar would have been. This way, our draggable area is aligned with the window control buttons as shown below. 



 And, now, to make sure our search field and button remain usable: 



 header .search,
header .new {
  -webkit-app-region: no-drag;
} 



 With the above code, users can click and drag where the title bar used to be. It is an area that users expect to be able to use to move windows on desktop, and we’re not breaking this expectation, which is good. 



An animated view of the 1DIV app being dragged across a Windows desktop with the mouse.



 Adapting to window resize 



 It may be useful for an app to know both whether the window controls overlay is visible and when its size changes. In our case, if the user made the window very narrow, there wouldn’t be enough space for the search field, logo, and button to fit, so we’d want to push them down a bit. 



 The Window Controls Overlay feature comes with a JavaScript API we can use to do this: navigator.windowControlsOverlay. 



 The API provides three interesting things: 



  navigator.windowControlsOverlay.visible lets us know whether the overlay is visible.  navigator.windowControlsOverlay.getBoundingClientRect() lets us know the position and size of the title bar area.  navigator.windowControlsOverlay.ongeometrychange lets us know when the size or visibility changes.  



 Let’s use this to be aware of the size of the title bar area and move the header down if it’s too narrow. 



 if (navigator.windowControlsOverlay) {
  navigator.windowControlsOverlay.addEventListener('geometrychange', () =&gt; {
    const { width } = navigator.windowControlsOverlay.getBoundingClientRect();
    document.body.classList.toggle('narrow', width &lt; 250);
  });
} 



 In the example above, we set the narrow class on the body of the app if the title bar area is narrower than 250px. We could do something similar with a media query, but using the windowControlsOverlay API has two advantages for our use case: 



  It’s only fired when the feature is supported and used; we don’t want to adapt the design otherwise.  We get the size of the title bar area across operating systems, which is great because the size of the window controls is different on Mac and Windows. Using a media query wouldn’t make it possible for us to know exactly how much space remains.  



 .narrow header {
  top: env(titlebar-area-height, 0);
  left: 0;
  width: 100%;
} 



 Using the above CSS code, we can move our header down to stay clear of the window control buttons when the window is too narrow, and move the thumbnails down accordingly. 



A screenshot of the 1DIV app on Windows showing the app’s content adjusted for a much narrower viewport.



 Thirty pixels of exciting design opportunities 



  Using the Window Controls Overlay feature, we were able to take our simple demo app and turn it into something that feels so much more integrated on desktop devices. Something that reaches out of the usual window constraints and provides a custom experience for its users. 



 In reality, this feature only gives us about 30 pixels of extra room and comes with challenges on how to deal with the window controls. And yet, this extra room and those challenges can be turned into exciting design opportunities. 



 More devices of all shapes and forms get invented all the time, and the web keeps on evolving to adapt to them. New features get added to the web platform to allow us, web authors, to integrate more and more deeply with those devices. From watches or foldable devices to desktop computers, we need to evolve our design approach for the web. Building for the web now lets us think outside the rectangular box. 



 So let’s embrace this. Let’s use the standard technologies already at our disposal, and experiment with new ideas to provide tailored experiences for all devices, all from a single codebase! 



  If you get a chance to try the Window Controls Overlay feature and have feedback about it, you can open issues on the spec’s repository. It’s still early in the development of this feature, and you can help make it even better. Or, you can take a look at the feature’s existing documentation, or this demo app and its source code.&nbsp; 
				"
link: "
					https://alistapart.com/article/breaking-out-of-the-box/				"
category:
directory: _directory/a-list-apart.md
---
