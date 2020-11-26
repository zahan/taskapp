<template>
  <li>
    <span v-bind:class="{ done: taskItem.completed }">
      <input type='checkbox' v-on:change="taskItem.completed = !taskItem.completed"/>
      <strong>{{ index + 1 }}</strong>
      {{ taskItem.title }}
    </span>
    <button class="rm" v-on:click="$emit('remove-task', taskItem.id)">&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    taskItem: {
      type: Object,
      require: true
    },
    index: Number
  }
}
</script>

<style scoped>
li {
  border: 1px #e2e2e2 solid;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  margin: 8px;
  border-radius: 24px;
}
.rm {
  background-color: tomato;
  color: white;
  border: none;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  cursor: pointer;
}
input {
  width: 20px;
  height: 20px;
  justify-self:center;
  margin: 7px 16px 0 8px;
  cursor: pointer;
}
.done {
  text-decoration: line-through;
}
</style>
