var fs = require('fs');
var formidable = require('formidable');
var util = require('util');
var sillyDate = require('silly-datetime');

exports.showIndex = function(req, res) {
    res.render('index');
}

exports.getAllalbumDirName = function(req, res, next) {
    fs.readdir(__dirname + '/../uploads', (err, stats) => {
        if (err) {
            res.send({
                code: 1,
                message: err
            })
            return
        }
        res.send({
            code: 0,
            message: stats
        })
    })
}

exports.getPictureSrc = function(req, res, next) {
    fs.readdir(`${__dirname}/../uploads/${req.query.name}`, function(err, stats) {
        if (err) {
            res.send({
                code: 1,
                message: err
            })
            return;
        }
        var picArr = stats.map(item => {
            return `/uploads/${req.query.name}/${item}`
        })
        res.send({
            code: 0,
            message: picArr
        })
    })
}

exports.uploadPic = function(req, res) {
    var form = new formidable.IncomingForm();
    var upladDir = req.query.name
    form.parse(req, function(err, fields, files) {
        if (err) {
            res.send({ code: 1, message: err });
            return
        }
        if (files.file.size >= 0.7 * 1024 * 1024) {
            res.set({ 'Status Code': '404 Not Found' })
            res.send({ code: 1, message: '不能发送超过3M的图片' });
            return;
        }
        var picSillyName = sillyDate.format(files.file.lastModifiedDate, 'YYYYMMDDHHmmss') + parseInt((Math.random() + 1) * 10000);
        var extendName = files.file.name.split('.')[files.file.name.split('.').length - 1];
        var newPicPath = `${__dirname}/../uploads/${upladDir}/${picSillyName}.${extendName}`;
        fs.rename(files.file.path, newPicPath, err => {
            if (err) {
                res.send({ code: 1, message: err });
                return;
            }
            res.send({ code: 0, message: '上传成功' })
        })

    });
}

exports.createNewDir = function(req, res) {
    let dirname = req.body.dirname;
    if (!dirname) {
        res.send({ code: 1, message: '缺少文件名参数' })
        return;
    }
    fs.mkdir(`${__dirname}/../uploads/${dirname}`, err => {
        if (err) {
            res.send({ code: 1, message: '创建失败' })
            return;
        }
        res.send({ code: 0, message: '创建成功' })
    })
}