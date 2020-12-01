<template>
  <li>
    {{ task.taskname }}
    <button
    @click="$emit('activate-task', task)"
    >Activate</button>
  </li>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  }
}
</script>
