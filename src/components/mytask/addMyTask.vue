<template>
  <form v-on:submit.prevent = "onSubmit">
    <input
    type="text"
    placeholder="Добавить ещё одно дело"
    v-model = "inputData"
    >
    <button class="addtaskbutton" type="submit">+</button>
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
