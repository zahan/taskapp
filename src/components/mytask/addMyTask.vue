<template>
  <form v-on:submit.prevent = "onSubmit">
    <input
    type="text"
    placeholder="Новая задача"
    v-model = "inputData"
    >
    <button type="submit">ADD</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      inputData: ''
    }
  },
  methods: {
    onSubmit () {
      this.$emit('task-data', this.inputData)
      this.inputData = ''
    }
  }
}
</script>
