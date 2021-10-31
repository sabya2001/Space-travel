const express=require('express');
const app=express();
const path=require('path');
const data=require('./data.json');
app.set('views',path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname,'/public')));
app.set('views engine','ejs');
app.listen('3000',()=>{
    console.log('Listening on port 3000');
})
app.get('/',(req,res)=>{
    res.render('Home.ejs',{"name":"Home"});
})
app.get('/d/:des',(req,res)=>{
  const des=req.params;
  const val=des.des
  for(let id of data.destinations){
    if(val.toLowerCase()===id.name.toLowerCase()){
      res.render('destinations.ejs',{...id})
    }
  }
})
app.get('d/c/:des',(req,res)=>{
  res.redirect(200,'/c/:des')
})
app.get('/c/:des',(req,res)=>{
  const des=req.params;
  const val=des.des
  for(let id of data.crew){
    if(val.toLowerCase()===id.name.toLowerCase()){
      // res.render('destinations.ejs',{...id})
      console.log(id)
    }
  }
})