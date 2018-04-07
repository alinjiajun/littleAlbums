<template>
  <div class="albums">
      <el-row :gutter="20">
        <el-col v-for="name in allAlbumsDirName" :key="name" :span="4"><a class="grid-content" href="javascript:;"><img src="../assets/wenjianjia.png" alt="xx"><p>{{name}}</p></a ></el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  data() {
      return {
          allAlbumsDirName: []
      }
  },
  methods: {
      
  },
  created() {
    this.$http.get('/api/getAllalbumDirName').then(res => {
      this.allAlbumsDirName = res.data.message
    }).catch(err =>{
      console.log('err', err);
    })
  }
}


</script>
