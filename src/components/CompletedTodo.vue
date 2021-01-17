<template>
  <div>
      Completed Todo: {{ numberOfCompletedTodo }}
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState([
            'todos'
        ]),
        // todos() {
        //     return this.$store.state.todos; 
        // },
        numberOfCompletedTodo() {
            return this.$store.getters.numberOfCompletedTodo;
        }
    }
}
</script>

<style>

</style>