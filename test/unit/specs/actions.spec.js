import Vue from 'vue'
import Vuex from 'vuex'
import {actions} from '@/store/index'



describe('actions', () => {
  it ('tets actions arguments', () => {
    
   let index = 1
   let text = 'text'
   let commit = jest.fn()

    actions.changeName({ commit }, {text, index} )
      expect(index).toBe(1)
      expect(text).toBe('text')
       
  })
  
     
  })
  
  
 


