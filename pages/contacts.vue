<script setup lang="ts">
useHead({
  meta: [
    { hid: 'og:type', property: 'og:type', content: 'article' },
    { hid: 'og:url', property: 'og:url', content: 'https://www.pim.gr.jp/contacts/' },
    { hid: 'og:title', property: 'og:title', content: 'お問い合わせ・入部申請 - 島根大学ものづくり部 Pim' },
  ],
  script: [
    { src: 'https://challenges.cloudflare.com/turnstile/v0/api.js' },
  ],
})
</script>

<template>
    <Head>
        <Title>入部・お問い合わせ - 島根大学ものづくり部 Pim</Title>
    </Head>
    <div class="container">
        <ContentHeaderRow>
            <div class="col">
                <h1>入部・お問い合わせ</h1>
                <p class="mb-0">Pimへの入部・体験について、お仕事の相談、依頼などはこちらのお問い合わせフォームかメールアドレスで受け付けています。</p>
            </div>
        </ContentHeaderRow>
        <div class="row mb-3">
            <div class="col-12 col-lg-4" style="margin-bottom: 35px;">
                <p>
                    入部・体験希望についてのお問い合わせは、
                    <a href="https://www.g-ipc.shimane-u.ac.jp/service/mail/" target="_blank">
                        島根大学 電子メールサービス
                        <i class="bi bi-box-arrow-up-right"></i>
                    </a>
                    のメールアドレスをご利用ください。
                </p>
                <ul>
                    <li><i class="bi bi-envelope me-2"></i>contact &lt;<b>at</b>&gt; pim.gr.jp
                    </li>
                </ul>
            </div>
            <div class="col-12 col-lg-8">
                <form action="https://contact.pim-shimane.workers.dev/submit" method="POST" enctype="multipart/form-data">
                    <div class="mb-3">
                        <label for="email" class="form-label">メールアドレス: </label>
                        <input type="email" name="email" id="email" required class="form-control"/>
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label">お名前: </label>
                        <input type="text" name="name" id="name" required class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="inquiry" class="form-label">お問い合わせ内容: </label>
                        <textarea name="content" id="inquiry" required class="form-control" ></textarea>
                    </div>
                    <div class="cf-turnstile" data-sitekey="0x4AAAAAAAebPItjBa5RF5k7" data-callback="javascriptCallback"></div>
                    <button type="submit" class="btn btn-primary">
                        送信
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
    ul {
        list-style: none;
        padding-left: 0;
    }
</style>
