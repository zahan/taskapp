<template>
  <li class="task">
    <span>
      <p>{{ task.taskname }}</p>
      <button class="revert-button"
      @click="$emit('activate-task', task)"
      ><img src="@/assets/revert.svg"/></button>
    </span>
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
