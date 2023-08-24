const express = require('express')
const app =express()
const mongoose = require('mongoose')
const Product = require('./models/productModel')
const Student = require('./models/studentModel')

//routes
app.use(express.json())

app.get('/',(req,res) =>
{
    res.send('Hello node')
}
)

app.get('/Hiii',(req,res) =>
{
    res.send('Hello node')
}
)







mongoose.connect(MONGO_URI,{
})
.then(()=>{
    console.log('Connected to MongoDB')}
);








app.post ('/products', async(req,res) =>
{
   try {
  const product = await Product.create(req.body)
  res.status(200).json(product);
   } catch (error) {
    console.log(error.message);
    res.status(500).json({message:error.message})
   }
})

app.get('/products',async(req,res)=>{
    try{
const products = await Product.find({});
res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({message:error.message})
    }
})







app.post ('/student', async(req,res) =>
{
   try {
  const product = await Student.create(req.body)
  res.status(200).json(product);
   } catch (error) {
    console.log(error.message);
    res.status(500).json({message:error.message})
   }
})
app.get('/',async(req,res)=>{
    try{
const products = await Product.find({});
res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({message:error.message})
    }
})




app.listen(3000,()=>{
    console.log('Node server is running')
});
