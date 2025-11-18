<template>
    <div class="mq-container">
        <div class="mq-text">
            <slot/>
        </div>
    </div>
</template>

<style scoped>
.mq-container {
    overflow: hidden;
    width: 100%;
    word-wrap: nowrap;
}

.mq-text {
    width: max-content;
    transform: translateX(100%);
    animation: marquee 20s linear infinite;
}

@keyframes marquee {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-100%);
    }
}
</style>