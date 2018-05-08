/**
 * Created by guchao on 2018/5/7.
 */
var cha = require('./../connection');
//插入数据
var sql = `INSERT INTO users (username,password) VALUES (18,"pan")`;
G_SD.conn.query(sql, {type: G_SD.Sequelize.QueryTypes.INSERT}).then(function (results) {
    console.log(results);
});
