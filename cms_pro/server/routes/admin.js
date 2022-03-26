var express = require('express')
const router = require('.')
var couter = express.Router()
//引入处理逻辑-修改导航
var { setNavMenu } = require('../controller/admin')
//引入处理逻辑-修改底部内容
var { setFooter } = require('../controller/admin')
//引入处理逻辑-修改轮播内容
var { setIndexPic } = require('../controller/admin')

var util = require('../util/common')

//修改导航菜单
router.post('/changeNav', setNavMenu)
//修改底部内容
router.post('/setFooter', setFooter)
//修改轮播内容
router.post('/setIndexPic', setIndexPic)

module.exports = router

