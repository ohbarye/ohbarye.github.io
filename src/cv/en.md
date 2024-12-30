---
tags: job-hunting
lang: en
title: 'Masato Ohba (ohbarye) CV'
output:
  html_document:
    toc: yes
pagetitle: Masato Ohba (ohbarye) CV
balloon_message: Hi, I'm @ohbarye
---

Last updated: 2024-12-30

Japanese version: [https://ohbarye.github.io/ja/cv/](https://ohbarye.github.io/ja/cv/)

## Contact Information

| key        | value                                                  |
| ---------- | ------------------------------------------------------ |
| Name       | Masato Ohba (大庭 直人)                                |
| ID         | `ohbarye`                                              |
| Email      | over.rye+jh [at] gmail.com                             |
| Entrypoint | [https://ohbarye.github.io](https://ohbarye.github.io) |

## Summary

The core of my strength is web backend. I have experience in full-cycle development for both in-house development and client work. I can be the overall lead in the team from development to operation, starting with the requirements and requirements definition, which is done with timely communication.

I have been developing SPA and MPA with React in the System of Engagement areas such as registration leads and retention measures, and in the Web frontend area for services that require rich experiences.

I can develop complex business logic required in the System of Record fields, such as payment systems and banking systems, with quality, speed, and robustness in mind.

I also served as an engineering manager for an organization with 20-60 engineers. As a result, I have a proven track record and knowledge of team design, project management, recruitment, corporate branding, culture building, community activities, and more.

## Skills

- **Programming Languages**: Ruby, TypeScript, Go
- **Frameworks & Libraries**: Ruby on Rails, React, React Admin
- **Tools & Technologies**: Docker, Git, SQL, REST API, OpenAPI, MySQL, PostgreSQL, MongoDB
- **Cloud Infrastructure & DevOps**: AWS, GitHub Actions, CircleCI, New Relic, Google BigQuery
- **Soft Skills**: Team Collaboration, Agile Methodologies, Engineering Management, Scrum

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

## Professional Experience

### SmartBank, Inc.

- Aug 2020 - Present: Senior Software Engineer
- Oct 2023 - Present: Engineering Manager

[SmartBank, Inc.](https://smartbank.co.jp/) is a BtoC Fintech company that is categorized as a [challenger bank](https://en.wikipedia.org/wiki/Challenger_bank) like [Monzo](https://monzo.com/). The company is an "Issuer" that issues prepaid cards and develops and operates a product named [B/43](https://b43.jp/) that visualizes and automates spending management in conjunction with payment with cards.

Achievements:

- **Subscription Service Development** (Oct 2022 -) : Developed subscription service from scratch without using any external SaaS. Presented at a [company event](https://speakerdeck.com/ohbarye/behind-the-scenes-engineering-a-subscription-service).
  - (Dec 2023 - Oct 2024) Increased subscription revenue by launching an aggregation service that fetches spending data from other financial institutes.
- **Banking System Development** (Aug 2020 -) : Developed various features like withdrawal, money transfer, account by purpose, joint account, pending management and etc.
  - (Nov 2021 - Jun 2022) Developed 3-D Secure authentication for secure card payments. Presented at [Kaigi on Rails 2022](https://speakerdeck.com/ohbarye/balance-security-and-usability-in-the-field-of-3d-secure).
  - (Aug 2020 - Apr 2021) Developed an in-house identity verification system (known as eKYC) / Card delivery system that performs necessary works as a card issuer.
- **Developer Experience Improvements** (Aug 2020 -) : Developed tools and systems for internal developers.
  - Introduced [Feature Toggles](https://martinfowler.com/articles/feature-toggles.html) and separated development and release.
  - Made our API server compatible with [Idempotency-Key Headers](https://brandur.org/fragments/idempotency-key-draft) and make it robust so that data can be protected even if multiple requests occur.
  - Contributed to development productivity. e.g. Built CI/CD pipeline, automated deployment flow, schema/date migration flow, and migrated queueing system from Delayed Job to SQS.

### Quipper Limited

- Aug 2015 - May 2020: Software Engineer
- Jun 2017 - May 2020: Engineering Manager

[Quipper](https://www.quipper.com/) is a company that operates both B to C and B to B education businesses. We develop and operate Quipper School and Quipper Video outside of Japan, and [StudySuppli](https://studysapuri.jp/) in Japan.

Achievements:

- **Large-scale Code Cleanup** (Mar 2020) : Led removal of 400,000 lines of code with zero production incidents, improved maintainability by reducing Rails models from 390 to 281.
- **React Native to PWA Migration** (Jul - Sep 2019) : Led platform migration of internal business application. [Presented](https://speakerdeck.com/ohbarye/migration-from-react-native-to-pwa) at JSConf 2019.
- **Payment System Improvements** : Implemented auto-renewable subscription feature for iOS app, and A/B tested payment method optimization. (Presented at[presentation at iOSDC 2018](https://speakerdeck.com/ohbarye/rethink-in-app-purchase-on-subscription-services), [Rails Developer Meetup 2018](https://speakerdeck.com/ohbarye/fact-based-decision-making-and-development-by-quipper) and [Regional Scrum Gathering Tokyo 2019](https://speakerdeck.com/ohbarye/proof-of-value-with-ab-testing))
- **Junior High School Coaching Service Development** (Aug 2018 - Mar 2019) : Led 12-member team to successful launch of high-uncertainty project, enhancing team productivity through mob programming and 1-on-1s
- **Entry Form Modernization** (Mar 2018) : Improved registration CVR through modernization of legacy system.
- **Recruitment & Organization Design** (Jul 2016 - Mar 2020) : Led recruitment efforts, designed structured interviews, and improved onboarding process.
  - [Designed code test](https://quipper.hatenablog.com/entry/2018/10/09/coding_test), organized [StudySapuri Meetup #1](https://quipper.hatenablog.com/entry/2018/07/20/172946), wrote blog posts on [effective offboarding](https://quipper.hatenablog.com/entry/2020/04/02/effective-offboarding) and [working out loud](https://quipper.hatenablog.com/entry/2018/11/14/working-out-loud).

### SCSK Corporation

- Apr 2012 - Aug 2015: System Engineer

[SCSK](https://www.scsk.jp/) is a Japanese big information technology services company. I was a member of a department developing some enterprise systems for real estate companies which needs better property management solutions. I've developed web applications for the purpose.

## Public Output

### Blogs

- Personal (Japanese) [https://ohbarye.hatenablog.jp/](https://ohbarye.hatenablog.jp/)
- Personal (English) [https://dev.to/ohbarye](https://dev.to/ohbarye)

#### Articles on Company's Blog

- [We're going to hold "B/43 Tech Talk -Fintech and Subscription Service-"](https://blog.smartbank.co.jp/entry/2023/07/21/b43-plus-inside-tech-talk)
- [Rubocop auto-correction with reviewdog and Custom Formatter](https://blog.smartbank.co.jp/entry/2023/06/29/reviewdog-action-rubocop-suggestion-feature)
- [ActionMailer::Base option pitfall](https://blog.smartbank.co.jp/entry/2023/06/05/action-mailer-config-pitfall)
- [Enhance metadata with Rails generator](https://blog.smartbank.co.jp/entry/2023/04/04/rails-generator-for-metadata)
- [Auto-merge Dependabot Pull Requests with GitHub App](https://blog.smartbank.co.jp/entry/2023/02/16/dependabot-auto-merge-with-github-app)
- [3D Secure Introduction - How We Build and Operate](https://blog.smartbank.co.jp/entry/2022/11/11/3d-secure)
- [Migrate CRA to Vite - We Got 190x times faster dev server](https://blog.smartbank.co.jp/entry/2022/04/25/create-react-app-to-vite)
- [TracePoint Usage: Sentry Captures Local Variable](https://blog.smartbank.co.jp/entry/2021/11/25/sentry-ruby-meets-tracepoint)
- [Retry with Idempotency-Key Header](https://blog.smartbank.co.jp/entry/2021/10/26/safe-retry-with-idempotency-key-header)
- [Project Management Technique to Overcome Uncertainty](https://quipper.hatenablog.com/entry/2019/06/27/how-to-defeat-uncertainty)
- [Working Out Loud -How to Make Collaborative Culture-](https://quipper.hatenablog.com/entry/2018/11/14/working-out-loud)
- [Quipper Interview Guide is Published](https://quipper.hatenablog.com/entry/2018/09/01/interview-guide)
- [Introduction of Casual Interview](https://quipper.hatenablog.com/entry/2020/02/05/casual-interview-in-quipper)
- [Fact-based Decision Making with A/B Testing](https://quipper.hatenablog.com/entry/2018/05/31/080000)
- [Effective Onboarding](https://quipper.hatenablog.com/entry/2020/04/02/effective-offboarding)
- [Timezone in Global Applications](https://quipper.hatenablog.com/entry/2016/12/05/090000)

### Presentations

Here are a few excerpts from [https://speakerdeck.com/ohbarye](https://speakerdeck.com/ohbarye).

- [Behind the Scenes: Engineering a Subscription Service](https://speakerdeck.com/ohbarye/behind-the-scenes-engineering-a-subscription-service) (B/43 Techtalk)
- [RuboCop Custom Formatter for Reviewdog Diagnostic Format](https://speakerdeck.com/ohbarye/rubocop-custom-formatter-for-reviewdog-diagnostic-format) (Gotanda.rb#53)
- [Isolate out-of-DB side effects from transactions](https://speakerdeck.com/ohbarye/isolate-out-of-db-side-effects-from-transactions) (Gotanda.rb#52)
- [Balance Security and Usability in the Field of 3D Secure](https://speakerdeck.com/ohbarye/balance-security-and-usability-in-the-field-of-3d-secure) (Kaigi on Rails 2022)
- [Safe Retry with Idempotency-Key Header](https://speakerdeck.com/ohbarye/safe-retry-with-idempotency-key-header) (Kaigi on Rails 2021)
- [Migration from React Native to PWA](https://speakerdeck.com/ohbarye/migration-from-react-native-to-pwa) (JSConf JP 2019)
- [Lightning Talk Session Organizer](https://event.shoeisha.jp/devsumi/20190702/session/2091/) (Developers Summit 2019 Summer)
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
- [Published npm packages](https://www.npmjs.com/-ohbarye)

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
| 2020.08- | [https://github.com/ohbarye/goofi](https://github.com/ohbarye/goofi) | Node.js 13.x, TypeScript 3.8, Next.js 9.1, GraphQL (client), Now.sh v1-2 (現 Vercel), GitHub API v4 |

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
| 2017.08- | [https://github.com/ohbarye/review-waiting-list-bot](https://github.com/ohbarye/review-waiting-list-bot) | Node.js 8.x, GraphQL (client) Slack API, GitHub API v3-4, Heroku |

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

- AtCoder
  - (2020.06) Practical Algorithm Skill Test, Advanced Beginner
- Information-technology Promotion Agency, Japan
  - (2014.06) Database Specialist
  - (2012.12) Applied Information Technology Engineer
  - (2012.06) Fundamental Information Technology Engineer
- Others
  - (2010.12) Chief of Money Lending Operations

## Interests

By 2020, I have developed the technical skills required in the field of software engineering, especially in the application layer of web services development. In the future, I hope to deepen my general understanding of software through learning about whole computer science, algorithms, low layers and middleware in particular.

- Competitive programming
  - AtCoder green [https://atcoder.jp/users/ohbarye](https://atcoder.jp/users/ohbarye)
- Computer system
  - "[The Elements of Computing Systems: Building a Modern Computer from First Principles](https://www.amazon.com/dp/0262640686)" (a.k.a. Nand to Tetris) [https://github.com/ohbarye/nand2tetris](https://github.com/ohbarye/nand2tetris)
    - Built an assembler, VM translator, and a compiler in OCaml and Ruby.
- Algorithms
  - Mastered [Princeton University Algorithms Part 1](https://www.coursera.org/learn/algorithms-part1) in Coursera
- Database
  - [SQLite clone DB tutorial](https://ohbarye.hatenablog.jp/entry/2020/04/17/sqlite-clone-db-tutorial) (Japanese)
- My study note [https://scrapbox.io/ohbarye/](https://scrapbox.io/ohbarye/)
