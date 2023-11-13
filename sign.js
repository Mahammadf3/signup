const express=require("express");
const app=express();
const path=require("path");
const {open}=require("sqlite");
const sqlite3=require("sqlite3")
app.use(express.json());
const database=path.join(__dirname,"signbc.db");
let db=null;
const signUp=async()=>{
    try{
        db=await open({
           filename:database,
           driver:sqlite3.Database, 
        })
        app.listen(3001,()=>{
            console.log("server is Running");
        })
    }
    catch(e){
        console.log(e)
    }
}

signUp();

app.get("/",async(request,response)=>{
    const data=`select * from signupbc`
    const fetchData=await db.all(data);
    response.send(fetchData);
})


