<template>
    <div class="mb-2 d-flex">
        <div>
            <input type="checkbox" :checked="todo.checked" @change="toggleCheckBox"/>
        </div>
        <span
            class="ml-3 flex-grow-1"
            :class="todo.checked ? 'text-muted' : ''"
            :style="todo.checked ? 'text-decoration: line-through': ''"
        >{{ todo.text }}</span>
        <button class="btn btn-danger btn-sm" @click="clickDelete">Delete</button>
    </div>
</template>

<script>
    export default {
        props: {
            todo: {
                type: Object,
                required: true
            }
        },
        methods: {
            toggleCheckBox(event) {
                this.$store.commit('todo/TOGGLE_TODO', {
                    id: this.todo.id,
                    checked: event.target.checked
                });
            },
            clickDelete() {
                this.$store.commit('todo/DELETE_TODO', this.todo.id);
            }
        }
    }
</script>