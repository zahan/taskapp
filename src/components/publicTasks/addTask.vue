<template>
  <form v-on:submit.prevent="onSubmit">
    <input type="text" v-model="taskData">
    <button type="submit">Add Task</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      taskData: ''
    }
  },
  methods: {
    onSubmit () {
      if (this.taskData.trim()) {
        const newTask = {
          id: Date.now(),
          title: this.taskData,
          completed: false
        }
        this.$emit('add-task', newTask)
        this.taskData = ''
      }
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
}
input {
  justify-content: space-between;
  width: 80%;
  margin-right: 8px;
}
</style>
