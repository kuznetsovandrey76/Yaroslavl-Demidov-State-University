Для запуска сервера `node app.js`

1. Работай в папке `static`  
static/  
-- index.html  
-- style.css   
-- data.js  
-- main.js  
-- templates/..  
2. после, все получившиеся файлы переноси в `/`

**app.js**
```
var express = require('express');
var app = express();

app.use(express.static('static'));

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: __dirname });
});

app.listen(3000, function () {
  console.log('http://localhost:3000/');
});
```

_Для работы сайта на сервере можно убрать:_  
static/  
app.js  
package.json   
