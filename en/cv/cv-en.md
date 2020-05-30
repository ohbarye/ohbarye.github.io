---
tags: job-hunting
lang: en
title: 'Masato Ohba (ohbarye) CV'
output:
  html_document:
    toc: yes
pagetitle: Masato Ohba (ohbarye) CV
---

Last updated: 2020.05.30

## Contact

| key        | value                                                  |
| ---------- | ------------------------------------------------------ |
| Name       | Masato Ohba (大庭 直人)                                |
| ID         | `ohbarye`                                              |
| Email      | over.rye+jh [at] gmail.com                             |
| Entrypoint | [https://ohbarye.github.io](https://ohbarye.github.io) |

## Summary

The core of my strength is web backend. I have experience in full cycle development for both in-house development and client work. I can be the overall lead in the team from development to operation, starting with the requirements and requirements definition, which is done with timely communication.

I have been developing SPA and MPA with React in the System of Engagement area such as registration leads and retention measures, and in the Web frontend area for services that require rich experiences.

I can develop complex business logic required in the System of Record field, such as payment functions and internal systems, with quality, speed and robustness in mind.

I also served as engineering manager for an organization with 20-60 engineers. As a result, I have a proven track record and knowledge of team design, project management, recruitment, corporate branding, culture building, community activities, and more.

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

| Title                                                                                                                | Period          | Appeal Points                                     |
| -------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------------------------------- |
| [Code cleanup](#code-cleanup)                                                                                        | 2020.03         | Toughness to remove huge amount of codes          |
| Price Change                                                                                                         | 2019.10~2020.01 | Payment systems, complex business logics          |
| [Migration from React Native to PWA](#migration-from-react-native-to-pwa)                                            | 2019.07~2019.09 | Technology selection, paying back technology debt |
| [Develop Coaching Service for Junior High School Students](#develop-coaching-service-for-junio-high-school-students) | 2018.08~2019.03 | 9 people x 7 months project management / Scrum    |
| [Entry Form Renewal](#entry-form-renewal)                                                                            | 2018.03         | Technology selection、EFO                         |
| [Upgrade grape gem](#Upgrade-grape-gem)                                                                              | 2017.10~2017.12 | Paying back technical debt, OSS                   |  | [Research to Abolish Payment Method](#research-to-abolish-payment-method) | 2017.10 | A/B testing、Data driven decision making |
| Develop Coaching Service for High School Students                                                                    | 2016.12~2017.02 | Short term development                            |
| Benkyo Sapuri Migration                                                                                              | 2016.06~2016.12 | Short term development                            |
| [Hiring](#hiring)                                                                                                    | 2016.07~2020.03 | Organization design                               |
| [Develope In-App Purchase for iOS](#develope-in-app-purchase-for-ios)                                                | 2016.04~2016.06 | Payment systems, OSS                              |
| [Jyuken Sapuri Migration](#jyuken-sapuri-migration)                                                                  | 2015.09~2016.02 | Short term development, catch-up tech stacks      |
| [Other Activities](#other-activities)                                                                                | -               | Continuous improvement                            |

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

#### キャリア決済廃止検討

手数料が高く運用コストも高いキャリア決済を廃止する際にどれぐらいのインパクトがあるのかを検証するプロジェクトです。

Optimizely という SaaS を用い、エンジニアによる開発やテスト実施の手間を極力抑えつつ A/B testing の実践と定量データの収集ができました。

この取組については[ブログ記事](https://quipper.hatenablog.com/entry/2018/05/31/080000)を執筆し、[Rails Developer Meetup 2018 Day 3](https://speakerdeck.com/ohbarye/fact-based-decision-making-and-development-by-quipper)や[Regional Scrum Gathering Tokyo 2019](https://speakerdeck.com/ohbarye/proof-of-value-with-ab-testing)といったイベントでの登壇発表も行いました。

- 時期: 2017.10
- チーム構成
  - 規模: 2 名 (PdM×1、Web エンジニア ×1)
  - 役割: Web エンジニア
- 利用技術・ツール
  - Rails 4.2, Ruby 2.4, Optimizely

#### 採用活動

- 時期: 2016.07~2020.03

書類選考・一次・コードテスト・二次・カジュアル面談・リファラルランチ・リファラルディナーへの主体的な参加を始めとし、全面的に貢献しました。

- Job description の執筆
  - HR やエージェントと連携しつつ作成
  - 採用状況の変化に合わせて 2 度書き直しました
- 構造化面接の採用・実践・型化
- [コードテストの設計と実装](https://quipper.hatenablog.com/entry/2018/10/09/coding_test)
- 技術面接の設計と実装
- 面接ガイドの公開
- コミュニティ活動
  - [スタディサプリミートアップ第一回の運営](https://quipper.hatenablog.com/entry/2018/07/20/172946)

また、採用活動と地続きである以下の活動にも取り組みました。

- オンボーディング
- 上記活動に関する知見をまとめたブログ記事の執筆
  - [カジュアル面談](https://quipper.hatenablog.com/entry/2020/02/05/casual-interview-in-quipper)
  - [面接ガイドの公開](https://quipper.hatenablog.com/entry/2018/09/01/interview-guide)
  - [卒業生と在職者の交流会の開催](https://quipper.hatenablog.com/entry/2018/12/28/yet-quipper-moves)
  - [オフボーディング](https://quipper.hatenablog.com/entry/2020/04/02/effective-offboarding)

#### In-App Purchase 機能実装

当時、iOS アプリ内での課金は買い切りしか提供していなかったが売上が芳しく無く、クレカ等と同じように自動更新（Auto-renewable）による決済機能を提供したいというニーズがあったために機能を実装しました。

サーバサイドの API と、subscription status を確認するバッチ処理を実装しました。その過程でサーバサイドで利用している AppStore API client library の [venice](https://github.com/nomad/venice) が自動更新の形式に対応していなかったと気づいたため、自前で実装し、[pull request](https://github.com/nomad/venice/pull/30)を送りました。（同 OSS はどうやら手が足りていないようなのでそのあとも[何度か contribution](https://github.com/nomad/venice/pulls?q=is%3Apr+author%3Aohbarye+is%3Aclosed)しました）

このあとの運用も含めて In-App Purchase のサーバサイドに関する知見が得られたので[iOSDC 2018 で登壇発表](https://speakerdeck.com/ohbarye/rethink-in-app-purchase-on-subscription-services)を行いました。

- 時期: 2016.04~2016.06
- チーム構成
  - 規模: 3 名 (PdM×1、iOS×1、Web エンジニア ×1)
  - 役割: Web エンジニア
- 利用技術・ツール
  - Rails 4.2, Ruby 2.3

#### 受験サプリ移管プロジェクト

リクルートマーケティングパートナーズが運用していた「受験サプリ」というプロダクトを Quipper のコードベース上に載せ替え、「スタディサプリ」としてリブランディングするプロジェクトです。

技術的に高度なことはあまりなかったかもしれませんが、元々 Java で数年と数億円をかけて開発・運用されたプロダクトを半年でフルスクラッチで実装するという狂気がありました。

登録導線、外部システムとデータをやりとりする連携バッチ、生徒管理機能、自動宿題配信機能などを私は担当しました。当時の技術スタックである Rails, Backbone.js, Marionette.js, MongoDB のいずれも過去に経験がなかったのでキャッチアップしながら短納期で成果を上げることができました。

本プロジェクトに関するプレスリリース: [http://www.recruit-mp.co.jp/news/release/2016/0225_2893.html](http://www.recruit-mp.co.jp/news/release/2016/0225_2893.html)

- 時期: 2015.09~2016.02
- チーム構成
  - 規模: 10 名 (PdM×1、iOS×2、Android×2、Web エンジニア ×5)
  - 役割: Web エンジニア
- 利用技術・ツール
  - Rails 4.2, Ruby 2.3

#### その他

その他、定常的・突発的に行なった業務を以下に記します。

- [協調しあう文化づくり](https://quipper.hatenablog.com/entry/2018/11/14/working-out-loud)
- [社内留学の推進](https://quipper.hatenablog.com/entry/2019/07/02/114507)
- 開発効率向上に関するツールの開発・導入 ([kpt-bot](https://github.com/ohbarye/kpt-bot), [review-bot](https://github.com/ohbarye/review-waiting-list-bot), [Pull Panda](https://pullpanda.com/))
- Dependencies upgrade with [dependabot](https://dependabot.com/)
- Release manager
- Quipper School / Video、スタディサプリのリリース分離
- 健康促進のための懸垂台の導入
- 読書会・勉強会の運営 (Real World HTTP, SRE 本 etc.)
- 社内図書館の発案と実践

### SCSK Corporation (2012.04 ~ 2015.08) 3 yrs 5mos

[SCSK](https://www.scsk.jp/)は住友商事子会社の大手 SIer です。

私はシステムエンジニアとして不動産業界向けの業務システム開発に携わっていました。複雑な要件のデータモデル設計・帳票出力プログラムの作成・Web アプリケーションやバッチ処理の開発を通じてソフトウェア開発の基礎を学びました。

2014 年以降は基本設計・テスト設計・運用・進行管理・ベンダーマネジメントが業務の大半を占めました。

- Web backend: Java6, Seasar2 (an open source web application framework)
- Web frontend: jQuery
- Web Server: Apache + Tomcat
- DB: Oracle Database 11g

### Personal projects

#### Goofi (2018.08~)

OSS への貢献をより簡便にするためのツールです。OSS 活動を始めたい初心者にとって最大の壁が「貢献対象を探すこと」だと考え、コントリビューションが推奨される repository と issue をリストアップする Web サービス[Goofi](https://goofi.now.sh/)を作りました。(repository: [https://github.com/ohbarye/goofi](https://github.com/ohbarye/goofi))

Nodefest 2018 では[同サービスに関する発表](<(https://speakerdeck.com/ohbarye/how-to-find-good-first-issues-final)>)を行いました。

2020 年 1 月に[GitHub が公式の類似機能を公開した](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/)ので役目を終えそうですが、課題設定が正しかったことが追認された心持ちです。

- 使用技術: Node.js 13.x, TypeScript 3.8, Next.js 9.1, GraphQL (client), Now.sh v1~2 (現 Versel), GitHub API v4

#### Review bot (2017.08~)

チーム開発でのレビューを促進させる Slack bot です。
指定した条件にマッチする pull requests 一覧を Slack に投稿します。(repository: [https://github.com/ohbarye/review-waiting-list-bot](https://github.com/ohbarye/review-waiting-list-bot))

2019 年 6 月に GitHub が買収した[Pull Panda](https://pullpanda.com/)に類似していますが商用で有料だったためか、この bot を fork して利用していただける企業が数社ありました。

- 使用技術: Node.js 8.x, GraphQL (client) Slack API, GitHub API v3~4, Heroku

## Public output

[https://lapras.com/public/AVL0ALR](https://lapras.com/public/AVL0ALR) に概ね集約されています。

### Blogs

- 個人 [https://ohbarye.hatenablog.jp/](https://ohbarye.hatenablog.jp/)
- 個人 (英語) [https://dev.to/ohbarye](https://dev.to/ohbarye)
- 会社 [https://quipper.hatenablog.com/search?q=ohbarye](https://quipper.hatenablog.com/search?q=ohbarye)

### Presentations

- [https://speakerdeck.com/ohbarye](https://speakerdeck.com/ohbarye)

### OSS

- Pull requests to OSS ([pull requests 一覧](https://github.com/pulls?q=is%3Apr+author%3Aohbarye+archived%3Afalse+-user%3Aohbarye+))
  - AppStore の In-App purchase 用 API クライアント gem `venice` が Auto-Renewable (自動更新) に対応していなかったのでその機能を自ら開発した[pull request](https://github.com/nomad/venice/pull/30)
  - New Relic Ruby agent の gem `newrelic_rpm` が grape v1.2.0+ に対応していなかったので対応した[pull request](https://github.com/newrelic/rpm/pull/293)
  - その他 Node.js, yarn, Ruby などのメジャー OSS にもわずかながらパッチを送った経験あり
- tools
  - [goofi](https://github.com/ohbarye/goofi)
  - [review-waiting-list-bot](https://github.com/ohbarye/review-waiting-list-bot)
  - [kpt-bot](https://github.com/ohbarye/kpt-bot)
  - [markdown-server](https://github.com/ohbarye/markdown-server)
- [published gems](https://rubygems.org/profiles/ohbarye)
- [published npm packages](https://www.npmjs.com/~ohbarye)

### Community activities

- [Engineering Manager Meetup](https://engineering-manager-meetup.connpass.com/)
  - Role: Meetup organizer
  - 日本ではいまだ母数の少ない Engineering Manager という position についての情報共有を目的としたコミュニティです
  - トータルで 500 人以上が参加しました
  - 約 1.5 年にわたり独力で運営してきました
  - 現在はコミュニティでの運用にシフトしようと動いているところです
- [EOF2019](https://eof2019.peatix.com/)
  - Role: core member
  - The very first festival that puts "Engineering Management" on the theme in Japan.
  - OST セッションの開催を担当
- Meguro.rb
  - Role: member
  - 地域 Ruby コミュニティの 1 つである Meguro.rb の運営スタッフとして、イベント開催のホストを 2 度行いました

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
  - [WIP] 『[The Elements of Computing Systems: Building a Modern Computer from First Principles](https://www.amazon.com/dp/0262640686)』 (a.k.a. Nand to Tetris) [https://github.com/ohbarye/nand2tetris](https://github.com/ohbarye/nand2tetris)
    - I'm building an assembler, VM translator, and a compiler in OCaml.
- Algorithms
  - Mastered [Princeton University Algorithms Part 1](https://www.coursera.org/learn/algorithms-part1) in Coursera
- Database
  - [SQLite clone DB tutorial](https://ohbarye.hatenablog.jp/entry/2020/04/17/sqlite-clone-db-tutorial) (Japanese)
- My study note [https://scrapbox.io/ohbarye/](https://scrapbox.io/ohbarye/)
