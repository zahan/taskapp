<template>
  <div>
    <addMyTask
    v-on:task-data = "taskData"
    />
    <hr/>
    <span class="big_counter">{{ arrLength }}</span>
    <hr/>
    <taskList
    v-if = "ongoingTasksList.length"
    v-bind:mytasks = "ongoingTasksList"

    v-on:task-done="taskDone"
    @task-ongoing="taskOngoing"
    />
    <p v-else>No tasks yet</p>
    <h3>Done</h3>
    <hr/>
    <taskList
    v-if = "doneTasksList.length"
    v-bind:mytasks = "doneTasksList"

    v-on:task-done="taskDone"
    @task-ongoing="taskOngoing"
    @to-archive="toArchive"
    />
    <p v-else>No tasks yet</p>
    <hr/>
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
    },
    toArchive (id) {
      this.$emit('to-archive', id)
    }
  },
  computed: {
    doneTasksList () {
      return this.mytasks.filter(t => t.done)
    },
    ongoingTasksList () {
      return this.mytasks.filter(t => !t.done)
    },
    // Может можно посчитать активные задачи короче?
    arrLength () {
      const doneCounter = this.mytasks.filter(t => !t.done)
      return doneCounter.length
    }
  }
}
</script>
