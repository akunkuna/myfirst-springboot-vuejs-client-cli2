<template>
    <el-row>
      <el-col :span="24">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>検索結果画像一覧</span>
                </div>
                <div></div>
                <div>
                    <el-button icon="el-icon-search" circle></el-button>
                    <el-button type="primary" icon="el-icon-edit" circle></el-button>
                    <el-button type="success" icon="el-icon-check" circle></el-button>
                    <el-button type="info" icon="el-icon-message" circle></el-button>
                    <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                    <el-button type="danger" icon="el-icon-delete" circle></el-button>
                </div>
            </el-card>
        </el-col>
      <viewer>
      <el-col :span="4" v-for="(o) in 20" :key="o" :offset="0">
        <el-card :body-style="{ padding: '0px' }">
          <!-- img src="../assets/images/ham01.png" class="image" @click="imgClick" -->
          <div>
                <img src="../assets/images/ham01.png" class="image">
          </div>
          <div style="padding: 7px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button" @click="imgClick">操作按钮</el-button>
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
      currentDate: new Date()
    }
  },
  methods: {
    imgClick: function () {
      alert('クリックされました')
    }
  }
}

</script>

<style scoped>

</style>
