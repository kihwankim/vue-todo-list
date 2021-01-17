<template>
  <div>
      Completed Todo: {{ numberOfCompletedTodo }}
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        // ...mapState({
        //     allTodo: state => state.todo.todos
        // }),
        ...mapState('todo', {
            allTodo: state => state.todos
        }),
        // todos() {
        //     return this.$store.state.todos; 
        // },
        numberOfCompletedTodo() {
            return this.$store.getters['todo/numberOfCompletedTodo'];
        }
    }
}
</script>

<style>

</style>