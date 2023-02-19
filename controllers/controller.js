import {createCustomError} from '../errors/customError.js';
import { words5 } from '../public/words.js';
class Queue {
    constructor() {
        this.items = {}
        this.frontIndex = 0
        this.backIndex = 0
    }
    enqueue(item) {
        this.items[this.backIndex] = item
        this.backIndex++
    }
    dequeue() {
        const item = this.items[this.frontIndex]
        delete this.items[this.frontIndex]
        this.frontIndex++
        return item
    }
    peek() {
        return this.items[this.frontIndex]
    }
    get printQueue() {
        return this.items;
    }
} 
export class Game{
    constructor(){
        this.gameId=new Date().getTime()-Math.floor(Math.random() * 10000)
        this.player1Id=0;
        this.player2Id=0;
        this.score1=0;
        this.score2=0;
    }
    getWords()
    {
        var arr=[];
        for(var i=0;i<10;i++)
        {
            
            arr.push(words5[Math.floor(Math.random() * (3334 - 0) + 0)]);
        }
        return arr;
    }
    getJson()
    {
        var details={"GameId":this.gameId,"Player1":this.player1Id,"Player2":this.player2Id,"Player1Score":this.score1,"Player2Score":this.score2,"wordlist":this.getWords()};
        return details;
    }
}
const findInMap = (map, val) => {
    for (let [k, v] of map) {
        console.log(k,v,val, typeof(k),typeof(v),typeof(val));
      if (k === val) { 
        return true; 
      }
    }  
    return false;
  }
export var q = new Queue();
export const connection = async (req, res, next) => {
    console.log("getting connected")

    try 
    {
        var id=new Date().getTime()+Math.floor(Math.random() * 10000);
        q.enqueue(id);
        res.status(200).json({
            id
        })
    } 
    catch (error) {
        next(error)
    }
}
export var m=new Map();
export const match=async(req,res,next)=>{
    try{
        console.log("Getting matched");
        const { id: id } = req.params;
        console.log(m, "match",id);
        console.log(findInMap(m,id));
        if(findInMap(m,id))
        {
            var ans=m.get(id);
            console.log("Hello");
            console.log(m);
            res.status(200).json({
                "result":ans
            })
        }
        else{
            res.status(200).json({
                "result": {"GameId":null}
            })
        }
    }
    catch (error) {
        next(error)
    }
            
        
    
}