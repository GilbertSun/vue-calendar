<template>
  <calendar :view="view" :decorate="decorate">
    <div class="actions" slot="action">
      <div class="action" @click="changeView">{{viewName}}</div>
      <div class="action" @click="addEvent">加</div>
    </div>
  </calendar>
</template>

<style scoped>
  .action {
    display: inline-block;
    padding: 5px;
    border-radius: 2px;
    background: #31b29c;
    color: #fff;
  }
</style>

<script>
  import moment from 'moment'
  import Calendar from '../src/calendar.vue'
  export default {
    data() {
      return {
        view: 'week',
        decorate: {}
      }
    },
    computed: {
      viewName: {
        get() {
          if (this.view === 'week') {
            return '月'
          } else if (this.view === 'month') {
            return '周'
          }
        }
      }
    },
    methods: {
      changeView() {
        if (this.view === 'week') {
          this.view = 'month'
        } else if (this.view === 'month') {
          this.view = 'week'
        }
      },
      addEvent() {
        let flag = window.confirm('是否给明天添加一条事件')
        let today = new Date()
        if (flag) {
          this.decorate = Object.assign({}, this.decorate, {
            [moment(new Date()).add(1, 'day').format('YYYY-MM-DD')]: true
          })
        }
      }
    },
    components: {
      Calendar
    }
  }
</script>

