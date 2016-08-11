import Vue from 'vue'
import Calendar from './calendar.vue'

new Vue({
  el: 'body',
  data: {
    selected: new Date(),
    decorate: {
      '2016-08-09': true,
      '2016-08-10': true,
      '2016-08-11': true
    }
  },
  components: {
    Calendar
  }
})
