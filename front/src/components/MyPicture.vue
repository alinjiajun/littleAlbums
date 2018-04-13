<template>
<div id="picture">
  <el-row :gutter="20">
    <el-col v-for="src in pictureArr" :key="src" :span="4"><img :src="src" alt="xx"><p class="picName">{{src.split('/')[src.split('/').length-1]}}</p></el-col>
  </el-row>
</div>
  
</template>

<script>
export default {
  data() {
    return {
      allPicture: []
    }
  },
  props: {
    pictureArr: {
      type: Array,
      default:[] 
    },
  },
}
</script>
<style lang="scss" scoped>
  .picName{text-align: center;}
  #picture{
    padding: 10px;
    img{max-width: 100%;}
  } 
</style>


