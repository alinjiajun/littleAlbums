
exports.showIndex = function(req, res){
    res.render('index');
}

exports.getAllalbumDirName = function(req, res) {
    res.send({
        code: 0,
        message: ["小强", "小花", "小明"]
    })
}

exports.getPictureSrc = function(req, res) {
    res.send({
        code: 0,
        message: ["/小强/logo.png"]
    })
}

exports.uploadPic = function(req, res) {
    res.send({
        code: 0,
        message: ['上传成功']
    })
}