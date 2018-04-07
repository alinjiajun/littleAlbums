<template>
<div class="albums">
    <el-tabs v-model="activeName" type="card" >
        <el-tab-pane label="用户管理" name="/">
          <albums></albums>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="upload">
          <upload></upload>
        </el-tab-pane>
  </el-tabs>
</div>
  
</template>
<script>
  import albums from '@/components/albums.vue'
  import upload from '@/components/upload.vue'

  export default {
    data() {
      return {
        activeName: '/'
      };
    },
    methods: {
    },
    components: {
      albums, upload
    }
  };
</script>
