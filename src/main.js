// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui' // 追記
import locale from 'element-ui/lib/locale/lang/ja' // 追記
import 'element-ui/lib/theme-chalk/index.css' // 追記

import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

// require videojs style
// import videojs from 'video.js'
import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'
// import 'videojs-markers/dist/videojs.markers.css'
// import 'videojs-markers/dist/videojs-markers.js'

import VueVideoPlayer from 'vue-video-player'

Vue.config.productionTip = false
Vue.use(ElementUI, {locale}) // 追記

Vue.use(Viewer)
Viewer.setDefaults({
  Options: { 'inline': true, 'button': true, 'navbar': true, 'title': true, 'toolbar': true, 'tooltip': true, 'movable': true, 'zoomable': true, 'rotatable': true, 'scalable': true, 'transition': true, 'fullscreen': true, 'keyboard': true, 'url': 'data-source' }
})

Vue.use(VueVideoPlayer /* {
  options: global default options,
  events: global videojs events
} */)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
