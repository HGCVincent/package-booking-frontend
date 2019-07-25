import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios,axios)

const baseUrl = "http://localhost:8080/parcels"

export default new Vuex.Store({
  state: {
    list:[],
    allItemList:[],
  },
  mutations: {
    getAllParcels(state,allItems){
      state.allItemList = allItems;
    },
    showAll(state){
      state.list = state.allItemList;
    },
    showOrder(state){
      state.list = state.allItemList.filter(parcel => parcel.status === '已预约');
      console.log(state.list);
    },
    showFetched(state){
      state.list = state.allItemList.filter(parcel => parcel.status === '已取件')
    }
  },
  actions: {
    getAllParcels({commit}){
      axios.get(baseUrl).then(response => {
        commit('getAllParcels',response.data);
        commit('showAll',response.data);
      }).catch(error => console.log(error))
    },
    addParcel({commit},item){
      axios.post(baseUrl,item).then(response => {
        commit('showAll',response.data);
      }).catch(error => console.log(error))
    },
    updateParcel({state,dispatch},id){
      axios.patch(`${baseUrl}/${id}`).then(() =>{
        dispatch('getAllParcels');
      }).catch(error => console.log(error));
    },
    updateParcelByPost({state,dispatch},parcel){
      let par = {
        "id": parcel.id,
        "status": "已预约",
        "time": parcel.time,
      }
      axios.put(baseUrl,par).then(() => {
        dispatch('getAllParcels');
      }).catch(error => console.log(error));
    }
  },
})
