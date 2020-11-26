<template>
  <div>
    <addTask />
    <hr/>
    <taskList
    v-if = "mytasks.length"
    v-bind:mytasks = "mytasks"
    />
    <p v-else>No tasks yet</p>
    <usersList
    v-bind:users = "users"

    v-on:user-accept = "userAccept"
    v-on:user-block = "userBlock"
    />
  </div>
</template>

<script>
import addTask from '@/components/addTask.vue'
import taskList from '@/components/mytask/taskList.vue'
import usersList from '@/components/mytask/usersList'

export default {
  props: {
    users: {
      type: Array,
      required: true
    },
    mytasks: {
      type: Array,
      required: true
    }
  },
  components: {
    addTask, taskList, usersList
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
