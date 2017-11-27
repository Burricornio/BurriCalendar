// Importamos Vue
import Vue from 'vue';

// Importamos vuex
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store ({
    state: {
        currentYear: 2017,
        currentMonth: 11,
        eventFormPosX: 0,
        eventFormPosY: 0,
    },
    mutations: {
        setCurrentMonth(state, payload) {
            state.currentMonth = payload;
        },
        setCurrentYear(state, payload) {
            state.currentYear = payload;
        },
        eventFormPos(state, payload) {
            state.eventFormPosX = payload.x,
            state.eventFormPosY = payload.y
        }
    }
})