<template>
  <li
  v-bind:class="{
    blocked: user.status === 'blocked',
    moderate: user.status === 'moderate'
      }"
  >
    {{ user.userName }}
    <button
    v-if="user.status != 'active'"
    v-on:click="$emit('user-accept', user.id)"
    >Accept</button>
    <button
    v-else
    v-on:click="$emit('user-block', user.id)"
    >Block Him!</button>
  </li>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.blocked {
  color: red;
}
.moderate {
  color: gold;
}
</style>
