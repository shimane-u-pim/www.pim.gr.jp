<script setup lang="ts">
import ContentHeaderRow from '../components/ContentHeaderRow.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n({ useScope: 'global' })
</script>

<template>
    <div class="container">
        <ContentHeaderRow>
            <div class="col">
                <h1>{{ t('shared.contacts') }}</h1>
                <p class="mb-0">Pimへの入部・体験について、お仕事の相談、依頼などはこちらのお問い合わせフォームかメールアドレスで受け付けています。</p>
            </div>
        </ContentHeaderRow>
        <div class="row">
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
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeJwZ_UmlvHh3KfonkARojFIhHeOP2k3Y1yTYvD1CTEi4raBA/viewform?embedded=true"
                    width="100%" height="480" frameborder="0" marginheight="0" marginwidth="0"
                    class="rounded">読み込んでいます…</iframe>
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