// 以 Express 建立 Web 伺服器
var express = require("express");
var app = express();

// 以 body-parser 模組協助 Express 解析表單與JSON資料
var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended: false}) );

// Web 伺服器的靜態檔案置於 public 資料夾
app.use( express.static( "public" ) );

// 以 express-session 管理狀態資訊
var session = require('express-session');
app.use(session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true
}));

// 指定 esj 為 Express 的畫面處理引擎
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/view');

// 一切就緒，開始接受用戶端連線
app.listen(80);
console.log("Web伺服器就緒，開始接受用戶端連線.");
console.log("「Ctrl + C」可結束伺服器程式.");

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: '8889',
    user: 'root',
    password: 'root',
    database: 'labDB'
})
connection.connect(function(err) {
    // if (err) throw err;
    if(err) {
        console.log(JSON.stringify(err));
        return;
    }
})

app.get("/home/news", function(request, response) {
    connection.query(
        'SELECT * FROM news',
        '',
        function(err, rows) {
            if(err) {
                console.log(JSON.stringify(err));
                return;
            }
            response.send(JSON.stringify(rows));
        }    
    );
})

app.post("/home/news", function(request, response) {
    connection.query(
        "INSERT INTO news SET title = ?, ymd = ? ",
        [
            request.body.title,
            request.body.ymd
        ]
    );
    response.send("row inserted.");
})