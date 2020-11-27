<template>
  <div>
    <addTask v-on:add-task="addTaskItem" />
    <select v-model="filter">
      <option value="all">All tasks</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not completed</option>
    </select>
    <hr />
    <loader v-if="loading" />
    <toDoList
      v-else-if="filteredTasks.length"
      v-bind:tasks="filteredTasks"
      v-on:remove-task="removeTaskItem"
    />
    <p v-else>No task yet %)</p>
  </div>
</template>

<script>
import toDoList from '@/components/publicTasks/toDoList'
import addTask from '@/components/publicTasks/addTask'
import loader from '@/components/loader'

export default {
  name: 'app',
  components: {
    toDoList, addTask, loader
  },
  mounted () {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => response.json())
      .then(json => {
        this.todos = json
        this.loading = false
      })
  },
  data () {
    return {
      todos: [],
      loading: true,
      filter: 'all'
    }
  },
  methods: {
    removeTaskItem (id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addTaskItem (newTask) {
      this.todos.push(newTask)
    }
  },
  computed: {
    filteredTasks () {
      if (this.filter === 'completed') {
        return this.todos.filter(t => t.completed)
      }
      if (this.filter === 'not-completed') {
        return this.todos.filter(t => !t.completed)
      }
      return this.todos
    }
  }
}
</script>

<style scoped>
  #app {
    font-family: 'Open Sanns', 'Arial';
    color: #1f1f1f;
  }
</style>
