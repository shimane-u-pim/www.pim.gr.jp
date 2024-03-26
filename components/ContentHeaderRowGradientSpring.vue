<template>
    <div class="row pt-5 pb-5 top-bg-gradation" data-content-header-row>
        <slot></slot>
    </div>
    <div class="row mb-4"></div>
</template>

<style>
.top-bg-gradation {
    background: linear-gradient(45deg, #fee, #fed, #fdd);
}

.row[data-content-header-row]>div.col {
    padding: 2rem;
}
</style>