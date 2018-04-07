var express = require('express');
var route = require('./controler/route.js');

var app = express();

app.set('view engine', 'ejs');

app.use('/static', express.static('./static'));//第一静态文件

app.use(express.static('./uploads'));//上传的图片为第二静态路径

app.get('/', route.showIndex);

app.get('/api/getAllalbumDirName', route.getAllalbumDirName);

app.get('/api/getPictureSrc', route.getPictureSrc)

app.post('/api/uploadPic', route.uploadPic)

app.use(function(req, res, next) {
    res.render('404');
})
console.log('listen 2000')
app.listen(2000);