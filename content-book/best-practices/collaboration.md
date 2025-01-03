---
title: "Collaboration"
date: "December 1, 2024"
id: 71
---

As a technical writer, collaboration with colleagues is an indispensable part of the job. For instance, from the perspective of the documentation itself, colleagues such as developers or product managers provide the essential material for technical writers. From the perspective of external outputs, technical writers can contribute beyond language to testing, design, and other areas.

A closer examination reveals that technical writers have some level of collaboration with most colleagues along the product line, some of which are even closely collaborative. In this article, I will draw on my experience in producing documentation for both open-source and proprietary products to explore the "friend circle" of IT technical writers, detailing possible collaborative relationships they may have at work. It is important to note that due to different organizational structures, processes, and cultures, my experiences may not directly apply to your company but hopefully, they will be helpful.

## Developers

Development is the core of any IT company, tasked with the critical role of product feature development. Since developers create the products, they naturally understand how the features work and can provide a draft of the documentation. However, due to their heavy workloads, they sometimes may not have time to write, necessitating that the technical writer frequently collaborates with them to form an initial draft, which might need to be reviewed by relevant colleagues later. It is important to note that while developers can explain how a product is used or what it does, they sometimes struggle to articulate the value of the product and why it is beneficial—this type of content typically belongs to the realms of official statements and background information (more commonly addressed in blogs), which product managers handle better.

In some companies, technical writers do not directly interface with developers but instead coordinate through product managers, who then organize the work. This section will explain how technical writers can derive valuable insights from working with product managers.

If developers are too busy to even draft a simple document (especially if the documentation is in English), you might need to research and write the initial draft yourself. Here are some methods I have used in practice (assuming there is no product manager):

- Request all existing relevant materials, whether text or video, from development colleagues, then draft the document while operating the product based on these materials. Look at competitor materials (but do not directly copy and paste), then have the draft reviewed by developers.
- Obtain test cases from testing colleagues to guide the documentation writing, as detailed later.
Conduct short meetings with developers, not exceeding half an hour, record the session, and let them explain or demonstrate a feature.
- For products aimed at international markets, if you are an English technical writer, you are likely to be responsible for translating and reviewing the product UI's English copy. This may involve liaising with frontend engineers who handle the implementation of these languages. A potential issue here is that frontend engineers may not consider future localisation needs during coding, making some of the copy difficult to translate directly due to complex code nesting.

The practice in international companies is to first finalize the product UI's English copy and then package the language files to be handed over to internal technical writers (or localisation teams) or external vendors for translation into other languages. This section will also discuss the collaboration between technical writers and localisation engineers.

## Test engineers

Test engineers are responsible for testing the product, identifying defects, and discussing solutions with development colleagues. technical writers and test engineers may collaborate in the following ways:

- When writing operational step-type documents, you can ask test engineers whether they have encountered any bugs with overly complex steps. If not, proceed with drafting while operating; if there are bugs, it might be advisable to wait until the bugs are resolved.
- Request access to a testing environment (or production environment) from test engineers. If they cannot provide access, ask how to apply for it (usually, you can ask the development lead, product manager, or test engineer for the environment). If you need to set up the environment yourself, ask for clear instructions and whether installation documents are available, as you might be the one writing them later.
Test engineers write test cases that record the steps and issues found during testing, which can greatly aid in writing documentation.
- When discovering bugs, ask whether these need to be recorded or treated in a specific way. I enjoy interacting with test engineers during documentation writing; they appreciate it when you report bugs they haven't found, and they might immediately discuss these with developers, saying things like, "Didn't you say you fixed this?" They will also inform you if a bug is a known issue and whether and when it might be fixed. Note that according to different company processes, bugs found by technical writers might not be reported to test engineers but directly to developers or product managers.
Test engineers sometimes test against your draft documentation, and some might proactively approach you. Remember to communicate openly when they provide feedback, and adjust the documents as necessary.

For technical writers, it is crucial to physically go through the entire process when writing operation step-type documents, effectively testing the product.

## Customer support engineers

Customer support engineers, having interfaced with customers over long periods, accumulate extensive firsthand experience with the product, including pain points and difficulties in usage. These issues, after being compiled and organized, can directly supplement the product documentation, be converted into best practice manuals (not necessarily included in the product documentation, possibly as a separate manual), or even become blog posts and case studies. As a technical writer, you should regularly hold synchronization meetings with customer support engineers and convert their summary content into subsequent documents.

## Agile coaches

Agile coaches (also known as Scrum Masters) introduce some management practices from agile development, creating Sprint plans according to the team and product to help enhance the development team's efficiency while ensuring smooth collaboration within and possibly between teams.

Strictly speaking, the collaboration between technical writers and agile coaches is not extensive. When I worked as a technical writer in my previous company, I first encountered colleagues in this position. Since agile coaches regularly meet with the development team to organize Sprint plans and reviews, I occasionally asked agile coaches about recent developments and existing issues. This was done to keep track of the documentation progress, as sometimes you might find yourself halfway through writing a document only for it to be paused or even scrapped due to some technical issue, rendering your efforts moot. If you have the time, consider attending their Sprint meetings, not to understand the technical details but to know what the developers are currently working on.

## Product managers

In product-driven companies, the importance of the role of product managers is self-evident, covering all aspects of the product, even if some responsibilities are not directly managed by them, they might still need coordination by product managers. Personally, I believe that product managers are among the most frequently collaborated individuals in a technical writer's circle of friends.

Technical writers can arrange documentation plans based on the following content, communicating promptly with product managers when encountering unclear issues:

- Product research materials. Product managers conduct related research on products, placing the textual results in an organizational knowledge base. technical writers can quickly familiarize themselves with product-related information through this background knowledge, and some phrases can even be used in the documentation.
- PRD and PDD. Product managers write the product requirement document (PRD) and product definition document (PDD), which explain some requirements to the development team, i.e., how the product should be done or what it should look like. Details will involve the meaning of some UI or buttons. technical writers need to actively ask product managers for these materials and regularly check for updates. As a side note, these materials in some companies might be written by business analysts (BAs) or other colleagues, so you should check the internal division of labor.
- Product internal training. Depending on the company's regulations, product managers might conduct related internal training on products. As a technical writer, you must attend these training sessions, which are generally recorded and share PPT materials—these are materials for learning about the product and writing documentation. If you have already written materials on hand, product managers might even ask for your assistance in preparing internal training materials. If it's an English product and your English proficiency (especially speaking) is better than the product manager's, others might even proactively ask you to record English training materials for global colleagues (don't be shy, seize the opportunity). Collaboration with product trainers will involve similar content (see below).
- Documentation needs communication, initial draft review, and subsequent updates. Experienced product managers will communicate documentation needs with technical writers long before the product is slated for release, explaining whether it is needed for EA or GA or for other purposes (such as the internal training materials mentioned above). For example, when I collaborated with product managers abroad in my previous company, they would tell me about the product's release plan two months or even longer in advance, then meet with me to discuss whether new documents needed to be written or existing ones updated, providing relevant materials. If it's a new product's documentation, I would first make an outline based on the needs and then start writing. Of course, many product managers, due to various reasons, might be overwhelmed with work, and documentation might be the last thing they think of. Thus, technical writers must learn to take the initiative to ask, including whether the other party can provide relevant materials and environments for preparing documentation, which is very important. After the documentation is written, depending on different company processes, it's highly likely that product managers will need to review the document (including Release Notes, Product Notice, and Product Announcement, different companies might call these differently). There's a lot that can be expanded on this point, and I will elaborate further in an article introducing the documentation process.
- Product UI copy. In most cases, product managers should determine the UI copy. If it involves English content, considering the product manager's English proficiency might not be as good as yours, you need to assist accordingly.
It's important to note that whether it's the research conducted by product managers, PRD, PDD, or any other materials, if you need to quote the original sentences in the documentation, first put these sentences into a search engine to see if the content was copied and pasted from other sources by the product manager (especially from competitors). If so, I suggest you rewrite accordingly; otherwise, direct plagiarism might lead to a lot of trouble later.

In addition to the above points, if you find the product's process or operation too cumbersome while writing the documentation, making it difficult to describe certain operations, you should boldly report the issue to the product manager. Products are made to help users solve real problems, and if the operations in the documentation are too troublesome, it's hard to imagine it being a good product.

## Product marketing managers

The work of product marketing managers might include planning the marketing content for the product's official website, market analysis, product events (in some companies, this is managed by product operations managers), marketing content and planning, etc. You can understand this as mainly involving work related to product marketing.

The collaboration between technical writers and them mainly focuses on articles announcing product releases. In many companies, such articles are not typically written by technical writers, but if you need to do similar work, you can first supplement the technical content, and then they will be responsible for the marketing language.

My previous experience collaborating with foreign product marketing managers was that I would write an initial draft of the article announcing the product's release, mainly outlining the technical content, and then they would process the marketing language, with the product manager finalizing the draft.

One tricky point is that some product marketing managers might repeatedly weigh the suitability of the product name from a marketing perspective, even changing the product name at the last minute. This would require extensive modifications to the documentation (sometimes including screenshots), and anyone who has written documentation knows that global search and replace is not applicable in all situations. I have some trauma from this, so I was very reluctant to collaborate with product marketing managers.

## Product trainers

Product trainers conduct on-site user training or record corresponding video tutorials, and their training materials often come from product documentation. If your documentation is clear enough, they generally won't contact you, and if there are issues, they might directly ask developers and product managers.

Some companies have dedicated product training departments, and when they record videos, they might need to collaborate with technical writers, such as handing over the manuscript to technical writers for review before recording. If it's an international product, some companies might write and review the English manuscript for the video and then specifically hire native speakers for voiceover recording. The specific role of technical writers here depends on the company's process requirements.

## Designers

Designers related to the work of technical writers mainly include product UI designers and web designers, involving the following two points:

- UI Material Images. Designers can provide product UI icons in various formats, which can be used in document writing. As a technical writer, you need to proactively ask designers for the original icon materials, which is faster and clearer than manually taking screenshots from the product UI. Additionally, frontend engineers, due to their collaboration with designers, might also have these materials.
- Web Presentation. With good documentation, we naturally need good page design to present to users. However, the page design for documentation might be communicated by the web project manager and designer, but if you think the design is unreasonable, you should express your own opinion. The same principle applies to some technical copy on web pages, blogs, and case studies, especially case studies that focus on presenting key information, which I will explain in detail in an article introducing case studies.

A side note, if it's commercial documentation, please be sure to be careful with the fonts used in the documents (it's best if your company has its own developed fonts); otherwise, it might cause legal issues. A long time ago, Microsoft once sent a legal letter to another company that used one of its fonts commercially. You should remind your company's frontend and designer colleagues about this

## Localisation engineers/Vendors

The main work of localisation engineers is to localize product documentation or UI. In cases where there is a shortage of personnel, technical writers might take on this role themselves. If there is a dedicated localisation team, their collaboration with technical writers might include:

They might find something in the original text unclear and ask you for confirmation. If you're also unclear, please promptly ask product managers or developers for clarification.

They might report errors found in the original text to you. If there are many errors, the standardized and procedural approach is to submit a Source Issue Report, specifically for recording issues in the documents, which can include fields like Source, Expected, Note, etc. Upon receiving such issues, technical writers can modify them according to their severity following the process.

If localisation work is done by an external vendor, technical writers might need to participate in reviewing the localized content (whether documents or UI copy), paying special attention to accuracy and consistency. Without access to the relevant environments (and possibly lacking sufficient background knowledge of the product), external vendors' grasp of content translation is often inaccurate. The most common errors occur in UI consistency, i.e., their translation of a UI copy is one thing, but the actual UI translation of the product is another. Some might suggest providing a related vocabulary table to the vendor, which indeed is a practice, but the actual situation is that UI copy often changes frequently, making it difficult to ensure consistency. As a result, you might see inconsistencies in the textual description, UI screenshots, and the actual UI of the product in the documentation.

## Open source community managers && Developer advocates

For open-source projects, the open source community manager will formulate the community's operational plan, promote community growth, organize various activities, foster a cooperative ecosystem, and maintain developer relationships, among which an important part is coordinating the output of open-source content. The collaboration between technical writers and open source community managers might include:

- Content and process, such as reviewing the textual content contributed by contributors, including documentation, blogs, and translations.
- Summarizing and organizing contributors' contributions, jointly formulating corresponding reward mechanisms.
Collecting issues from the open-source project community (GitHub Issue, meetings, emails, chat groups, etc.), organizing them, and seeing if adjustments need to be made in the documentation or if they need to be written into blogs.

## HR/PBP/HRBP

Why would technical writers work with the human resources department? Think about it, and it actually has to do with personal skills. If you are an English technical writer in a Chinese company, there might be a daunting fact: the best English writers among the Chinese staff are you and other colleagues who write English documentation. Especially in small companies, if there are foreign employees, you might need to assist human resources colleagues in preparing related English materials, including:

- Cultural manual, including the company's Vision and Values, etc.;
- Rules and regulations (if it's a professional legal document, it's better to directly find a translation company or law firm);
- Internally public general Knowledge Base;
- Internal Marketing materials.

The last point is not necessarily done by human resources colleagues; very large companies will have a dedicated Internal Marketing Manager, so technical writers naturally do not need to participate.

## Users

Will technical writers directly interface with end-users? If it's an open-source project, technical writers naturally will have communications with community users. If it's a proprietary product, the possibility of communication between the two parties also exists. For example, some companies might turn the entire documentation into a community forum-like form, allowing users to leave comments directly under the documentation, communicating with the technical writer who wrote the document. This method improves the efficiency of feedback on the documentation and also increases contact with users.

Another possibility is that technical writers might need to write product Case Studies. When there is no existing material, you need to prepare the corresponding interview questions and communicate directly with users to gather relevant information. Generally, Customer Success Managers will also help coordinate some of this work. I will specifically write an article later to explain how we should prepare questions for interviewees in different positions, especially what to be aware of when dealing with foreign users.