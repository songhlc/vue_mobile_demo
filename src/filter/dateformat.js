import Vue from 'vue'

Vue.filter('dateformat', (value,format='yyyy-MM-dd') => {
  return value.substring(0,10)
})
