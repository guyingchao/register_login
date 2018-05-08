/**
 * Created by guchao on 2018/5/7.
 */

module.exports = function(conn, tables, Sequelize) {
    tables.users = conn.define('users', {
        username: {
            type: Sequelize.STRING,
            field: 'username'
        },
        password: {
            type: Sequelize.STRING,
            field:'password'
        }
    }, {
        tableName: 'users',//必须和表名完全一样
        timestamps: false
    });
};