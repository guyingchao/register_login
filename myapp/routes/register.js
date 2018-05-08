/**
 * Created by guchao on 2018/5/4.
 */
var express = require('express');
var router = express.Router();
var cha = require('./../database/connection');

/* GET register page. */
router.get('/', function(req, res, next) {
    res.render('register', { title: 'Express' });
});
router.post('/',function (req,res) {
    console.log(req.body)
    var name = req.body.uname;
    var password = req.body.upwd;
    //查询数据库
    if(name!==''&& password!==''){
        G_SD.tables.users.findOne({
            where: {username: name},
            attributes : ['username', 'password']
        }).then(function (data) {
            if(data === null){
                //插入数据
                var sql1 = 'INSERT INTO users (username,password) VALUES( "'+ name + '","'+ password + '")';
                // var sql1 = 'INSERT INTO users (username,password) VALUES('+ name + "," + password + ')';//这个语句不正确
                G_SD.conn.query(sql1, {type: G_SD.Sequelize.QueryTypes.INSERT}).then(function (results) {
                    console.log(results);
                });
                res.send({name:name})
            } else {
                res.send({status:1});
                // console.log('exists')
            }
        });
    }

});

module.exports = router;

