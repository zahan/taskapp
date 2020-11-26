<template>
  <div>
    <ul>
      <toDoItem
      v-for="(task, i) of tasks"
      v-bind:taskItem="task"
      v-bind:key="task.id"
      v-bind:index="i"
      v-on:remove-task="removeTaskItem" />
    </ul>
  </div>
</template>

<script>
import toDoItem from './toDoItem'

export default {
  props: ['tasks'],
  components: {
    toDoItem
  },
  methods: {
    removeTaskItem (id) {
      this.$emit('remove-task', id)
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
