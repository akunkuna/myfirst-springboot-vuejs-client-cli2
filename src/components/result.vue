<template>
    <el-row>
      <el-col :span="24">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>検索結果画像一覧</span>
                </div>
                <div></div>
                <div>
                    <el-button icon="el-icon-search" @click="buttonClick" circle></el-button>
                    <el-button type="primary" icon="el-icon-edit" circle></el-button>
                    <el-button type="success" icon="el-icon-check" circle></el-button>
                    <el-button type="info" icon="el-icon-message" circle></el-button>
                    <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                    <el-button type="danger" icon="el-icon-delete" circle></el-button>
                </div>
            </el-card>
        </el-col>
      <viewer>
      <el-col :span="4" v-for="cell in gridData" :key="cell" :offset="0">
        <el-card :body-style="{ padding: '0px'}">
          <div v-if="cell.type == 'image'">
                <img v-bind:src="cell.src" class="image">
          </div>
          <div v-else-if="cell.type == 'video'">
                <video-player class="vjs-custom-skin" id="video-id"
                               :ref="cell.videoPlayer"
                               :options="cell.playerOptions"
                               :playsinline="true"
                               @play="onPlayerPlay($event)"
                               @pause="onPlayerPause($event)"
                               @ended="onPlayerEnded($event)"
                               @loadeddata="onPlayerLoadeddata($event)"
                               @waiting="onPlayerWaiting($event)"
                               @playing="onPlayerPlaying($event)"
                               @timeupdate="onPlayerTimeupdate($event)"
                               @canplay="onPlayerCanplay($event)"
                               @canplaythrough="onPlayerCanplaythrough($event)"
                               @ready="playerReadied($event, cell.startTime)"
                               @statechanged="playerStateChanged($event)">
                </video-player>
          </div>
          <div style="padding: 7px;">
            <span>{{params[1]}}</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button" @click="imgClick">操作Button</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      </viewer>
    </el-row>
</template>
<script>
import videojs from 'video.js'

export default {
  data () {
    return {
      params: this.$route.query,
      gridData: [
        {
          type: 'video',
          videoPlayer: 'videoPlayer01',
          startTime: 10,
          playerOptions: {
            height: '180',
            autoplay: false,
            muted: true,
            language: 'en',
            playbackRates: [0.7, 1.0, 1.5, 2.0],
            sources: [{
              type: 'video/mp4',
              src: require('../assets/videos/oceans.mp4')
            }],
            // poster: require('../assets/images/ham01.png'),
            controlBar: {
              timeDivider: false,
              durationDisplay: false,
              remainingTimeDisplay: false,
              volumePanel: false,
              playbackRateMenuButton: false,
              fullscreenToggle: true
            }
          }
        },
        {
          type: 'video',
          videoPlayer: 'videoPlayer02',
          startTime: 20,
          playerOptions: {
            height: '180',
            autoplay: false,
            muted: true,
            language: 'en',
            playbackRates: [0.7, 1.0, 1.5, 2.0],
            sources: [{
              type: 'video/mp4',
              src: 'http://vjs.zencdn.net/v/oceans.mp4'
            }],
            // poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg',
            controlBar: {
              timeDivider: false,
              durationDisplay: false,
              remainingTimeDisplay: false,
              volumePanel: false,
              playbackRateMenuButton: false,
              fullscreenToggle: true
            }
          }
        },
        {
          type: 'video',
          videoPlayer: 'videoPlayer03sss',
          startTime: 30,
          playerOptions: {
            height: '180',
            autoplay: false,
            muted: true,
            language: 'en',
            playbackRates: [0.7, 1.0, 1.5, 2.0],
            sources: [{
              type: 'video/mp4',
              src: 'http://vjs.zencdn.net/v/oceans.mp4'
            }],
            // poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg',
            controlBar: {
              timeDivider: false,
              durationDisplay: false,
              remainingTimeDisplay: false,
              volumePanel: false,
              playbackRateMenuButton: false,
              fullscreenToggle: true
            }
          }
        },
        {
          type: 'video',
          videoPlayer: 'videoPlayer04',
          startTime: 40,
          playerOptions: {
            height: '180',
            autoplay: false,
            muted: true,
            language: 'en',
            playbackRates: [0.7, 1.0, 1.5, 2.0],
            sources: [{
              type: 'video/mp4',
              src: 'http://vjs.zencdn.net/v/oceans.mp4'
            }],
            // poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg',
            controlBar: {
              timeDivider: false,
              durationDisplay: false,
              remainingTimeDisplay: false,
              volumePanel: false,
              playbackRateMenuButton: false,
              fullscreenToggle: true
            }
          }
        },
        {type: 'image', src: require('../assets/images/ham02.jpg')},
        {type: 'image', src: require('../assets/images/ham01.png')}
      ]
    }
  },
  methods: {
    buttonClick: function () {
      this.$router.push({ path: 'search' })
    },
    onPlayerLoadeddata: function () {
    },
    playerReadied: function (e, t) {
      // var myPlayer = this.$refs.videoPlayer03sss[0].player
      var myPlayer = e
      // console.log(myPlayer)
      myPlayer.currentTime(t)

      var markerDiv = videojs.dom.createEl('div', {}, {
        'data-marker-key': 1111,
        'data-marker-time': 2222,
        'border-radius': '30%',
        'z-index': '99998'
      })
      // markerDiv.style.left = '10%'
      markerDiv.style.height = '100%'
      markerDiv.style.marginLeft = '50%'
      markerDiv.style.width = '4px'
      markerDiv.style.backgroundColor = 'red'
      markerDiv.style.position = 'absolute'
      markerDiv.style.zIndex = 99999999999
      myPlayer.el().querySelector('.vjs-progress-holder').appendChild(markerDiv)
      // console.log(this.params)
    },
    onPlayerPlay: function () {
      // var myPlayer = this.$refs.videoPlayer01[0].player
      // console.log(myPlayer)
      // myPlayer.currentTime(40)
    }
  }
}

</script>

<style>

.image {
  width: 100%;
  display: block;
  height: 180px;
}

</style>
