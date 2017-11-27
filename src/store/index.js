// Importamos Vue
import Vue from 'vue';

// Importamos vuex
import Vuex from 'vuex';
Vue.use(Vuex);

// Importamos moment
import moment from 'moment-timezone';
moment.tz.setDefault('UTC');

export default new Vuex.Store ({
    state: {
        currentYear: 2017,
        currentMonth: 11,
        eventFormPosX: 0,
        eventFormPosY: 0,
        eventFormActive: false,
        events: [
            { description: 'Random Event 1', date: moment('2017-11-07', 'YYYY-MM-DD') },
            { description: 'Random Event 2', date: moment('2017-11-10', 'YYYY-MM-DD') },
            { description: 'Random Event 3', date: moment('2017-11-27', 'YYYY-MM-DD') }
        ],
        eventFormDate: null,
        eventFormOpen: true
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
        },
        eventFormActive(state, payload) {
            state.eventFormActive = payload;
        },
        addEvent(state, payload ) {
            state.events.push({
                description: payload,
                date: state.eventFormDate
            });
        },
        eventFormDate(state, payload) {
            state.eventFormDate = payload;
        }
    }
})