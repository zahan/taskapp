<template>
  <li>
    <span>
      <input type="checkbox">
      {{ task.taskname }}
    </span>
  </li>
</template>

<script>
export default {
  props: ['task']
}
</script>
