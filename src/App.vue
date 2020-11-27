<template>
  <div id="app">
    <h1>Task Monk ToDo List</h1>
    <nav>
      <router-link to = "/public">Public Task</router-link>
      <router-link to = "/">My Task </router-link>
    </nav>
    <router-view
    v-bind:users = "users"
    v-bind:mytasks = "mytasks"

    v-on:user-accept = "userAccept"
    v-on:user-block = "userBlock"
    v-on:task-data = "addTask"
    v-on:task-done = "taskDone"
    @task-ongoing="taskOngoing"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      users: [
        { id: 1, userName: 'Valera', status: 'active' },
        { id: 2, userName: 'Anatoliy', status: 'moderate' },
        { id: 3, userName: 'Vasya', status: 'blocked' }
      ],
      mytasks: [
        { id: 1, taskname: 'Купить молочка', done: false },
        { id: 2, taskname: 'Купить хлебушка', done: false },
        { id: 3, taskname: 'Купить сметанки', done: false }
      ]
    }
  },
  methods: {
    userAccept (id) {
      console.log('Пользователь с ' + id + ' одобрен')
      const currentUser = this.users.find(item => item.id === id)
      currentUser.status = 'active'
    },
    userBlock (id) {
      console.log('Пользователь с ' + id + ' заблокирован')
      const currentUser = this.users.find(u => u.id === id)
      currentUser.status = 'blocked'
    },
    addTask (task) {
      if (task.length) {
        const newTask = {
          id: Date.now(),
          taskname: task,
          done: false
        }
        this.mytasks.push(newTask)
      }
    },
    taskDone (id) {
      const currentTask = this.mytasks.find(t => t.id === id)
      currentTask.done = true
    },
    taskOngoing (id) {
      const currentTask = this.mytasks.find(t => t.id === id)
      currentTask.done = false
    }
  }
}
</script>
