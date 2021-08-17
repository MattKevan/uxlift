---
title: "
					Sustainable Web Design, An Excerpt				"
date: 2021-08-05 14:00:00 +0000
dateadded: 2021-08-17 09:32:41 +0100
description: "
					
 In the 1950s, many in the elite running community had begun to believe it wasn’t possible to run a mile in less than four minutes. Runners had been attempting it since the late 19th century and were beginning to draw the conclusion that the human body simply wasn’t built for the task.&nbsp; 



 But on May 6, 1956, Roger Bannister took everyone by surprise. It was a cold, wet day in Oxford, England—conditions no one expected to lend themselves to record-setting—and yet Bannister did just that, running a mile in 3:59.4 and becoming the first person in the record books to run a mile in under four minutes.&nbsp; 



 This shift in the benchmark had profound effects; the world now knew that the four-minute mile was possible. Bannister’s record lasted only forty-six days, when it was snatched away by Australian runner John Landy. Then a year later, three runners all beat the four-minute barrier together in the same race. Since then, over 1,400 runners have officially run a mile in under four minutes; the current record is 3:43.13, held by Moroccan athlete Hicham El Guerrouj. 



 We achieve far more when we believe that something is possible, and we will believe it’s possible only when we see someone else has already done it—and as with human running speed, so it is with what we believe are the hard limits for how a website needs to perform. 



 Establishing standards for a sustainable web 



 In most major industries, the key metrics of environmental performance are fairly well established, such as miles per gallon for cars or energy per square meter for homes. The tools and methods for calculating those metrics are standardized as well, which keeps everyone on the same page when doing environmental assessments.&nbsp;In the world of websites and apps, however, we aren’t held to any particular environmental standards, and only recently have gained the tools and methods we need to even make an environmental assessment. 



 The primary goal in sustainable web design is to reduce carbon emissions. However, it’s almost impossible to actually measure the amount of CO2 produced by a web product. We can’t measure the fumes coming out of the exhaust pipes on our laptops. The emissions of our websites are far away, out of sight and out of mind, coming out of power stations burning coal and gas. We have no way to trace the electrons from a website or app back to the power station where the electricity is being generated and actually know the exact amount of greenhouse gas produced. So what do we do?&nbsp; 



 If we can’t measure the actual carbon emissions, then we need to find what we can measure. The primary factors that could be used as indicators of carbon emissions are: 



  Data transfer&nbsp;  Carbon intensity of electricity  



 Let’s take a look at how we can use these metrics to quantify the energy consumption, and in turn the carbon footprint, of the websites and web apps we create. 



 Data transfer 



 Most researchers use kilowatt-hours per gigabyte (kWh/GB) as a metric of energy efficiency when measuring the amount of data transferred over the internet when a website or application is used. This provides a great reference point for energy consumption and carbon emissions. As a rule of thumb, the more data transferred, the more energy used in the data center, telecoms networks, and end user devices. 



 For web pages, data transfer for a single visit can be most easily estimated by measuring the page weight, meaning the transfer size of the page in kilobytes the first time someone visits the page. It’s fairly easy to measure using the developer tools in any modern web browser. Often your web hosting account will include statistics for the total data transfer of any web application (Fig 2.1). 



Fig 2.1: The Kinsta hosting dashboard displays data transfer alongside traffic volumes. If you divide data transfer by visits, you get the average data per visit, which can be used as a metric of efficiency.



 The nice thing about page weight as a metric is that it allows us to compare the efficiency of web pages on a level playing field without confusing the issue with constantly changing traffic volumes.&nbsp; 



 Reducing page weight requires a large scope. By early 2020, the median page weight was 1.97 MB for setups the HTTP Archive classifies as “desktop” and 1.77 MB for “mobile,” with desktop increasing 36 percent since January 2016 and mobile page weights nearly doubling in the same period (Fig 2.2). Roughly half of this data transfer is image files, making images the single biggest source of carbon emissions on the average website.&nbsp; 



 History clearly shows us that our web pages can be smaller, if only we set our minds to it. While most technologies become ever more energy efficient, including the underlying technology of the web such as data centers and transmission networks, websites themselves are a technology that becomes less efficient as time goes on. 



Fig 2.2: The historical page weight data from HTTP Archive can teach us a lot about what is possible in the future.



 You might be familiar with the concept of performance budgeting as a way of focusing a project team on creating faster user experiences. For example, we might specify that the website must load in a maximum of one second on a broadband connection and three seconds on a 3G connection. Much like speed limits while driving, performance budgets are upper limits rather than vague suggestions, so the goal should always be to come in under budget. 



 Designing for fast performance does often lead to reduced data transfer and emissions, but it isn’t always the case. Web performance is often more about the subjective perception of load times than it is about the true efficiency of the underlying system, whereas page weight and transfer size are more objective measures and more reliable benchmarks for sustainable web design.&nbsp; 



 We can set a page weight budget in reference to a benchmark of industry averages, using data from sources like HTTP Archive. We can also benchmark page weight against competitors or the old version of the website we’re replacing. For example, we might set a maximum page weight budget as equal to our most efficient competitor, or we could set the benchmark lower to guarantee we are best in class.&nbsp; 



 If we want to take it to the next level, then we could also start looking at the transfer size of our web pages for repeat visitors. Although page weight for the first time someone visits is the easiest thing to measure, and easy to compare on a like-for-like basis, we can learn even more if we start looking at transfer size in other scenarios too. For example, visitors who load the same page multiple times will likely have a high percentage of the files cached in their browser, meaning they don’t need to transfer all of the files on subsequent visits. Likewise, a visitor who navigates to new pages on the same website will likely not need to load the full page each time, as some global assets from areas like the header and footer may already be cached in their browser. Measuring transfer size at this next level of detail can help us learn even more about how we can optimize efficiency for users who regularly visit our pages, and enable us to set page weight budgets for additional scenarios beyond the first visit. 



 Page weight budgets are easy to track throughout a design and development process. Although they don’t actually tell us carbon emission and energy consumption analytics directly, they give us a clear indication of efficiency relative to other websites. And as transfer size is an effective analog for energy consumption, we can actually use it to estimate energy consumption too. 



 In summary, reduced data transfer translates to energy efficiency, a key factor to reducing carbon emissions of web products. The more efficient our products, the less electricity they use, and the less fossil fuels need to be burned to produce the electricity to power them. But as we’ll see next, since all web products demand some power, it’s important to consider the source of that electricity, too. 



 Carbon intensity of electricity 



 Regardless of energy efficiency, the level of pollution caused by digital products depends on the carbon intensity of the energy being used to power them. Carbon intensity is a term used to define the grams of CO2 produced for every kilowatt-hour of electricity (gCO2/kWh). This varies widely, with renewable energy sources and nuclear having an extremely low carbon intensity of less than 10 gCO2/kWh (even when factoring in their construction); whereas fossil fuels have very high carbon intensity of approximately 200–400 gCO2/kWh.&nbsp; 



 Most electricity comes from national or state grids, where energy from a variety of different sources is mixed together with varying levels of carbon intensity. The distributed nature of the internet means that a single user of a website or app might be using energy from multiple different grids simultaneously; a website user in Paris uses electricity from the French national grid to power their home internet and devices, but the website’s data center could be in Dallas, USA, pulling electricity from the Texas grid, while the telecoms networks use energy from everywhere between Dallas and Paris. 



 We don’t have control over the full energy supply of web services, but we do have some control over where we host our projects. With a data center using a significant proportion of the energy of any website, locating the data center in an area with low carbon energy will tangibly reduce its carbon emissions. Danish startup Tomorrow reports and maps this user-contributed data, and a glance at their map shows how, for example, choosing a data center in France will have significantly lower carbon emissions than a data center in the Netherlands (Fig 2.3). 



Fig 2.3: Tomorrow’s electricityMap shows live data for the carbon intensity of electricity by country.



 That said, we don’t want to locate our servers too far away from our users; it takes energy to transmit data through the telecom’s networks, and the further the data travels, the more energy is consumed. Just like food miles, we can think of the distance from the data center to the website’s core user base as “megabyte miles”—and we want it to be as small as possible. 



 Using the distance itself as a benchmark, we can use website analytics to identify the country, state, or even city where our core user group is located and measure the distance from that location to the data center used by our hosting company. This will be a somewhat fuzzy metric as we don’t know the precise center of mass of our users or the exact location of a data center, but we can at least get a rough idea.&nbsp; 



 For example, if a website is hosted in London but the primary user base is on the West Coast of the USA, then we could look up the distance from London to San Francisco, which is 5,300 miles. That’s a long way! We can see that hosting it somewhere in North America, ideally on the West Coast, would significantly reduce the distance and thus the energy used to transmit the data. In addition, locating our servers closer to our visitors helps reduce latency and delivers better user experience, so it’s a win-win. 



 Converting it back to carbon emissions 



 If we combine carbon intensity with a calculation for energy consumption, we can calculate the carbon emissions of our websites and apps. A tool my team created does this by measuring the data transfer over the wire when loading a web page, calculating the amount of electricity associated, and then converting that into a figure for CO2 (Fig 2.4). It also factors in whether or not the web hosting is powered by renewable energy. 



 If you want to take it to the next level and tailor the data more accurately to the unique aspects of your project, the Energy and Emissions Worksheet accompanying this book shows you how. 



Fig 2.4: The Website Carbon Calculator shows how the Riverford Organic website embodies their commitment to sustainability, being both low carbon and hosted in a data center using renewable energy.



 With the ability to calculate carbon emissions for our projects, we could actually take a page weight budget one step further and set carbon budgets as well. CO2 is not a metric commonly used in web projects; we’re more familiar with kilobytes and megabytes, and can fairly easily look at design options and files to assess how big they are. Translating that into carbon adds a layer of abstraction that isn’t as intuitive—but carbon budgets do focus our minds on the primary thing we’re trying to reduce, and support the core objective of sustainable web design: reducing carbon emissions. 



 Browser Energy 



 Data transfer might be the simplest and most complete analog for energy consumption in our digital projects, but by giving us one number to represent the energy used in the data center, the telecoms networks, and the end user’s devices, it can’t offer us insights into the efficiency in any specific part of the system. 



 One part of the system we can look at in more detail is the energy used by end users’ devices. As front-end web technologies become more advanced, the computational load is increasingly moving from the data center to users’ devices, whether they be phones, tablets, laptops, desktops, or even smart TVs. Modern web browsers allow us to implement more complex styling and animation on the fly using CSS and JavaScript. Furthermore, JavaScript libraries such as Angular and React allow us to create applications where the “thinking” work is done partly or entirely in the browser.&nbsp; 



 All of these advances are exciting and open up new possibilities for what the web can do to serve society and create positive experiences. However, more computation in the user’s web browser means more energy used by their devices. This has implications not just environmentally, but also for user experience and inclusivity. Applications that put a heavy processing load on the user’s device can inadvertently exclude users with older, slower devices and cause batteries on phones and laptops to drain faster. Furthermore, if we build web applications that require the user to have up-to-date, powerful devices, people throw away old devices much more frequently. This isn’t just bad for the environment, but it puts a disproportionate financial burden on the poorest in society. 



 In part because the tools are limited, and partly because there are so many different models of devices, it’s difficult to measure website energy consumption on end users’ devices. One tool we do currently have is the Energy Impact monitor inside the developer console of the Safari browser (Fig 2.5). 



Fig 2.5: The Energy Impact meter in Safari (on the right) shows how a website consumes CPU energy.



 You know when you load a website and your computer’s cooling fans start spinning so frantically you think it might actually take off? That’s essentially what this tool is measuring.&nbsp; 



 It shows us the percentage of CPU used and the duration of CPU usage when loading the web page, and uses these figures to generate an energy impact rating. It doesn’t give us precise data for the amount of electricity used in kilowatts, but the information it does provide can be used to benchmark how efficiently your websites use energy and set targets for improvement. 
				"
link: "
					https://alistapart.com/article/sustainable-web-design-excerpt/				"
category:
directory: _directory/a-list-apart.md
---
