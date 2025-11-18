<script setup lang="ts">
useHead({
    meta: [
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:url', property: 'og:url', content: 'https://www.pim.gr.jp/with_pim/dtm/' },
        { hid: 'og:title', property: 'og:title', content: '作曲・DTM with Pim - 島根大学ものづくり部 Pim' },
        { hid: 'og:image', property: 'og:image', content: 'https://www.pim.gr.jp/img/with_pim/dtm.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
    ],
})
</script>

<template>

    <Head>
        <Title>Webサイト製作 with Pim - 島根大学ものづくり部 Pim</Title>
    </Head>
    <WithPimHeader image="/img/with_pim/dtm.jpg" image-alt="作曲・DTM with Pim" />

    <div class="container mt-5 mb-5">
        <div class="row">
            <div class="col">
                <section>
                    <h2>DTMとは</h2>
                    <p>
                        　PCを使って簡単に作曲できる技術をDTM（Desktop Music）と言います。
                        音楽に関する知識がある人はもちろん、そうでない人もループ素材などを使い、簡単に作曲をすることができます。
                    </p>
                </section>
            </div>
        </div>
    </div>
</template>
