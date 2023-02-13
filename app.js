import express from 'express'
import path from 'path';
const __dirname = path.resolve();
const app = express();
// import route from './routes.js'

import cors from 'cors'
app.use(cors());
const port = 5000;
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
    res.render('index',{})

})
app.get('/multiplayer',(req,res)=>{
    res.render('multiplayer',{})

})

app.get('/singleplayer',(req,res)=>{
    res.render('singleplayer',{})

})
app.get('/settings',(req,res)=>{
    res.render('settings',{})

})


// app.use('/api/v1/',authRouter );
app.listen(port,function(){
    console.log(`App is listening on port ${port} `);
    });