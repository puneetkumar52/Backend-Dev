import express from "express";

const app = express();
app.use(express.json());

let students = [
    { id:1, name: "Aman", marks: 60, city: "Hyderbad" },
    { id:2, name: "Naman", marks: 90, city: "NewYork" }
];

// View Students
app.get("/students", (req, res) => {
    res.json(students);
});

// Patch - update any one field (marks or city)
app.patch("/students/:id", (req, res) => {
    const id = req.params.id;
    const updates = req.body;

    const student = students.find((s) => s.id ==id);
    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }
    
    Object.assign(student, updates);
    res.json({ message: "Student updated successfully", student });
});

app.listen(8080, () => console.log("Server Started on port 8080"));