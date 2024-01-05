let langs = document.querySelector(".langs"),
     link = document.querySelectorAll("#link");
     link2 = document.querySelectorAll("#link2");

let title = document.querySelector("#tittle1"),
    line1 = document.querySelector("#line1"),
    line2 = document.querySelector("#line2"),
    line3 = document.querySelector("#line3"),
    line4 = document.querySelector("#line4"),
    line5 = document.querySelector("#line5"),
    line6 = document.querySelector("#line6"),
    line7 = document.querySelector("#line7"),
    line8 = document.querySelector("#line8"),
    line9 = document.querySelector("#line9"),
    line10 = document.querySelector("#line10"),
    line11 = document.querySelector("#line11"),
    line12 = document.querySelector("#line12"),
    line13 = document.querySelector("#line13"),
    line14 = document.querySelector("#line14"),
    line15 = document.querySelector("#line15"),
    line16 = document.querySelector("#line16"),
    line17 = document.querySelector("#line17"),
    line18 = document.querySelector("#line18");
    line19 = document.querySelector("#line19");
    line20 = document.querySelector("#line20");
    line21 = document.querySelector("#line21");
    line22 = document.querySelector("#line22");
    line23 = document.querySelector("#line23");
    line24 = document.querySelector("#line24");
    line25 = document.querySelector("#line25");
    line26 = document.querySelector("#line26");
    line27 = document.querySelector("#line27");
    line28 = document.querySelector("#line28");
    line29 = document.querySelector("#line29");
    line30 = document.querySelector("#line30");
    line31 = document.querySelector("#line31");
    line32 = document.querySelector("#line32");
    line33 = document.querySelector("#line33");
    line34 = document.querySelector("#line34");
    line35 = document.querySelector("#line35");
    line36 = document.querySelector("#line36");
    line37 = document.querySelector("#line37");
    line38 = document.querySelector("#line38");
    line39 = document.querySelector("#line39");
    line40 = document.querySelector("#line40");
    line41 = document.querySelector("#line41");
    line42 = document.querySelector("#line42");
    line43 = document.querySelector("#line43");
    line44 = document.querySelector("#line44");
    line45 = document.querySelector("#line45");
    line46 = document.querySelector("#line46");
    line47 = document.querySelector("#line47");
    line48 = document.querySelector("#line48");
    line49 = document.querySelector("#line49");
    line50 = document.querySelector("#line50");
    line51 = document.querySelector("#line51");


    title3 = document.querySelector("#tittle3"),



link.forEach(el=>{
     el.addEventListener("click", ()=>{
          langs.querySelector(".active").classList.remove("active");
          el.classList.add("active");

          let attr = el.getAttribute("language")

          title.textContent = data[attr].title
          line1.textContent = data[attr].line1
          line2.textContent = data[attr].line2
          line3.textContent = data[attr].line3
          line4.textContent = data[attr].line4
          line5.textContent = data[attr].line5
          line6.textContent = data[attr].line6
          line7.textContent = data[attr].line7
          line8.textContent = data[attr].line8
          line9.textContent = data[attr].line9
          line10.textContent = data[attr].line10
          line11.textContent = data[attr].line11
          line12.textContent = data[attr].line12
          line13.textContent = data[attr].line13
          line14.textContent = data[attr].line14
          line15.textContent = data[attr].line15
          line16.textContent = data[attr].line16
          line17.textContent = data[attr].line17
          line18.textContent = data[attr].line18
          line19.textContent = data[attr].line19
          line20.textContent = data[attr].line20
          line21.textContent = data[attr].line21
          line22.textContent = data[attr].line22
          line23.textContent = data[attr].line23
          line24.textContent = data[attr].line24
          line25.textContent = data[attr].line25
          line26.textContent = data[attr].line26
          line27.textContent = data[attr].line27
          line28.textContent = data[attr].line28
          line29.textContent = data[attr].line29
          line30.textContent = data[attr].line30
          line31.textContent = data[attr].line31
          line32.textContent = data[attr].line32
          line33.textContent = data[attr].line33
          line34.textContent = data[attr].line34
          line35.textContent = data[attr].line35
          line36.textContent = data[attr].line36
          line37.textContent = data[attr].line37
          line38.textContent = data[attr].line38
          line39.textContent = data[attr].line39
          line40.textContent = data[attr].line40
          line41.textContent = data[attr].line41
          line42.textContent = data[attr].line42
          line43.textContent = data[attr].line43
          line44.textContent = data[attr].line44
          line45.textContent = data[attr].line45
          line46.textContent = data[attr].line46
          line47.textContent = data[attr].line47
          line48.textContent = data[attr].line48
          line49.textContent = data[attr].line49
          line50.textContent = data[attr].line50
          line51.textContent = data[attr].line51

        
         
     })
})

link2.forEach(el=>{
     el.addEventListener("click", ()=>{
          langs.querySelector(".active").classList.remove("active");
          el.classList.add("active");

          let attr = el.getAttribute("language")
          title3.textContent = data[attr].title3
     })
})




let data = {
     english: {
          title: "How to design a good corporate website to help improve corporate brand value?",
          line1: "The enterprise website is the facade of the enterprise in the online world, and a good enterprise website design can build the trust of consumers for you, improve the charm of the brand and bring more business opportunities. Today I will tell you how to design a good corporate website and work cases, as well as the points that need attention!",


          line2: "Table of contents",
          line3: "Why set up a corporate website? 3 major benefits tell you",
          line4: "1. Enhance brand value",
          line5: "2. Building trust assets for the business",
          line6: "3. Increase visibility",
          line7: "5 Considerations for Enterprise Website Design",
          line8: "1. Visual design︱Simple and clear is the most appropriate",
          line9: "2. Architecture design︱Clear planning is very important",
          line10: "3. Home page design︱Remember to highlight advantages",
          line11: "4. Product information ︱ eye-catching and easy to find, pay attention",
          line12: "5. Technology update︱Update at any time is the key point",
          line13: "Enterprise website design process",
          line14: "1. Website planning",
          line15: "2. Web design",
          line16: "3. Website construction",
          line17: "4. Website testing and submission",
          line18: "5. Launch and acceptance",


          line19: "Why set up a corporate website? 3 major benefits tell you",
          line20: "With the advent of the digital age, more and more people know that setting up a website is helpful for brand promotion, but what you know is what you know. Do you understand the real reason? How does the corporate website specifically help you achieve the purpose of promotion? Let me help you analyze them one by one.",
          line21: "1. Enhance brand value",
          line22: "Brand value is the core of enterprise management, and the existence of a corporate image website is a manifestation of brand value. Through the revision of the website, the brand image can be refreshed at the fastest speed, and the difference from competitors can be highlighted. Therefore, Many listed companies often reform their corporate websites before announcing major reforms, in order to enhance the brand value of the company in exchange for more results.",
          line23: "2. Building trust assets for the business",
          line24: "'Consumer trust' is an important asset of a company. Therefore, the corporate website is not only used to provide a visual corporate image, but also must have open and transparent corporate information, such as: corporate background (company profile), business scope (products/ Services), latest news, contact information, etc., as the first step in building corporate trust assets; and adding information such as corporate social responsibility, human resource policies, and investment relations can also demonstrate the scale and vision of the company, which is a step closer deepen consumer trust.",
          line25: "3. Increase visibility",
          line26: "A corporate website is like an advertisement that will never be removed from the shelves. As long as the webpage content planning and SEO optimization are done well, there is a chance to increase the exposure of the website, and if valuable webpage content can be shared through the community, it will be more popular Let the company's popularity gradually expand to the outside world!",


          line27: "5 Considerations for Enterprise Website Design",
          line28: "It can be seen that for a successful enterprise, a good corporate website is an indispensable element, so how should the corporate website be designed and erected? There are 5 major considerations:",
          line29: "1. Visual design︱Simple and clear is the most appropriate",
          line30: "A website with a variety of eye-catching special effects may be refreshing, but it may be accompanied by a slow webpage loading speed, which makes users wonder for a while, followed by a long wait; or It is because the website is too fancy, so that visitors cannot find the information they need, which in turn increases the bounce rate of the website. Therefore, a web design that allows visitors to understand and find information can be called a successful corporate website and bring you a steady stream of business.",
          line31: "2. Architecture design︱Clear planning is very important",
          line32: "From the website structure table, we can see the positioning of the website, which is the most important document in the early stage of enterprise website construction. The website architecture of different industries will also be different, so submitting a website architecture with clear goals can make Google and visitors have a correct understanding of your website.",
          line33: "3. Home page design︱Remember to highlight advantages",
          line34: "The homepage of the website is the network entrance of the enterprise. If there are no clear guidelines and attractive advantages at the entrance, it may be difficult for people to 'walk in'. Therefore, I believe that a successful corporate website homepage must combine the AIDA law of consumer behavior, through the website's visual image (cognition), product and service categories (interest), corporate advantages and core capabilities (desire), clear and clear The contact method (action) and the smooth guiding of the moving line can successfully increase the website traffic and promote the conversion of potential customers.",
          line35: "4. Product information ︱ eye-catching and easy to find, pay attention",
          line36: "Do you research online before buying something? In this era of information explosion, most people will have this habit, so the product page planning of the enterprise website is even more important. In addition to the source code of the webpage following the T/D/H structure of Google search, factors such as the classification and content of product information, and whether it is included in the 'full-site search' are also one of the key points of construction.",
          line37: "5. Technology update︱Update at any time is the key point",
          line38: "In addition to the visual planning of the front desk of the website that you can see, the technical update of the webpage is also very important, such as: RWD responsive web design, https secure connection, CMS background management system, and SEO, which is the key to web search, etc. The latest technologies are all updated projects in recent years. Only by keeping up with the changes in the world can you ensure that your website does not fall behind!",



          line39: "Enterprise website design process",
          line40: "Seeing this, do you also feel a headache? There are so many 'brows and eyebrows' in setting up a corporate website, where should I start? Don't worry, I not only pay attention to the quality of the web design process, but also the results after the web page is completed. I provide you with the following considerate service process:",
          line41: "1. Website planning",
          line42: "After receiving the website demand inquiry, we will conduct a telephone interview first, and provide a plan and quotation one week after the interview, and sign the contract after the discussion is finalized.",
          line43: "2. Web design",
          line44: "Gather customer needs and start planning from the home page. We will first provide a draft proposal and discuss and communicate with customers, and then make a design draft after confirmation, and design each inner page after the home page is completed to ensure a consistent website style.",
          line45: "3. Website construction",
          line46: "Including front-end web page layout (html+CSS), CMS back-end system integration, database and program function construction.",
          line47: "4. Website testing and submission",
          line48: "Repeatedly test and fine-tune the website. After confirming that it is correct, it can be transferred to the official host and officially launched.",
          line49: "5. Launch and acceptance",
          line50: "After transferring to the official host, the whole case acceptance and background operation education and training will be carried out to complete the complete website building service.",
          line51: "The whole process is time-consuming and depends on the size of the project. During the process, I will repeatedly discuss and confirm with the customer, because I believe that only careful service can create a unique and high-quality corporate website together with the customer. If you are looking for If you are looking for a suitable web design company, then feel free to entrust me with the design, and contact me now! ",




          title3: "See how foreign web designers design, mind-blowing web design!",
          
       
          
         
     },
     chinese: {
          title: "如何设计一个良好的企业网站帮助提高企业品牌价值？",
          line1: "企业网站就是企业在网路世界中的门面，而好的企业网站设计，能为你建立起消费者的信任，提高品牌魅力并带来更多的商机。今天就要来告诉你良好的企业网站该如何进行设计与作品案例，以及有何需要注意的要点！",


          line2: "目录",
          line3: "为什麽要架设企业网站？3大好处告诉你",
          line4: "1. 提升品牌价值",
          line5: "2. 建立企业的信任资产",
          line6: "3. 提高知名度",
          line7: "企业网站设计5大注意事项",
          line8: "1. 视觉设计︱简单明瞭最适当",
          line9: "2. 架构设计︱明确规划很重要",
          line10: "3. 首页设计︱凸显优势要记得",
          line11: "4. 产品资料︱醒目好找要注意",
          line12: "5. 技术更新︱随时更新是重点",
          line13: "企业网站设计流程",
          line14: "1. 网站规划",
          line15: "2. 网页设计",
          line16: "3. 网站建置",
          line17: "4. 网站测试、上稿",
          line18: "5. 上线与验收",


          line19: "为什麽要架设企业网站？3大好处告诉你",
          line20: "随著数位时代的来临，越来越多人知道架设网站有助于品牌的推广，但知道归知道，你了解其中真正的原因吗？企业网站如何具体地帮助你达到推广的目的？下面就让我来帮你一一解析。",
          line21: "1. 提升品牌价值",
          line22: "品牌价值是企业经营的核心，而企业形象网站的存在，就是一种品牌价值的体现，透过网站的改版，就能以最快的速度让品牌形象焕然一新，并且凸显与竞争对手的差异，因此，许多上市柜公司经常在宣布重大改革前，会先进行企业网站的改革，藉此提升企业的品牌价值，以换取更多的成效。",
          line23: "2. 建立企业的信任资产",
          line24: "“消费者的信任”是企业的重要资产，因此企业网站不只用来提供视觉上的企业形象，也必须建有公开透明的企业资讯，如：企业的背景（公司简介）、业务范畴（产品／服务）、最新消息、联络方式等，以此做为建立企业信任资产的第一步；而加入企业社会责任、人力资源政策、投资关係等资讯，还能彰显企业的规模及愿景，更近一步地加深消费者的信任。",
          line25: "3. 提高知名度",
          line26: "企业网站就像是一个不会下架的广告，只要做好网页内容规划及SEO优化，就有机会提升网站的曝光，并且若能将有价值的网页内容透过社群分享出去，就更能让企业的知名度逐渐向外界扩展！",



          line27: "企业网站设计5大注意事项",
          line28: "由此可知，对于一个成功的企业来说，优良的企业网站是不可或缺的元素，那麽企业网站该怎麽设计、架设？有以下5大注意事项：",
          line29: "1. 视觉设计︱简单明瞭最适当",
          line30: "一个拥有多种吸睛特效的网站，或许会让人耳目一新，但随之而来的可能是龟速的网页载入速度，让使用者在一阵惊叹后，紧接著的却是漫长的等待；或是因为网站过于花俏，使访客找不到需要的资讯，进而使网站跳出率提高。因此，能够让访客看得懂、找得到资讯的网页设计，才能称得上是成功的企业网站，并且为你带来源源不断的生意。",
          line31: "2. 架构设计︱明确规划很重要",
          line32: "从网站架构表中可以看出网站的定位，是企业网站建置前期最重要的文件。而不同产业的网站架构也会有所不同，因此提交一份明确目标的网站架构，才能让Google及访客对你的网站有正确的认知。",
          line33: "3. 首页设计︱凸显优势要记得",
          line34: "网站的首页就是企业的网路入口，若在入口处没有明确的指引及吸引人的优势，那麽恐怕很难让人想“走进去”。因此我认为，成功的企业网站首页，须结合消费者行为的AIDA法则，透过网站的视觉形象（认知）、产品与服务范畴（兴趣）、企业优势与核心能力（慾望）、清楚明瞭的联络方式（行动），顺畅地引导动线，才能成功提升网站流量及促使潜在客户转换。",
          line35: "4. 产品资料︱醒目好找要注意",
          line36: "你买东西前是否会先上网研究呢？在这个资讯爆炸的年代，想必大部分的人都会有此习惯，因此企业网站的产品网页规划就更显得重要了。除了网页的原始码要遵循Google搜寻的T／D／H结构外，产品资料的分类、内容、是否纳入“全站搜寻”等因素也是建置的重点之一。",
          line37: "5. 技术更新︱随时更新是重点",
          line38: "而除了你看得见的网站前台视觉规划外，网页的技术更新也是很重要的，如：RWD响应式网页设计、https安全性连线、CMS后台管理系统以及网路搜寻关键的SEO等看不见的技术，都是近年来更新的项目，随时跟上世界的变化，才能确保你的网站不落人后！",


          
          line39: "企业网站设计流程",
          line40: "看到这边，你是不是也觉得头痛了起来？架设一个企业网站有这麽多“眉眉角角”，该从何做起？不用担心，我对网页设计不但重视网页设计过程的品质，也不放过网页完成后的成效，提供你以下贴心的服务流程：",
          line41: "1. 网站规划",
          line42: "接到网站需求询问后，会先以电话访谈，并于访谈1週后提供规划书及报价单，待讨论定案后即可签约。",
          line43: "2. 网页设计",
          line44: "汇集客户需求，并从首页开始规划。会先提供提案稿并与客户进行讨论沟通，确认后再进行设计稿，并于首页完成后才进行各内页的设计，以确保网站风格一致。",
          line45: "3. 网站建置",
          line46: "包含前台网页切版（html+CSS）、CMS后台系统整合、资料库与程式功能建置。",
          line47: "4. 网站测试、上稿",
          line48: "反覆测试及微调网站，确认无误后即可转移至正式主机，正式上线。",
          line49: "5. 上线与验收",
          line50: "转移至正式主机后，会进行全案验收及后台操作教育训练，完成完整的建站服务。",
          line51: "整个流程耗时不定，根据项目的大小而定，过程中我会与客户反覆地讨论、确认，因为我相信，细心的服务，才能与客户一同创造出独一无二且优质的企业网站，若你正在寻找合适的网页设计公司，那麽就放心交给我设计，现在就赶紧与我联繫吧！",



          title3: "看看外国的网页设计师都怎么玩，令人惊叹的网页设计 !",

     }
}