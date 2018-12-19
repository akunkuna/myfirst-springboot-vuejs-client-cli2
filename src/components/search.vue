<template>
    <el-row>
        <el-col :span="24">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>画像の全文検索</span>
                </div>
                <div style="margin-top: 15px;">
                    <el-input
                      placeholder="Please input"
                      v-model="input10"
                      clearable
                      class="input-with-button">
                      <el-button type="primary" slot="append" icon="el-icon-search" @click="buttonClick">Search</el-button>
                    </el-input>
                </div>
                <div style="margin-top: 15px;">
                    <el-button type="primary" icon="el-icon-edit" circle></el-button>
                    <el-button type="success" icon="el-icon-check" circle></el-button>
                    <el-button type="info" icon="el-icon-message" circle></el-button>
                    <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                    <el-button type="danger" icon="el-icon-delete" circle></el-button>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>
<script>

import axios from 'axios'

export default {
  name: 'Currency',
  data () {
    return {
      currencies: [],
      input10: ''
    }
  },
  created: async function () {
    await this.refresh()
  },
  methods: {
    refresh: async function () {
      // const res = await axios.get('http://localhost:8080/java')
      // this.curreneies = res.data.currencies
      console.info(this.currencies)
    },
    buttonClick: async function () {
      // const res = await axios.get('http://localhost:8080/java')
      // console.info(res)
      alert('クリックされました, 入力:[' + this.input10 + ']')
      this.$router.push({ path: 'result' })
    }
  }
}
</script>

<style>
.el-input {
  width: 500px;
}
.input-with-button {
  background-color: #fff;
}

</style>
