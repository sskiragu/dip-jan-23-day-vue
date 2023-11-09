<template>
    <div>
        <h1>The count: {{ count }} and the number is: {{ isEvenorOdd }}</h1>
        <button @click="increment">Increment</button>
    </div>
</template>

<script setup>
// Composition API
import { computed, onMounted, onUpdated, ref, watch } from "vue";

const count = ref(0)

const increment = () =>{
    count.value++
}

const isEvenorOdd = computed(() =>{
    if(count.value % 2 === 0) return 'Even'
    return 'Odd'
})

watch(count, (newValue, oldValue) => {
console.log(`Old Value: ${oldValue}  New Value: ${newValue}`);
})

onMounted(() =>{
    alert("Your component have mounted")
})

onUpdated(() => {
    alert("You updated the component")
})
</script>