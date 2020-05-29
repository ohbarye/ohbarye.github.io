---
tags: job-hunting
title: 'Masato Ohba (ohbarye) CV'
output:
  html_document:
    toc: yes
pagetitle: Masato Ohba (ohbarye) CV
---

Last updated: 2020-05-21

## 基本情報と連絡先

| key        | value                                                  |
| ---------- | ------------------------------------------------------ |
| Name       | Masato Ohba (大庭 直人)                                |
| ID         | `ohbarye`                                              |
| Email      | [over.rye+jh@gmail.com](mailto:over.rye+jh@gmail.com)  |
| Entrypoint | [https://ohbarye.github.io](https://ohbarye.github.io) |

## Summary

Web backend を強みの中心に置きつつ、自社サービスと client work 両方のフルサイクル開発の経験があります。適時コミュニケーションを取りつつ行う要求・要件定義を始めとし、チームでの開発から運用までの全体を担うことができます。

決済機能や社内システムなど System of Record 領域において求められる複雑なビジネスロジックに関して、質・速度・堅牢さを意識した開発が得意です。

登録導線やリテンション施策などの System of Engagement 領域、リッチな体験が求められるサービスの Web frontend においては React による SPA, MPA の開発を行なってきました。

また、エンジニア数が 20~60 名規模の組織における Engineering Manager を務め、チーム設計・プロジェクトマネジメント・採用活動・コーポレートブランディング・文化づくり・コミュニティ活動等々に関する実績と知見があります。

## Skills

- Language: **Ruby** (2.3~), **TypeScript** (3.4~), JavaScript (ES2015~), CoffeeScript`*` (1.x), Java`*` (6~8), Python (2.x)`*`, OCaml (4.10) `*`
- Frontend: **React** (16.x~), Redux (3.x~), Backbone.js`*`, Marionette.js`*`, jQuery`*` (1.x~), React Native (0.5x), Webpack
- Backend: **Ruby on Rails** (4.2~5.1), Node.js`*`, OpenAPI (3.x)
- Testing: **RSpec**, Capybara, minitest, Jest, Cypress, sinon, chai, mocha
- Database: MongoDB (3.2~3.6), Redis, PostgreSQL (9.5)
- Infrastructure: AWS, Docker, Kubernetes, Heroku`*`, Deis`*`, Netlify`*`, Versel`*`
- Communication tools: GitHub, ZenHub, Slack
- SaaS: CircleCI, TravisCI`*`, NewRelic, Google BigQuery, Google Cloud Logging (Stackdriver Logging), Treasure Data, Datadog, TravisCI`*`
- Protocols: HTTP (REST), GraphQL`*`
- Development framework: Agile, Scrum, Waterfall`*`

**Bold** indicates core skills.
`*` indicates either lack of production use or keeping away from the technology for several years.

### Strong points

#### Operation, Performance を意識した設計・実装

ビジネスの要求を一時的に満たすだけでなく、パフォーマンス・計算量・将来にわたるデータ増加を意識した設計や実装の経験があります。加えて、運用中に生じた問題についてのパフォーマンスチューニングを行なってきました。

バッチの冪等性・リトライ、決済におけるデータの整合性、開発した機能がどのように運用されるか。これらを意識した設計・開発・レビューに自信があります。

#### OSS を活用、改善する技術力

現代においては特筆すべきことではありませんが、業務においては OSS を利用しています。技術選定の際には利便性やトレンドの最大瞬間風速だけでなくチームとして feasible な技術かどうか？を中心に検討し、並んで持続性や disposability を検討します。dependabot のような SaaS を活用しつつ dependencies の定期的なアップグレードも行なってきました。

また、開発するプロダクトと OSS は地続きであると考えています。必要な機能がなければ自ら開発したりパッチを送ったり、bug や regression に気づいたら直す振る舞いを是としています。（後述する[Personal projects](#Personal-projects)欄、[OSS](#OSS)欄においても OSS contribution に関する内容を記述しています）

#### チーム志向

チームとして成果を上げることに強い関心があり、協働が生まれる仕組みづくりや文化の醸成を行ってきました。また、マネジャーとしてチームメンバー間の信頼関係の構築・強み・弱み・指向性・事業特性などの変数を考慮してチーム編成を決定した経験もあります。

プロセスに問題があったとき、「ゴールを明確にする」「説明責任を果たす」「オーバーワークを防ぐ」ためにスクラムを導入し、スクラムマスターの役割を担ったこともあります。

#### ~100 名規模のエンジニア組織における課題解決

エンジニア数が 20~60 名規模の組織における Engineering Manager として、組織設計・チーム設計・採用活動・教育・オンボーディング・文化づくり・コミュニティ活動等々に関する実績と知見があります。

チーム・組織規模が大きくなる中で生じる課題はその組織において初めて経験される類のものが多く、明確に真因の特定と優先度判断とアサインを行わないと放置され歪みが拡大することがしばしばあります。組織課題のそうした特性を知ったうえで対応してきた経験は、自身の役割がメンバーであれマネジャーであれ、同規模 ± 数十名のチーム・組織でも活かせると考えます。

### Weak points

モノリシックなアプリケーションをバックエンドとするプロダクト開発や数名〜20 名弱のチームにおいては上記のような強みを発揮できますが、以下の経験については乏しい、または全く経験がありません。

- Microservices、分散処理
- 大規模トラフィックへの対応
- モバイルアプリ開発
- Cloud services (AWS, GCP, Azure etc.) を活用したアーキテクチャ設計や構成管理 (Terraform, Ansible etc.)
- ミドルウェアの技術選定、運用、チューニング
- ハードウェア、組み込みソフトウェア関連
- 20 名を超える大規模チームでの開発

経験のない領域を学ぶ意欲はあり、業務上必要な技術に関するキャッチアップは過去に行なってきたように可能と思いますが、業務開始直後に初速を出すのは難しいと考えます。

## 職務経歴

### Quipper Limited (2015-09 ~ 2020-05) 4 yrs 8mos

[Quipper](https://www.quipper.com/)は BtoC, BtoB 両方の教育事業を営む企業です。日本国外には Quipper School, Quipper Video を、日本国内においては[スタディサプリ](https://studysapuri.jp/)の開発・運用を行っています。

スタディサプリブランド傘下には小中高大講座、社会人向けの ENGLISH、学校・自治体向けの forSchool 等が存在し、私は主に BtoC のスタディサプリ小中高大講座の開発・運用に携わりました。関わった Projects のうちいくつかを以下に記します。

| タイトル                                                                  | 期間            | 語れるポイント                         |
| ------------------------------------------------------------------------- | --------------- | -------------------------------------- |
| [Code cleanup](#Code-cleanup)                                             | 2020-03         | 腕力                                   |
| 価格変更対応                                                              | 2019-10~2020-01 | 複雑な要件の設計・実装                 |
| [Migration from React Native to PWA](#Migration-from-React-Native-to-PWA) | 2019-07~2019-09 | 技術選定、技術的負債返却               |
| [中学生向けコーチングサービス開発](#中学生向けコーチングサービス開発)     | 2018-08~2019-03 | 相対的に大型プロジェクトのマネジメント |
| [登録導線リニューアル](#登録導線リニューアル)                             | 2018-03         | 技術選定、EFO                          |
| [Upgrade grape gem](#Upgrade-grape-gem)                                   | 2017-10~2017-12 | 技術的負債返却、OSS                    |
| [キャリア決済廃止検討](#キャリア決済廃止検討)                             | 2017-10         | A/B テスト、Data driven な意思決定     |
| 高校生向けコーチングサービス開発                                          | 2016-12~2017-02 | 短納期開発                             |
| 勉強サプリ移管プロジェクト                                                | 2016-06~2016-12 | 短納期開発                             |
| [採用活動](#採用活動)                                                     | 2016-07~2020-03 | 組織づくり                             |
| [In-App Purchase 機能実装](#In-App-Purchase機能実装)                      | 2016-04~2016-06 | 決済機能開発、OSS                      |
| [受験サプリ移管プロジェクト](#受験サプリ移管プロジェクト)                 | 2015-09~2016-02 | 短納期開発、新規技術の習得             |
| [その他](#その他)                                                         | -               | 地道な改善活動                         |

#### Code cleanup

複数プロダクトでコードを共用していた monorepo を fork し、dead code が大量に発生しました。その dead code の掃除が全体の開発体験に関わると考え、退職前の最後の仕事としてほぼ独力で提案から実行まで行いました。

約 3 週間で 400,000 行のコードを削除するに至り、Rails の利用されていない model の削減では数を 390 から 281 に減らすことができました。稼働中のシステムに大きく手を入れたものの顧客に影響を及ぼすような障害を起こすことなく完遂しました。

- 期間: 2020-03
- チーム構成
  - 規模: 1 名 (自分のみ)
  - 役割: すべて
- 利用技術・ツール
  - Rails, React, Redux, TypeScript (削除対象)
  - NewRelic, BigQuery (機能の利用状況調査)

#### Migration from React Native to PWA

React Native 製 iOS/Android の業務用 internal アプリを PWA にてリニューアルするプロジェクトです。主にプロジェクトの立ち上げとバックエンドを担当しました。（リニューアル時に UI/UX を刷新したため、バックエンドにも変更が必要でした）

プロジェクト以前に API に関する仕様を共有する仕組みがなかったため、OpenAPI による API specification の記述をし、共有のための土台の整備も行いました。自動テストと Staging 環境においてのみ動作する Rack middleware を活用し、Specification 違反を検知する仕組みも導入しています。（詳細は[ブログ記事](https://ohbarye.hatenablog.jp/entry/2020/04/29/open-api-specification-for-existing-restish-api-endpoints)にも書きました）

また、プロジェクトの総括を[JSConf 2019 にて発表](https://speakerdeck.com/ohbarye/migration-from-react-native-to-pwa)しました。

- 期間: 2019-07~2019-09
- チーム構成
  - 規模: 6 名 (PdM×1、デザイナー ×2、iOS×1、フロントエンド ×1、バックエンド ×1)
  - 役割: バックエンドエンジニア
- 利用技術・ツール
  - Rails 5.0, React 16.12, Redux 4.0, TypeScript 3.7, Cypress

#### 中学生向けコーチングサービス開発

新規メンバーが大半の 10 名超、かつ半年を超える規模である不確実性の大きいプロジェクトにおいて、スクラム・モブプロ・1-on-1 等々のプラクティスを導入・実践することによりにリリースすることができました。また、定量的評価が難しいものの、メンバーの成長・定着にも繋がりました。

本プロジェクトの詳細は『[新メンバーが多い大型プロジェクトでの不確実性との戦い方](https://quipper.hatenablog.com/entry/2019/06/27/how-to-defeat-uncertainty)』にまとめています。

- 期間: 2018-08~2019-03
- チーム構成
  - 規模: 12 名 (PdM×1、デザイナー ×1、iOS×1、Android×1、Web エンジニア ×8)
  - 役割: Web エンジニア、スクラムマスター
- 利用技術・ツール
  - Rails, React, Redux, TypeScript, React Native

#### 登録導線リニューアル

BtoC の学習サービスにおいて最も重要な獲得の時期に向けた EFO (Entry Form Optimization) プロジェクトです。

- フロントエンド、バックエンドの両方を 1 名で担当
- 当時のチームにて扱うフロントエンドの大部分は MPA であり、登録導線は Rails の View と jQuery で実装されていた
- Webpacker と React を導入
- 同時期でなくリリース前後の比較になってしまったが登録導線の CVR が向上した

[Meguro.rb にて取り組みの内容を発表](https://speakerdeck.com/ohbarye/level-up-front-end-skills-for-rails-developer)しました。

- 期間: 2018-03
- チーム構成
  - 規模: 3 名 (PdM×1、デザイナー ×1、Web エンジニア ×1)
  - 役割: Web エンジニア
- 利用技術・ツール
  - Rails, React, Redux, TypeScript, Webpacker

#### Upgrade grape gem

社内で最も大きい Rails の API server では grape という gem を使っているが、この gem が導入時 2015 年の v0.12.0 から更新されていなかったのでアップグレードしました。

Rails upgrade 等に比べて情報が少なく、依存している周辺 library が dead であるために迂回策を用意するなどの工夫が必要でした。minor version (~v0.19) を少しずつ上げながら最終的に当時の最新の v1.0.1 まで upgrade できました。

余談ながら、この約 1 年後 2018 年 12 月に NewRelic で同 Rails アプリケーションのメトリクスが取れないという問題が起きました。これは NewRelic agent 側の問題だったため本体に[パッチ](https://github.com/newrelic/rpm/pull/293)を投げて解決しました。

- 期間: 2017-10~2017-12
- チーム構成
  - 規模: 1 名 (自分のみ)
  - 役割: Web エンジニア
- 利用技術・ツール
  - Rails 4.2, Ruby 2.4, grape

#### キャリア決済廃止検討

手数料が高く運用コストも高いキャリア決済を廃止する際にどれぐらいのインパクトがあるのかを検証するプロジェクトです。

Optimizely という SaaS を用い、エンジニアによる開発やテスト実施の手間を極力抑えつつ A/B testing の実践と定量データの収集ができました。

この取組については[ブログ記事](https://quipper.hatenablog.com/entry/2018/05/31/080000)を執筆し、[Rails Developer Meetup 2018 Day 3](https://speakerdeck.com/ohbarye/fact-based-decision-making-and-development-by-quipper)や[Regional Scrum Gathering Tokyo 2019](https://speakerdeck.com/ohbarye/proof-of-value-with-ab-testing)といったイベントでの登壇発表も行いました。

- 時期: 2017-10
- チーム構成
  - 規模: 2 名 (PdM×1、Web エンジニア ×1)
  - 役割: Web エンジニア
- 利用技術・ツール
  - Rails 4.2, Ruby 2.4, Optimizely

#### 採用活動

- 時期: 2016-07~2020-03

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

- 時期: 2016-04~2016-06
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

- 時期: 2015-09~2016-02
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

### SCSK Corporation (2012-04 ~ 2015-08) 3 yrs 5mos

[SCSK](https://www.scsk.jp/)は住友商事子会社の大手 SIer です。

私はシステムエンジニアとして不動産業界向けの業務システム開発に携わっていました。複雑な要件のデータモデル設計・帳票出力プログラムの作成・Web アプリケーションやバッチ処理の開発を通じてソフトウェア開発の基礎を学びました。

2014 年以降は基本設計・テスト設計・運用・進行管理・ベンダーマネジメントが業務の大半を占めました。

- Web backend: Java6, Seasar2 (an open source web application framework)
- Web frontend: jQuery
- Web Server: Apache + Tomcat
- DB: Oracle Database 11g

### Personal projects

#### Goofi (2018-08~)

OSS への貢献をより簡便にするためのツールです。OSS 活動を始めたい初心者にとって最大の壁が「貢献対象を探すこと」だと考え、コントリビューションが推奨される repository と issue をリストアップする Web サービス[Goofi](https://goofi.now.sh/)を作りました。(repository: [https://github.com/ohbarye/goofi](https://github.com/ohbarye/goofi))

Nodefest 2018 では[同サービスに関する発表](<(https://speakerdeck.com/ohbarye/how-to-find-good-first-issues-final)>)を行いました。

2020 年 1 月に[GitHub が公式の類似機能を公開した](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/)ので役目を終えそうですが、課題設定が正しかったことが追認された心持ちです。

- 使用技術: Node.js 13.x, TypeScript 3.8, Next.js 9.1, GraphQL (client), Now.sh v1~2 (現 Versel), GitHub API v4

#### Review bot (2017-08~)

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

- IPA
  - (2014-06) データベーススペシャリスト
  - (2012-12) 応用情報処理技術者
  - (2012-06) 基本情報処理技術者
- English
  - (2013-02) TOEIC 720
- Others
  - (2010-12) 貸金業務取扱主任者
  - (2012-03) 教職課程履修完了
    - 教員免許申請資格はあるが未申請のため資格は未取得

## Honors & Awards

- (2016-04) MVP2016 in Quipper
- (2015-03) Champion in hackathon conducted by SCSK OSS promotion office

## Interests

2020 年まではソフトウェア工学の分野、特に事業会社の Web サービス開発のうちアプリケーションレイヤーの開発で求められる技術力を業務でも趣味でも伸ばしてきました。今後はコンピュータサイエンス全般やアルゴリズム、低レイヤーやミドルウェアの学習を通じてソフトウェアに関する理解を全般的に深めていきたいと考えています。

- Competitive programming
  - AtCoder 緑 [https://atcoder.jp/users/ohbarye](https://atcoder.jp/users/ohbarye)
  - Google Code Jam 2020
    - Passed Qualification Round
- Computer system
  - [WIP] 『[コンピュータシステムの理論と実装](https://www.oreilly.co.jp/books/9784873117126/)』 (a.k.a. Nand to Tetris) の実践 [https://github.com/ohbarye/nand2tetris](https://github.com/ohbarye/nand2tetris)
    - アセンブラ、VM 変換器、コンパイラを OCaml で実装中
- Algorithms
  - Coursera: [Princeton University Algorithms Part 1](https://www.coursera.org/learn/algorithms-part1) 修了
- Database
  - [C 言語で SQLite のクローンを作るチュートリアル](https://ohbarye.hatenablog.jp/entry/2020/04/17/sqlite-clone-db-tutorial)
- Self note [https://scrapbox.io/ohbarye/](https://scrapbox.io/ohbarye/)
