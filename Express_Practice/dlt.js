import express from "express";
const app = express();
app.use(express.json());
let student=[
    { id:10, name: "rahul", marks: 60, city: "Delhi" },
    { id:20, name: "anjali", marks: 90, city: "Pune"},
    { id:30, name: "priya", marks: 45, city: "Mumbai" },
];
//View Student 
app.get("/student",(req,res)=>{
    res.json(student);
});
//dlt student by id
app.delete("/student/:id",(req,res)=>{
    const id=req.params.id;
    const index=student.findIndex((s)=>s.id==id);
    if(index===-1){
        return res.status(404).json({message:"Student not found"});
    }
    const deletedStudent=student.splice(index,1);
    // const deletedStudent3=student.splice(index,3);
    res.json({
        message:"Student Deleted Sucessfully",
        deletedStudent: deletedStudent[0],
    });
    
});
app.listen(8080, () => console.log("Server Started on port 8080"))