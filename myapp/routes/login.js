/**
 * Created by guchao on 2018/5/7.
 */
var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Express' });
});
router.post('/',function (req,res) {
    console.log(req.body);

    var name = req.body.uname;
    var password = req.body.upwd;
    //查询数据库
    var sql1 = 'select * from users where username="' + name + '"';
    // var sql1 = 'INSERT INTO users (username,password) VALUES('+ name + "," + password + ')';//这个语句不正确
    G_SD.conn.query(sql1, {type: G_SD.Sequelize.QueryTypes.SELECT}).then(function (results) {
        console.log(results)
        if(results.length === 0){
            res.send({status:-1})
        } else {
            if(password === results[0].password) {
                // console.log('登录成功');
                res.send({status:0})
            } else {
                // console.log('用户名和密码不一致')
                res.send({status:1})
            }
        }
    });
})

module.exports = router;


