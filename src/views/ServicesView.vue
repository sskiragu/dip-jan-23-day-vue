<template>
    <h1>Services Page</h1>
    <h1>{{ count }} and the number is: {{ isEvenorOdd }}</h1>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
</template>

<script>
// Options API
export default{
    data(){
        return {
            count: 0
        }
    },
    computed:{
        isEvenorOdd(){
            if(this.count % 2 === 0) return "Even"
            return "Odd"
        }
    },
    watch: {
        count(newCount, oldCount){
            if(newCount === 10){
                alert("You have achieved maximum number of count.")
            }
        }
    },
    methods: {
        increment(){
            this.count++
        },
        decrement(){
            this.count--
        }
    }
}
</script>