const express = require("express");
const app = express();
const ejs = require('ejs');
const path = require('path');
const port = 8080;


app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs');
app.use(express.static(`${__dirname}/static`));

app.get('/cars',(req,res)=>{
    res.render('cars',{name:'car'});
})
app.get('/cats',(req,res)=>{
    res.render('cats',{name:'cats'});
})

app.get('/cars/new',(req,res)=>{
    res.render('cars_new',{name:'cars_new'});
})

app.listen(8080,()=>{
    console.log(`Listening at port ${port}`);
})
