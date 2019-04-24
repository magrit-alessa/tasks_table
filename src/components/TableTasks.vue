<template>
  <div>

     <table class="elevation-3">
      <thead>
        <tr>
          <td>Task name</td>
          <td>Tegs</td>
          <td>Actual effort</td>
          <td> Estimated effort</td>
          <td>Due date</td>
        </tr>
      </thead>
      <tbody v-if="task.obj_status === 'active'" v-for="(task , index) in tasks">
        <tr>
        <td> <router-link :to="{name:'task', params: {id: index}}" v-bind:class="{high_priority: (task.is_high_priority === true)}"> {{task.name}}</router-link></td>
        <td>
          <ul v-for="tag in task.tags">
            <li>{{tag}}</li>
          </ul>
         </td>
        <td>{{task.actual_effort}}</td>
        <td>{{task.estimated_effort}}</td>
        <td>{{ task.due_date | formatDate}}</td>
       </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  name: 'TableTasks',
  computed:{
    ...mapState(['tasks']),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table{
  width: 100%;
  font-size: 17px ;

}
td{
  height: 35px;
  border-bottom: 1px solid rgba(224, 224, 224, 0.4);
}
thead{
  background-color: #E0E0E0;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  display: inline-block;
}
li {
  display: inline-block;
  margin: 0 5px;
}
a {
  color: #42b983;
}

tbody tr:hover{
  background-color: #C8E6C9;
}

.high_priority{
  color: #880E4F;
}
</style>
