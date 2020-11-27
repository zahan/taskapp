<template>
  <ul>
    <userItem
    v-for = "user in users"
    v-bind:key = "user.id"
    v-bind:user = "user"

    v-on:user-accept = "userAccept"
    v-on:user-block = "userBlock"
    />
  </ul>
</template>

<script>
import userItem from './userItem'

export default {
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  components: {
    userItem
  },
  methods: {
    userAccept (id) {
      this.$emit('user-accept', id)
    },
    userBlock (id) {
      this.$emit('user-block', id)
    }
  }
}
</script>
