<template>
  <div id="app">
    <router-view/>

    <!-- <TableTasks/>
    -->
     <!-- <div v-for="task in tasks">{{task.id}}</div> -->
  </div>
</template>

<script>

// import TableTasks from './components/TableTasks.vue'
 
export default {
  name: 'App',
  data(){
     return {
       
     }

  }

  


}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
