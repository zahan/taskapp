<template>
  <ul>
    <taskItem
    v-for="task of mytasks"
    v-bind:key="task.id"
    v-bind:task="task"

    v-on:task-done="taskDone"
    @task-ongoing="taskOngoing"
     />
  </ul>
</template>

<script>
import taskItem from '@/components/mytask/taskItem'

export default {
  methods: {
    taskDone (id) {
      this.$emit('task-done', id)
    },
    taskOngoing (id) {
      this.$emit('task-ongoing', id)
    }
  },
  components: {
    taskItem
  },
  props: ['mytasks']
}
</script>
