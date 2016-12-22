vue-calendar
===
A calendar component for vue.js **compitable with vue 1.x**

## examples

website: [GilbertSun/vue-calendar](http://gilbertsun.github.io/vue-calendar)

## install & use

```
npm install vue-mobile-calendar
```

use in a vue component

```html
<template>
<calendar :view="'month'"></calendar>
</template>

<script>
import Calendar from 'vue-calendar-mobile'

export default {
  components: {
    Calendar
  }
}
</script>

```

## Develope

you want to change the source and see what's you change

```bash
$ make dev
```

it will server a locale demo page in http://localhost:8080

then you change change the source code in `src` directory

**refresh the demo page**

```bash
$ make deploy
```

**publish to npm**

```bash
$ make pub
```

## API

| prop                  | type    | description | example | default value |
|:----------------------|:--------|:-------------: |:-------- |:-------- |
| currentView           | Object  | cureent shown view | {}, simple pass a clean object | `{start: Object, end: Object}` |
| decorate              | Object  | control the date to have a dot docorate | `{'2016-08-09': true}` | {} |
| i18n                  | String  | control week name language | `'zh-cn', 'en'` | `'zh-cn'` |
| indicator             | Object  | control the header indicator default the year and month| `{title: ..., main: ...}` | `{}` |
| selected              | Date    | current select date | new Date(2016, 11, 6) | new Date() |
| startMonday           | Boolean | is the week start from monday, true for monday and false for sunday | true | false |
| startDate             | Date    | this start Date to control the first view to show startDate | new Date(2016, 11, 6) | new Date() |
| view                  | String  | show to month view of week view | 'month', 'week' | 'month' |
| centerHeader          | Boolean | control the calendar header position | true | false |

