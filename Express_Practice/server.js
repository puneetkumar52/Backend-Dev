import express from "express"
import { userData } from "./data.js";
const app=express();
// app.use(express.json());
app.get("/",(req ,res)=>{
    res.send("home route")
});

app.get("/user",(req ,res)=>{

    // let user={
    //     Name:"Puneet",
    //     Age:20,
    //     City:"Mathura",
    // }
   return res.json(userData)
})

// app.get("/user/0",(req ,res)=>{
//    return res.json(userData[0])
// })

// app.get("/user/1",(req ,res)=>{
//    return res.json(userData[1])
// })

// app.get("/user/2",(req ,res)=>{
//    return res.json(userData[2])
// })



app.get("/user/:id",(req ,res)=>{
   const id=req.params.id;
   const user=userData.find((ele)=>ele.id==id);
   if (user){
    res.json(user);
   }
   else{
    res.json({messsage:"user not find"});
   }

   return res.json(user)
})




app.get("/about",(req,res)=>{
    res.send("about route")
})

app.listen(8000,()=>{
    console.log("server is running")
})