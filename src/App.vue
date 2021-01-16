<template>
    <div id="app" class="container">
        <h1 class="text-center">Todo App</h1>
        <input
            type="text"
            v-model="todoText"
            class="w-100 p-2"
            placeholder="Type todo"
            @keyup.enter="addTodo"/>
        <hr/>
        <Todo
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
            @toggle-checkbox="toggleCheckBox"/>
    </div>
</template>

<script>
    import Todo from '@/components/Todo.vue'
    export default {
        components: {
            Todo
        },
        data() {
            return {todoText: '', increamentId: 0, todos: []}
        },
        methods: {
            addTodo(event) {
                this
                    .todos
                    .push({id: this.increamentId, text: event.target.value, checked: false});
                this.increamentId += 1;
                this.todoText = '';
            },
            toggleCheckBox({id, checked}) {
                const index = this.todos.findIndex(todo => {
                  return todo.id === id;
                });
                this.todos[index].checked = checked;
            }
        } // keyup.enter : enter button이 클릭 되면 일어나는 action
    }
</script>

<style></style>