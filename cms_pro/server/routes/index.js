var express = require('express');
var router = express.Router();
//引入处理逻辑-获取导航
var { getNavMenu } = require('../controller/getData')
//引入处理逻辑-获取底部内容
var { getFooter } = require('../controller/getData')
//引入处理逻辑-获取轮播内容
var { getIndexPic } = require('../controller/getData')

var util = require('../util/common')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//获取菜单
router.get('/getNavMenu', getNavMenu)
//获取底部内容
router.get('/getFooter', getFooter)
//获取轮播内容
router.get('/getIndexPic', getIndexPic)

module.exports = router;
