<template>
  <div class="container">
    <ContentHeaderRow>
      <div class="col">
        <h1 class="mb-4">
          <img src="/logo/pimlogo-nosmn.svg" alt="Pim" height="40" /><br />
          <span>新しいものづくりのコミュニティ</span>
        </h1>
        <p class="mb-0">部員が提供する知識と技術の集合体を活用し、自らも集合体の一部になりませんか？</p>
        <div class="mt-4">
          <router-link class="btn btn-outline-primary" to="/contacts" role="button">入部する</router-link>
        </div>
      </div>
    </ContentHeaderRow>
    <div class="row pt-5">
      <FeatureCardGridCard>
        <div class="card-body">
          <FeatureCardGridCardEmoji>⚡️</FeatureCardGridCardEmoji>
          <h5 class="card-title">電子工作</h5>
          <p class="card-text">自分だけの新たなデバイスを作り、より豊かで快適な生活を送りませんか？</p>
        </div>
      </FeatureCardGridCard>
      <FeatureCardGridCard>
        <div class="card-body">
          <FeatureCardGridCardEmoji>🎞️</FeatureCardGridCardEmoji>
          <h5 class="card-title">動画編集</h5>
          <p class="card-text">浮かんだインスピレーションをそのまま動画素材として世界と共有してみましょう</p>
        </div>
      </FeatureCardGridCard>
      <FeatureCardGridCard>
        <div class="card-body">
          <FeatureCardGridCardEmoji>🦖</FeatureCardGridCardEmoji>
          <h5 class="card-title">3D プリント作品</h5>
          <p class="card-text">ちょっとした小物が欲しいなら、一度3Dプリンタで作ってみましょう。手軽に様々な小道具を作成可能です。</p>
        </div>
      </FeatureCardGridCard>
      <FeatureCardGridCard>
        <div class="card-body">
          <FeatureCardGridCardEmoji>⌨</FeatureCardGridCardEmoji>
          <h5 class="card-title">自作キーボード</h5>
          <p class="card-text">コンピュータを使う上で欠かせないキーボードを少しこだわって作ってみませんか？</p>
        </div>
      </FeatureCardGridCard>
      <FeatureCardGridCard>
        <div class="card-body">
          <FeatureCardGridCardEmoji>🥽</FeatureCardGridCardEmoji>
          <h5 class="card-title">VR</h5>
          <p class="card-text">VR技術で、これまでにない新たなもう1つの世界を体験し、仮想世界を作り上げてみませんか？</p>
        </div>
      </FeatureCardGridCard>
      <FeatureCardGridCard>
        <div class="card-body">
          <FeatureCardGridCardEmoji>🧑‍🤝‍🧑</FeatureCardGridCardEmoji>
          <h5 class="card-title">メタバース</h5>
          <p class="card-text">仮想空間を設計し、コミュニティの場を設計をしてみませんか？</p>
        </div>
      </FeatureCardGridCard>
      <FeatureCardGridCard>
        <div class="card-body">
          <FeatureCardGridCardEmoji>🤖</FeatureCardGridCardEmoji>
          <h5 class="card-title">プログラミング</h5>
          <p class="card-text">コンピュータを使ってる際に現れる「ちょっと使いづらい」を自分の力で解決しましょう</p>
        </div>
      </FeatureCardGridCard>
      <FeatureCardGridCard>
        <div class="card-body">
          <FeatureCardGridCardEmoji>🖥️</FeatureCardGridCardEmoji>
          <h5 class="card-title">自作パソコン</h5>
          <p class="card-text">大学生活に欠かせないパソコンをこだわって作ってみませんか</p>
        </div>
      </FeatureCardGridCard>
      <FeatureCardGridCard>
        <div class="card-body">
          <FeatureCardGridCardEmoji>💎</FeatureCardGridCardEmoji>
          <h5 class="card-title">UVレジン</h5>
          <p class="card-text">UVレジンを使って透明感のあるアクセサリーを製作してみませんか？</p>
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
          <router-link class="btn btn-outline-primary" to="/contacts" role="button">入部する</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
