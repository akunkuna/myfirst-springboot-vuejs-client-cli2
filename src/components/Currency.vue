<template>
    <el-row>
        <el-col :span="24">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>仮想通貨一覧</span>
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
    </el-row>
</template>
<script>
export default {
  name: 'Currency'
}
</script>

<style scoped>

</style>
