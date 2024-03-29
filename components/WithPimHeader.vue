<script setup lang="ts">
const props = defineProps({
    image: String,
    imageAlt: String,
});
</script>

<template>
    <div>
        <img :src="image" :alt="imageAlt" class="img-fluid mx-auto d-block" />
    </div>
</template>

<style scoped>
div {
    background-color: black;
}
img {
    max-height: 25vh;
    object-fit: contain;
    background-color: black;
}
</style>