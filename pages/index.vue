<template>
  <div class="container">
    <ContentHeaderRowGradientSpring>
      <div class="col">
        <h1 class="mb-4">
          <img src="/logo/pimlogo-nosmn.svg" alt="Pim" height="40" /><br />
          <span>新しいものづくりのコミュニティ</span>
        </h1>
        <p class="mb-0">ものづくりに関する知識と技術を共有する、島根大学公認の部活動です。</p>
        <div class="mt-4">
          <router-link class="btn btn-outline-primary me-2" to="/contacts" role="button">入部する</router-link>
          <router-link class="btn btn-outline-secondary" to="/contacts" role="button">お問い合わせ</router-link>
        </div>
      </div>
    </ContentHeaderRowGradientSpring>
    <div class="row pt-5">
      <FeatureCardGridCard>
        <div class="card-body">
          <FeatureCardGridCardEmoji>⚡️</FeatureCardGridCardEmoji>
          <h5 class="card-title">電子工作</h5>
          <p class="card-text">自分だけの便利グッズや愉快なデバイスを、「無いなら作ろう」の心構えで思うがままに作ってみませんか？</p>
        </div>
      </FeatureCardGridCard>
      <FeatureCardGridCard>
        <div class="card-body">
          <FeatureCardGridCardEmoji>🎞️</FeatureCardGridCardEmoji>
          <h5 class="card-title">動画編集</h5>
          <p class="card-text">浮かんだインスピレーションをそのまま動画素材として世界と共有してみましょう。</p>
        </div>
      </FeatureCardGridCard>
      <FeatureCardGridCard>
        <div class="card-body">
          <FeatureCardGridCardEmoji>🦖</FeatureCardGridCardEmoji>
          <h5 class="card-title">3D プリント作品</h5>
          <p class="card-text">3Dプリンタでちょっとした小物や試作品を作り、あなたのものづくり活動を加速させましょう。</p>
        </div>
      </FeatureCardGridCard>
      <FeatureCardGridCard>
        <div class="card-body">
          <FeatureCardGridCardEmoji>⌨</FeatureCardGridCardEmoji>
          <h5 class="card-title">自作キーボード</h5>
          <p class="card-text">機能性や見た目にこだわって、自分専用のオーダーメイドキーボードを作ってみませんか？</p>
        </div>
      </FeatureCardGridCard>
      <FeatureCardGridCard>
        <div class="card-body">
          <FeatureCardGridCardEmoji>🥽</FeatureCardGridCardEmoji>
          <h5 class="card-title">VR/XR</h5>
          <p class="card-text">四角い画面の枠を超えた、空間全体がコンテンツになる未来を作ってみませんか？</p>
        </div>
      </FeatureCardGridCard>
      <FeatureCardGridCard>
        <div class="card-body">
          <FeatureCardGridCardEmoji>🧑‍🤝‍🧑</FeatureCardGridCardEmoji>
          <h5 class="card-title">メタバース</h5>
          <p class="card-text">仮想世界上で家にいながら仲間と交流したり、自分オリジナルの世界をデザインしたりしてみませんか？</p>
        </div>
      </FeatureCardGridCard>
      <FeatureCardGridCard>
        <div class="card-body">
          <FeatureCardGridCardEmoji>🤖</FeatureCardGridCardEmoji>
          <h5 class="card-title">プログラミング</h5>
          <p class="card-text">コンピュータを使っている際に現れる「ちょっと使いづらい」を自分の力で解決しましょう。</p>
        </div>
      </FeatureCardGridCard>
      <FeatureCardGridCard>
        <div class="card-body">
          <FeatureCardGridCardEmoji>🖥️</FeatureCardGridCardEmoji>
          <h5 class="card-title">自作パソコン</h5>
          <p class="card-text">あなたのパフォーマンスを最大限引き出せるオリジナルパソコンで、大学生活をより楽しみませんか？</p>
        </div>
      </FeatureCardGridCard>
      <FeatureCardGridCard>
        <div class="card-body">
          <FeatureCardGridCardEmoji>💎</FeatureCardGridCardEmoji>
          <h5 class="card-title">UVレジン</h5>
          <p class="card-text">UVレジンを使って透明感のあるアクセサリーを製作してみませんか？</p>
        </div>
      </FeatureCardGridCard>
      <FeatureCardGridCard>
        <div class="card-body">
          <FeatureCardGridCardEmoji>🌎</FeatureCardGridCardEmoji>
          <h5 class="card-title">Webサイト製作</h5>
          <p class="card-text">自分オリジナルのサイトを作り、知識やポートフォリオを共有しませんか？</p>
          <router-link class="btn btn-outline-primary" to="/with_pim/web" role="button">詳細</router-link>
        </div>
      </FeatureCardGridCard>
      <FeatureCardGridCard>
        <div class="card-body">
          <FeatureCardGridCardEmoji>🎵</FeatureCardGridCardEmoji>
          <h5 class="card-title">作曲・DTM</h5>
          <p class="card-text">インスピレーションに従って音を組み合わせて、オリジナル楽曲を作ってみませんか？</p>
          <router-link class="btn btn-outline-primary" to="/with_pim/dtm" role="button">詳細</router-link>
        </div>
      </FeatureCardGridCard>
    </div>
    <div class="row mt-5 pt-5 mb-5 border-top">
      <div class="col text-center">
        <h2>さあ、参加しよう</h2>
        <p>
          Pimでは強制参加の活動や、部費・入部金の徴収は行っていません。<br />
          まずはSNSで告知されている活動を体験してみませんか？
        </p>
        <div class="mt-4">
          <iframe src="https://calendar.google.com/calendar/embed?src=e321b77a3f2af12b1bd882362f40c3c614ddecc7ac7ed73d68463eab77c4009c%40group.calendar.google.com&ctz=Asia%2FTokyo" style="border: 0" width="100%" height="600" frameborder="0" scrolling="no"></iframe>
        </div>
        <div class="mt-4">
          <router-link class="btn btn-outline-primary me-2" to="/contacts" role="button">入部する</router-link>
          <router-link class="btn btn-outline-secondary" to="/contacts" role="button">お問い合わせ</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
