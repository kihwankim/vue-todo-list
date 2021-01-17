export default {
    namespaced: true,
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
    actions: { // 비동기 작업이 하는 공간
        addTodo(context, value) {
            // axios.post()
            setTimeout(function () {
                context.commit('ADD_TODO', value);
            }, 1000); // post requst를 예시로 넣어준 것
        }
    }, // 함수가 들어가는 공간(데이터를 가져오는 곳) -> 비동기 처리 하는 곳
    getters: {
        numberOfCompletedTodo: state => {
            return state.todos.filter(todo => todo.checked).length; // vuex 에서 계산 된 값을 가져 올 수 있음
        }
    } // coputed랑 비슷한 공간
}