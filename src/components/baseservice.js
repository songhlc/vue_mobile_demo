import Vue from 'vue'
import {$baselogin} from '../config'

function get (url, data, success, error) {
  Vue.http.get(url).then((response) => {
    if (success) {
      success(response.data)
    }
  }, (response) => {
    if (response.data) {
      if (response.data.indexOf('auth check error') >= 0) {
        window.location.href = $baselogin
      }
    }
    if (error) {
      error(response)
    }
  })
}

function post (url, data, success, error) {
  Vue.http.post(url).then((response) => {
    if (success) {
      success(response.data)
    }
  }, (response) => {
    if (error) {
      error(response)
    }
  })
}

export default {
  get: get,
  post: post
}
