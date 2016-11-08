<template>
  <calendar :decorate="decorate" :view="'week'" :header-background-color="headerBackgroundColor" :selected.sync="selected" :current-view.sync="currentView" :indicator="indicator">
    <div slot="action" class="action">日</div>
  </calendar>
</template>

<style scoped>
  .action {
    padding: 5px;
    border-radius: 2px;
    background: #31b29c;
    color: #fff;
  }
</style>

<script>
  import Calendar from '../src/calendar.vue'
  export default {
    data() {
      return {
        selected: new Date(),
        decorate: {
          '2016-11-07': true,
          '2016-08-10': true,
          '2016-08-11': true
        },
        indicator: {
          title: '2016年第一学期',
          detail: '17周'
        },
        headerBackgroundColor: '#77c3f4',
        currentView: {}
      }
    },
    components: {
      Calendar
    }
  }
</script>

