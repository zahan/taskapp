<template>
  <div id="app">
    <h1>Task Monk ToDo List</h1>
    <nav>
      <router-link to = "/">Public Task</router-link>
      <router-link to = "/mytask">My Task </router-link>
    </nav>
    <router-view
    v-bind:users = "users"
    v-bind:mytasks = "mytasks"

    v-on:user-accept = "userAccept"
    v-on:user-block = "userBlock"
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
      console.log(id)
      const currentUser = this.users.find(item => item.id === id)
      currentUser.status = 'active'
    },
    userBlock (id) {
      const currentUser = this.users.find(u => u.id === id)
      currentUser.status = 'blocked'
    }
  }
}
</script>
