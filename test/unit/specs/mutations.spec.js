import Vue from 'vue'
import Vuex from 'vuex'
import {mutations} from '@/store/index'
import tasks from '@/assets/tasks.json'



describe('mutations', () => {
	let state = {
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
	 
  it('mutations', () => {
  
  const text = "text"
  const index = 0

  mutations.CHANGE_NAME(state, {text, index})
  expect(state.tasks[index].name).toBe("text")
   
  })
})
