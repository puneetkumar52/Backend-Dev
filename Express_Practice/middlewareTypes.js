const express = require('express');

const app = express();

// Types of Middleware

//1. Application level middleware--> it is used to execute some code for every request that comes to the server. It can be used for logging, authentication, etc.
// it is used for (get post put delete) request and it is executed before the route handler.
// app.use((req, res, next) => {
//     console.log("Request URL: ", req.url);
//     console.log("Request Method: ", req.method);
//     next();
// });

// app.get("/home", (req, res) => {
//     res.send("Welcome to my HOME PAGE");
// });

//2. Built-in middleware--> it is used to serve static files such as images, css files, etc. It is used to serve the files from the public folder.
// app.use(express.json()); // it is used to parse the json data from the request body
// app.use(express.urlencoded({extended: true})); // it is used to parse the urlencoded data from the request body && it is use for form data
// app.use((req, res, next)=>{
//     console.log("Request url: ",req.url);
//     console.log("Request method: ",req.method);
//     next();
// });
// app.get("/home", (req, res) => {
//     res.send("Welcome to my HOME PAGE");
// });


//3. Route-level middleware--> it is used to execute some code for a specific route. It is used to execute some code for a specific route and it is executed before the route handler.
// const checkLogin = (req, res, next) => {
//     const isLoggedIn = true; // it is used to check if the user is logged in or not
//     if (!isLoggedIn) {
//         return res.status(401).send("You are not logged in");
//     } else {
//         next();
//     }   
// };

// app.get("/dashboard", checkLogin, (req, res) => {
//     res.send("Welcome to my DASHBOARD");
// });

// 4. Authentication middleware--> it is used to authenticate the user before allowing them to access the protected routes. It is used to check if the user is authenticated or not and it is executed before the route handler.
// const authMiddleware = (req,res,next)=>{
//     const token = req.headers.authorization; // we use token to authenticate the user and it is sent in the header of the request
//     if(!token){
//         return res.status(403).json({message:" Token required"}); // here token is username and password
//     }
//     if(token !=="manu"){
//         return res.status(401).json({messagwe:"Invalid token"});
//     }
//     next();
// }

// app.get("/profile",authMiddleware,(req,res)=>{
//     res.json({message:"Profile data Open"})
// });

//5. Error-handling middleware--> it is used to handle the errors that occur in the application. It is used to handle the errors that occur in the application and it is executed when an error occurs in the application.
// app.get("/error",(req,res)=>{
//     throw new Error ("Something went wrong");
// });
// app.use((err,req,res,next)=>{
//     console.log("Error Middleware",err.message);
//     res.status(500).json({
//         message:"Internal Server Error",
//     })
// })


// Third Party middleware 





app.listen(8080, () => console.log("Server running on port 8000"));