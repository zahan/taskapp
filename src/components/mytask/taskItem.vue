<template>
  <li>
    <span v-bind:class="{ done: task.done }">
      <button
      v-if="!task.done"
      v-on:click="$emit('task-done', task.id)"
      >Done</button>

      <button
      v-else
      @click="$emit('task-ongoing', task.id)"
      >Ongoing</button>

      {{ task.taskname }}

      <button
      v-if="task.done"
      @click="$emit('to-archive', task.id)"
      >Archive</button>
    </span>
  </li>
</template>

<script>
export default {
  props: ['task']
}
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
