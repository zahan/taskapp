<template>
  <ul>
    <taskItem
    v-for="task of mytasks"
    v-bind:key="task.id"
    v-bind:task="task"
     />
  </ul>
</template>

<script>
import taskItem from '@/components/mytask/taskItem'

export default {
  components: {
    taskItem
  },
  props: ['mytasks']
}
</script>
