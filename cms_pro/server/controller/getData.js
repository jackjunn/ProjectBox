let redis = require("../util/redisDB")
const util = require('../util/common')

//获取导航内容
exports.getNavMenu = (req, res, next) => {
    let key = req.headers.fapp + ":nav_menu"
    //获取数据
    redis.get(key).then((data) => {
        console.log(data)
        res.json(util.getReturnData(0, '', data))
    })
}

//获取底部内容
exports.getFooter = (req, res, next) => {
    let key = req.headers.fapp + ":footer"
    redis.get(key).then((data) => {
        console.log(data)
        res.json(util.getReturnData(0, '', data))
    })
}

//获取首页轮播内容
exports.getIndexPic = (req, res, next) => {
    let key = req.headers.fapp + ':indexPic'
    //获取数据
    redis.get(key).then((data) => {
        console.log(data)
        res.json(util.getReturnData(0, '', data))
    })
}