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

Web backend を強みの中心に置きつつ、自社サービスとクライアントワーク両方のフルサイクル開発の経験があります。適時コミュニケーションを取りつつ行う要求・要件定義を始めとし、チームでの開発から運用までの全体のリードを担うことができます。

登録導線やリテンション施策などの System of Engagement 領域、リッチな体験が求められるサービスの Web frontend においては React による SPA, MPA の開発を行なってきました。

決済や銀行システムなど System of Record 領域において求められる複雑なビジネスロジックについても、質・速度・堅牢さを意識した開発が可能です。

また、エンジニア数が 20-60 名規模の組織における Engineering Manager を務め、チーム設計・プロジェクトマネジメント・採用活動・コーポレートブランディング・文化づくり・コミュニティ活動等々に関する実績と知見があります。

## スキル

- **Programming Languages**: Ruby, TypeScript, Go
- **Frameworks & Libraries**: Ruby on Rails, React, React Admin
- **Tools & Technologies**: Docker, Git, SQL, REST API, OpenAPI, MySQL, PostgreSQL, MongoDB
- **Cloud Infrastructure & DevOps**: AWS, GitHub Actions, CircleCI, New Relic, Google BigQuery
- **Soft Skills**: Team Collaboration, Agile Methodologies, Engineering Management, Scrum

### 長所 / 強み

#### 運用、パフォーマンスを意識した設計・実装

ビジネスの要求を一時的に満たすだけでなく、パフォーマンス・計算量・将来にわたるデータ増加を意識した設計や実装の経験があります。加えて、運用中に生じた問題についてのパフォーマンスチューニングを行なってきました。

バッチの冪等性・リトライ処理。決済におけるデータの整合性。開発した機能がどのように運用されるか。これらを意識した設計・開発・レビューに自信があります。

#### OSS を活用、改善する技術力

現代においては特筆すべきことではありませんが、業務においては OSS を利用しています。技術選定の際には利便性やトレンドの最大瞬間風速だけでなくチームとして feasible な技術かどうか？を中心に検討し、並んで持続性や disposability を検討します。チームの生産性を優先した結果として保守的な選択をすることが多いです。製品の依存するライブラリ等については dependabot のような SaaS を活用しつつ dependencies の定期的なアップグレードも行なってきました。

また、開発するプロダクトと OSS は地続きであると考えています。必要な機能がなければ自ら開発したりパッチを送ったり、bug や regression に気づいたら直す振る舞いを心がけています。（後述する[Personal Projects](#personal-projects)欄、[Public Output](#public-output)欄にても OSS contribution に関する内容を記述しています）

#### チーム志向

チームとして成果を上げることに強い関心があり、協働が生まれる仕組みづくりや文化の醸成を行ってきました。また、マネジャーとしてチームメンバー間の信頼関係の構築・強み・弱み・指向性・事業特性などの変数を考慮してチーム編成を決定した経験もあります。

プロセスに問題があったとき、「ゴールを明確にする」「説明責任を果たす」「オーバーワークを防ぐ」ためにスクラムを導入し、スクラムマスターの役割を担ったこともあります。

#### -60 名規模のエンジニア組織における課題解決

エンジニア数が 20-60 名規模の組織における Engineering Manager として、組織設計・チーム設計・採用活動・教育・オンボーディング・文化づくり・コミュニティ活動等々に関する実績と知見があります。

チーム・組織規模が大きくなる中で生じる課題はその組織において初めて経験される類のものが多く、明確に真因の特定と優先度判断とアサインを行わないと放置され歪みが拡大することがしばしばあります。組織課題のそうした特性を知ったうえで対応してきた経験は、自身の役割がメンバーであれマネジャーであれ、同規模 ± 数十名のチーム・組織でも活かせると考えます。

#### アウトプット志向

趣味や業務を通じて調べたこと・学んだことをまとめてアウトプットすることを心がけています。アウトプットを意識した思索や試行を繰り返すことによって抽象化・共通化のスキルを磨けるだけでなく、課題の発見から解決までの総合力を高められると考えています。

登壇発表・プレゼンテーションの類は得意ではありませんが、その機会を通じて学ぶことや得られるフィードバックがあるため、可能な範囲で挑戦しています。実績については[Public Output](#public-output)欄をご参照ください。

## 職務経歴

### SmartBank, Inc.

- Aug 2020 - Present: Senior Software Engineer
- Oct 2023 - Present: Engineering Manager

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

- Aug 2015 - May 2020: Software Engineer
- Jun 2017 - May 2020: Engineering Manager

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

- Apr 2012 - Aug 2015: System Engineer

[SCSK](https://www.scsk.jp/)は住友商事子会社の大手 SIer です。システムエンジニアとして不動産業界向けの業務システム開発に携わり、複雑な要件のデータモデル設計・帳票出力プログラムの作成・Web アプリケーションやバッチ処理の開発を通じてソフトウェア開発の基礎を学びました。

## Public Output

[https://lapras.com/public/AVL0ALR](https://lapras.com/public/AVL0ALR) に概ね集約されています。

### ブログ

- 個人 (日本語) [https://ohbarye.hatenablog.jp/](https://ohbarye.hatenablog.jp/)
  - [人気順の記事一覧](https://b.hatena.ne.jp/entrylist?url=https%3A%2F%2Fohbarye.hatenablog.jp%2F&sort=count)
- 個人 (英語) [https://dev.to/ohbarye](https://dev.to/ohbarye)

#### 企業ブログへの寄稿


- [『B/43 Tech Talk 〜 Fintech×サブスクリプションサービス立ち上げの裏側〜』を開催します](https://blog.smartbank.co.jp/entry/2023/07/21/b43-plus-inside-tech-talk)
- [reviewdog x Custom FormatterでRuboCopの自動修正を提案させるようにしました](https://blog.smartbank.co.jp/entry/2023/06/29/reviewdog-action-rubocop-suggestion-feature)
- [ActionMailer::Baseのサブクラスで値を変更すると全てのMailerに反映されてしまう設定がある](https://blog.smartbank.co.jp/entry/2023/06/05/action-mailer-config-pitfall)
- [データベースのメタデータ整備をRails generatorで楽にする工夫](https://blog.smartbank.co.jp/entry/2023/04/04/rails-generator-for-metadata)
- [GitHub Appを使ってDependabotが作るpull requestを自動マージさせる](https://blog.smartbank.co.jp/entry/2023/02/16/dependabot-auto-merge-with-github-app)
- [3Dセキュア入門 -B/43の3Dセキュア開発・運用の裏側-](https://blog.smartbank.co.jp/entry/2022/11/11/3d-secure)
- [CRAからViteへ移行して190倍高速なdev server起動を得る](https://blog.smartbank.co.jp/entry/2022/04/25/create-react-app-to-vite)
- [TracePoint 活用事例: Sentry のローカル変数キャプチャ機能](https://blog.smartbank.co.jp/entry/2021/11/25/sentry-ruby-meets-tracepoint)
- [Idempotency-Key Header を使ったリトライと、オンラインイベントの"Kaigi 感"](https://blog.smartbank.co.jp/entry/2021/10/26/safe-retry-with-idempotency-key-header)
- [新メンバーが多い大型プロジェクトでの不確実性との戦い方](https://quipper.hatenablog.com/entry/2019/06/27/how-to-defeat-uncertainty)
- [Working Out Loud 大声作業（しなさい）、チームメンバー同士でのトレーニング文化の醸成](https://quipper.hatenablog.com/entry/2018/11/14/working-out-loud)
- [より良い面接を実現するために "Quipper 採用面接ガイド" を公開しました](https://quipper.hatenablog.com/entry/2018/09/01/interview-guide)
- [カジュアル面談への扉](https://quipper.hatenablog.com/entry/2020/02/05/casual-interview-in-quipper)
- [プロダクトの「負債」を「機能」と呼び直す 〜A/B テストを用いた"価値"の定量化〜](https://quipper.hatenablog.com/entry/2018/05/31/080000)
- [退職の作法、あるいはオフボーディング実践入門](https://quipper.hatenablog.com/entry/2020/04/02/effective-offboarding)
- [グローバルサービスでのタイムゾーンとの向き合い方](https://quipper.hatenablog.com/entry/2016/12/05/090000)

### プレゼンテーション

[https://speakerdeck.com/ohbarye](https://speakerdeck.com/ohbarye)に概ね集約されています。いくつか抜粋します。

- [サブスクリプションサービスをつくる時にエンジニアが考えること](https://speakerdeck.com/ohbarye/behind-the-scenes-engineering-a-subscription-service) (B/43 Techtalk)
- [RuboCop Custom Formatter for Reviewdog Diagnostic Format](https://speakerdeck.com/ohbarye/rubocop-custom-formatter-for-reviewdog-diagnostic-format) (Gotanda.rb#53)
- [DB外の副作用をトランザクションから分離しよう](https://speakerdeck.com/ohbarye/isolate-out-of-db-side-effects-from-transactions) (Gotanda.rb#52)
- [Balance Security and Usability in the Field of 3D Secure](https://speakerdeck.com/ohbarye/balance-security-and-usability-in-the-field-of-3d-secure) (Kaigi on Rails 2022)
- [Safe Retry with Idempotency-Key Header](https://speakerdeck.com/ohbarye/safe-retry-with-idempotency-key-header) (Kaigi on Rails 2021)
- [Migration from React Native to PWA](https://speakerdeck.com/ohbarye/migration-from-react-native-to-pwa) (JSConf JP 2019)
- [Lightning Talk Session Organizer](https://event.shoeisha.jp/devsumi/20190702/session/2091/) (Developers Summit 2019 Summer)
- [プロダクトの「負債」を「機能」と呼び直すために](https://speakerdeck.com/ohbarye/proof-of-value-with-ab-testing) (Regional Scrum Gathering Tokyo 2019)
- [貢献できる OSS の見つけ方 -完結編-](https://speakerdeck.com/ohbarye/how-to-find-good-first-issues-final) (NodeFest JP 2018)
- [決済のトランザクション管理術](https://speakerdeck.com/ohbarye/how-to-manage-payment-transaction) (Meguro.rb#19)
- [サブスクリプションサービスにおける In-App Purchase 再考](https://speakerdeck.com/ohbarye/rethink-in-app-purchase-on-subscription-services) (iOSDC Japan 2018)
- [Quipper が実践する 定量データに基づく意思決定と開発](https://speakerdeck.com/ohbarye/fact-based-decision-making-and-development-by-quipper) (Rails developer Meetup 2018 Day 3 Extreme)
- [エンジニアも気にしたい色のアクセシビリティ](https://speakerdeck.com/ohbarye/color-accessibility-that-engineers-should-care) (Roppongi.js#3)
- [フロントエンドのレベル上げ](https://speakerdeck.com/ohbarye/level-up-front-end-skills-for-rails-developer) (Meguro.rb#15)

### OSS 活動

- Pull requests to OSS ([pull requests 一覧](https://github.com/pulls?q=is%3Apr+author%3Aohbarye+archived%3Afalse+-user%3Aohbarye+))
  - AppStore の In-App purchase 用 API クライアント gem `venice` が Auto-Renewable (自動更新) に対応していなかったのでその機能を自ら開発した[pull request](https://github.com/nomad/venice/pull/30)
  - New Relic Ruby agent の gem `newrelic_rpm` が grape v1.2.0+ に対応していなかったので対応した[pull request](https://github.com/newrelic/rpm/pull/293)
  - その他 Node.js, yarn, Ruby などのメジャー OSS にもわずかながらパッチを送った経験あり
- Tools
  - [goofi](https://github.com/ohbarye/goofi)
  - [review-waiting-list-bot](https://github.com/ohbarye/review-waiting-list-bot)
  - [kpt-bot](https://github.com/ohbarye/kpt-bot)
  - [markdown-server](https://github.com/ohbarye/markdown-server)
- [公開している gems](https://rubygems.org/profiles/ohbarye)
- [公開している npm packages](https://www.npmjs.com/-ohbarye)

### コミュニティ活動

- [Engineering Manager Meetup](https://engineering-manager-meetup.connpass.com/)
  - 役割: オーガナイザー
  - 日本ではいまだ母数の少ない Engineering Manager という position についての情報共有を目的としたコミュニティです
  - 述べ 500 人以上が参加しました
  - 約 1.5 年にわたり独力で運営し、2020 年 4 月よりコミュニティでの運用にシフトしました
- [EOF2019](https://eof2019.peatix.com/)
  - 役割: コアメンバー
  - 日本ではあまり例のない「エンジニアリングマネジメント」をテーマに据えたフェスティバル
  - OST セッションの開催を担当
- Meguro.rb
  - 役割: メンバー、ホスト
  - 地域 Ruby コミュニティの 1 つである Meguro.rb の運営スタッフとして、イベント開催のホストを 2 度行いました

### Personal Projects

趣味の開発や、学習の過程での成果物です。

#### Goofi

OSS への貢献をより簡便にするためのツールです。OSS 活動を始めたい初心者にとって最大の壁が「貢献対象を探すこと」だと考え、コントリビューションが推奨される repository と issue をリストアップする Web サービス[Goofi](https://goofi.now.sh/)を作りました。

Nodefest 2018 では[同サービスに関する発表](https://speakerdeck.com/ohbarye/how-to-find-good-first-issues-final)を行いました。

2020 年 1 月に[GitHub が公式の類似機能を公開した](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/)ので役目を終えそうですが、課題設定が正しかったことが追認された心持ちです。

| 時期     | Repository                                                           | 利用技術、ツール                                                                                    |
| -------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 2020.08- | [https://github.com/ohbarye/goofi](https://github.com/ohbarye/goofi) | Node.js 13.x, TypeScript 3.8, Next.js 9.1, GraphQL (client), Now.sh v1-2 (現 Vercel), GitHub API v4 |

#### React Use Kana

漢字を入力するとふりがなが自動入力されるフォームを作成するためのライブラリです。jQuery で同機能を実現するものや、React の古めのバージョンに対応する類似ライブラリはありましたが、React hooks を利用したライブラリは見つからなかったため自作しました。

| 時期 | Repository                                                                             | 利用技術、ツール             |
| ---- | -------------------------------------------------------------------------------------- | ---------------------------- |
| 2019 | [https://github.com/ohbarye/react-use-kana](https://github.com/ohbarye/react-use-kana) | React 16.9, TypeScript 3.8.3 |

#### String Pixelater

文字を N \* N dots の 2 次元配列に変換するライブラリです。当時[Processing](https://processing.org/)にハマっており、Generative Art を作る過程で実装しました。

| 時期 | Repository                                                                                 | 利用技術、ツール              |
| ---- | ------------------------------------------------------------------------------------------ | ----------------------------- |
| 2018 | [https://github.com/ohbarye/string-pixelater](https://github.com/ohbarye/string-pixelater) | TypeScript 3.6.4, rollup 1.23 |

#### Review bot

チーム開発でのレビューを促進させる Slack bot です。
指定した条件にマッチする pull requests 一覧を Slack に投稿します。

2019 年 6 月に GitHub が買収した[Pull Panda](https://pullpanda.com/)に類似していますが商用で有料だったためか、この bot を fork して利用していただける企業が数社ありました。

| 時期     | Repository                                                                                               | 利用技術、ツール                                                 |
| -------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 2017.08- | [https://github.com/ohbarye/review-waiting-list-bot](https://github.com/ohbarye/review-waiting-list-bot) | Node.js 8.x, GraphQL (client) Slack API, GitHub API v3-4, Heroku |

#### Automaildoc

RSpec によるテスト実行時にメール文面をプレビューできる HTML を自動生成するライブラリです。

| 時期 | Repository                                                                       | 利用技術、ツール  |
| ---- | -------------------------------------------------------------------------------- | ----------------- |
| 2017 | [https://github.com/ohbarye/automaildoc](https://github.com/ohbarye/automaildoc) | Ruby 2.4, RSpec 3 |

#### Markdown Server

Markdown で記述された文書を HTML で配信する Web サーバを簡易に構築できるライブラリです。Python の学習のために自作しました。

| 時期 | Repository                                                                               | 利用技術、ツール        |
| ---- | ---------------------------------------------------------------------------------------- | ----------------------- |
| 2015 | [https://github.com/ohbarye/markdown-server](https://github.com/ohbarye/markdown-server) | Python 3.7, bottle 0.12 |

## 学歴

- 慶應義塾大学 文学部 人文社会学科 西洋史学専攻 (2012 年卒業)

## 資格

- AtCoder
  - (2020.06) アルゴリズム実技検定 初級
- IPA
  - (2014.06) データベーススペシャリスト
  - (2012.12) 応用情報処理技術者
  - (2012.06) 基本情報処理技術者
- Others
  - (2010.12) 貸金業務取扱主任者

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
