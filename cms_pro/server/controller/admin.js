let redis = require("../util/redisDB")
const util = require('../util/common')

//修改导航菜单
exports.setNavMenu = (req, res, next) => {
    let key = req.headers.fapp + ':nav_menu'
    //获取传递的值
    let data = req.body.nav_menu
    console.log(data)
    //储存
    redis.set(key, data)
    res.json(util.getReturnData(0, "修改成功"))
}

//修改底部内容
exports.setFooter = (req, res, next) => {
    let key = req.headers.fapp + ':footer'
    //获取传递的值
    let data = req.body.footer
    console.log(data)
    //储存
    redis.set(key, data)
    res.json(util.getReturnData(0, '修改成功'))
}

//修改轮播内容
exports.setIndexPic = (req, res, next) => {
    let key = req.headers.fapp + ':indexPic'
    //获取传递的值
    let data = req.body.indexPic
    console.log(data)
    //储存
    redis.set(key, data)
    res.json(util.getReturnData(0, '修改成功'))
}