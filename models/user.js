var mysql = require("mysql");
var setting = require("../setting");

//1.创建连接对象
var connection = mysql.createConnection(setting);
//2.打开连接
// connection.connect(function (err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }
//     console.log('connected as id ' + connection.threadId);
// });
//3.数据查询
// connection.query('SELECT * from worker', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].name);
// });
//4.关闭连接
//connection.end();

function User(obj) {
    this.name = obj.name;
    this.pwd = obj.pwd;
}

//员工保存
User.prototype.save = function () {
    connection.connect(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        console.log('connected as id ' + connection.threadId);
    });
    connection.query('INSERT INTO worker VALUES(default, ?, ?, default)',
        [this.name, this.pwd],
        function (error, results, fields) {
            if (error) throw error;
            console.log('The result is: ', results);
        }
    );
    connection.end();
}

module.exports = User;