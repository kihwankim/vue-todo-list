import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [],
        increamentId: 0
    }, // data가 들어가는 공간
    mutations: {
        ADD_TODO(state, value) {
            state
                    .todos
                    .push({id: state.increamentId, text: value, checked: false});
                state.increamentId += 1;
        },
        TOGGLE_TODO(state, {id, checked}) {
            const index = state
                .todos
                .findIndex(todo => {
                    return todo.id === id;
                });
            state
                .todos[index]
                .checked = checked;
        },
        DELETE_TODO(state, todoId) {
            const index = state.todos.findIndex(todo => {
                return todo.id === todoId;
            });
            state.todos.splice(index, 1);
        }
    }, // 데이터 변경이 일어 나는 공간
    actions: {

    }, // 함수가 들어가는 공간(데이터를 가져오는 곳) -> 비동기 처리 하는 곳
    getters: {

    } // coputed랑 비슷한 공간
});