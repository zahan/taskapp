<template>
  <div>
    <addMyTask
    v-on:task-data = "taskData"
    />
    <hr/>
    <taskList
    v-if = "mytasks.length"
    v-bind:mytasks = "mytasks"

    v-on:task-done="taskDone"
    @task-ongoing="taskOngoing"
    />
    <p v-else>No tasks yet</p>
    <usersList
    v-bind:users = "users"

    v-on:user-accept = "userAccept"
    v-on:user-block = "userBlock"
    />
  </div>
</template>

<script>
import taskList from '@/components/mytask/taskList.vue'
import usersList from '@/components/users/usersList'
import addMyTask from '@/components/mytask/addMyTask'

export default {
  props: {
    users: {
      type: Array,
      required: true
    },
    mytasks: {
      type: Array,
      required: true
    }
  },
  components: {
    taskList, usersList, addMyTask
  },
  methods: {
    userAccept (id) {
      this.$emit('user-accept', id)
    },
    userBlock (id) {
      this.$emit('user-block', id)
    },
    taskData (task) {
      this.$emit('task-data', task)
    },
    taskDone (id) {
      this.$emit('task-done', id)
    },
    taskOngoing (id) {
      this.$emit('task-ongoing', id)
    }
  }
}
</script>
