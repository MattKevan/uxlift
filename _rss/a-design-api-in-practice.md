---
title: "A design API in practice"
date: 2021-03-11 13:47:36 +0000
dateadded: 2020-07-06 13:47:36 +0000
description: ""
link: "https://matthewstrom.com/writing/design-api-in-practice/"
category:
directory:
- _directory/matthew-ström.md
---
<figure data-type="image"><img src="https://matthewstrom.com/images/design-api-5.jpg" alt=""></figure>
<p>A few months ago I wrote an essay titled “<a href="https://matthewstrom.com/writing/design-apis" target="_blank" rel="noopener">Design APIs: the evolution of design systems</a>”. The API model for design systems resonated with design systems practitioners. The response blew me away.</p>
<p>Since then, I’ve had lots of conversations (and <a href="https://www.digitale-leute.de/interview/design-systems-into-design-api/" target="_blank" rel="noopener">one podcast</a>) about the concept of a design API. One question comes up almost every time: what does a design API actually look like? Good question.</p>
<p>So I built one. It’s up and running at <a href="https://matthewstrom.com/api" target="_blank" rel="noopener">https://matthewstrom.com/api</a>. It’s very rudimentary, but it makes an excellent proof of concept. In this essay I’ll describe how it works, how I built it, and what it can (and can’t yet) do.</p>
<div class="c--bg-gray-1 l--pad-s l--rounded-corners-l">
<strong>Heads up:</strong> This essay is more technical than usual; some terms may be unfamiliar. The first time a technical term appears, I'll use <a class="definition--link">dotted underline</a> to link to a definition. A full glossary appears at the bottom.
</div>
<h2 id="how-it-works">How it works</h2>
<p>My design API consists of a few libraries and frameworks, connected by pieces of my own code:</p>
<ol>
<li>The foundation of the <a id="src-api" href="#api" class="definition--link">API</a> is an <a id="src-express-js" href="#express-js" class="definition--link">Express.js</a> application, running as a <a id="src-serverless-function" href="#serverless-function" class="definition--link">serverless function</a> via <a id="src-netlify-functions" href="#netlify-functions" class="definition--link">Netlify Functions</a> .</li>
<li>The API accepts and responds to <a id="src-json" href="#json" class="definition--link">JSON</a> queries, using <a href="#graphql" id="src-graphql" class="definition--link">GraphQL</a> to interpret requests and compose responses.</li>
<li>The application uses <a id="src-theo" href="#theo" class="definition--link">Theo</a> to read and compose <a id="src-design-token" href="#design-token" class="definition--link">design tokens</a> on the fly.</li>
</ol>
<p>I won’t go through the technical implementation of those libraries and frameworks in this essay, and after this point they’re not that important. I wrote a companion piece for this essay, and CSS-Tricks was kind enough to publish it; <a href="https://css-tricks.com/building-serverless-graphql-api-in-node-with-express-and-netlify/" target="_blank" rel="noopener">check out that article</a> if you’re interested in the nuts and bolts. If you’ve never written a line of code, keep reading — let’s take a more abstract look.</p>
<hr>
<p>Like most <a id="src-design-system" href="#design-system" class="definition--link">design systems</a>, the one that styles this website has a broad range of colors (gray, blue, green, yellow, and red). Each color has a range of lightness values running from 10 to 90 in increments of 10. So when I refer to <code>blue-50</code>, I mean the blue color in the middle of the lightness range.</p>
<p>The design API allows me to <svg class="l--mar-top-none" fill="none" xmlns="http://www.w3.org/2000/svg" width="0.8em" height="0.8em" viewBox="0 0 30 30"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15zm-.248-21.09h2.601V22h-2.768V11.536h-.076l-2.998 1.88V10.96l3.24-2.052z" fill="currentColor"></path></svg> <strong>request the design token</strong> for <code>blue-50</code>. The token contains some information about the color, including the exact hsl color code in a format ready to be used by CSS to style the page.</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/design-api-1.jpg" alt="A high-level overview of a design API"><figcaption>A high-level overview of a design API</figcaption></figure>
<p>When I <svg class="l--mar-top-none" fill="none" xmlns="http://www.w3.org/2000/svg" width="0.8em" height="0.8em" viewBox="0 0 30 30"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15zm4.724-8h-9.332v-1.994l4.66-4.315c1.189-1.144 1.828-1.86 1.828-2.902 0-1.15-.857-1.866-2.007-1.866-1.195 0-1.988.767-1.982 2.02h-2.627c-.006-2.57 1.88-4.213 4.628-4.213 2.806 0 4.66 1.604 4.66 3.874 0 1.489-.722 2.716-3.413 5.17l-1.912 1.874v.09h5.497V22z" fill="currentColor"></path></svg> <strong>get the token back</strong>, I can use it however I want. If I’m working with old-school CSS, that value might go in a custom property. If I’m using new-fangled CSS-in-JS, maybe it’ll become a variable or a property passed to a component.</p>
<p>But what’s really going on inside the API? Let’s peek inside.</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/design-api-2.jpg" alt="A closer look at the internal process of the design API"><figcaption>A closer look at the internal process of the design API</figcaption></figure>
<p>Inside the API, there are three processes happening. The first <svg class="l--mar-top-none" fill="none" xmlns="http://www.w3.org/2000/svg" width="0.8em" height="0.8em" viewBox="0 0 30 30"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15zm-2.367-10.985L11.662 22H8.696l4.519-13.09h3.567L21.294 22H18.33l-.972-2.985h-4.724zm2.314-7.114l-1.61 4.953h3.323l-1.61-4.953h-.103z" fill="currentColor"></path></svg> <strong>looks up</strong> the token from a database (<code>blue-50</code>). In my rudimentary proof-of-concept, the database is a lowly text file sitting on the server. An API with more traffic will probably need a proper database.</p>
<p>The second process <svg class="l--mar-top-none" fill="none" xmlns="http://www.w3.org/2000/svg" width="0.8em" height="0.8em" viewBox="0 0 30 30"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15zm.78-8h-5.592V8.91h5.241c2.89 0 4.347 1.393 4.347 3.355 0 1.54-1.004 2.506-2.365 2.812v.128c1.489.07 2.876 1.24 2.876 3.177 0 2.084-1.566 3.618-4.506 3.618zm-2.825-5.74v3.477h2.257c1.547 0 2.218-.645 2.218-1.63 0-1.08-.825-1.847-2.154-1.847h-2.32zm0-5.114v3.241h2.052c1.132 0 1.975-.626 1.975-1.662 0-.946-.696-1.579-1.924-1.579h-2.103z" fill="currentColor"></path></svg> <strong>transforms</strong> the token into whatever format I’ve requested. In my demo API, I’m using Theo to accomplish this. There are other tools like <a href="https://amzn.github.io/style-dictionary" target="_blank" rel="noopener">Style Dictionary</a> which have the same features; you could even build your own transformer. The premise is: take the value stored in the database (In my example, the value of <code>blue-50</code> is <code>#274dd8</code>) and transform it into the desired format.</p>
<p>This is the magic of design tokens: if we want the color in a web-friendly format, we transform it to rgb (<code>rgb(39, 77, 216) </code>). If we are using the color in an iOS app, we need a UIColor object (<code>red: 0.15, green: 0.30, blue: 0.85, alpha: 1.00</code>).  Android apps need an 8-digit hex value with the alpha channel first (<code>#ff274dd8</code>) and so on.</p>
<p>The third process <svg class="l--mar-top-none" fill="none" xmlns="http://www.w3.org/2000/svg" width="0.8em" height="0.8em" viewBox="0 0 30 30"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15zm.238-21.27c3.03 0 5.318 1.739 5.683 4.762h-2.8c-.211-1.438-1.304-2.314-2.819-2.314-2.026 0-3.356 1.553-3.356 4.276 0 2.8 1.349 4.277 3.337 4.277 1.476 0 2.576-.806 2.838-2.205l2.8.012c-.3 2.41-2.327 4.641-5.683 4.641-3.503 0-6.098-2.455-6.098-6.724 0-4.283 2.64-6.725 6.098-6.725z" fill="currentColor"></path></svg> <strong>formats</strong> the response. Here we can choose to wrap the output token’s (or list of tokens’) value in some extra code to make it easier to incorporate into our own program or use case. For instance: if I’m working on a documentation site that uses SASS, it’d be nice to have the color formatted as a SASS variable (<code>$blue-50: rgb(39, 77, 216)</code>). But if my production app uses CSS custom properties, the formatting should be in vanilla CSS ( <code>:root {--blue-50: rgb(39, 77, 216);</code>). At the moment, my own proof-of-concept can only format the response as JSON - more on that later.</p>
<p>After looking up, transforming, and formatting the token, the API <svg class="l--mar-top-none" fill="none" xmlns="http://www.w3.org/2000/svg" width="0.8em" height="0.8em" viewBox="0 0 30 30"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15zm4.724-8h-9.332v-1.994l4.66-4.315c1.189-1.144 1.828-1.86 1.828-2.902 0-1.15-.857-1.866-2.007-1.866-1.195 0-1.988.767-1.982 2.02h-2.627c-.006-2.57 1.88-4.213 4.628-4.213 2.806 0 4.66 1.604 4.66 3.874 0 1.489-.722 2.716-3.413 5.17l-1.912 1.874v.09h5.497V22z" fill="currentColor"></path></svg> sends the token back to me. This all happens in milliseconds.</p>
<hr>
<p>Here’s a few examples of requests and responses:</p>
<h3 id="example-1%3A-list-all-tokens">Example 1: list all tokens</h3>
<p><strong>Request</strong></p>
<pre class="language-graphql"><code class="language-graphql"><span class="token punctuation">{</span><br>	tokens <span class="token punctuation">{</span><br>		name<br>		value<br>		category<br>	<span class="token punctuation">}</span><br><span class="token punctuation">}</span></code></pre>
<p><strong>Response</strong></p>
<pre class="language-json"><code class="language-json"><span class="token punctuation">{</span><br>	<span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span><br>		<span class="token property">"tokens"</span><span class="token operator">:</span> <span class="token punctuation">[</span><br>			<span class="token punctuation">{</span><br>				<span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"gray-10"</span><span class="token punctuation">,</span><br>				<span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"rgb(249, 247, 246)"</span><span class="token punctuation">,</span><br>				<span class="token property">"category"</span><span class="token operator">:</span> <span class="token string">"color"</span><br>			<span class="token punctuation">}</span><span class="token punctuation">,</span><br>			<span class="token punctuation">{</span> ... <span class="token punctuation">}</span><br>		<span class="token punctuation">]</span><br>	<span class="token punctuation">}</span><br><span class="token punctuation">}</span></code></pre>
<p>This example lists all of the tokens in the database. This might be useful for a documentation site or Sketch/Figma plugin. An optional filter can be passed in (<code>tokens(category:&quot;color&quot;)</code>) to only return a subset of tokens.</p>
<h3 id="example-2%3A-get-a-single-token">Example 2: Get a single token</h3>
<p><strong>Request</strong></p>
<pre class="language-graphql"><code class="language-graphql"><span class="token punctuation">{</span><br>	token<span class="token punctuation">(</span><span class="token attr-name">name</span><span class="token punctuation">:</span> <span class="token string">"blue-50"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><br>		value<br>	<span class="token punctuation">}</span><br><span class="token punctuation">}</span></code></pre>
<p><strong>Response</strong></p>
<pre class="language-json"><code class="language-json"><span class="token punctuation">{</span><br>	<span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span><br>		<span class="token property">"token"</span><span class="token operator">:</span> <span class="token punctuation">{</span><br>			<span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"rgb(39, 77, 216)"</span><br>    	<span class="token punctuation">}</span><br>	<span class="token punctuation">}</span><br><span class="token punctuation">}</span></code></pre>
<p>This is how you’d retrieve a single token. It’s useful for styling an element directly, or looking up metadata about the token.</p>
<h3 id="transform-a-token">Transform a token</h3>
<p><strong>Request</strong></p>
<pre class="language-graphql"><code class="language-graphql"><span class="token punctuation">{</span><br>	token<span class="token punctuation">(</span><span class="token attr-name">name</span><span class="token punctuation">:</span> <span class="token string">"blue-50"</span><span class="token punctuation">,</span> <span class="token attr-name">transform</span><span class="token punctuation">:</span> <span class="token string">"android"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><br>		value<br>	<span class="token punctuation">}</span><br><span class="token punctuation">}</span></code></pre>
<p><strong>Response</strong></p>
<pre class="language-json"><code class="language-json"><span class="token punctuation">{</span><br>	<span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span><br>		<span class="token property">"token"</span><span class="token operator">:</span> <span class="token punctuation">{</span><br>			<span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"#ff274dd8"</span><br>		<span class="token punctuation">}</span><br>	<span class="token punctuation">}</span><br><span class="token punctuation">}</span></code></pre>
<p>This is an example of how you can request a token in a specific format - in this case, the eight-digit hex code used in Android app development.</p>
<h2 id="one-to-one-%E2%86%92-one-to-many">One-to-one → One-to-many</h2>
<p>There’s an idea buried in my approach and implementation of a design API that warrants a closer look. It’s the move to a <strong>one-to-many</strong> model for design tokens.</p>
<p>In my <a href="https://matthewstrom.com/writing/design-apis" target="_blank" rel="noopener">previous design API essay</a>, I used the metaphor of a phone book to describe modern design systems:</p>
<blockquote>
<p>A dedicated design system team is required [to maintain a design system] because a design system is only a low-level abstraction of the design process.
This means the design system’s documentation — the website or wiki or design file that describes it — is its most useful application.</p>
</blockquote>
<blockquote>
<p>… Think of this like a phone book. A phone book is a low-level abstraction of a phone number directory. To find someone’s number, you flip through the pages of the phone book until you find their name. A whole team of people produces the phone book, printing and distributing it on a regular basis to ensure it is up to date.</p>
</blockquote>
<p>And later, I mentioned that while tools like Theo and Style Dictionary are innovative in their own right, they are still just printing phone books:</p>
<blockquote>
<p>However, [design tokens] are generated and distributed in bulk. If you only need one token, you need to import the whole library. That means they’re still a type of phone book, albeit one that is formatted in a way that software can easily read.</p>
</blockquote>
<p>A package generated by Theo contains many copies of each design token, pre-formatted for each platform and format the end users need. When a new use case emerges, a whole new package needs to be compiled and distributed. As users’ needs grow, so does the package size. This is a <strong>many-to-many</strong> model: many tokens, many use cases.</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/design-api-3.jpg" alt="A many-to-many model"><figcaption>A many-to-many model</figcaption></figure>
<p>The database of my design API (it’s just a text file, really … you can see the source file <a href="https://github.com/ilikescience/mhs11/blob/master/src/assets/tokens/tokens.json" target="_blank" rel="noopener">here</a>) contains just a single copy of each token. Custom-tailored copies are generated on demand — whenever a request to the API is made. Handling new use cases doesn’t require a new print run: a new query or argument is added to the API and each end user continues to get request what they need. This is a <strong>one-to-many</strong> model: one token, many use cases.</p>
<figure data-type="image"><img src="https://matthewstrom.com/images/design-api-4.jpg" alt="A one-to-many model"><figcaption>A one-to-many model</figcaption></figure>
<p>The one-to-many model is a powerful evolution of design tokens, one that enables a small team (or, in my case, a single person) to support a huge number of use cases and client applications.</p>
<h2 id="limitations">Limitations</h2>
<p>I’m proud of my little proof-of-concept design API, but there’s a lot it can’t do yet. Most of its limitations are due to my own limitations as a developer — if you have ideas for how to solve these, get in touch!</p>
<ol>
<li><strong>It can only serve JSON.</strong> Currently, I can only respond with a JSON containing the desired code. This means that unless the client or end user can use JSON directly, an extra processing step is needed. Ideally, I’d be able to provide whatever format the client application wants. For example: even though I can query the API with a URL like <code>http://matthewstrom.com/api?query={tokens{value}}</code>, I can’t use that URL in a css import or tag like <code>&lt;link href=&quot;http://matthewstrom.com/api?query={tokens{value}}&quot;&gt;</code>.</li>
<li><strong>It’s read-only.</strong> To keep things simple in this proof-of-concept, I didn’t implement any way of updating tokens via the API. This is fairly straightforward with GraphQL — since the API operates on the one-to-many model, there’s only one token to update.</li>
<li><strong>It has a limited set of transformation options.</strong> when building the API, I started off with Style Dictionary handling the token transformations. Style Dictionary has a ton of built-in transformation options, allowing for many use cases out of the box. However, Style Dictionary is geared towards producing large, static bundles of tokens, not single tokens on demand. So, I switched to Theo. Theo is also intended to produce bundles of tokens in static files, but has enough wiggle room to be adapted to this token-on-demand approach. The downside is that Theo has far fewer transformation options built in.</li>
</ol>
<h2 id="where-do-we-go-from-here%3F">Where do we go from here?</h2>
<p>There’s lots of room for experimentation and exploration. Here’s a list of ideas for future updates:</p>
<ul>
<li>More tokens: spacing, typography, shadows, and easing</li>
<li>Aliases: component-based naming and theme-based naming</li>
<li>Accessibility: programmatically listing accessible color combinations</li>
<li>Components: providing specifications for higher-order design decisions</li>
</ul>
<p>There’s also inspiration to be found in the experimental API for Shopify’s <a href="https://polaris.shopify.com/resources/graphql-api" target="_blank" rel="noopener">Polaris design system</a>.<sup class="footnote-ref"><a href="#fn1" id="fnref1">1</a></sup></p>
<p>As for the future of design APIs in general: it’s closely tied to the work being done to write a specification for design tokens, and the <a href="https://www.w3.org/community/design-tokens/" target="_blank" rel="noopener">W3C design tokens community group</a> is just getting started. Having a stable specification for design tokens will make it possible to write applications that consume tokens without needing to coordinate directly with the services that provide tokens. This kind of collaboration is what made the web so resilient and flexible, so I have high hopes for the future of design tokens as a standardized web technology.</p>
<p>An <a href="https://jxnblk.com/blog/interoperability/" target="_blank" rel="noopener">interoperable</a>, <a href="https://johno.com/guessable/" target="_blank" rel="noopener">guessable</a> design API is the foundation of a fully networked design system, one that takes the rote and error-prone aspects out of designers and engineers collaborating and iterating on design. It’s the next step in the evolution of design systems.</p>
<hr>
<p><span class="t--family-sans t--weight-bold">Definitions</span></p>
<dl class="definition--list">
	<div class="definition" id="api">
		<dt class="definition--term">API</dt>
		<dd class="definition--description">Stands for “Application Programming Interface.” A reliable way for two or more programs to cooperate. It allows programs to work together despite differences in hardware, language, architecture, or other operating constraints.&nbsp;<a href="#src-api" class="footnote-backref">↩︎</a> </dd>
	</div>
	<div class="definition" id="design-system">
		<dt class="definition--term">Design system</dt>
		<dd class="definition--description">Collection of code and design specifications that enables faster and more consistent collaboration between designers and developers.&nbsp;<a href="#src-design-system" class="footnote-backref">↩︎</a></dd>
	</div>
	<div class="definition" id="design-token">
		<dt class="definition--term">Design token</dt>
		<dd class="definition--description">Self-contained piece of code describing a single design decision, like a color or a typeface.&nbsp;<a href="#src-design-token" class="footnote-backref">↩︎</a></dd>
	</div>
	<div class="definition" id="express-js">
		<dt class="definition--term">Express.js</dt>
		<dd class="definition--description">Lightweight javascript library for building web applications. <a href="https://expressjs.com/" target="_blank">Link to official Express.js website &#8599;</a>&nbsp;<a href="#src-express-js" class="footnote-backref">↩︎</a></dd>
	</div>
	<div class="definition" id="graphql">
		<dt class="definition--term">GraphQL</dt>
		<dd class="definition--description">Language for querying APIs, designed enable web applications to make fewer queries. <a href="https://graphql.org/" target="_blank">Link to official GraphQL website &#8599;</a>&nbsp;<a href="#src-graphql" class="footnote-backref">↩︎</a></dd>
	</div>
	<div class="definition" id="json">
		<dt class="definition--term">JSON</dt>
		<dd class="definition--description">Open standard file format that uses human-readable text to store and transmit data.&nbsp;<a href="#src-json" class="footnote-backref">↩︎</a></dd>
	</div>
	<div class="definition" id="netlify-functions">
		<dt class="definition--term">Netlify Functions</dt>
		<dd class="definition--description">A service that deploys, hosts, and scales serverless functions. <a href="https://www.netlify.com/products/functions/" target="_blank">Link to Netlify Functions site &#8599;</a>&nbsp;<a href="#src-netlify-functions" class="footnote-backref">↩︎</a>
	</dd></div>
	<div class="definition" id="serverless-function">
		<dt class="definition--term">Serverless function</dt>
		<dd class="definition--description">Piece of code that runs — paradoxically — on a server. In contrast to traditional functions, serverless functions are managed by large platforms like Amazon and allow developers to deliver small pieces of functionality to end users without worrying about complicated infrastructure management.&nbsp;<a href="#src-serverless-function" class="footnote-backref">↩︎</a></dd>
	</div>
	<div class="definition" id="theo">
		<dt class="definition--term">Theo</dt>
		<dd class="definition--description">Library that converts design tokens into a variety of formats. Theo was developed by Salesforce and was one of the first open-source examples of design tokens in use. <a href="https://github.com/salesforce-ux/theo" target="_blank">Link to Theo on GitHub &#8599;</a>&nbsp;<a href="#src-theo" class="footnote-backref">↩︎</a></dd>
	</div>
</dl><hr>
<section class="footnotes l--space-compact">
<div class="t--weight-bold l--pad-btm-s">Footnotes & References</div>
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>However, based on my experiments with it, the API seems to be mostly a way of communicating with an underlying CMS (for example, the design tokens query only provides a single list of values tailored for the web). <a href="#fnref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
