import Vue from 'vue'
import Vuex from 'vuex'
import tasks from '../assets/tasks.json'

Vue.use(Vuex)

export default new Vuex.Store({
	 state:{
	     tasks
	},
	getters:{
		getterTasks: state => state.tasks
	},
	actions: {
      
        changeName({commit}, {text, index}){
           commit('changeName', {text, index})
        }
	},
	mutations:{
		

		changeName(state,{text, index}){
            
			state.tasks[index].name = text
	}
   }
})