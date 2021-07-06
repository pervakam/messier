import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    answer: 110,
    messierAPI: [],
    loading: false,
  },
  getters: {
    MESSIER_API(state) {
      return state.messierAPI;
    },
    objectsSum(state) {
      return state.messierAPI.length;
    },
    object(state) {
      return (id) => state.messierAPI.find((object) => object.recordid === id);
    },
  },
  mutations: {
    setLoader(state, value) {
      state.loading = value;
    },
    addCount(state) {
      state.count++;
    },
    setChooseObject(state) {
      state.count++;
    },
    removeCount(state) {
      state.count--;
    },
    countCheck(state, evt) {
      state.count = +evt.target.value;
    },
    SET_API_TO_STATE: (state, messierAPI) => {
      state.messierAPI = messierAPI;
    },
  },
  actions: {
    async GET_DATA_FROM_API({ commit }) {
      try {
        commit('setLoader', true);
        const result = await axios('https://www.datastro.eu/api/records/1.0/search/?dataset=catalogue-de-messier&q=&rows=110&sort=messier&facet=objet&facet=saison&facet=mag&facet=english_name_nom_en_anglais&facet=french_name_nom_francais&facet=latin_name_nom_latin&facet=decouvreur&facet=annee', {
          method: 'GET',
        });
        commit('SET_API_TO_STATE', result.data.records);
      } catch (error) {
        console.error(error);
      } finally {
        commit('setLoader', false);
      }
    },
  },
  modules: {},
});
