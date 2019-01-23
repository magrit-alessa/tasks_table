import Vue from 'vue'
import Vuex from 'vuex'
import { createLocalVue, shallowMount, config } from '@vue/test-utils'
import TableTasks from '@/components/TableTasks'
import tasks from '@/assets/tasks.json'

config.mocks.$store = {
  state:{
  	 tasks:[{
		    "id": 30,
		    "name": "Today_task30",
		    "creation_date": "2015-04-21T06:50:21",
		    "due_date": "2015-04-22T23:59:00",
		    "start_date": "2015-04-21T00:00:01",
		    "is_completed": false,
		    "is_archived": false,
		    "estimated_effort": 5.5,
		    "actual_effort": 3.3,
		    "physical_progress": 60,
		    "obj_status": "active",
		    "description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
		    "project_id": 0
		  }]
    
  }
  
}


describe('TableTask.vue', () => {
	 const $route = {
	  path: '/'
   }

  it('should render correct contents', () => {
  
  const wrapper = shallowMount(TableTasks)
 
   expect(wrapper.contains('tbody > tr > td')).toBe(true)
  })
})
