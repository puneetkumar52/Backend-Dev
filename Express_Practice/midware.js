import express from "express";
const app = express();
app.use(express.json());
app.use((req,res,next)=>{
    console.log("Middleware 1");
    next();
});
app.use((req,res,next)=>{
    console.log("Middleware 2");
    next();
});
app.get("/test",(req,res)=>{
    res.send("Route Executed");
});
app.listen(8000, () => console.log("Server Started on port 8000"))


