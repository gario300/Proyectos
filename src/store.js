import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {popular: [
    { nombre: '', edad: '', de: '', hacia: '',categoria: 'popular' },
    { nombre: '', edad: '', de: '', hacia: '',categoria: 'popular' },
    { nombre: '', edad: '', de: '', hacia: '',categoria: 'popular' },
    { nombre: '', edad: '', de: '' , hacia: '',categoria: 'popular' },
    { nombre: '', edad: '', de: '', hacia: '', categoria: 'popular' }
  ],
    destinos:[
      {rango:'', lugar:'',estado:'', categoria:'Más visitado'},
      {rango:'', lugar:'',estado:'', categoria:'Más visitado'},
      {rango:'', lugar:'',estado:'', categoria:'Más visitado'},
      {rango:'', lugar:'',estado:'', categoria:'Más visitado'},
      {rango:'', lugar:'',estado:'', categoria:'Más visitado'},
      {rango:'', lugar:'',estado:'', categoria:'Más visitado'},
      {rango:'', lugar:'',estado:'', categoria:'Más visitado'},
      {rango:'', lugar:'',estado:'', categoria:'Más visitado'},
      {rango:'', lugar:'',estado:'', categoria:'Más visitado'},
      {rango:'', lugar:'',estado:'', categoria:'Más visitado'}
    ],
    blogs:[
      {Titulo:'Top 10 destination',content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', img:'top10-min.png'},
      {Titulo:'Top 10 destination',content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', img:'top10-min.png'},
      {Titulo:'Top 10 destination',content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', img:'top10-min.png'},
      {Titulo:'Top 10 destination',content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', img:'top10-min.png'},
    ]
},

  mutations: {

  },
  actions: {

  }
})
