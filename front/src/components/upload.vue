<template>
  <div class="upload">
    <el-row>
      <el-input style="width:300px;padding-bottom:10px;" placeholder="新建文件夹名称" v-model="newDirName" @keyup.enter.native="addNewDir">
        <el-button slot="append" type="success" @click="addNewDir">确定</el-button>
      </el-input>
    </el-row>
    <el-row>
      <el-select style="margin-bottom:10px; width:300px;" v-model="selectDirStr" placeholder="请选择上传文件夹" @change="selectDirMethor">
        <el-option
          v-for="item in directoryOption"
          :key="item"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
    </el-row>
    
    
    <el-upload
      class="upload-demo"
      :action="uploadDirectory"
      :show-file-list="false"
      :on-success="uploadSuccess"
      :before-upload="beforeAvatarUpload"
      >
      <el-button size="small" type="primary" >点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过3M</div>
    </el-upload>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newDirName: '',
        selectDirStr: '',
        uploadDirectory: '',
        directoryOption: ['小强', '小花']
      };
    },
    methods: {
      selectDirMethor(name) {
        this.uploadDirectory = `/api/uploadPic?name=${name}`
      },
      beforeAvatarUpload(file) {
        var isPic = file.type === 'image/jpeg';
        if (!this.selectDirStr) {
          this.$message({
            type: 'warning',
            message: '请先选择上传文件目录'
          })
          return false;
        }
        if(!isPic) {
          this.$message({
            type: 'error',
            message: '上传的文件不是图片'
          })
        }
        var isless3M = true;
        if (file.size > 3*1024*1024) {
          isless3M = false;
          this.$message({
            type: 'error',
            message: '图片大小超出3M了'
          })
        }
        return isPic&&isless3M;
      },
      uploadSuccess(res, file, fileList) {
        if(res.code != 0) {
          this.doUploadErr(res.message);
        }
      },
      doUploadErr(name) {
        this.$message({
          type: 'error',
          message: name
        })
      },
      addNewDir() {
        this.$http.post(`/api/createNewDir`,{dirname: this.newDirName}).then(res => {
          this.$store.commit('changeAddDirCount');
          this.$message({
            type: 'success',
            message: res.data.message
          });
        }).catch(err => {
          this.$message({
            type: 'error',
            message: err
          })
        })
      }
    },
    created() {
      this.$http.get('/api/getAllalbumDirName').then(res => {
        this.directoryOption = res.data.message;
      }).catch(err => {
        console.log(err);
      })
    }
  }
</script>
