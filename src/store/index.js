import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        
    }, // data가 들어가는 공간
    mutations: {

    }, // 데이터 변경이 일어 나는 공간
    actions: {

    }, // 함수가 들어가는 공간(데이터를 가져오는 곳) -> 비동기 처리 하는 곳
    getters: {
        
    } // coputed랑 비슷한 공간
});