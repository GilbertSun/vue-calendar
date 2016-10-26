<template>
  <div class="calendar">
    <div class="calendar__header" v-bind:style="{'background': headerBackgroundColor}">
      <!-- 年份 月份 -->
      <div class="calendar__control">
        <div class="calendar__arrow" @click="prevView">❮</div>
        <div class="calendar__indicator">
          <span class="calendar__year">{{startDate.getFullYear()}}</span>
          <span class="calendar__month">{{startDate.getMonth() + 1}}月</span>
        </div>
        <div class="calendar__arrow" @click="nextView">❯</div>
      </div>
      <!-- 星期 -->
      <div class="calendar__weekdays" v-bind:style="{'background-color': headerBackgroundColor}">
        <div v-for="weekDay in weekDays">{{weekDay}}</div>
      </div>
    </div>
    <!-- 日期 -->
    <div class="calendar__days">
      <div class="calendar__day" v-for="day in days" :class="{'calendar__day_now': checkToday(day), 'calendar__day_selected': checkSelected(day), 'calendar__day_othermonth': checkOtherMonth(day), 'calendar__day_decorate': checkDecorate(day)}" @click="select(day)">
        <span v-if="checkSelected(day)" v-bind:style="{'background': selectedItemColor}">{{day.getDate()}}</span>
        <span v-else>{{day.getDate()}}</span>
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
    decorate: {
      type: Object,
      'default'() {
        return {}
      }
    },
    selected: {
      type: Date,
      'default'() {
        return new Date()
      }
    },
    view: {
      type: String,
      'default': 'month'
    },
    currentView: {
      type: Object,
      'default'() {
        return {}
      }
    },
    headerBackgroundColor: {
      type: String,
      'default': '#77c3f4'
    },
    selectedItemColor: {
      type: String,
      'default': '#379ff4'
    }
  },
  data() {
    return {
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
  },
  watch: {
    days() {
      this.currentView = {
        start: this.days[0],
        end: this.days[this.days.length - 1]
      }
    }
  },
  methods: {
    checkToday(day) {
      let now = new Date()
      return !!(
        day.getFullYear() === now.getFullYear() &&
        day.getMonth() === now.getMonth() &&
        day.getDate() === now.getDate()
      )
    },
    checkSelected(day) {
      return !!(
        day.getFullYear() === this.selected.getFullYear() &&
        day.getMonth() === this.selected.getMonth() &&
        day.getDate() === this.selected.getDate()
      )
    },
    checkOtherMonth(day) {
      return day.getMonth() !== this.startDate.getMonth()
    },
    checkDecorate(day) {
      let dateFormat = day.getFullYear() + '-' + ('0' + (day.getMonth() + 1)).slice(-2) + '-' + ('0' + (day.getDate())).slice(-2)
      return !!this.decorate[dateFormat]
    },
    prevView() {
      if (this.view === 'month') {
        this.startDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth() - 1, this.startDate.getDate())
      } else {
        this.startDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate() - 7)
      }
    },
    nextView() {
      if (this.view === 'month') {
        this.startDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth() + 1, this.startDate.getDate())
      } else {
        this.startDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate() + 7)
      }
    },
    select(day) {
      this.selected = day
    }
  },
  ready() {
    this.currentView = {
      start: this.days[0],
      end: this.days[this.days.length - 1]
    }
  }
}
</script>

<style scoped>
.calendar {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.1), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
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
      font-size: 2rem;
      padding: 30px;
    }
  }
  & .calendar__weekdays {
    margin: 0;
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    color: #fff;
    justify-content: space-around;
  }
  & .calendar__days{
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 10px;
    background: #fff;


    & .calendar__day {
      flex: 0 0 auto;
      display: inline-block;
      width: 14.2%;
      text-align: center;
      padding: 10px 0;
      color: #000;
      & span {
          display: inline-block;
          width: 36px;
          height: 36px;
          line-height: 36px;
          text-align: center;
      }
      &.calendar__day_now {
        & span {
            border-radius: 50%;
            background: #ccc;
            color: #fff !important;
        }
      }
      &.calendar__day_selected {
        & span {
          border-radius: 50%;
          color: #fff;
        }
      }
      &.calendar__day_othermonth {
        & span {
          border-radius: 50%;
          color: #ccc;
        }
      }
      &.calendar__day_decorate {
        position: relative;

        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ccc;
        }
      }
    }
  }
}
</style>
