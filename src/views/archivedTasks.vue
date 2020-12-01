<template>
  <div>
    <h3>Archived Tasks</h3>
    <hr/>
    <archivedList
    v-if = "archived.length"
    v-bind:archived = "archived"
    @activate-task="activateTask"
    />
    <p v-else>No tasks yet</p>

  </div>
</template>

<script>
import archivedList from '@/components/archived/archivedList.vue'

export default {
  props: {
    archived: {
      type: Array,
      required: true
    }
  },
  components: {
    archivedList
  },
  methods: {
    activateTask (task) {
      this.$emit('activate-task', task)
    }
  }
}
</script>
