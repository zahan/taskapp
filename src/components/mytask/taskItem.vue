<template>
  <li class="task">
    <span v-bind:class="{ done: task.done }">

      <button class="archive-button"
      v-if="task.done"
      @click="$emit('to-archive', task.id)"
      ><img src="@/assets/minus.svg"/></button>

      <p>{{ task.taskname }}</p>

      <button class="done-button"
      v-if="!task.done"
      v-on:click="$emit('task-done', task.id)"
      ></button>

      <button class="ongoing-button"
      v-else
      @click="$emit('task-ongoing', task.id)"
      ><img src="@/assets/tick.svg"/></button>

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
