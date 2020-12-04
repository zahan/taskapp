<template>
  <div id="app">
    <div class="wrapper">
      <div class="counter">
        <h3>Осталось сделать</h3>
        <span class="big_counter">{{ arrLength }}</span>
      </div>
      <addMyTask
      v-on:task-data = "addTask"
      />
      <hr/>
      <taskList
      v-if="ongoingTasksList.length"
      v-bind:mytasks="ongoingTasksList"

      v-on:task-done="taskDone"
      />
      <p class="notask" v-else>🤘 Все сделано</p>

      <nav>
        <router-link active-class="active" exact="true" to = "/archived">Архив</router-link>
        <router-link active-class="active" exact="true" to = "/">Сделано</router-link>
      </nav>
      <router-view
      v-bind:mytasks ="mytasks"
      v-bind:archived="archived"

      v-on:task-done ="taskDone"
      @task-ongoing="taskOngoing"
      @to-archive="toArchive"
      @activate-task="activateTask"
      />
    </div>

  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');
@import './assets/style.scss';
</style>

<script>
import addMyTask from '@/components/mytask/addMyTask'
import taskList from '@/components/mytask/taskList.vue'

export default {
  components: {
    addMyTask, taskList
  },
  data () {
    return {
      // Я вынес архивные задачи в одельный массив это норм?
      mytasks: [
        { id: 1, taskname: 'Купить молочка', done: false },
        { id: 2, taskname: 'Купить хлебушка', done: false },
        { id: 3, taskname: 'Купить сметанки', done: false }
      ],
      archived: [
        { id: 909, taskname: 'Купить вафелек' },
        { id: 910, taskname: 'Купить печенек x3' }
      ]
    }
  },
  methods: {
    addTask (task) {
      if (task.length) {
        const newTask = {
          // Как создавать айдишники правильно?
          id: Date.now(),
          taskname: task,
          done: false
        }
        this.mytasks.push(newTask)
      }
    },
    taskDone (id) {
      const currentTask = this.mytasks.find(t => t.id === id)
      currentTask.done = true
    },
    taskOngoing (id) {
      const currentTask = this.mytasks.find(t => t.id === id)
      currentTask.done = false
    },
    // Правильно передавать сюда только айди компонента или лучше весь объект?
    // Как лучше перенести объект в другой массив?
    toArchive (id) {
      const currentTask = this.mytasks.find(t => t.id === id)
      const archivedTask = {
        id: Date.now(),
        taskname: currentTask.taskname
      }
      this.archived.push(archivedTask)
      // Как правильно удалить объект из массива
      const currentIndex = this.mytasks.indexOf(currentTask)
      this.mytasks.splice(currentIndex, 1)
    },
    activateTask (task) {
      const rebornTask = {
        id: task.id,
        taskname: task.taskname,
        done: false
      }
      this.mytasks.unshift(rebornTask)
      // Можно использовать одни и те же названия переменных?
      const currentIndex = this.archived.indexOf(task)
      this.archived.splice(currentIndex, 1)
    }
  },
  computed: {
    // Может можно посчитать активные задачи короче?
    arrLength () {
      return this.mytasks.filter(t => !t.done).length
    },
    ongoingTasksList () {
      return this.mytasks.filter(t => !t.done)
    }
  }
}
</script>
