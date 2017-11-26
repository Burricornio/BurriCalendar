// Importamos Vue
import Vue from 'vue';

// Importamos vuex
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store ({
    state: {
        currentYear: 2017,
        currentMonth: 11
    }
})