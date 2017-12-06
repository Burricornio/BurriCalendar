import Vue from 'vue';
import './style.scss';

// Importamos el store de vuex
import store from './store';

let events = window.__INITIAL_STATE__.map(event =>{
  return {
    description: event.description,
    date: moment(event.date)
  }
})
let initialState = Object.assign( {}, store.state, { events });
store.replaceState(initialState);

// Importamos la librería 'moment.js'
import moment from 'moment-timezone';
// Configuramos que se adapte alas diferentes franjas horarias
moment.tz.setDefault('UTC');
// Creamos el objeto '$moment'
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment} });

// Importamos conponentes
import App from './components/App.vue';


new Vue({
  el: '#app',
  data: {
    moment
  },
  components: {
      App
  },
  store,
  render(createElement) { // Vamos a renderizar la app creando un elemento en vez de un template en el index para hacer server-side-rendering. Necesitamos 3 parametros:
    return createElement(
      'div', //1 - Elemento que queremos renderizar
      { attrs: { id: 'app' } }, // Atributos del elemento
      [
        createElement('app') // Elementos hijos
      ]
    )

  }
});
