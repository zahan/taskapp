<template>
  <ul>
    <archivedItem
    v-for="task in archived"
    :key="task.id"
    :task="task"
    @activate-task="activateTask"
    />
  </ul>
</template>

<script>
import archivedItem from '@/components/archived/archivedItem'

export default {
  props: {
    archived: {
      type: Array,
      required: true
    }
  },
  components: {
    archivedItem
  },
  methods: {
    activateTask (task) {
      this.$emit('activate-task', task)
      console.log(task)
    }
  }
}
</script>
