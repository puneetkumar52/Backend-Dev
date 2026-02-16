import express from "express";

const app = express();
app.use(express.json());

// const pass=

const credentials = [
  { email: "aman@gmail.com", password: "234" },
  { email: "yash@gmail.com", password: "123" },
];

// REGISTER
app.post("/auth/register", (req, res) => {
  const data = req.body;

  const existingUser = credentials.find(
    (cred) => cred.email === data.email
  );

  if (existingUser) {
    return res.status(400).send("User Already Exists");
  }

  credentials.push(data);
  res.send("Registered Successfully");
});

// LOGIN
app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;

  const user = credentials.find(
    (cred) => cred.email === email && cred.password === password
  );

  if (user) {
    res.json({ message: "Login Successful", user });
  } else {
    res.status(401).send("Invalid Credentials");
  }
});

app.listen(8000, () => console.log("Server Started on port 8000"));