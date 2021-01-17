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
                this.$emit('add-todo', event);
                this.todoText = '';
            }
        }
    }
</script>

<style></style>