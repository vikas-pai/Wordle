import express from 'express'
import path from 'path';
import cron from  "node-cron";
import {q,m,Game} from './controllers/controller.js'
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
app.get('/connecting',(req,res)=>{
    res.render('connecting',{})

})
import multi from './routes/routes.js'
app.use('/api/v1/',multi );
cron.schedule("*/5 * * * * *", function() {
    while(q.backIndex-q.frontIndex>=2)
    {
        var room=new Game();
        room.player1Id=q.dequeue();
        room.player2Id=q.dequeue();
        var roomjson=room.getJson();
        m.set(room.player1Id.toString(),roomjson);
        m.set(room.player2Id.toString(),roomjson);
        
    }
    // console.log(q.backIndex-q.frontIndex, q.items);
    // console.log(m);
});
app.listen(port,function(){
    console.log(`App is listening on port ${port} `);
    });