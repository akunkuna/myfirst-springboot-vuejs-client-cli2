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
                <video-player class="vjs-custom-skin"
                               ref="videoPlayer"
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
                               @ready="playerReadied"
                               @statechanged="playerStateChanged($event)">
                </video-player>
          </div>
          <div style="padding: 7px;">
            <span>Hambuger</span>
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
export default {
  name: 'Currency',
  data () {
    return {
      gridData: [
        {type: 'image', src: require('../assets/images/ham02.jpg')},
        {type: 'image', src: require('../assets/images/ham01.png')},
        {
          type: 'video',
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
            poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg',
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
          playerOptions: {
            height: '180',
            autoplay: true,
            muted: true,
            language: 'en',
            playbackRates: [0.7, 1.0, 1.5, 2.0],
            sources: [{
              type: 'video/mp4',
              src: 'http://vjs.zencdn.net/v/oceans.mp4'
            }],
            poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg',
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
        {type: 'image', src: require('../assets/images/ham01.png')},
        {type: 'image', src: require('../assets/images/ham02.jpg')},
        {type: 'image', src: require('../assets/images/ham01.png')},
        {
          type: 'video',
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
            poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg',
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
          playerOptions: {
            height: '180',
            autoplay: true,
            muted: true,
            language: 'en',
            playbackRates: [0.7, 1.0, 1.5, 2.0],
            sources: [{
              type: 'video/mp4',
              src: 'http://vjs.zencdn.net/v/oceans.mp4'
            }],
            poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg',
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
      // this.$router.push({ path: 'search' })
      console.log('video loaded')
      console.log(this.playerOptions.sources[0])
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
