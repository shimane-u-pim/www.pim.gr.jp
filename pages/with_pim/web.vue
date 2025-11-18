<script setup lang="ts">
useHead({
    meta: [
        { hid: "og:type", property: "og:type", content: "article" },
        {
            hid: "og:url",
            property: "og:url",
            content: "https://www.pim.gr.jp/with_pim/web/",
        },
        {
            hid: "og:title",
            property: "og:title",
            content: "Webサイト製作 with Pim - 島根大学ものづくり部 Pim",
        },
        {
            hid: "og:image",
            property: "og:image",
            content: "https://www.pim.gr.jp/img/with_pim/web.jpg",
        },
        { name: "twitter:card", content: "summary_large_image" },
    ],
});
</script>

<template>
    <div>
        <Head>
            <Title>Webサイト製作 with Pim - 島根大学ものづくり部 Pim</Title>
        </Head>
        <WithPimHeader
            image="/img/with_pim/web.jpg"
            image-alt="Webサイト製作 with Pim"
        />

        <div class="container mt-5 mb-5">
            <div class="row">
                <div class="col">
                    <section>
                        <h2>製作チームのご紹介</h2>
                        <p>
                            　Webサイト製作チームでは、弊部のWebサイトやPimサイネージシステムの内部プログラムを記述しています。
                        </p>
                        <p>
                            　興味のある方は、お問い合わせフォームからお気軽にお問い合わせください。
                        </p>
                    </section>

                    <section>
                        <h2>使用技術</h2>
                        <ul>
                            <li>Nuxt.js</li>
                            <li>Vue.js</li>
                            <li>Next.js</li>
                            <li>React</li>
                            <li>HTML/CSS</li>
                            <li>JavaScript/TypeScript</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>
