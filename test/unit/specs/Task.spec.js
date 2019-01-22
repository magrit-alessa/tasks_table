import Vue from 'vue'
import Vuex from 'vuex'
import { createLocalVue, shallowMount, config } from '@vue/test-utils'
import Task from '@/components/Task'
import tasks from '@/assets/tasks.json'

const localVue = createLocalVue()
localVue.use(Vuex)

config.mocks.$store = {
  state: {
    tasks
  }
}

describe('Task.vue', () => {
   const $route = {
	  path: '/',
	  params: { id: '1' }
   }

  it('should render correct contents', () => {
  	
    const wrapper = shallowMount(Task,{
	  mocks: {
       $route,
       localVue
     }
	}) 
    expect(wrapper.attributes().id).toBe('task')
  })
})
