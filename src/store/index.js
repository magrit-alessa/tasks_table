import Vue from 'vue'
import Vuex from 'vuex'

import tasks from '../assets/tasks.json'

Vue.use(Vuex)

var state ={
	tasks
}

export const mutations = {
	CHANGE_NAME (state,{text, index}){
     state.tasks[index].name = text;
   }
}

export const actions = {
	 changeName ({ commit }, {text, index}) {
	 commit( 'CHANGE_NAME', {text, index})

 }
}

export default new Vuex.Store({
	state,
	getters:{
		getterTasks: state => state.tasks
	},
	actions,
	mutations
})

