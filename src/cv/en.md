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

Software Engineer with extensive experience in full-cycle development, ranging from robust development of payment and banking systems with Ruby and Go to SPA/MPA development using React. My strengths lie in software design within System of Record domains and implementing solutions with a focus on performance and scalability. I actively contribute to the engineering community through OSS projects and technical presentations. (See [Personal Projects](#personal-projects), [Public Output](#public-output))

I have also served as an Engineering Manager in organizations of 20-60 engineers, gaining substantial experience and expertise in team design, project management, recruitment, corporate branding, culture building, and community activities.

My core strength is the ability to foster team technical growth while ensuring quality and robustness in mission-critical development, from batch processing idempotency to data consistency in payment systems.

## Skills

- **Programming Languages**: Ruby, TypeScript, Go
- **Frameworks & Libraries**: Ruby on Rails, React, React Admin
- **Tools & Technologies**: Docker, Git, SQL, REST API, OpenAPI, MySQL, PostgreSQL, MongoDB
- **Cloud Infrastructure & DevOps**: AWS, GitHub Actions, CircleCI, New Relic, Google BigQuery
- **Soft Skills**: Team Collaboration, Agile Methodologies, Engineering Management, Scrum

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

### OSS Activities

- [Pull requests list](https://github.com/pulls?q=is%3Apr+author%3Aohbarye+archived%3Afalse+-user%3Aohbarye+)) I have also sent patches to major OSS such as Node.js, yarn, Ruby, etc.
- [Published Ruby gems](https://rubygems.org/profiles/ohbarye)
  - **Property-Based Testing Tool** (2024) : [pbt](https://github.com/ohbarye/pbt)
    - Presented at RubyKaigi 2024: [Unlocking Potential of Property Based Testing with Ractor](https://rubykaigi.org/2024/presentations/ohbarye.html).
    - Show HN: [https://news.ycombinator.com/item?id=40441093](https://news.ycombinator.com/item?id=40441093)
  - **Route Validator** (2020 - 2021) : [route_mechanic](https://github.com/ohbarye/route_mechanic)
  - **Email previewer** (2017) : [automaildoc](https://github.com/ohbarye/automaildoc)
- [Published npm packages](https://www.npmjs.com/-ohbarye)
  - **React Library for Japanese Form** (2019) : [react-use-kana](https://github.com/ohbarye/react-use-kana)
- Other OSS projects
  - **OSS Finder for newbies** (2020) : [goofi](https://github.com/ohbarye/goofi) built with Next.js and GraphQL.
    - At Nodefest 2018, I [made a presentation about the service](https://speakerdeck.com/ohbarye/how-to-find-good-first-issues-final).
  - **Slack Bots to Help Team Development** (2017 - 2020) : [review-waiting-list-bot](https://github.com/ohbarye/review-waiting-list-bot), [kpt-bot](https://github.com/ohbarye/kpt-bot)

### Blogs

- Personal
  - Japanese: [https://ohbarye.hatenablog.jp/](https://ohbarye.hatenablog.jp/)
  - English: [https://dev.to/ohbarye](https://dev.to/ohbarye)
- Company Blog
  - SmartBank Blog: [https://blog.smartbank.co.jp/archive/author/ohbarye](https://blog.smartbank.co.jp/archive/author/ohbarye)
  - Quipper Blog: [https://quipper.hatenablog.com/archive/author/ohbarye](https://quipper.hatenablog.com/archive/author/ohbarye)

### Presentations

Here are a few excerpts from [https://speakerdeck.com/ohbarye](https://speakerdeck.com/ohbarye).

- [Unlocking Potential of Property Based Testing with Ractor](https://speakerdeck.com/ohbarye/unlocking-potential-of-property-based-testing-with-ractor) (RubyKaigi 2024)
- [Data Migration on Rails](https://speakerdeck.com/ohbarye/data-migration-on-rails) (Kaigi on Rails 2024)
- [Behind the Scenes: Engineering a Subscription Service](https://speakerdeck.com/ohbarye/behind-the-scenes-engineering-a-subscription-service) (B/43 Techtalk 2023)
- [Balance Security and Usability in the Field of 3D Secure](https://speakerdeck.com/ohbarye/balance-security-and-usability-in-the-field-of-3d-secure) (Kaigi on Rails 2022)
- [Safe Retry with Idempotency-Key Header](https://speakerdeck.com/ohbarye/safe-retry-with-idempotency-key-header) (Kaigi on Rails 2021)
- [Migration from React Native to PWA](https://speakerdeck.com/ohbarye/migration-from-react-native-to-pwa) (JSConf JP 2019)
- [Verify Hypothesis with A/B Testing](https://speakerdeck.com/ohbarye/proof-of-value-with-ab-testing) (Regional Scrum Gathering Tokyo 2019)
- [How to Find Good First Issues](https://speakerdeck.com/ohbarye/how-to-find-good-first-issues-final) (NodeFest JP 2018)
- [Rethink In-App Purchase on Subscription Services](https://speakerdeck.com/ohbarye/rethink-in-app-purchase-on-subscription-services) (iOSDC Japan 2018)

### Community Activities

- [Engineering Manager Meetup](https://engineering-manager-meetup.connpass.com/)
  - Role: Founder / Meetup Organizer
  - The purpose of this community is to share knowledge about engineering management, which is still not widely available in Japan. In total, more than 500 people participated in the event. I've been running it on my own for about 1.5 years. In 2020, I've handed over the community management to the community.
- [EOF2019](https://eof2019.peatix.com/)
  - Role: Core Staff
  - The very first festival that puts "Engineering Management" on the theme in Japan. I organized an OST session in the event.

## Education

- Keio University, Bachelor's degree, Europian History (2012)

## Qualifications

- AtCoder
  - (Jun 2020) Practical Algorithm Skill Test, Advanced Beginner
- Information-technology Promotion Agency, Japan
  - (Jun 2014) Database Specialist
  - (Dec 2012) Applied Information Technology Engineer
  - (Jun 2012) Fundamental Information Technology Engineer
- Others
  - (Dec 2010) Chief of Money Lending Operations

## Interests

I have developed the technical skills required in the field of software engineering, especially in the application layer of web services development. In the future, I hope to deepen my general understanding of software through learning about whole computer science, algorithms, low layers and middleware in particular.

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
