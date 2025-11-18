<template>
    <div class="row pt-5 pb-5 top-bg-gradation" data-content-header-row>
        <slot/>
    </div>
    <div class="row mb-4"/>
</template>

<style scoped>
.top-bg-gradation {
    background: linear-gradient(45deg, #fdd, #fed, #ffd, #dfd, #ddf);
}
</style>

<style>
.row[data-content-header-row]>div.col {
    padding: 2rem;
}
</style>