<template>
   
    <div
      id="task"
      style="max-width: 70%; margin: auto;"
      class="purple lighten-5 headline"
      v-if="task"
    >
       <div>
         <label-edit 
         style="cursor: pointer;" 
         class=" mb-0 white--text deep-purple lighten-2 " v-bind:text="text" 
         v-on:text-updated-enter="textUpdateCallbackEnter"></label-edit> 
       </div>
      <div >Description: {{task.description}}</div>
      <div  class="deep-purple lighten-3 white--text">Creation Date: {{task.creation_date | formatDate}}</div>
      <div>Physical progress: {{task.physical_progress}}</div>
      <div class="deep-purple lighten-3 white--text">Actual effort: {{task.actual_effort}}</div>
      <div>Estimated effort: {{task.estimated_effort}}</div>
      <div class="deep-purple lighten-3 white--text">Start date: {{task.start_date| formatDate}}</div>
      <div>Last date: {{task.due_date | formatDate}}</div>
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

</style>
