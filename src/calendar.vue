<template>
  <div class="calendar">
    <div class="calendar__header">
      <!-- 年份 月份 -->
      <div class="calendar__control">
        <div class="calendar__arrow">❮</div>
        <div class="calendar__indicator">
          <span class="calendar__year">{{startDate.getFullYear()}}</span>
          <span class="calendar__month">{{startDate.getMonth() + 1}}月</span>
        </div>
        <div class="calendar__arrow">❯</div>
      </div>
      <!-- 星期 -->
      <div class="calendar__weekdays">
        <div v-for="weekDay in weekDays">{{weekDay}}</div>
      </div>
    </div>
    <!-- 日期 -->
    <div class="calendar__days">
      <div class="calendar__day" v-for="day in days">
        <span>{{day.getDate()}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    startMonday: {
      type: Boolean,
      'default': false
    },
    startDate: {
      type: Date,
      'default'() {
        return new Date()
      }
    },
    view: {
      type: String,
      'default': 'month'
    }
  },
  data() {
    return {
      currentYear: (new Date).getFullYear(),
      currentMonth: (new Date).getMonth()
    }
  },
  computed: {
    days: {
      get() {
        let days = []
        let dayslength
        let startDay
        let leftPadding
        let startDate
        if (this.view === 'month') {
          dayslength = 35
          startDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth())
          startDay = startDate.getDay()
        } else {
          dayslength = 7
          startDate = this.startDate
          startDay = startDate.getDay()
        }
        if (this.startMonday) {
          leftPadding = startDay ? startDay - 1 : 6
        } else {
          leftPadding = startDay
        }

        Array.from({length: leftPadding}, (v, k) => -(k + 1)).reverse().forEach((minus) => {
          days.push(new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + minus))
        })
        days.push(startDate)
        Array.from({length: dayslength - days.length}, (v, k) => k + 1).forEach((plus) => {
          days.push(new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + plus))
        })
        return days
      }
    },
    weekDays: {
      get() {
        if (this.startMonday) {
          return ['一', '二', '三', '四', '五', '六', '日']
        } else {
          return ['日', '一', '二', '三', '四', '五', '六']
        }
      }
    }
  }
}
</script>

<style scoped>
.calendar {
  & .calendar__header {
    background: #00B8EC;
  }
  & .calendar__control {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    color: #fff;

    & .calendar__indicator {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }
    & .calendar__month {
      font-size: 30px;
    }
    & .calendar__arrow {
      padding: 30px;
    }
  }
  & .calendar__weekdays {
    margin: 0;
    padding: 10px 0;
    background-color: #00B8EC;
    display: flex;
    flex-wrap: wrap;
    color: #fff;
    justify-content: space-around;
  }
  & .calendar__days{
    background: #fff;
    display: flex;
    flex-wrap: wrap;

    & .calendar__day {
      flex: 0 0 auto;
      display: inline-block;
      width: 14.2%;
      text-align: center;
      padding: 25px 0;
      color: #000;
    }
  }
}
</style>
