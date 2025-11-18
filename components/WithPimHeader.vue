<script setup lang="ts">
defineProps({
    image: {
        type: [String],
        required: true,
    },
    imageAlt: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div>
        <img :src="image" :alt="imageAlt" class="img-fluid mx-auto d-block" >
    </div>
</template>

<style scoped>
div {
    background-color: black;
}
img {
    max-height: 50vh;
    object-fit: contain;
    background-color: black;
}
</style>
