---
title: "Always Persist Users’ Search Queries (37% Don’t)"
date: 2021-02-23 09:15:00 +0100
dateadded: 2021-03-11 15:43:25 +0000
description: ""
link: "https://feeds.baymard.com/link/9825/14310152/persist-search-queries"
category:
directory:
- _directory/baymard-institute.md
---
<p><em>(Note: Unfortunately, e-mail and RSS don’t support advanced layouts and features. If the graphics in this article look strange, you may want to <a href="https://baymard.com/blog/persist-search-queries">read the article</a> in your web browser.)</em></p>


<div class="anecdote-graphic-dn32ja anecdote-module-3ba83n disable-zoom-kf4n8k v-size-big"><div class="inner"><div class="anecdote-intrinsic-embed-n42ha1"><div class="inner" style="padding-bottom: 44.26136363636364%;"><img alt="" src="https://cdn.baymard.com/research/media_files/attachments/44837/original/research-media-file-5272363492ab6e407ed448645f0d9d92.jpg?1613989545"></div></div></div></div>


<p><em>“Hey! Argh, okay, I have to retype this. I expected I would be able to continue the sentence”</em>, a test user explained when seeing that her query had disappeared from the search field on the results page.</p>



<p>When users submit a search query, on most sites it’s <strong>retained</strong> in the search box when results are displayed.</p>



<p>However, on 33% of desktop sites (and 42% of mobile sites) in our <a href="https://baymard.com/ux-benchmark">benchmark</a>, search terms <strong>are cleared</strong> once the search is submitted.</p>



<p>This is problematic for users that <strong>iterate search queries</strong> — which they did on average 2.2 times during multiple rounds of Baymard’s <a href="https://baymard.com/research">large-scale usability testing</a> —for example, by changing an initial query of <em>“dresses”</em> to <em>“red dresses”</em> after scanning the search results.</p>



<p>Clearing search queries means that users have to type the new query in full, so that it takes longer to iterate the queries.</p>



<p>This extra friction may nudge some users to <strong>abandon using search</strong> as a product-finding strategy.</p>



<p>Indeed, failing to persist search queries introduces friction at the <strong>worst time possible</strong> as redundant typing is added to an already-disappointing search experience, where the user hasn’t received a set of results relevant to them (hence the need to make a search iteration).</p>



<p>In this article we’ll discuss:</p>



<ol>
  <li>Why users iterate queries</li>
  <li>How persisting search queries helps users find products</li>
  <li>Implementation details for mobile sites</li>
</ol>



<h2 id="1-why-users-iterate-search-queries">1) Why Users Iterate Search Queries</h2>


<p>Highly iterative search behavior was observed in both our desktop and mobile usability studies.</p>



<p>Test users would typically try out 3–5 query iterations before <strong>abandoning the site</strong> if there were still no adequate results (depending somewhat on the implementation of the <a href="https://baymard.com/blog/no-results-page">“No Results”</a>).</p>



<p>The most common scenarios in which users are likely to perform multiple search query iterations include the following:</p>



<ol>
  <li>Too many search results</li>
  <li>Too few search results</li>
  <li>Unexpected results</li>
  <li>The need to reset search</li>
</ol>



<div class="anecdote-graphic-dn32ja anecdote-module-3ba83n v-size-small v-mood-negative v-sidebar-caption"><div class="inner">
<div class="anecdote-intrinsic-embed-n42ha1"><div class="inner" style="padding-bottom: 216.53333333333333%;"><img alt="" src="https://cdn.baymard.com/research/media_files/attachments/44834/original/research-media-file-65ddd0d10f8729428f93bec5adff13a1.jpg?1613988091"></div></div>
<div class="anecdote-caption-ajkd3b"><div class="inner anecdote-wysicontent-ndj4ab">
<p><strong>1. Too many search results.</strong> On <a href="https://baymard.com/ux-benchmark/case-studies/wayfair">Wayfair</a>, search queries are not persisted. When a search query like <em>“Sofa Beds”</em> returns over 1,300 results, many users would iterate by expanding the query to reduce the number of results, for example by trying <em>“Corner Sofa Beds”</em>. When search queries aren’t persisted, users would have to type the full query rather than simply adding a single word.</p>
</div></div>
</div></div>



<p><strong>1. Too many search results.</strong> When the initial query (typically a Product Type query — e.g., <em>“sandals”</em> or <em>“headphones”</em>) yields an overwhelming number of search results, many users typically go through 1–2 query iterations to try to narrow down the results.</p>



<p><em>“Filtering via search query iteration”</em> is when users choose to incorporate words readily available as filters to their search query <em>instead</em> of using the actual filtering feature (e.g., revising a query for <em>“sofa bed”</em> to <em>“corner sofa bed”</em>, or from <em>“cough”</em> to <em>“dry cough syrup”</em>).</p>


<div class="anecdote-graphic-dn32ja anecdote-module-3ba83n v-mood-negative v-embed-code"><div class="inner">
<div class="anecdote-intrinsic-embed-n42ha1"><div class="inner" style="padding-bottom: 83.125%;"><iframe src="https://player.vimeo.com/video/315317202" width="640" height="532" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe></div></div>
<div class="anecdote-caption-ajkd3b"><div class="inner anecdote-wysicontent-ndj4ab">
<p><strong>2. Too few search results.</strong><em>“This is relatively many pages to go through — so let’s try to make a new search”</em>, a user during a previous round of desktop testing said after receiving very broad results for her first search query of <em>“sleeping bag”</em>. She decided to refine her query by qualifying it with <em>“minus 15”</em>, but she had to retype her entire query as the original search input wasn’t persisted. Unfortunately, this time she typed <em>“sleepingbag minus 15”</em> with a missing space. Due to the typo, no results were shown and the search field was automatically cleared once again. She then retyped her query once more, this time trying <em>“sleepingbag below 15”</em> (thinking that the site didn’t understand <em>“minus”</em>) — again with no results. She then retried <em>“sleeping bag”</em>, only to add <em>“-15”</em>. In total, she went through 7 iterations (over one minute) before abandoning the site.</p>
</div></div>
</div></div>



<div class="anecdote-graphic-dn32ja anecdote-module-3ba83n v-size-small v-mood-positive v-sidebar-caption"><div class="inner">
<div class="anecdote-intrinsic-embed-n42ha1"><div class="inner" style="padding-bottom: 216.53333333333333%;"><img alt="" src="https://cdn.baymard.com/research/media_files/attachments/44835/original/research-media-file-6284817dc6d5731fc43d421fd4be3bc7.jpg?1613989033"></div></div>
<div class="anecdote-caption-ajkd3b"><div class="inner anecdote-wysicontent-ndj4ab">
<p><strong>2. Too few search results.</strong> When faced with no results on <a href="https://baymard.com/ux-benchmark/case-studies/apple">Apple</a>, users can adjust the search query easily to broaden the search, for example by removing <em>“red”</em> to find all cases.</p>
</div></div>
</div></div>



<p><strong>2. Too few search results.</strong> If users deem the <strong>number of search results insufficient</strong> they may modify their query and try again.</p>



<p>A frequent cause of receiving too few results is a mismatch between user query expectations and actual site support for the types of queries they attempt to submit.</p>



<p>For instance, users might try <strong>Feature, Thematic, or Symptom</strong> <a href="https://baymard.com/blog/ecommerce-search-query-types">search queries</a> on sites that don’t support them.</p>



<p>In other cases, users will simply search for a product the site doesn’t carry, which usually returns no results.</p>



<p>Being able to iterate the search query <strong>by removing or changing</strong> a word can speed up the resubmission of the search.</p>



<div class="anecdote-graphic-dn32ja anecdote-module-3ba83n v-size-big v-mood-positive"><div class="inner">
<div class="anecdote-intrinsic-embed-n42ha1"><div class="inner" style="padding-bottom: 61.875%;"><img alt="" src="https://cdn.baymard.com/research/media_files/attachments/44838/original/research-media-file-100b0e9d287b0759535c42580f134571.jpg?1613989763"></div></div>
<div class="anecdote-caption-ajkd3b"><div class="inner anecdote-wysicontent-ndj4ab">
<p><strong>3. Unexpected results.</strong> If users search for <em>“drills”</em> and see sinks at the top of search results, iterating the search by using a term like <em>“cordless drills”</em> may return better matches. This is facilitated by persisting search queries, as is done here on <a href="https://baymard.com/ux-benchmark/case-studies/build-com">Build.com</a>.</p>
</div></div>
</div></div>


<p><strong>3. Unexpected results.</strong> In this case, there are neither too few nor too many results. Rather, it’s an issue of not finding <strong>suitable products</strong> in the initial search results.</p>



<p>Users may <strong>make slight tweaks</strong> to a search query or devise an entirely new query to iterate their search.</p>



<p>The degree of query text revision is highly dependent on the perceived distance between the products presented and the original product expectations.</p>



<div class="anecdote-gallery-dn2bak anecdote-module-3ba83n v-mood-positive"><div class="inner">
<div class="content anecdote-flex-module-a4j2aj v-gutter-spacing-small v-flow-from-tablet">
<div class="anecdote-graphic-dn32ja anecdote-module-3ba83n v-size-small" style="width:50.0%;flex-basis:50.0%"><div class="inner"><div class="anecdote-intrinsic-embed-n42ha1"><div class="inner" style="padding-bottom: 177.86666666666667%;"><img alt="" src="https://cdn.baymard.com/research/media_files/attachments/44841/original/research-media-file-8d010852080417cd2320abc2d5efcc2f.jpg?1613990362"></div></div></div></div>
<div class="anecdote-graphic-dn32ja anecdote-module-3ba83n v-size-small" style="width:50.0%;flex-basis:50.0%"><div class="inner"><div class="anecdote-intrinsic-embed-n42ha1"><div class="inner" style="padding-bottom: 177.86666666666667%;"><img alt="" src="https://cdn.baymard.com/research/media_files/attachments/44842/original/research-media-file-97df92c7b0ef2f94a117a849977141f1.jpg?1613990396"></div></div></div></div>
</div>
<div class="anecdote-caption-ajkd3b"><div class="inner anecdote-wysicontent-ndj4ab">
<p><strong>4. The need to reset search.</strong> At <a href="https://baymard.com/ux-benchmark/case-studies/kohls">Kohl’s</a>, a search query for <em>“womens sweater”</em> with filters applied (first image) is able to easily be reset without having to modify filters by simply submitting the persisted query again (second image). On mobile sites it’s even handier to have a quick way to reset search results to their original state.</p>
</div></div>
</div></div>


<p><strong>4. The need to reset search.</strong> Lastly, a nuance of some of the above iteration types is when users want to reset a search. While in many cases users will wish to add or subtract a word (or words) in order to iterate, in other cases they merely want an easy way <strong>to <em>“start over”</em></strong>  — for instance, to remove filters or sorting that haven’t yielded expected results or to back out of error states.</p>



<p>Making it easy to resubmit an existing (persisted) search query once the filtering or sorting has been changed will expedite this process.</p>



<h2 id="2-how-persisting-search-queries-helps-users-find-products">2) How Persisting Search Queries Helps Users Find Products</h2>



<div class="anecdote-graphic-dn32ja anecdote-module-3ba83n v-mood-positive v-embed-code"><div class="inner">
<div class="anecdote-intrinsic-embed-n42ha1"><div class="inner" style="padding-bottom: 68.90625%;"><iframe src="https://player.vimeo.com/video/315337077%20" width="640" height="441" frameborder="0" allow="autoplay=0; fullscreen" allowfullscreen=""></iframe></div></div>
<div class="anecdote-caption-ajkd3b"><div class="inner anecdote-wysicontent-ndj4ab">
<p>A user at <a href="https://baymard.com/ux-benchmark/case-studies/amazon">Amazon</a> decides to iterate her query — changing the query text from <em>“sleek comfortable office chair”</em> to <em>“mesh office chair”</em>. She was able to tap into the middle of her search query string, removing the first two words before adding the word <em>“mesh”</em>. Search query text that is persisted allows users to easily make minor adjustments to query text without the need to retype, which helps to expedite product exploration.</p>
</div></div>
</div></div>



<p>During testing, when search queries were persisted, users were able to make swift iterations by adding or removing a word or two from their original query, avoiding the <strong><em>“halt and retype”</em></strong> behavior that was necessary on sites that didn’t persist search queries.</p>



<p>Persisting the query may, in fact, be perceived by users as <strong>encouragement</strong> to <em>“filter by search query iteration”</em>, as the query is preserved in the search field — ready for any modifications, should they be needed.</p>



<p>During testing, <em>“filtering by search query iteration”</em> was observed to <strong>help users tremendously</strong>, as it often aided them in a situation where they were otherwise stuck due to a lack of <a href="https://baymard.com/blog/5-essential-filters">certain filtering options</a>.</p>



<p>On <strong>mobile devices</strong>, search query persistence is equally if not more critical in helping the search-iteration process flow smoothly.</p>



<p>Consider that users already must grapple with <strong>small tap target sizes</strong> and numerous taps to backspace-delete a word (or words) before typing any new characters — both of which are tricky interactions.</p>



<p>For users attempting to revise query text in the middle or beginning of search fields, the action of tapping into the <strong>precise position</strong> in the search field can make iterating a query even more tedious.</p>



<div class="anecdote-graphic-dn32ja anecdote-module-3ba83n v-mood-positive v-embed-code"><div class="inner">
<div class="anecdote-intrinsic-embed-n42ha1"><div class="inner" style="padding-bottom: 75.0%;"><iframe src="https://player.vimeo.com/video/314172924%20" width="640" height="480" frameborder="0" allow="autoplay=0; fullscreen" allowfullscreen=""></iframe></div></div>
<div class="anecdote-caption-ajkd3b"><div class="inner anecdote-wysicontent-ndj4ab">
<p>A user at <a href="https://baymard.com/ux-benchmark/case-studies/walmart">Walmart</a> has used autocomplete to search for an office chair. She wishes to narrow her scope to view results only for blue chairs and taps into the search field, easily adding the word <em>“blue”</em> to the end of her search query, and quickly views a new set of results. Persisting the search query text eliminates repetitive typing, speeding search iteration while giving users a degree of control in relation to the desired granularity of the results.</p>
</div></div>
</div></div>



<p>While the time it takes to retype queries may seem inconsequential on desktop, retyping of <em>any</em> text was observed to invoke some of the most damaging user sentiments during <em>all</em> of our prior mobile usability studies.</p>



<p>On mobile, retyping queries is <strong>even more troublesome</strong> due to the tighter spacing and the absence of a keyboard (<a href="https://baymard.com/blog/handling-accidental-taps-on-touch-devices">see this article for more on accidental taps</a>).</p>



<p>Persisting search queries, therefore, will <strong>reduce the burden</strong> of retyping text — especially problematic on mobile — and enable a smoother search-iteration experience.</p>



<div class="anecdote-graphic-dn32ja anecdote-module-3ba83n v-size-big v-mood-positive"><div class="inner">
<div class="anecdote-intrinsic-embed-n42ha1"><div class="inner" style="padding-bottom: 78.18181818181819%;"><img alt="" src="https://cdn.baymard.com/research/media_files/attachments/44847/original/research-media-file-bca7fbf5f637fa89ba1c6a31ae2f5ac1.jpg?1613993894"></div></div>
<div class="anecdote-caption-ajkd3b"><div class="inner anecdote-wysicontent-ndj4ab">
<p>In addition to persisting the query, <a href="https://baymard.com/ux-benchmark/case-studies/overstock">Overstock</a> displays the search query text as a header on results pages and provides breadcrumbs — both of which help orient users as they search and iterate on their searches.</p>
</div></div>
</div></div>


<p>Furthermore, even when the query is persisted in the search field, it’s still important to also include the query somewhere on the results page — as a header or as part of the breadcrumbs, for example — to make the <strong>origin of the search results</strong> abundantly clear.</p>



<p>During testing, interruptions were frequently observed (especially on mobile; e.g., when users received a notification or a text message while browsing a site).</p>



<p>In the event that users are <strong>temporarily distracted</strong> from their search iterations, persisting the search query <em>and</em> including redundant query text as a header reinforce the original search intent, adding a reminder of where users left off prior to the distraction.</p>



<h2 id="3-implementation-details-for-search-iteration-on-mobile-sites">3) Implementation Details for Search Iteration on Mobile Sites</h2>


<p>There are 2 implementation details to get right to make search iteration as seamless as possible for mobile users.</p>



<div class="anecdote-graphic-dn32ja anecdote-module-3ba83n v-mood-negative v-embed-code"><div class="inner">
<div class="anecdote-intrinsic-embed-n42ha1"><div class="inner" style="padding-bottom: 71.71875%;"><iframe src="https://player.vimeo.com/video/313596411%20" width="640" height="459" frameborder="0" allow="autoplay=0; fullscreen" allowfullscreen=""></iframe></div></div>
<div class="anecdote-caption-ajkd3b"><div class="inner anecdote-wysicontent-ndj4ab">
<p><strong>1. Make it easy to avoid unintentionally clearing search fields.</strong> A user at  <a href="https://baymard.com/ux-benchmark/case-studies/walmart">Walmart</a> iterates her search query multiple times. The long search query butts against the <em>“X”</em> to clear the search field and, as a result, the user inadvertently clears her query. She then has to retype subsequent queries in full before adding another word to the query. Failing to provide enough space between the <em>“clear query”</em> UI component and the query itself will cause some users to inadvertently clear the persisted query, introducing an obstacle that slows a user’s ability to iterate on a search — negating the benefit of persisting the query in the first place.</p>
</div></div>
</div></div>



<p><strong>1. Make it easy to avoid unintentionally clearing search fields.</strong> To reduce the need for users to spend a lot of time deleting long queries, some sites include an “X” in the search field that clears the input when tapped.</p>



<p>However, on mobile, care must be taken to ensure there’s sufficient space between the “X” to clear the query and the query itself. Otherwise, users may <strong>accidentally delete</strong> their search query.</p>



<p>Implementing a sufficient tap target size for the clear function (“X”) and providing suitable space between the query and “X” (<a href="https://baymard.com/blog/mobile-commerce-design">see section 4 of this article for more on inadvertent taps</a>) will help users avoid the frustration of retyping that comes with unintended query removal.</p>



<div class="anecdote-gallery-dn2bak anecdote-module-3ba83n v-size-big v-mood-negative"><div class="inner">
<div class="content anecdote-flex-module-a4j2aj v-gutter-spacing-small v-flow-from-tablet">

<div class="anecdote-graphic-dn32ja anecdote-module-3ba83n v-size-small" style="width:47.019867549668874%;flex-basis:47.019867549668874%"><div class="inner"><div class="anecdote-intrinsic-embed-n42ha1"><div class="inner" style="padding-bottom: 63.63636363636363%;"><img alt="" src="https://cdn.baymard.com/research/media_files/attachments/44849/original/research-media-file-67696667dbd3cb13b5e59fde571249ee.jpg?1613995783"></div></div></div></div>

<div class="anecdote-graphic-dn32ja anecdote-module-3ba83n v-size-small" style="width:52.980132450331126%;flex-basis:52.980132450331126%"><div class="inner"><div class="anecdote-intrinsic-embed-n42ha1"><div class="inner" style="padding-bottom: 56.477272727272734%;"><img alt="" src="https://cdn.baymard.com/research/media_files/attachments/44850/original/research-media-file-ef99850870e9bbf7fc10f5ba848975bc.jpg?1613995819"></div></div></div></div>
</div>
<div class="anecdote-caption-ajkd3b"><div class="inner anecdote-wysicontent-ndj4ab">
<p><strong>2. Make it easy to activate the search field.</strong> Test users wishing to revise their search queries at <a href="https://baymard.com/ux-benchmark/case-studies/staples">Staples</a> tapped multiple times in an attempt to activate persisted query text in what looks like a search field. After numerous taps — in one case, also with accidental text selection — and several seconds passing, these users eventually realized that tapping the magnifying glass icon is the only way to activate the search field in order to edit their query text. Failing to offer an easy-to-activate search field causes users needless hesitation in their attempts to modify persisted query text.</p>
</div></div>
</div></div>



<p><strong>2. Make it easy to activate the search field.</strong> Due to the iterative nature of search and users’ desire to add or subtract words from a persisted query, it’s important to ensure that the search field) is easy to activate.</p>



<p>For example, when query text is displayed in a field-like manner (e.g., on the same line as the magnifying glass icon that’s used to activate search), but is <strong>not tappable</strong>, it can cause confusion.</p>



<p>Instead of focusing on advancing product exploration, users needlessly spend time trying to engage the field to edit the persisted search query text, diverting attention from the goal of iterating to attain more meaningful results.</p>



<p>This type of delay represents an <strong>easy-to-avoid</strong> friction point in the iterative search experience.</p>



<h2 id="the-importance-of-persisting-search-queries">The Importance of Persisting Search Queries</h2>



<div class="anecdote-graphic-dn32ja anecdote-module-3ba83n v-size-big v-mood-negative"><div class="inner">
<div class="anecdote-intrinsic-embed-n42ha1"><div class="inner" style="padding-bottom: 77.44318181818181%;"><img alt="" src="https://cdn.baymard.com/research/media_files/attachments/44851/original/research-media-file-8828f75640b66ff1535fa97e0055f025.jpg?1613996061"></div></div>
<div class="anecdote-caption-ajkd3b"><div class="inner anecdote-wysicontent-ndj4ab">
<p>If users need to iterate search on <a href="https://baymard.com/ux-benchmark/case-studies/costco">Costco</a>, they’ll need to retype the full query as it’s not persisted.</p>
</div></div>
</div></div>


<p>Two thirds of Baymard’s <a href="https://baymard.com/ux-benchmark">benchmark</a> desktop sites persist search queries, up from 43% in 2017 and 34% in 2014. This is a <strong>growing trend</strong> and sites that don’t do so are in a reducing minority.<br>
Indeed, when search queries are cleared after submission, users find it harder to <strong>iterate search queries</strong>, which is done for 4 key reasons:</p>



<ol>
  <li>There are too many search results</li>
  <li>There are too few search results</li>
  <li>There are unexpected search results</li>
  <li>Users want to reset search</li>
</ol>



<p>Additionally, mobile sites in particular need to pay attention to 2 implementation details with regards to persisted search queries:</p>



<ol>
  <li>Make it easy to avoid unintentionally clearing search fields</li>
  <li>Make it easy to activate the search field</li>
</ol>



<p>Given that Baymard’s <a href="https://baymard.com/research">large-scale usability testing</a> revealed that not persisting search queries can lead to <strong>abandonment of search</strong> as a method of finding products, persisting search queries is of key importance.</p>



<p><em>This article presents the research findings from just 1 of the 850+ UX guidelines in Baymard Premium – <a href="https://baymard.com/research">get full access</a> to learn how to create a “State of the Art” on-site e-commerce search experience.</em></p>




<p>
    <a href="https://www.linkedin.com/feed/update/urn:li:activity:6769911687702228992/">Comment on LinkedIn</a> or
  <a href="https://twitter.com/intent/tweet?text=Always+Persist+Users%E2%80%99+Search+Queries+%2837%25+Don%E2%80%99t%29&amp;url=https://baymard.com/blog/persist-search-queries&amp;via=Baymard&amp;related=Baymard,jamieappleseed,KiehnHolst">Tweet this article</a>
</p>

  <h3>Related articles</h3>
  <ul>
      <li><a href="https://baymard.com/blog/no-results-page">Search UX: 6 Essential Elements for ‘No Results’ Pages</a></li>
      <li><a href="https://baymard.com/blog/ecommerce-search-query-types">Deconstructing E-Commerce Search: The 8 Most Common Query Types</a></li>
      <li><a href="https://baymard.com/blog/search-field-design">E-Commerce Search Field Design and Its Implications</a></li>
      <li><a href="https://baymard.com/blog/support-non-product-search">E-Commerce Search Needs to Support Users’ Non-Product Search Queries (15% Don’t)</a></li>
      <li><a href="https://baymard.com/blog/autocomplete-design">13 Design Patterns for Autocomplete Suggestions (27% Get it Wrong)</a></li>
  </ul><img src="https://feeds.baymard.com/link/9825/14310152.gif" height="1" width="1"/>
