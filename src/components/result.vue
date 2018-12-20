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
                <!-- div class="player">
                  <video-player  class="vjs-custom-skin"
                                 ref="videoPlayer"
                                 :options="playerOptions"
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
              </div -->
            </el-card>
        </el-col>
      <viewer>
      <el-col :span="4" v-for="(o) in 10" :key="o" :offset="0">
        <el-card :body-style="{ padding: '0px'}">
          <div v-if="o % 2 == 0">
                <img src="../assets/images/ham02.jpg" class="image">
          </div>
          <div v-else>
                <video-player class="vjs-custom-skin"
                               ref="videoPlayer"
                               :options="playerOptions"
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
              <!-- time class="time">{{ currentDate }}</time -->
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
      currentDate: new Date(),
      // videojs options
      playerOptions: {
        height: '180',
        autoplay: false,
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          // mp4
          src: 'http://vjs.zencdn.net/v/oceans.mp4'
          // webm
          // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
        }],
        poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg',
        controlBar: {
          timeDivider: false,
          durationDisplay: false,
          remainingTimeDisplay: false,
          volumePanel: false,
          // playToggle: false,
          // progressControl: false,
          remainingTimeDisplay: false,
          playbackRateMenuButton: false,
          fullscreenToggle: true
        }
      }
    }
  },
  methods: {
    buttonClick: function () {
      this.$router.push({ path: 'search' })
    }
  }
}

</script>

<style>

.image {
  width: 100%;
  display: block;
}

</style>
