<script setup lang="ts">
defineProps<{
  id: string,
  title: string,
  publisher: undefined|string,
  isbn13: undefined|string
  authors: Array<string>,
  date: undefined|Date,
  libraryLinks: Array<{'title': string, 'url': string}>,
  libraryRequests: Array<{'library': string, 'ids': Array<{ 'site': string, 'requestCode': string}>}>
  imageFile: string,
}>();

const formatDate = (date: undefined|Date): string => {
  if (date === undefined) return "発売日データ提供無し";
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return `${year}年${month}月`;
}
</script>

<template>
  <div class="card mb-3">
    <div :id="id" class="row g-0">
      <div class="d-md-none col-12 border-bottom"> <!-- For mobile -->
        <img :src="imageFile" class="img-fluid" :alt="`${title} の書影`" loading="lazy">
      </div>
      <div class="d-sm-none d-md-block col-md-4 position-relative min-h-100"> <!-- For Tablet/PC -->
        <img :src="imageFile" class="img-fluid position-absolute top-0 start-0 w-100 h-100 object-fit-contain" :alt="`${title} の書影`" loading="lazy">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h2 class="card-title">{{title}}</h2>
          <p class="card-text">
            <small class="text-body-secondary">
              {{ formatDate(date) }}, <span>{{authors.join(', ')}}</span><span v-if="publisher !== undefined">, {{publisher}}</span>
            </small>
          </p>
          <slot />
          <div class="btn-list">
            <a
                v-for="link in libraryLinks"
                :key="link.url"
                :href="link.url"
                class="btn btn-sm btn-outline-primary library-link-button me-2 mt-2 d-inline-block"
                target="_blank"
                rel="noopener noreferrer"
            >{{link.title}}</a>
            <button v-if="libraryRequests.length > 0" type="button" class="btn btn-sm btn-outline-secondary me-2 mt-2" data-bs-toggle="modal" :data-bs-target="`#${id}--lib-modal`">
              蔵書情報
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="libraryRequests.length > 0" :id="`${id}--lib-modal`" ref="lib-request-modal" class="modal fade" tabindex="-1" aria-hidden="true" :aria-labelledby="`#${id}--lib-modal-label`">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 :id="`${id}--lib-modal-label`" class="modal-title">{{title}} - 蔵書情報</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div class="modal-body">
          <p>　記載されている蔵書情報は最新の情報でない場合があります。詳細は各図書館にお問い合わせください。</p>
          <table class="table table-striped">
            <thead>
              <tr><th>図書館名</th><th>所蔵館</th><th>請求コード</th></tr>
            </thead>
            <tbody v-for="requests in libraryRequests" :key="requests.library">
              <tr v-for="(requestIds, i) in requests.ids" :key="i">
                <td v-if="i == 0" :rowspan="requests.ids.length">{{requests.library}}</td>
                <td>{{requestIds.site}}</td>
                <td><code>{{requestIds.requestCode}}</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  max-height: 50vh;
  text-align: center;
}
</style>
