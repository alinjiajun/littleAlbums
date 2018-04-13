<template>
  <div class="albums">
      <el-row :gutter="20" v-if="activeName == 'albums'">
        <el-col v-for="name in allAlbumsDirName" :key="name" :span="4"><a class="grid-content" href="javascript:;" @click="showPic(name)"><img src="../assets/wenjianjia.png" alt="xx"><p>{{name}}</p></a></el-col>
      </el-row>
      <div v-if="activeName == 'picture'">
        <div style="text-align: left;">
            <el-button  type="primary" @click="backToAlbums">返回</el-button>
        </div>
        <MyPicture :pictureArr="pictureArr"></MyPicture>
      </div>
  </div>
</template>

<script>
import MyPicture from '@/components/MyPicture.vue'
export default {
  data() {
      return {
          activeName: 'albums',
          allAlbumsDirName: [],
          pictureArr: []
      }
  },
  methods: {
      showPic(name) {
        this.$http.get('/api/getPictureSrc',{params:{name: name}}).then(res => {
          this.pictureArr = res.data.message;
          this.activeName = 'picture';
        }).catch(err => {
          console.log(err)
        })
        
      },
      backToAlbums() {
        this.activeName = 'albums';
      },
      getAllalbumDirName() {
        this.$http.get('/api/getAllalbumDirName').then(res => {
          this.allAlbumsDirName = res.data.message
        }).catch(err =>{
          console.log('err', err);
        })
      }
  },
  components: {
    MyPicture,
  },
  created() {
    this.getAllalbumDirName();
  },
  watch: {
    '$store.state.addDirCount': {
      handler() {
        alert(1);
      }
    }
  },
}
</script>
<style>
  a{text-decoration: none;}
</style>

