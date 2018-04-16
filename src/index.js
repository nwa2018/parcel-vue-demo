import Vue from 'vue'
import App from './page/index'

import { sleep } from './utils'

import './assets/style/reset.styl'

async function init () {
  new Vue({
    el: '#app',
    render: h => h(App)
  })

  await sleep(1000)
  console.log('Vue width parcel', App)
}

init()

module.hot && module.hot.accept()
