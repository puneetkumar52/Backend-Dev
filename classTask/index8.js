// const fs=require('fs');
// const path=require('path');

// const filePath=path.join(__dirname,'sample.txt');

// fs.readFile(filePath,'utf8',(err,data)=>{
//     if(err) throw err;
//     console.log('File content:',data);
// });

// const readStream=fs.createReadStream(filePath,{
//     highWaterMark:64
// });

// readStream.on("data",(chunk)=>{         //nodejs event based programming
//     console.log("New chunk received:");
//     console.log(chunk);
// })

// readStream.on("end",()=>{
//     console.log("data finish")
// })
// const writeStream=fs,createWriteStream("./output.txt");

// writeStream.write("Hello World\n");
// writeStream.write("This is written using write stream\n");
// writeStream.end("This is the end of the file\n");

// writeStream.end();

// writeStream.on("finish", ()=>{
//     console.log("Write completed")
// })
const fs = require("fs");

const readStream =fs.createReadStream("./log.txt")
const writeStream =fs.createWriteStream("./copylog.txt")
readStream.pipe(writeStream);
