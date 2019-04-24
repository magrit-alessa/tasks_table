<template>
   <div>

    <v-app>
    
     <router-link to="/" class="back"> 

     <v-btn color="purple" dark>
         &larr; Back to table
        </v-btn>
      </router-link>
    <v-layout>
    <v-flex xs12 sm6 offset-sm3>
    <v-card>
    <div
      id="task"
      v-if="task"
    >
    
     <v-card-title primary-title class="purple lighten-4">
       <v-layout justify-center>
          <label-edit 
              style="cursor: pointer; color: white; font-size: 22px; font-weight: bold;" 
              v-bind:text="text" 
              v-on:text-updated-blur="textUpdateCallbackEnter"></label-edit>
               </v-layout > 
             </v-card-title>
             <v-container fill-height fluid>
              <v-layout fill-height>
               <v-flex xs12 align-end flexbox>
                  <div >Description: {{task.description}}</div>
                  <div>Creation Date: {{task.creation_date | formatDate}}</div>
                  <div>Physical progress: {{task.physical_progress}}</div>
                  <div>Actual effort: {{task.actual_effort}}</div>
                  <div>Estimated effort: {{task.estimated_effort}}</div>
                  <div>Start date: {{task.start_date| formatDate}}</div>
                  <div>Last date: {{task.due_date | formatDate}}</div>
                    </v-flex>
                   </v-layout>
                  </v-container>
                </div>

              </v-card>
            </v-flex>
          </v-layout>
      </v-app>
    </div>
  
  
</template>

<script>
import Vue from 'vue'
import {mapState, mapMutations, mapActions} from 'vuex'
import LabelEdit from 'label-edit'
import VueResource from'vue-resource'

Vue.use(VueResource)

export default {
  name: 'Task',
  data () {
    return {
       text: null,
       task: null,
       id: null
    }
  },
  components: {
    LabelEdit,
  },
   methods: {
    textUpdateCallbackEnter: function(text){
      this.text = text;
      Vue.http.put('https://magrit-alessa.github.io/tasksApi/tasks.json', this.text)
      .then( response => console.log(response))
      this.$store.dispatch('changeName',{text: this.text, index: this.id})
    },

  },
  computed:{
    ...mapState(['tasks']),
    ...mapActions( ['changeName'])
  },
  created(){
    this.id = this.$route.params.id
    this.task = this.tasks[this.id]
    this.text = this.tasks[this.id].name
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back{
  position: absolute;
  left:1.5%;
  top:-2%;
  text-decoration: none;
}

</style>
