const express = require("express")
const app = express();

var port = process.env.PORT || 8080;

app.set('view engine',"ejs");

app.use(express.static(__dirname + '/public'));

app .get('/',(req, res)=>{
    res.render('pages/index')
});

app .get('/about',(req, res)=>{
    res.render('pages/about')
});

app. get('/api_documentation',(req, res)=>{
    res.render('pages/api_documentation')
});

app. get('/teacherdoc',(req, res)=>{
    res.render('pages/teacherdoc')
});

app. get('/coordinatedoc',(req, res)=>{
    res.render('pages/coordinatedoc')
});

app. get('/admindoc',(req, res)=>{
    res.render('pages/admindoc')
});

app. get('/studentdoc',(req, res)=>{
    res.render('pages/studentdoc')
});

app.listen(port, ()=> {console.log('your app is running on http://localhost:'+ port)
});
