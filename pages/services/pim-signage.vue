<script setup lang="ts">
useHead({
  meta: [
    { hid: 'og:type', property: 'og:type', content: 'article' },
    { hid: 'og:url', property: 'og:url', content: 'https://www.pim.gr.jp/services/pim-signage/' },
    { hid: 'og:title', property: 'og:title', content: 'Pim サイネージサービス - 島根大学ものづくり部 Pim' },
    { hid: 'og:image', property: 'og:image', content: 'https://www.pim.gr.jp/img/services/pim-signage/ad202403-1.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
})
</script>

<template>
  <Head>
    <Title>Pim サイネージ - 島根大学ものづくり部 Pim</Title>
   </Head>
  <div class="alert alert-info mb-0" role="alert">
    本サービスは学内の部・サークル活動のみを対象としています。
    学外の方は、<a href="https://www.ds.shimane-u.ac.jp/company/" class="alert-link" target="_blank">数理・データサイエンス教育研究センター</a>の提供するサービスをご利用ください。
  </div>
  <div class="container">
    <ContentHeaderRowGradient>
      <div class="col">
        <h1 class="mb-4">
          <img src="/logo/pimlogo-nosmn.svg" alt="Pim" height="40" /><br />
          <span>サイネージ</span>
          <span class="badge rounded-pill text-bg-primary">試験運用</span>
        </h1>
        <p class="mb-0">公認・非公認は問いません。実習室の大型ディスプレイで皆様の活動を紹介しませんか？</p>
        <div class="mt-4">
          <router-link class="btn btn-outline-primary" to="/contacts" role="button">お問い合わせ</router-link>
        </div>
      </div>
    </ContentHeaderRowGradient>
    <!--<div class="row text-center pt-3">
      <h2>皆様の声</h2>
    </div>
    <div class="row pt-4">
      <FeatureCardGridCard>
        <div class="card-body">
          <FeatureCardGridCardEmoji>⚡️</FeatureCardGridCardEmoji>
          <h5 class="card-title">無線通信技術部 様</h5>
          <p class="card-text">自分だけの新たなデバイスを作り、より豊かで快適な生活を送りませんか？</p>
        </div>
      </FeatureCardGridCard>
    </div>-->
    <div class="row pt-4 mt-4 pb-5 border-bottom">
      <div class="col-12 col-lg-5">
        <h2>実際の掲載例</h2>
        <p>
          　画像のような表示になります。
          掲載される画像は、部・サークルの活動内容や勧誘活動に合わせて、部・サークルの皆様で作成いただくことができます。
        </p>
      </div>
      <div class="col-12 col-lg-7">
        <img src="/img/services/pim-signage/board1.jpg" alt="実際の掲載例" width="100%">
      </div>
    </div>
    <div class="row text-center pt-3 mt-3">
      <h2>プラン</h2>
    </div>
    <div class="row mt-3">
      <FeatureCardGridCard>
        <div class="card-body">
          <FeatureCardGridCardEmoji>⚡️</FeatureCardGridCardEmoji>
          <h5 class="card-title">前期のみ</h5>
          <p class="card-text">
            最も部・サークル活動への流入が多い前期のみ掲載するプランです。
            部・サークル探しが活発な前期のみ掲載する形になる為、通年で掲載するよりも費用を抑えた勧誘活動が可能です。
          </p>
        </div>
      </FeatureCardGridCard>
      <FeatureCardGridCard>
        <div class="card-body">
          <FeatureCardGridCardEmoji>🔭</FeatureCardGridCardEmoji>
          <h5 class="card-title">後期のみ</h5>
          <p class="card-text">
            日頃目にする広告により、部・サークルの認知度を上げることを目的とした、後期のみのプランです。
            前期よりも費用を抑えて、部・サークルのアウトリーチ活動が可能です。
          </p>
        </div>
      </FeatureCardGridCard>
      <FeatureCardGridCard>
        <div class="card-body">
          <FeatureCardGridCardEmoji>🌟</FeatureCardGridCardEmoji>
          <h5 class="card-title">通年</h5>
          <p class="card-text">
            1年を通して部・サークルの活動を広く知ってもらうためのプランです。
            常時掲載されるため、入学シーズンでは勧誘活動として機能します。
            それ以外のシーズンでも、部・サークルの認知度を上げることができます。
          </p>
        </div>
      </FeatureCardGridCard>
    </div>
    <div class="row text-center mt-5 pt-5 mb-3 border-top">
      <h2>コンテンツ作成サービス</h2>
    </div>
    <div class="row pt-4">
      <FeatureCardGridCard>
        <div class="card-body">
          <FeatureCardGridCardEmoji>📁</FeatureCardGridCardEmoji>
          <h5 class="card-title">持ち込み</h5>
          <p class="card-text">
            ご自身で作成した画像や動画を持ち込んでいただくプランです。
            画像や動画のフォーマットについては、<a href="#tech-info">技術仕様</a>をご確認ください。
          </p>
        </div>
      </FeatureCardGridCard>
      <FeatureCardGridCard>
        <div class="card-body">
          <FeatureCardGridCardEmoji>🤖</FeatureCardGridCardEmoji>
          <h5 class="card-title">簡易生成</h5>
          <p class="card-text">
            任意の写真1枚とキャッチ文章、ホームページなどの任意のリンクをお伝えいただくことで、弊部で簡易的なコンテンツを作成いたします。
          </p>
          <p class="card-text">
            1枚当たり500円
          </p>
        </div>
      </FeatureCardGridCard>
      <FeatureCardGridCard>
        <div class="card-body">
          <FeatureCardGridCardEmoji>👤</FeatureCardGridCardEmoji>
          <h5 class="card-title">デザイナー依頼制作</h5>
          <p class="card-text">
            素材を基に、弊部でデザイナーに依頼し、コンテンツを作成いたします。
          </p>
          <p class="card-text">
            費用は別途お見積りいたします。
          </p>
        </div>
      </FeatureCardGridCard>
    </div>
    <div class="row mt-5 pt-5 mb-5 border-top">
        <div class="col text-center">
            <h2>費用について</h2>
            <p>
                試験プロジェクトのため、2024年度前期の掲載費は無償になります。
            </p>
        </div>
    </div>
    <div class="row mt-5 pt-5 mb-5 border-top">
      <div class="col text-center">
        <h2>さあ、はじめましょう。</h2>
        <p>
            現在、2024年度前期の掲載サークルを募集しています。
            2024年度前期は試験運用のため掲載費は無償になります。
        </p>
        <div class="mt-4">
          <router-link class="btn btn-outline-primary" to="/contacts" role="button">お問い合わせ</router-link>
        </div>
      </div>
    </div>
    <div class="row mt-5 pt-5 border-top" id="tech-info">
        <div class="col text-center">
            <h2>技術仕様</h2>
        </div>
    </div>  
    <div class="row pt-3">
        <div class="col-12 col-lg-6">
            <dl>
                <dt>掲載スクリーンサイズ <sup>1</sup></dt>
                <dd>65インチ 16:9 モニター</dd>
                <dd>約12インチ 3:2 モニター（黒帯あり）</dd>
                <dt>ディスプレイ仕様 <sup>1</sup></dt>
                <dd>フルHD以上かつ8bitもしくはそれ以上の表示に対応</dd>
                <dt>表示時間</dt>
                <dd>ベストエフォート<sup>2</sup> <span class="badge rounded-pill text-bg-primary">詳細未定</span></dd>
                <dt>トラッキング</dt>
                <dd>あり<sup>3,4</sup></dd>
            </dl>
        </div>
        <div class="col-12 col-lg-6">
            <dl>
                <dt>最大画像サイズ <sup>5</sup></dt>
                <dd>横 1920px、縦 1080 px</dd>
                <dt>推奨画像サイズ <sup>5</sup></dt>
                <dd>1280x720 もしくは 1920x1080</dd>
                <dt>受付アスペクト比</dt>
                <dd>16:9のみ（16:9以外のデータは黒帯が表示されます）</dd>
                <dt>対応画像フォーマット <sup>5</sup></dt>
                <dd>PNG（透過は不可）, JPEG</dd>
                <dt>最大ファイルサイズ <sup>5</sup></dt>
                <dd>5MiB</dd>
            </dl>
        </div>
    </div>
    <div class="row mb-5 pt-3">
        <small>
            <ol>
                <li>予告なく変更になる場合があります。</li>
                <li>他部署と共有の多用途モニターを利用するため、表示されない時間がある場合があります。</li>
                <li>得られた情報は、Google LLC、島根大学数理・データサイエンス教育研究センター、そのほかの協力企業と共有される場合があります。</li>
                <li>二次元コードを掲載される場合は、弊部側のトラッキングサービスを経由する必要があります。詳細はお問い合わせください。</li>
                <li>
                    条件に一致しない画像データでも表示はできますが、正常に表示されない可能性があります。
                    また、これらの値は確実な表示を保証するものではなく、こちらから画像の修正を依頼する場合があります。
                </li>
            </ol>
        </small>
    </div>
  </div>
</template>

<style scoped>
h1 .badge {
    margin-left: 15px;
    font-size: 11pt;
}
</style>
