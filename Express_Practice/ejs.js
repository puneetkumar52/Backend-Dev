import express from "express";

const app = express();

// built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(8000, () => {
    console.log("Server Started on port 8000");
});