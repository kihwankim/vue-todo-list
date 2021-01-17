<template>
    <div>
        <Todo
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
        />
    </div>
</template>

<script>
import Todo from '@/components/Todo.vue';

    export default {
        components: {
            Todo
        },
        computed: {
            todos() {
                return this.$store.state.todo.todos; // module 이름 추가
            }
        }
    }
</script>

<style></style>