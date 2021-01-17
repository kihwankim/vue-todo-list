<template>
    <input
        type="text"
        v-model="todoText"
        class="w-100 p-2"
        placeholder="Type todo"
        @keyup.enter="addTodo"/>
</template>

<script>
    export default {
        data() {
            return {
                todoText: ''
            }
        },
        methods: {
            addTodo(event) {
                // this.$store.commit('ADD_TODO', event.target.value);
                this.$store.dispatch('addTodo', event.target.value);
                this.todoText = '';
            }
        }
    }
</script>

<style></style>