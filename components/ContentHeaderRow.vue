<template>
    <div class="row pt-5 pb-5" data-content-header-row>
        <slot></slot>
    </div>
    <div class="row border-bottom mb-4"></div>
</template>

<style>
.row[data-content-header-row]>div.col {
    padding: 2rem;
}
</style>