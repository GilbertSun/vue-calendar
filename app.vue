<template>
  <div class="main">
    <div>
      <h1 class="title">calendar demo</h1>
      <calendar-demo></calendar-demo>
    </div>
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: 'Hiragino Sans GB', 'Microsoft Yahei', SimSun, Tahoma, Arial, Helvetica, STHeiti;
  }
  .title {
    text-align: center;
    padding: 10px;
    color: #31b29c;
  }
</style>

<script>
  import CalendarDemo from './calendar-demo.vue'

  export default {
    components: {
      CalendarDemo
    }
  }
</script>

