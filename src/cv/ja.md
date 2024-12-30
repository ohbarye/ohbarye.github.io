---
tags: job-hunting
lang: ja
title: 'Masato Ohba (ohbarye) CV'
output:
  html_document:
    toc: yes
pagetitle: Masato Ohba (ohbarye) CV
balloon_message: Hi, I'm @ohbarye
---

最終更新日: 2024-12-30

English version: [https://ohbarye.github.io/en/cv/](https://ohbarye.github.io/en/cv/)

## 基本情報と連絡先

| key        | value                                                  |
| ---------- | ------------------------------------------------------ |
| Name       | Masato Ohba (大庭 直人)                                |
| ID         | `ohbarye`                                              |
| Email      | over.rye+jh [at] gmail.com                             |
| Entrypoint | [https://ohbarye.github.io](https://ohbarye.github.io) |

## 職務要約

RubyやGoを用いた決済・銀行システムにおける堅牢な開発から React による SPA/MPA の開発まで、フルサイクル開発の経験を持つ Software Engineer です。特に System of Record 領域におけるソフトウェア設計と、パフォーマンスやスケーラビリティを意識した設計・実装に強みがあります。OSS projects への積極的な貢献や技術登壇を通じて、エンジニアリングコミュニティへの還元も行っています。（See [Personal Projects](#personal-projects), [Public Output](#public-output))

また、エンジニア数が 20-60 名規模の組織における Engineering Manager を務め、チーム設計・プロジェクトマネジメント・採用活動・コーポレートブランディング・文化づくり・コミュニティ活動等々に関する実績と知見があります。

バッチ処理の冪等性から決済システムのデータ整合性まで、ミッションクリティカルな開発において必要とされる品質と堅牢性を担保しつつ、チームの技術的成長を促進できることが私の強みです。

## スキル

- **Programming Languages**: Ruby, TypeScript, Go
- **Frameworks & Libraries**: Ruby on Rails, React, React Admin
- **Tools & Technologies**: Docker, Git, SQL, REST API, OpenAPI, MySQL, PostgreSQL, MongoDB
- **Cloud Infrastructure & DevOps**: AWS, GitHub Actions, CircleCI, New Relic, Google BigQuery
- **Soft Skills**: Team Collaboration, Agile Methodologies, Engineering Management, Scrum

## 職務経歴

以下の成果の一部はブログや外部登壇を通じて詳しく説明しています。[プレゼンテーション](#プレゼンテーション)と[ブログ](#ブログ)もご参照ください。

### SmartBank, Inc.

| 期間 | ロール |
| --- | --- |
| Aug 2020 - Present | Senior Software Engineer |
| Oct 2023 - Present | Engineering Manager |

[SmartBank, Inc.](https://smartbank.co.jp/) は BtoC の Fintech company です。同社はプリペイドカードを発行するイシュアであり、カードでの決済と連動して支出管理を可視化・自動化する [B/43](https://b43.jp/) というプロダクトの開発・運用を行っています。

主要な成果:

- **サブスクリプションサービスの開発** (2022年10月 -) : 外部SaaSに依存せずサブスクリプションサービスをゼロから開発。[社内イベント](https://speakerdeck.com/ohbarye/behind-the-scenes-engineering-a-subscription-service)にて発表。
  - (2023年12月 - 2024年10月) 他金融機関からの支出データを取得する集計サービスを立ち上げ、サブスクリプション収益を増加。
- **銀行システムの開発** (2020年8月 -) : 出金、送金、目的別口座、ペア口座、支出管理など、多岐にわたる機能を開発。
  - (2021年11月 - 2022年6月) セキュアなカード決済のための3Dセキュア認証機能を開発。[Kaigi on Rails 2022](https://speakerdeck.com/ohbarye/balance-security-and-usability-in-the-field-of-3d-secure)にて発表。
  - (2020年8月 - 2021年4月) カードイシュアとして必要な業務を行う社内システムとして、本人確認(eKYC)システムおよびカード配送システムを開発。
- **開発者体験の改善** (2020年8月 -) : 社内開発者向けのツールやシステムを開発。
  - [Feature Toggles](https://martinfowler.com/articles/feature-toggles.html)を導入し、開発とリリースを分離。
  - APIサーバーを[Idempotency-Key Headers](https://brandur.org/fragments/idempotency-key-draft)に対応させ、多重リクエスト発生時もデータを保護できるよう堅牢化。
  - 開発生産性の向上に貢献。具体的には、CI/CDパイプラインの構築、デプロイフローの自動化、スキーマ/データマイグレーションフローの整備、ジョブキューイングシステムのDelayed JobからSQSへの移行などを実施。

### Quipper Limited

| 期間 | ロール |
| --- | --- |
| Aug 2015 - May 2020 | Senior Software Engineer |
| Jun 2017 - May 2020 | Engineering Manager |

[Quipper](https://www.quipper.com/)は BtoC, BtoB 両方の教育事業を営む企業です。日本国外には Quipper School, Quipper Video を、日本国内においては[スタディサプリ](https://studysapuri.jp/)の開発・運用を行っています。

主要な成果:

- **大規模コードクリーンアップ** (2020年3月) : プロダクション環境での障害ゼロで40万行のコード削除を主導し、Railsモデルを390から281に削減することで保守性を向上
- **React NativeからPWAへの移行** (2019年7月-9月) : 社内業務アプリケーションのプラットフォーム移行を主導。[JSConf 2019](https://speakerdeck.com/ohbarye/migration-from-react-native-to-pwa)にて成果を発表
- **決済システムの改善** : iOSアプリの自動更新サブスクリプション機能実装、A/Bテストを用いた決済手段の最適化。[iOSDC 2018](https://speakerdeck.com/ohbarye/rethink-in-app-purchase-on-subscription-services)、[Rails Developer Meetup 2018](https://speakerdeck.com/ohbarye/fact-based-decision-making-and-development-by-quipper)、[Regional Scrum Gathering Tokyo 2019](https://speakerdeck.com/ohbarye/proof-of-value-with-ab-testing)にて成果を発表
- **中学生向けコーチングサービス開発** (2018年8月-2019年3月) : 不確実性の高いプロジェクトを12名のチームを率いてローンチ。モブプログラミングや1on1を通じてチームの生産性を向上
- **登録フォームの刷新** (2018年3月) : レガシーシステムを刷新しつつ登録CVRを改善
- **採用・組織設計** (2016年7月-2020年3月) : 採用活動の計画と実行、構造化面接を設計、オンボーディングプロセス改善
  - [コーディングテスト設計](https://quipper.hatenablog.com/entry/2018/10/09/coding_test)、[スタディサプリMeetup #1の企画と開催](https://quipper.hatenablog.com/entry/2018/07/20/172946)。[効果的なオフボーディング](https://quipper.hatenablog.com/entry/2020/04/02/effective-offboarding)や[Working Out Loud](https://quipper.hatenablog.com/entry/2018/11/14/working-out-loud)などに関するブログ記事執筆

### SCSK Corporation

| 期間 | ロール |
| --- | --- |
| Apr 2012 - Aug 2015 | System Engineer |

[SCSK](https://www.scsk.jp/)は住友商事子会社の大手 SIer です。システムエンジニアとして不動産業界向けの業務システム開発に携わり、複雑な要件のデータモデル設計・帳票出力プログラムの作成・Web アプリケーションやバッチ処理の開発を通じてソフトウェア開発の基礎を学びました。

## Public Output

### OSS Activities

- [Pull requests list](https://github.com/pulls?q=is%3Apr+author%3Aohbarye+archived%3Afalse+-user%3Aohbarye+)
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

- 個人ブログ
  - Japanese: [https://ohbarye.hatenablog.jp/](https://ohbarye.hatenablog.jp/)
  - English: [https://dev.to/ohbarye](https://dev.to/ohbarye)
- 会社ブログ
  - SmartBank Blog: [https://blog.smartbank.co.jp/archive/author/ohbarye](https://blog.smartbank.co.jp/archive/author/ohbarye)
  - Quipper Blog: [https://quipper.hatenablog.com/archive/author/ohbarye](https://quipper.hatenablog.com/archive/author/ohbarye)

### Presentations

[https://speakerdeck.com/ohbarye](https://speakerdeck.com/ohbarye)に概ね集約されています。代表的なスライドをいくつか抜粋します。

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
  - 日本では母数の少ない Engineering Manager についての情報共有を目的としたコミュニティを立ち上げました。
- [EOF2019](https://eof2019.peatix.com/)
  - Role: Core Staff

## 学歴

- 慶應義塾大学 文学部 人文社会学科 西洋史学専攻 (2012 年卒業)

## 資格

- AtCoder
  - (2020年6月) アルゴリズム実技検定 初級
- IPA
  - (2014年6月) データベーススペシャリスト
  - (2012年12月) 応用情報処理技術者
  - (2012年6月) 基本情報処理技術者
- Others
  - (2010年12月) 貸金業務取扱主任者

## 興味 / 関心

2020 年まではソフトウェア工学の分野、特に事業会社の Web サービス開発のうちアプリケーションレイヤーの開発で求められる技術力を業務でも趣味でも伸ばしてきました。今後はコンピュータサイエンス全般やアルゴリズム、低レイヤーやミドルウェアの学習を通じてソフトウェアに関する理解を全般的に深めていきたいと考えています。

- 競技プログラミング
  - AtCoder 緑 [https://atcoder.jp/users/ohbarye](https://atcoder.jp/users/ohbarye)
- コンピュータアーキテクチャ
  - 『[コンピュータシステムの理論と実装](https://www.oreilly.co.jp/books/9784873117126/)』 (a.k.a. Nand to Tetris) の実践 [https://github.com/ohbarye/nand2tetris](https://github.com/ohbarye/nand2tetris)
    - アセンブラ、VM 変換器、コンパイラを OCaml と Ruby で実装
- データ構造とアルゴリズム
  - Coursera: [Princeton University Algorithms Part 1](https://www.coursera.org/learn/algorithms-part1) 修了
  - [『みんなのデータ構造』でデータ構造の基礎を学んだ](https://ohbarye.hatenablog.jp/entry/2020/05/10/open-data-structures)
  - [データ構造とアルゴリズムの基礎を 100 時間学習してみての所感](https://ohbarye.hatenablog.jp/entry/2020/05/22/learning-data-structures-and-algorithms-for-100-hours)
- データベース
  - [C 言語で SQLite のクローンを作るチュートリアル](https://ohbarye.hatenablog.jp/entry/2020/04/17/sqlite-clone-db-tutorial)
- 学習ノート [https://scrapbox.io/ohbarye/](https://scrapbox.io/ohbarye/)
