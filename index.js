import express from 'express';
import debug from "debug";

const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send('hello world');
});

app.listen(port,(err)=>{
    if(err){
        console.error("error occured during the server running.");
    }else{
        debug(`http://localhost:${port}`);
        console.log("server is running.");
    }
})