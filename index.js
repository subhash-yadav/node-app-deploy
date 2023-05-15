// const http = require('http');
// const fs = require('fs');
// const index = fs.readFileSync('index.html','utf-8');
// const products = JSON.parse(fs.readFileSync('data.json','utf-8'));
// const product = products.products[0]

// ***********
// const server = http.createServer((req,res)=>{

// if(req.url.startsWith('/product')){
//     const lastIndex = req.url.split('/');
//     const productIndex = lastIndex[lastIndex.length-1];
//     const product = products.products[+productIndex - 1];
//     res.writeHead(200,{'Content-Type':'text/html'});
//     const modifiedIndex = index.replace('**title**',product.title).replace('**src**',product.thumbnail);
//     return res.end(modifiedIndex);

// }
//     switch(req.url){
//         case "/":
//             res.writeHead(200,{"Content-Type":"text/html"});
//             return res.end(index)
//         case '/api/products':
//             res.writeHead(200,{'Content-Type':'application/json'});
//             return res.end(JSON.stringify(products)) 
        
//         default :
//             res.writeHead(200,{'Content-Type':'text/plain'})
//         return res.end("You Enter Wrong Url Please Check Your Url")
//     }
// })

// server.listen(8080)


// const express = require('express')

// const server = express();
// server.listen(8080,()=>{
//     console.log("server Start")
// })

// Express Revision 
// const fs = require('fs');
// const express = require('express');
// const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
// // const products = data.products[0]
// const server = express();

// server.use(express.json())
// const auth = (req, res, next) => {
//     // console.log(req.query)
//     if(req.body.password === "123"){
//     next()
// }else{
//     res.send(401)
// }
// }

// const myLogger = (req, res, next) =>{
//     // console.log(req.ip, req.hostname, req.get("sec-ch-ua-platform"),new Date())
//     next();
// }
// server.use(myLogger)

// server.get('/',auth,(req,res)=>{
//     res.json({type:"GET"})
// })
// server.post('/',auth,(req,res)=>{
//     res.json({type:"Post"})
// })
// server.put('/',(req,res)=>{
//     res.json({type:"Put"})
// })
// server.patch('/',(req,res)=>{
//     res.json({type:"Patch"})
// })
// server.delete('/',(req,res)=>{
//     res.json({type:"Delete"})
// })
// server.get('/demo',(req,res)=>{
//     // res.sendFile('/Users/subha/Desktop/my practice project/Node/node-revision/index.html')
//     // res.send("Hello")
//     // res.json(data.products)
//     res.sendStatus(404)
//     // res.status(201).send("Hello");
// })

// server.listen(8080);






// ### Node Express CRUD RestApi

// const fs = require('fs');
// const express = require('express');
// const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
// const products = data.products;
// const server = express();


// server.use(express.json())

// // Read All Data --- Get All Products
// server.get('/products',(req,res)=>{
//     res.json(products)
// })

// // Read one Data --- Get one Single Product
// server.get('/products/:id',(req,res)=>{
//     const id = +req.params.id;
//     const product = products.find((p)=>(p.id === id))
//     res.json(product)
// })
// // Create - Post Add New Data in products
// server.post('/products',(req,res)=>{
//     products.push(req.body)
//     res.json(req.body)
// })

// // update - put select one data and update that
// server.put('/products/:id',(req,res)=>{
//     const id = +req.params.id;
//     const productIndex = products.findIndex(p=>p.id === id);
//     const newData = products.splice(productIndex,1,{...req.body,id:id})
//     res.json(newData)
// })
// // Patch
// server.patch('/products/:id',(req,res)=>{
//     const id = +req.params.id;
//     const findIndex = products.findIndex(p=>p.id === id);
//     const product = products[findIndex]
//     const newData = products.splice(findIndex,1,{...product, ...req.body});
//     res.json(newData)
// })
// //Delete 
// server.delete('/products/:id',(req,res)=>{
//     const id = +req.params.id;
//     const findIndex = products.findIndex(p=>p.id === id);
//     const product = products.splice(findIndex,1);
//     res.json(product)
// })

// server.listen(8080,()=>{
//     console.log("Server Start")
// })


require('dotenv').config()
const path = require('path')
const mongoose = require('mongoose')
const express = require('express');
const productRouter = require('./routes/product')
const userRouters = require('./routes/users')
const cors = require('cors');
// const morgan = require('morgan');
const server = express();
server.use(express.json())
// server.use(morgan("default"));
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)))
server.use(cors())
//db collections

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('DataBase Connected')
}
server.use('/products',productRouter.routers)
server.use('/users',userRouters.routes)
server.use("*",(req,res)=>{
  res.sendFile(path.resolve(__dirname,'build','index.html'))
})

server.listen(process.env.PORT,()=>{
    console.log("Server Started")
})

//MVC model view Controller
