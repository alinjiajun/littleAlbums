var express = require('express');
var route = require('./controler/route.js');
var bodyParser = require('body-parser');

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.set('view engine', 'ejs');

app.use('/static', express.static('./static')); //第一静态文件

app.use('/uploads', express.static('./uploads')); //上传的图片为第二静态路径

app.get('/', route.showIndex);

app.get('/api/getAllalbumDirName', route.getAllalbumDirName);

app.get('/api/getPictureSrc', route.getPictureSrc)

app.post('/api/uploadPic', route.uploadPic)

app.post('/api/createNewDir', route.createNewDir)

app.use(function(req, res, next) {
    res.render('404');
})
console.log('listen 2000')
app.listen(2000);