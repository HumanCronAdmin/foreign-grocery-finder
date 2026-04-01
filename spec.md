# サービス仕様書: Foreign Grocery Finder

## 基本情報
- **サービス名:** Foreign Grocery Finder
- **一言で:** 日本在住外国人の「この食材どこで買える？」を解決する逆引き検索ツール
- **対象ニーズ:** research/2026-03-31_foreign-grocery-finder/report.txt
- **種類:** 静的サイト
- **デプロイ先:** GitHub Pages

---

## 使うコード

### メインリポジトリ
- **URL:** 自作（該当リポなし）
- **選んだ理由:** 既存リポは全て地図ベースのストアロケーター。本ツールは食材→チェーン店の逆引き検索で地図不要。HTML+Fuse.js+Tailwindで実装可能
- **ライセンス:** MIT（自作）

### GitHub探索結果
詳細: `projects/foreign-grocery-finder/github_search.txt`

**判断:** 地図不要の逆引き検索には既存リポが合わない。Fuse.jsファジー検索の静的サイトを自作

### 使用ライブラリ（CDN）
- **Fuse.js** — ファジー検索（typo許容）
- **Tailwind CSS** — モバイルファーストUI

---

## 核となる機能（1つだけ）

**食材名を入力 → 買えるチェーン店が表示される**

---

## データ設計

データソース・構造・MVP食材リストの詳細: `projects/foreign-grocery-finder/data_design.txt`

### 概要
- 全国チェーン6店（業務スーパー/カルディ/コストコ/成城石井/ドンキ/Amazon）の公式サイトから収集
- 初期30〜50品目（Reddit頻出+Interac 46品目リストから選定）
- **ダミーデータ禁止。公式サイトの実在情報のみ**

---

## UI設計

### レイアウト（モバイルファースト）
```
┌─────────────────────────┐
│  Foreign Grocery        │
│  Finder Japan           │
│  ┌───────────────────┐  │
│  │ Search ingredient │  │
│  └───────────────────┘  │
│  Popular: Chickpeas |   │
│  Cheese | Coconut Milk  │
│  ┌───────────────────┐  │
│  │ Chickpeas         │  │
│  │  Gyomu Super ¥100 │  │
│  │  Kaldi (organic)  │  │
│  │  Amazon →         │  │
│  └───────────────────┘  │
│  Categories: Canned |   │
│  Dairy | Spices | ...   │
│  [Ko-fi] [BMC]          │
└─────────────────────────┘
```

### インタラクション
1. 検索ボックスにタイプ → Fuse.jsリアルタイム絞り込み（typo許容）
2. 人気タグタップ → 即フィルタ
3. カテゴリボタンで絞り込み
4. 結果タップで店舗リスト展開
5. Amazon/iHerbリンクはアフィリエイト付き

### レスポンシブ
- 480px以下：1カラム、タップ44px以上
- 768px以上：2カラムグリッド

---

## 変更箇所（buildへの指示）

### プロジェクト構成
```
projects/foreign-grocery-finder/
├── spec.md
├── index.html       ← メイン（HTML200行制限）
├── js/app.js        ← 検索ロジック+UI生成
├── js/data.js       ← items配列（動的生成用）
├── css/style.css    ← Tailwind補助のカスタムスタイル
└── data/items.json  ← 食材データ
```

### 実装
| ファイル | 内容 |
|---|---|
| `index.html` | 検索ボックス+結果コンテナ+カテゴリボタン。Tailwind CDN+Fuse.js CDN |
| `js/app.js` | Fuse.js初期化、検索イベント、カテゴリフィルタ、結果レンダリング |
| `js/data.js` | items配列。items.jsonから生成 or 直接記述 |
| `css/style.css` | Tailwindで賄えないスタイルのみ |

### データ収集
公式サイトから食材データ収集（30〜50品目）。詳細は`data_design.txt`参照

### デプロイ
```bash
cd projects/foreign-grocery-finder
git init && git remote add origin https://github.com/humancronadmin/foreign-grocery-finder.git
git add -A && git commit -m "Initial release: Foreign Grocery Finder"
git push -u origin main
# GitHub Settings → Pages → Source: main branch
```

---

## 収益モデル
- **初期:** 無料公開（ユーザー獲得優先）
- **収益化:** Amazon Japanアソシエイト + iHerbアフィリエイト
- **具体的:** 各食材の「Buy on Amazon」リンクにアフィリエイトID付与
- **寄付:** Ko-fi + Buy Me a Coffee（既存アカウント流用）

---

## publish向け情報
- **サービスURL:** https://humancronadmin.github.io/foreign-grocery-finder/
- **ターゲット:** 日本在住外国人（自炊派）
- **訴求:** "Stop googling where to find chickpeas in Japan. Search 50+ ingredients instantly."
- **投稿先:** r/japanlife, r/movingtojapan, r/JapanFinance
- **note切り口:** 「外国人が日本で困る食材問題をツール化した話」
- **SEO:** 既存8サービスから相互リンク。将来は食材個別ページでロングテール

<!-- APPROVED -->
