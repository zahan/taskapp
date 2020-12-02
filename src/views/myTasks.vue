<template>
  <div>
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
  </div>
</template>

<script>
import taskList from '@/components/mytask/taskList.vue'

export default {
  props: {
    mytasks: {
      type: Array,
      required: true
    }
  },
  components: {
    taskList
  },
  methods: {
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
    }
  }
}
</script>
