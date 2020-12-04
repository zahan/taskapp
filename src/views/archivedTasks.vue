<template>
  <div>
    <archivedList
    v-if = "archived.length"
    v-bind:archived = "archived"
    @activate-task="activateTask"
    />
    <p class="notask" v-else>🤷‍♂ Архив задач пуст</p>

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
