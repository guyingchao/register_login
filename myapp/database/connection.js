/**
 * Created by guchao on 2018/5/7.
 */
var Sequelize = require("sequelize");
var SD = {
    conn: undefined,
    tables: {},
    Sequelize: Sequelize
};
SD.conn = new Sequelize("study", "root", "123456", {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 15,
        min: 0,
        idle: 10000
    }
});
module.exports = SD;

global.G_SD = SD;

require('./models/model1')(SD.conn, SD.tables, Sequelize);
