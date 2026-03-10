<script setup lang="ts">
import BookCard from "~/components/BookCard.vue";

useHead({
  title: 'Pimの書籍 - 島根大学ものづくり部 Pim',
  meta: [
    { hid: "og:type", property: "og:type", content: "article" },
    {
      hid: "og:title",
      property: "og:title",
      content: "Pimの書籍 - 島根大学ものづくり部 Pim",
    },
  ],
});

// NOTE: 島根県立図書館及び松江市立図書館のURLは島根県立図書館 横断検索から検索をかけるときれいなURLを取得できます。

const toMonthYear = (year: number, month: number): Date => {
  return new Date(
      year,
      month - 1 /* Because of index */,
      1,
      9, /* Because UTC to JST */
      0,
      0
  );
}

const genNdlRequest = (code: string) => {
  return {library: '国立国会図書館', ids: [ {site: '東京本館', requestCode: code}, {site: '関西館', requestCode: code}, ]};
}
</script>
<template>
  <div class="container">
    <ContentHeaderRow>
      <div class="col">
        <h1 class="mb-4">
          Pimの書籍
        </h1>
        <p class="mb-2">
          　弊部及び弊部の関係者の出版した書籍を紹介します。
          弊部で実際に取り扱っている大量の技術と説明資料をお楽しみください。
        </p>
        <p class="mb-0">
          　また、島根県立図書館及び松江市立図書館のURLがリンク切れになっている可能性がございます。
          もしページにアクセス出来ない場合はお問い合わせページからお知らせいただけますと幸いです。
        </p>
      </div>
    </ContentHeaderRow>
    <div class="row pt-2 pb-3" id="by-pim">
      <h2 class="mt-4 pb-5 text-center">Pim名義の書籍</h2>
      <BookCard
          id="202304-pim-notes"
          title="Pim Notes 2023.04"
          image-file="/img/books/202304-pim-notes.jpg.webp"
          :authors="['市川 太一', '則重 泰輝', '荒木 優和', '奥原 智史', '田中 豪志']"
          :date="toMonthYear(2023, 4)"
          :library-links="[
              {title: '国立国会図書館', url: 'https://ndlsearch.ndl.go.jp/books/R100000002-I033588994'},
              {title: '島根県立図書館', url: 'https://www2.library.pref.shimane.lg.jp/opac/switch-detail-iccap.do?bibid=1130824470'},
              {title: '松江市立図書館', url: 'https://www.lib-citymatsue.jp/opw/OPW/OPWSRCHTYPE.CSP?FROMFLG=1&BID=B10584377'},
          ]"
          :library-requests="[
              genNdlRequest('Y93-R1961'),
              {library: '島根県立図書館', ids: [ {site: '-', requestCode: '郷貸出/509/ｱ23/'}, {site: '-', requestCode: '/095/116/'} ]},
              {library: '松江市立図書館', ids: [ {site: '中央', requestCode: '509/ｼ'}, ]},
          ]"
      >
        <p class="card-text">　Pim初の部誌として、弊部のメンバーが行っている多種多様なものづくりを紹介しています。</p>
        <p class="card-text">　記事一覧</p>
        <ul>
          <li>島根大学ものづくり部 Pim とは？</li>
          <li>簡単！家にある物だけでものづくり！</li>
          <li>【令和最新版】5 インチフロッピーの救出</li>
          <li>家庭に監視社会インターネットを作る話</li>
          <li>数直線の遥か先</li>
          <li>ちょっと待って！そのものづくり、本当に技術や知識が必要？</li>
        </ul>
      </BookCard>
      <BookCard 
          id="202310-incident"
          title="夏休み合宿インシデントレポート"
          image-file="/img/books/202310-incident.jpg.webp"
          :authors="['荒木 優和', '田中 豪志']"
          :date="toMonthYear(2023, 10)"
          :library-links="[
              {title: '国立国会図書館', url: 'https://ndlsearch.ndl.go.jp/books/R100000002-I033588952'},
              {title: 'BOOTH', url: 'https://pim-shimane.booth.pm/items/5135254'},
              {title: '島根県立図書館', url: 'https://www2.library.pref.shimane.lg.jp/opac/switch-detail-iccap.do?bibid=1130824471'},
              {title: '松江市立図書館', url: 'https://www.lib-citymatsue.jp/opw/OPW/OPWSRCHTYPE.CSP?FROMFLG=1&BID=B10583451'},
          ]"
          :library-requests="[
              genNdlRequest('Y93-R1963'),
              {library: '島根県立図書館', ids: [ {site: '-', requestCode: '郷貸出/509/ﾅ23/'}, {site: '-', requestCode: '/095/115/'} ]},
              {library: '松江市立図書館', ids: [ {site: '中央', requestCode: '509/ｼ'}, ]},
          ]"
      >
        <p class="card-text">　島根大学ものづくり部Pimの夏合宿2023で起こったインシデントのうち、今後改善できる見込みのあるものを選別して公開しています。</p>
        <p class="card-text">　レポート一覧</p>
        <ul>
          <li>「危機管理」睡眠デットロック事件</li>
          <li>PoE非対応ルータ持参事件</li>
          <li>Nintendo Switch不正Joy-Con接続事件</li>
          <li>カラオケ音漏れ睡眠妨害事件</li>
          <li>布団事前準備不足</li>
          <li>常備トイレットペーパー状態確認ミス</li>
          <li>夜散歩置き去り事件</li>
          <li>テニスボール紛失インシデント</li>
          <li>食品過剰インシデント</li>
          <li>自宅・自転車 鍵紛失インシデント</li>
        </ul>
      </BookCard>
      <BookCard
          id="202412-pim-notes"
          title="Pim Notes 2024.12"
          image-file="/img/books/202412-pim-notes.jpg.webp"
          :authors="['みかど', 'しいたけ', '哲', '豊嶋 拓斗', '市川 太一', '則重 泰輝', '梶岡 響', '荒木 優和']"
          :date="toMonthYear(2024, 12)"
          :library-links="[
              {title: 'BOOTH', url: 'https://pim-shimane.booth.pm/items/6447135'},
              {title: '島根県立図書館', url: 'https://www2.library.pref.shimane.lg.jp/opac/switch-detail-iccap.do?bibid=1130929775'},
          ]"
          :library-requests="[
              {library: '島根県立図書館', ids: [ {site: '-', requestCode: '郷貸出/509/ﾋﾟ/24'}, {site: '-', requestCode: '/095/116/24'}]},
          ]"
      >
        <p class="card-text">　前作のPim Notesより内容をより充実させ、90ページもの特大ボリュームで部員の活動を紹介しています。</p>
        <p class="card-text">　記事一覧</p>
        <ul>
          <li>PimHack Game班の制作物紹介</li>
          <li>プロジェクト・ハイスピードコールドブリュー</li>
          <li>PCカバン設計のすゝめ</li>
          <li>ハッカソンイベント「Open Hack U 2024 TOKYO VOL.2」に参加した話</li>
          <li>システム管理者のお仕事紹介</li>
          <li>魔法少女コアβ(仮)</li>
          <li>分解入門</li>
          <li>計算過程が見える電卓アプリ</li>
          <li>ぼくのかんがえた さいきょうの 誤家庭要塞ネットワーク</li>
          <li>学生が持ち歩くキーボード ErgoGridGo</li>
        </ul>
      </BookCard>
      <BookCard
          id="202512-pim-notes"
          title="Pim Notes 2025.12"
          image-file="/img/books/202512-pim-notes.jpg.webp"
          :authors="['荒木優和', 'いずもん', 'きぬこたつ', 'しいたけ', 'てつ', '藤村健吾', 'mikado']"
          :date="toMonthYear(2024, 12)"
          :library-links="[
              {title: '島根県立図書館', url: 'https://www2.library.pref.shimane.lg.jp/opac/switch-detail-iccap.do?bibid=1130929776'},
          ]"
          :library-requests="[
              {library: '島根県立図書館', ids: [ {site: '-', requestCode: '郷貸出/509/ﾋﾟ/25'}, {site: '-', requestCode: '/095/116/25'}]}
          ]"
      >
        <p class="card-text">　OBや実際に作ったものを販売しているメンバーの記事が入り、より実務的な内容を含む内容となりました。</p>
        <p class="card-text">　記事一覧</p>
        <ul>
          <li>弊部でのMattermost運用</li>
          <li>海外通販のすゝめ</li>
          <li>自作アナログゲームの着想から設計について</li>
          <li>3Dプリント部品なし! 板材だけで作る3Dキーボードの設計</li>
          <li>組版について</li>
          <li>PLCを使ってみよう! Arduinoで始めるPLC</li>
          <li>【自宅完結】プリント基板を製造してみる</li>
        </ul>
      </BookCard>
    </div>
    <div class="row pb-5" id="by-personal">
      <div class="mt-4 pb-5 text-center">
        <h2>Pimメンバー・OBの書籍</h2>
        <small>弊部での手続き完了順に掲載しています</small>
      </div>
      <BookCard
          id="k-fujimura-kirakira-ruby-9784822286392"
          title="小学生から楽しむ きらきらRubyプログラミング"
          publisher="日経BP"
          isbn13="978-4-8222-8639-2"
          image-file="/img/books/k-fujimura-kirakira-ruby-9784822286392.jpg.webp"
          :authors="['高尾宏治', '藤村健吾', 'まつもとゆきひろ (監修)']"
          :date="toMonthYear(2020, 5)"
          :library-links="[
              {title: '国立国会図書館', url: 'https://ndlsearch.ndl.go.jp/books/R100000002-I030398797'},
              {title: 'Amazon.co.jp (Kindle)', url: 'https://www.amazon.co.jp/dp/B088TBS9D3'},
              {title: 'Amazon.co.jp (単行本)', url: 'https://www.amazon.co.jp/dp/4822286398'},
              {title: '島根県立図書館', url: 'https://www2.library.pref.shimane.lg.jp/opac/switch-detail-iccap.do?bibid=1130455679'},
          ]"
          :library-requests="[
              {library: '国立国会図書館', ids: [ {site: '国際子ども図書館', requestCode: 'Y11-N20-M291'}, ]},
              {library: '島根県立図書館', ids: [ {site: '-', requestCode: '/007/ﾀ20/'} ]},
          ]"
      >
        <p class="card-text">　小学校で行われているプログラミング教育対応のプログラミング教材です。Smalrubyだけでなく、Scrachでの指導にも完全対応しています。</p>
        <p class="card-text">　学習要領に対応した授業指導案つき。本書の内容をなぞれば学校教育で使えます。また、おうちでお子様にプログラミングをしたい方にもおすすめです。</p>
        <p class="card-text">　目次 (学習指導案集部を除く)</p>
        <ul>
          <li>今日から君はプログラマー！</li>
          <li>音楽を作ろう！</li>
          <li>なぞなぞゲームをつくろう！</li>
          <li>シューティングゲームをつくろう！</li>
          <li>幾何学模様をかいてみよう！</li>
          <li>マイクロビットを使ってみよう！</li>
          <li>Rubyを作った人からのメッセージ</li>
        </ul>
      </BookCard>
      <BookCard
          id="happysato-t17-happys1-openscad"
          title="OSSコードベースCAD「OpenSCAD」を使って軽トラキャンピングカーを作ってみよう!"
          image-file="/logo/bimi.svg"
          :authors="['ハッピー佐藤']"
          :library-links="[
          ]"
          :library-requests="[
          ]"
      >
        <p class="card-text">　リモートワークが主流になった今、軽トラにキャンピングカーの機能を持たせてどこでも作業出来るようにするプロジェクトの記録です。</p>
      </BookCard>
      <BookCard
          id="happysato-t18-happys2-store"
          title="物が多い人のための最小単位法収納法　-箱とデータ管理でつくる、散らからない暮らし-"
          image-file="/logo/bimi.svg"
          :authors="['ハッピー佐藤']"
          :library-links="[
          ]"
          :library-requests="[
          ]"
      >
        <p class="card-text">　際限なく増え続ける物品をうまいこと収納するシステムに関する書籍です。</p>
        <p class="card-text">　目次</p>
        <ul>
          <li>片付けが不得意な自分と分析</li>
          <li>最小単位法とは何か</li>
          <li>実践ステップ</li>
          <li>タグ作り</li>
          <li>データベースへの適用</li>
          <li>インターフェースの構築</li>
        </ul>
      </BookCard>
      <div>
        <small>書影データは著者である弊部部員およびOBから提供されたものを利用しています。</small>
      </div>
    </div>
  </div>
</template>
