<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n({ useScope: 'global' })
import FeatureCardGridCard from '../components/FeatureCardGridCard.vue'
import FeatureCardGridCardEmoji from '../components/FeatureCardGridCardEmoji.vue'
import ContentHeaderRow from '../components/ContentHeaderRow.vue'
</script>

<template>
  <div class="container">
    <ContentHeaderRow>
      <div class="col">
        <h1 class="mb-4">
          <img src="/static/logo/pimlogo-nosmn.svg" alt="Pim" height="40" /><br />
          <span>{{ t('home.catch_1') }}</span>
        </h1>
        <p class="mb-0">部員が提供する知識と技術の集合体を活用し、自らも集合体の一部になりませんか？</p>
      </div>
    </ContentHeaderRow>
    <div class="row pt-5">
      <FeatureCardGridCard>
        <div class="card-body">
          <FeatureCardGridCardEmoji>⚡️</FeatureCardGridCardEmoji>
          <h5 class="card-title">電子工作</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </FeatureCardGridCard>
      <FeatureCardGridCard>
        <div class="card-body">
          <FeatureCardGridCardEmoji>🎞️</FeatureCardGridCardEmoji>
          <h5 class="card-title">動画編集</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </FeatureCardGridCard>
      <FeatureCardGridCard>
        <div class="card-body">
          <FeatureCardGridCardEmoji>🦖</FeatureCardGridCardEmoji>
          <h5 class="card-title">3D プリント作品</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </FeatureCardGridCard>
    </div>
  </div>
</template>

<style scoped>
</style>
