<template>
    <div id="app" class="container">
        <h1 class="text-center">Todo App</h1>
        <CompletedTodo :todos="todos"/>
        <AddTodo @add-todo="addTodo"/>
        <hr/>
        <TodoList
            :todos="todos"
            @toggle-checkbox="toggleCheckBox"
            @click-delete="deleteTodo"/>
    </div>
</template>

<script>
    import TodoList from '@/components/TodoList.vue';
    import AddTodo from '@/components/AddTodo.vue';
    import CompletedTodo from '@/components/CompletedTodo.vue';
    export default {
        components: {
            TodoList,
            AddTodo,
            CompletedTodo
        },
        data() {
            return {increamentId: 0, todos: []}
        },
        methods: {
            addTodo(event) {
                this
                    .todos
                    .push({id: this.increamentId, text: event.target.value, checked: false});
                this.increamentId += 1;
            },
            toggleCheckBox({id, checked}) {
                const index = this
                    .todos
                    .findIndex(todo => {
                        return todo.id === id;
                    });
                this
                    .todos[index]
                    .checked = checked;
            },
            deleteTodo(id) {
                this.todos = this
                    .todos
                    .filter(todo => todo.id !== id);
            }
        } // keyup.enter : enter button이 클릭 되면 일어나는 action
    }
</script>

<style></style>