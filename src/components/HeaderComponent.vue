<template>

    {{ msg }}
    <slot></slot>
</template>

<script setup>
const props = defineProps({
    msg: {
        type: String
    }
})
</script>