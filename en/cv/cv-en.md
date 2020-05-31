---
tags: job-hunting
lang: en
title: 'Masato Ohba (ohbarye) CV'
output:
  html_document:
    toc: yes
pagetitle: Masato Ohba (ohbarye) CV
balloon_message: I'm between jobs
---

Last updated: 2020.05.30

Japanese version: [https://ohbarye.github.io/ja/cv/](https://ohbarye.github.io/ja/cv/)

## Contact

| key        | value                                                  |
| ---------- | ------------------------------------------------------ |
| Name       | Masato Ohba (大庭 直人)                                |
| ID         | `ohbarye`                                              |
| Email      | over.rye+jh [at] gmail.com                             |
| Entrypoint | [https://ohbarye.github.io](https://ohbarye.github.io) |

## Summary

The core of my strength is web backend. I have experience in full-cycle development for both in-house development and client work. I can be the overall lead in the team from development to operation, starting with the requirements and requirements definition, which is done with timely communication.

I have been developing SPA and MPA with React in the System of Engagement areas such as registration leads and retention measures, and in the Web frontend area for services that require rich experiences.

I can develop complex business logic required in the System of Record fields, such as payment functions and internal systems, with quality, speed, and robustness in mind.

I also served as an engineering manager for an organization with 20-60 engineers. As a result, I have a proven track record and knowledge of team design, project management, recruitment, corporate branding, culture building, community activities, and more.

## Skills

- Language
  - **Ruby** (2.3~), **TypeScript** (3.4~), JavaScript (ES2015~), Java`*` (~8), Python (~3.7)`*`, OCaml `*`
- Frontend
  - **React** (16.x~), Redux (3.x~), Backbone.js`*`, jQuery`*` (1.x~), React Native (0.5x), Webpack
- Backend
  - **Ruby on Rails** (4.2~5.1), Node.js`*`, OpenAPI (3.0), REST, GraphQL`*`
- Testing
  - **RSpec**, Capybara, minitest, Jest, Cypress, Sinon, Chai, Mocha
- Database
  - MongoDB (3.2~3.6), Redis, PostgreSQL (9.5)
- Infrastructure
  - AWS, Docker, Kubernetes, Heroku`*`, Deis`*`, Netlify`*`, Vercel`*`
- Communication tools
  - GitHub, ZenHub, Slack
- SaaS
  - CircleCI, TravisCI`*`, NewRelic, Google BigQuery, Treasure Data, Datadog
- Development framework
  - Agile, Scrum, Waterfall`*`

**Bold** indicates core skills.

`*` denotes a skill that has no work experience, or has work experience but is more than a few years away.

### Strength

#### Design and implementation in consideration of operation and performance

I have experience in designing and implementing designs that not only temporarily meet business requirements, but are also aware of performance, computational complexity, and data growth over time. In addition, I have performed performance tuning for problems that happened during the operation.

Batch processing, retry, data integrity in payment systems, and how developed functions to be operated. I'm confident in designing, developing and reviewing in consideration of these.

#### Leverage and improve OSS

Although it's nothing special in this day and age, I use OSS in work. When I select a technology, I focus on whether the technology is feasible as a team, as well as convenience and trends, and I also consider sustainability and disposability. I often make conservative choices as a result of prioritizing the productivity of a team. I've been using SaaS like dependabot for libraries that my product depends on, and I've been upgrading the dependencies periodically

In addition, I believe that products I develop and OSS are connected to each other. If OSS doesn't have a necessary feature, I try to develop it by myself, send patches, and fix bugs and regressions when I notice them. (OSS contribution by me is also described in the [Personal Projects](#personal-projects) and [Public Output](#public-output) sections below.

#### Team-oriented

I have a keen interest in achieving results as a team and have worked to create mechanisms and foster a culture where collaboration can occur. As a manager, I also have experience of determining team assignments by considering variables such as strengths, weaknesses, orientation, and business characteristics.

In the past, when my team has had process issues, I have implemented Scrum to "clarify goals", "be accountable", and "prevent overwork", and I have even taken on the role of a scrum master.

#### Problem solving in engineering organizations of up to 60 people

As an Engineering Manager in an organization with 20-60 engineers, I have experience in organizational design, team design, recruiting, mentoring, onboarding, culture building, and community activities.

Issues that arise when a team or organization grows in size are often the first ones experienced in that organization. Therefore, without clear identification of the true cause and prioritization and assignment, it is often left unchecked and distortions are magnified. I believe that my experience in knowing and dealing with these characteristics of organizational issues can be applied to teams and organizations of the same size or dozens of people, whether my role is as a member or manager.

#### Output-oriented

I try to summarize what I've researched and learned through my hobbies and work and output it. Repeating output-conscious contemplation and trials can hone my skills in abstraction and commonalization. Moreover, I believe that it is possible to enhance the overall ability to find and solve problems.

I'm not very good at having presentations. However, I challenge it as possible as I can for feedbacks I'd get and thing I'd learn through those opportunities. Please refer to the [Public Output](#public-output) section for the results.

### Weakness / I've never done that before.

I can play to the above strengths in product development with monolithic applications on the backend and in teams of a few to 20 engineers, but I have little or no experience with the followings.

- Microservices, distributed systems
- Huge scale traffic
- Mobile App Development
- Architecture design and infrastructure as code (Terraform, Ansible, etc.), and using Cloud services (AWS, GCP, Azure, etc.)
- Selection, operation, and tuning of middlewares.
- Hardware and embedded software
- Development in a large team of over 20 people

I am motivated to learn in areas where I have no experience. I think it's possible because I've done some catch-up in the past on the technology needed for the job.

## Work Experience

### Quipper Limited (2015.09 ~ 2020.05) 4 yrs 8mos

[Quipper](https://www.quipper.com/) is a company that operates both B to C and B to B education businesses. We develop and operate Quipper School and Quipper Video outside of Japan, and [StudySuppli](https://studysapuri.jp/) in Japan.

Under the umbrella of the Study Supplements brand, there are courses for elementary, junior high, and high schools, English for working adults, and forSchool for schools and municipalities. Some of the projects I was involved in are listed below.

| Title                                                                                                                 | Period          | Appeal Points                                     |
| --------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------------------------------- |
| [Code cleanup](#code-cleanup)                                                                                         | 2020.03         | Toughness to remove huge amount of codes          |
| Price Change                                                                                                          | 2019.10~2020.01 | Payment systems, complex business logics          |
| [Migration from React Native to PWA](#migration-from-react-native-to-pwa)                                             | 2019.07~2019.09 | Technology selection, paying back technology debt |
| [Develop Coaching Service for Junior High School Students](#develop-coaching-service-for-junior-high-school-students) | 2018.08~2019.03 | 9 people x 7 months project management / Scrum    |
| [Entry Form Renewal](#entry-form-renewal)                                                                             | 2018.03         | Technology selection、EFO                         |
| [Upgrade grape gem](#upgrade-grape-gem)                                                                               | 2017.10~2017.12 | Paying back technical debt, OSS                   |  | [Research to Abolish Payment Method](#research-to-abolish-payment-method) | 2017.10 | A/B testing、Data driven decision making |
| Develop Coaching Service for High School Students                                                                     | 2016.12~2017.02 | Short term development                            |
| Benkyo Sapuri Migration                                                                                               | 2016.06~2016.12 | Short term development                            |
| [Hiring](#hiring)                                                                                                     | 2016.07~2020.03 | Organization design                               |
| [Develope In-App Purchase for iOS](#develope-in-app-purchase-for-ios)                                                 | 2016.04~2016.06 | Payment systems, OSS                              |
| [Jyuken Sapuri Migration](#jyuken-sapuri-migration)                                                                   | 2015.09~2016.02 | Short term development, catch-up tech stacks      |
| [Other Activities](#other-activities)                                                                                 | -               | Continuous improvement                            |

#### Code Cleanup

Because out team's monorepo, which used to share code across multiple products, has been forked, a lot of our code base got unused. I thought that cleaning up those dead codes would bring better development experience, so I almost single-handedly suggested and executed code cleanup.

It took about three weeks to remove 400,000 lines of code, and the removal of unused models in Rails was able to reduce the number from 390 to 281. I made significant changes to the system in operation, but completed them without causing a failure that would affect the end-users.

| Period  | Team      | Role | Tech stacks, tools                                                                                |
| ------- | --------- | ---- | ------------------------------------------------------------------------------------------------- |
| 2020.03 | 1 (Web×1) | Web  | Ruby, Rails, React, Redux, TypeScript (Deletion Targets)<br />NewRelic, BigQuery (Usage research) |

#### Migration from React Native to PWA

This project is a renewal of an iOS/Android business internal app made by React Native with PWA. I was primarily responsible for the launch and backend of the project. (The UI/UX was revamped at the time of the relaunch, so the backend had to be changed as well.)

Since there was no mechanism to share the API specification before the project, I wrote the API specification using OpenAPI and laid the groundwork for sharing it. And leveraging Rack middleware, which only works in an automated testing and staging environment, I also put in place a mechanism to detect specification violations. (I wrote more about it in a [blog post](https://ohbarye.hatenablog.jp/entry/2020/04/29/open-api-specification-for-existing-restish-api-endpoints).)

I also [made a presentation at JSConf 2019](https://speakerdeck.com/ohbarye/migration-from-react-native-to-pwa) as a recap of this project.

| Period          | Team                                                | Role    | Tech stacks, tools                                                      |
| --------------- | --------------------------------------------------- | ------- | ----------------------------------------------------------------------- |
| 2019.07~2019.09 | 6 (PdM×1, Designer×2, iOS×1, Frontend×1, Backend×1) | Backend | Ruby, Rails 5.0, RSpec, React 16.12, Redux 4.0, TypeScript 3.7, Cypress |

#### Develop Coaching Service for Junior High School Students

In a highly uncertain project with over 10 new members in the majority and a size of over six months, I was able to release it by implementing and practicing practices such as Scrum, MobPro, 1-on-1, etc. And while it's difficult to quantitatively evaluate it, it has led to the growth and retention of our members.

I have summarized the details of this project in "[How to Combat Uncertainty in a Large Project with Many New Members]" (https://quipper.hatenablog.com/entry/2019/06/27/how-to-defeat-uncertainty).

| Period          | Team                                            | Role              | Tech stacks, tools                                                         |
| --------------- | ----------------------------------------------- | ----------------- | -------------------------------------------------------------------------- |
| 2018.08~2019.03 | 12 (PdM×1、Designer×1、iOS×1、Android×1、Web×8) | Web, Scrum master | Ruby, Rails, React, RSpec, Capybara, Redux, TypeScript, Jest, React Native |

#### Entry Form Renewal

It is an EFO (Entry Form Optimization) project for the most important acquisition period in BtoC learning services.

- I was responsible for both the front end and back end.
- At that time, the majority of the team's front-end work was MPA, and the entry form was implemented in Rails View and jQuery.
- I selected Webpacker and React.
- CVR of registration has been improved.

| Period  | Team                         | Role | Tech stacks, tools                                                |
| ------- | ---------------------------- | ---- | ----------------------------------------------------------------- |
| 2018.03 | 3 (PdM×1, Designer×1, Web×1) | Web  | Ruby, Rails, React, RSpec, Capybara, Redux, TypeScript, Webpacker |

#### Upgrade grape gem

The biggest Rails API server in my company had been using a gem named grape, but the API hadn't been updated since v0.12.0 in 2015 when it was introduced, so I upgraded it.

Compared to Rails upgrade, there is less information, and dependent libraries are sometimes dead, so I had to prepare a workaround to write a patch. Finally, I was able to upgrade to the latest version v1.0.1 at that time by gradually increasing the minor version (~v0.19).

As an aside, about a year after this, in December 2018, I had an issue with NewRelic not being able to get metrics for the Rails API. This was a problem on the NewRelic agent side, so I sent a [patch](https://github.com/newrelic/rpm/pull/293) to the upstream to solve it.

| Period          | Team      | Role | Tech stacks, tools                |
| --------------- | --------- | ---- | --------------------------------- |
| 2017.10~2017.12 | 1 (Web×1) | Web  | Rails 4.2, Ruby 2.4, RSpec, grape |

#### Research to Abolish Payment Method

This project examines how much of an impact it will have on the business when it abolishes carrier payments, which have high fees and operating costs.

Using Optimizely SaaS, we were able to practice A/B testing and collect quantitative data while minimizing the amount of development and testing done by engineers.

I've written a [blog post](https://quipper.hatenablog.com/entry/2018/05/31/080000) about this effort, and we've presented at events such as [Rails Developer Meetup 2018 Day 3](https://speakerdeck.com/ohbarye/fact-based-decision-making-and-development-by-quipper) and [Regional Scrum Gathering Tokyo 2019](https://speakerdeck.com/ohbarye/proof-of-value-with-ab-testing).

| Period  | Team             | Role | Tech stacks, tools                      |
| ------- | ---------------- | ---- | --------------------------------------- |
| 2017.10 | 2 (PdM×1, Web×1) | Web  | Rails 4.2, Ruby 2.4, jQuery, Optimizely |

#### Hiring

I made a full contribution, including document screening, first round, code testing, second round, casual interviews, and proactive participation in the referral lunch and referral dinner.

- Wrote job descriptions
- Introduced and polished structured interviews
- [Designed code test](https://quipper.hatenablog.com/entry/2018/10/09/coding_test)
- Designed technical interviews
- Published an interview guide
- Community activities
  - [StudySapuri Meetup #1](https://quipper.hatenablog.com/entry/2018/07/20/172946)

I also engaged in the following activities, which are closely related to our recruitment activities.

- Onboarding
- Wrote blog posts summarizing the findings of the above activities
  - [Casual interviews](https://quipper.hatenablog.com/entry/2020/02/05/casual-interview-in-quipper)
  - [Interview guide](https://quipper.hatenablog.com/entry/2018/09/01/interview-guide)
  - [Alumni meetup](https://quipper.hatenablog.com/entry/2018/12/28/yet-quipper-moves)
  - [Offboarding](https://quipper.hatenablog.com/entry/2020/04/02/effective-offboarding)

| Period          | Team            | Role | Tech stacks, tools                                         |
| --------------- | --------------- | ---- | ---------------------------------------------------------- |
| 2016.07~2020.03 | 4~10 (Web×4~10) | Web  | Rails, Ruby, minitest, React, TypeScript (For coding test) |

#### Develope In-App Purchase for iOS

Our service was offering outright purchase feature within iOS app, but sales were not good, and there was a need to provide an auto-renewable payment function like credit cards.

I implemented server-side APIs and a batch process to check subscription statuses. During the development, I realized that [venice](https://github.com/nomad/venice), AppStore API client library used on the server side, didn't support the automatic renewal, so I implemented it myself and sent a [pull request](https://github.com/nomad/venice/pull/30). (The OSS is apparently short-handed, so I did [several contributions](https://github.com/nomad/venice/pulls?q=is%3Apr+author%3Aohbarye+is%3Aclosed) even after that.)

I gave a [presentation at iOSDC 2018](https://speakerdeck.com/ohbarye/rethink-in-app-purchase-on-subscription-services) about the server side implementation of In-App Purchase, including the operation for that.

| Period          | Team                    | Role | Tech stacks, tools                           |
| --------------- | ----------------------- | ---- | -------------------------------------------- |
| 2016.04~2016.06 | 3 (PdM×1、iOS×1、Web×1) | Web  | Rails 4.2, Ruby 2.3, RSpec, venice, AppStore |

#### Jyuken Sapuri Migration

This is a project to rebrand the "Jyuken Sapuri" (Learning platform for high school students that our parent compary had used to run) on Quipper's codebase as a "StudySapuri".

There were not many technical difficulties, but it was insane project. We had to build a system that had originally been developed and operated for several years from scratch in six months.

I was in charge of a registration flow, batches to exchange data with external systems, student management functions for teachers, and automated homework delivery functions. Although I had none of experiences of tech stacks used in this project in the past, I was able to catch up in a short period and to finish my tasks.

Press release on this project: [http://www.recruit-mp.co.jp/news/release/2016/0225_2893.html](http://www.recruit-mp.co.jp/news/release/2016/0225_2893.html)

| Period          | Team                                            | Role | Tech stacks, tools                                                                  |
| --------------- | ----------------------------------------------- | ---- | ----------------------------------------------------------------------------------- |
| 2015.09~2016.02 | 10 (PdM×1、iOS×2、Android×2、Web エンジニア ×5) | Web  | Rails 4.2, Ruby 2.3, RSpec, Capybara, Backbone.js, Marionette.js, Sion, Mocha, Chai |

#### Other Activities

The followings are other regular and spot tasks I've addressed.

- [Creating a Collaborative Culture](https://quipper.hatenablog.com/entry/2018/11/14/working-out-loud)
- [Promote in-house study abroad](https://quipper.hatenablog.com/entry/2019/07/02/114507)
- Introduce tools to improve development efficiency ([kpt-bot](https://github.com/ohbarye/kpt-bot), [review-bot](https://github.com/ohbarye/review-waiting-list-bot), [Pull Panda](https://pullpanda.com/))
- Dependencies upgrade with [dependabot](https://dependabot.com/)
- Release manager
- Quipper School / Video, study supplements release separation
- Introduction of a pull-up machine
- Organizing reading and study groups (Real World HTTP, SRE books, etc.)

### SCSK Corporation (2012.04 ~ 2015.08) 3 yrs 5mos

[SCSK](https://www.scsk.jp/) is a Japanese big information technology services company.

I was a member of a department developing some enterprise systems for real estate companies which needs better property management solutions. I've developed web applications for the purpose.

- Web backend: Java6, Seasar2 (an open source web application framework)
- Web frontend: jQuery
- Web Server: Apache + Tomcat
- DB: Oracle Database 11g

## Public Output

### Blogs

- Personal (Japanese) [https://ohbarye.hatenablog.jp/](https://ohbarye.hatenablog.jp/)
- Personal (English) [https://dev.to/ohbarye](https://dev.to/ohbarye)

#### Articles on Company's Blog

- [Project Management Technique to Overcome Uncertainty](https://quipper.hatenablog.com/entry/2019/06/27/how-to-defeat-uncertainty)
- [Working Out Loud -How to Make Collaborative Culture-](https://quipper.hatenablog.com/entry/2018/11/14/working-out-loud)
- [Quipper Interview Guide is Published](https://quipper.hatenablog.com/entry/2018/09/01/interview-guide)
- [カジュアル面談への扉](https://quipper.hatenablog.com/entry/2020/02/05/casual-interview-in-quipper)
- [Fact-based Decision Making with A/B Testing](https://quipper.hatenablog.com/entry/2018/05/31/080000)
- [Effective Onboarding](https://quipper.hatenablog.com/entry/2020/04/02/effective-offboarding)
- [Timezone in Global Applications](https://quipper.hatenablog.com/entry/2016/12/05/090000)

### Presentations

Here are a few excerpts from [https://speakerdeck.com/ohbarye](https://speakerdeck.com/ohbarye). All of them are in Japanese.

- [Migration from React Native to PWA](https://speakerdeck.com/ohbarye/migration-from-react-native-to-pwa) (JSConf JP 2019)
- [Verify Hypothesis with A/B Testing](https://speakerdeck.com/ohbarye/proof-of-value-with-ab-testing) (Regional Scrum Gathering Tokyo 2019)
- [How to Find Good First Issues](https://speakerdeck.com/ohbarye/how-to-find-good-first-issues-final) (NodeFest JP 2018)
- [How to Manage Payment Transactions](https://speakerdeck.com/ohbarye/how-to-manage-payment-transaction) (Meguro.rb#19)
- [Rethink In-App Purchase on Subscription Services](https://speakerdeck.com/ohbarye/rethink-in-app-purchase-on-subscription-services) (iOSDC Japan 2018)
- [Fact-based Decision Making and Development](https://speakerdeck.com/ohbarye/fact-based-decision-making-and-development-by-quipper) (Rails developer Meetup 2018 Day 3 Extreme)
- [Color Accessibility, which Engineers Should Care](https://speakerdeck.com/ohbarye/color-accessibility-that-engineers-should-care) (Roppongi.js#3)
- [Level up Frontend Skills for Rais Developer](https://speakerdeck.com/ohbarye/level-up-front-end-skills-for-rails-developer) (Meguro.rb#15)

### OSS Activities

- Pull requests to OSS ([pull requests list](https://github.com/pulls?q=is%3Apr+author%3Aohbarye+archived%3Afalse+-user%3Aohbarye+))
  - An API client gem `venice` of AppStore for In-App purchase didn't support Auto-Renewable, so I developed the feature by myself [pull request](https://github.com/nomad/venice/pull/30).
  - A gem `newrelic_rpm` of New Relic Ruby agent was not compatible with grape v1.2.0+, so I fixed with this [pull request](https://github.com/newrelic/rpm/pull/293).
  - I have also sent patches to major OSS such as Node.js, yarn, Ruby, etc.
- Tools
  - [goofi](https://github.com/ohbarye/goofi)
  - [review-waiting-list-bot](https://github.com/ohbarye/review-waiting-list-bot)
  - [kpt-bot](https://github.com/ohbarye/kpt-bot)
  - [markdown-server](https://github.com/ohbarye/markdown-server)
- [Published gems](https://rubygems.org/profiles/ohbarye)
- [Published npm packages](https://www.npmjs.com/~ohbarye)

### Community Activities

- [Engineering Manager Meetup](https://engineering-manager-meetup.connpass.com/)
  - Role: Meetup organizer
  - The purpose of this community is to share knowledge about engineering management, which is still not widely available in Japan.
  - In total, more than 500 people participated in the event.
  - I've been running it on my own for about 1.5 years.
  - I handed over the community management to the community.
- [EOF2019](https://eof2019.peatix.com/)
  - Role: core member
  - The very first festival that puts "Engineering Management" on the theme in Japan.
  - Organize the OST session.
- Meguro.rb (Ruby regional community)
  - Role: member
  - As an administrative staff member of Meguro.rb, one of the local Ruby communities, I hosted the event twice.

### Personal Projects

These are artifacts of my personal projects.

#### Goofi

It is a tool to make contribution to OSS easier. I thought that the biggest obstacle for beginners who want to start OSS contributions is to find the target of contribution, so I created a web service [Goofi](https://goofi.now.sh/) to list repositories and issues to which contribution is recommended.

At Nodefest 2018, I [made a presentation about the service](https://speakerdeck.com/ohbarye/how-to-find-good-first-issues-final).

In January 2020, [GitHub has published an official feature](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/) similar to Googi, then I took it as, "My recognition of the problem was right.

| Period   | Repository                                                           | Tech stacks, tools                                                                                  |
| -------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 2020.08~ | [https://github.com/ohbarye/goofi](https://github.com/ohbarye/goofi) | Node.js 13.x, TypeScript 3.8, Next.js 9.1, GraphQL (client), Now.sh v1~2 (現 Vercel), GitHub API v4 |

#### React Use Kana

This is a library to create a form that automatically inputs furigana when you type kanji. there are some libraries that have the same function with jQuery and similar libraries for older versions of React, but I couldn't find a library that uses React hooks, so I made my own.

| Period | Repository                                                                             | Tech stacks, tools           |
| ------ | -------------------------------------------------------------------------------------- | ---------------------------- |
| 2019   | [https://github.com/ohbarye/react-use-kana](https://github.com/ohbarye/react-use-kana) | React 16.9, TypeScript 3.8.3 |

#### String Pixelater

A library that converts a character to a two-dimensional array of N \* N dots. I was addicted to [Processing](https://processing.org/) at the time and implemented it through the process of creating Generative Art.

| Period | Repository                                                                                 | Tech stacks, tools            |
| ------ | ------------------------------------------------------------------------------------------ | ----------------------------- |
| 2018   | [https://github.com/ohbarye/string-pixelater](https://github.com/ohbarye/string-pixelater) | TypeScript 3.6.4, rollup 1.23 |

#### Review bot

It's a Slack bot that encourages reviews in team development. It posts a list of pull requests to Slack that match specified conditions.

It's similar to [Pull Panda](https://pullpanda.com/), acquired by GitHub in June 2019. But my bot was forked by some companies for their internal use, that's probably because Pull Panda was not free.

| Period   | Repository                                                                                               | Tech stacks, tools                                               |
| -------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 2017.08~ | [https://github.com/ohbarye/review-waiting-list-bot](https://github.com/ohbarye/review-waiting-list-bot) | Node.js 8.x, GraphQL (client) Slack API, GitHub API v3~4, Heroku |

#### Automaildoc

This is a library that automatically generates HTML to preview email text when running tests with RSpec.

| Period | Repository                                                                       | Tech stacks, tools |
| ------ | -------------------------------------------------------------------------------- | ------------------ |
| 2017   | [https://github.com/ohbarye/automaildoc](https://github.com/ohbarye/automaildoc) | Ruby 2.4, RSpec 3  |

#### Markdown Server

This is a library that can build a web server to deliver Markdown documents as HTML. I made this for learning Python.

| Period | Repository                                                                               | Tech stacks, tools      |
| ------ | ---------------------------------------------------------------------------------------- | ----------------------- |
| 2015   | [https://github.com/ohbarye/markdown-server](https://github.com/ohbarye/markdown-server) | Python 3.7, bottle 0.12 |

## Education

- Keio University, Bachelor's degree, Europian History (2012)

## Qualifications

- Information-technology Promotion Agency, Japan
  - (2014.06) Database Specialist
  - (2012.12) Applied Information Technology Engineer
  - (2012.06) Fundamental Information Technology Engineer
- English
  - (2013.02) TOEIC 720
- Others
  - (2010.12) Chief of Money Lending Operations
  - (2012.03) Mastered Teacher Training Course

## Honors & Awards

- (2016.04) MVP2016 in Quipper
- (2015.03) Champion in hackathon conducted by SCSK OSS promotion office

## Interests

By 2020, I have developed the technical skills required in the field of software engineering, especially in the application layer of web services development. In the future, I hope to deepen my general understanding of software through learning about whole computer science, algorithms, low layers and middleware in particular.

- Competitive programming
  - AtCoder green [https://atcoder.jp/users/ohbarye](https://atcoder.jp/users/ohbarye)
  - Google Code Jam 2020
    - Passed Qualification Round
- Computer system
  - [WIP] "[The Elements of Computing Systems: Building a Modern Computer from First Principles](https://www.amazon.com/dp/0262640686)" (a.k.a. Nand to Tetris) [https://github.com/ohbarye/nand2tetris](https://github.com/ohbarye/nand2tetris)
    - I'm building an assembler, VM translator, and a compiler in OCaml.
- Algorithms
  - Mastered [Princeton University Algorithms Part 1](https://www.coursera.org/learn/algorithms-part1) in Coursera
- Database
  - [SQLite clone DB tutorial](https://ohbarye.hatenablog.jp/entry/2020/04/17/sqlite-clone-db-tutorial) (Japanese)
- My study note [https://scrapbox.io/ohbarye/](https://scrapbox.io/ohbarye/)
