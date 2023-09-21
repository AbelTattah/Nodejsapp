const express = require('express')
const app =express()
const mongoose = require('mongoose')
const Product = require('./models/productModel')
const Student = require('./models/studentModel')
const Studentupdate =require('./models/studentUpdate')
const timetable = require('./models/timetableModel')
const Updatte = require('./models/updattemodel')
const Buddy = require('./models/buddyModel')
const UpdateReciever = require('./models/updateReciever')
const UpdateSender = require('./models/updateSender')


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







mongoose.connect('mongodb+srv://tattahabelk:Abel1919@cluster0.bkxk0nq.mongodb.net/',{
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

app.get('/students',async(req,res)=>{
    try{
const products = await Student.find({});
res.status(200).json(products);
    }
    catch (error) {
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


app.post ('/studentupdate', async(req,res) =>
{
   try {
  const product = await Studentupdate.create(req.body)
  res.status(200).json(product);
   } catch (error) {
    console.log(error.message);
    res.status(500).json({message:error.message})
   }
})

app.get('/studentupdate',async(req,res)=>{
    try{
        const product = await Studentupdate.find({})
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({message:error.message})
    }
})

app.post ('/timetables', async(req,res) =>
{
   try {
  const timetable = await timetable.create(req.body)
  res.status(200).json(timetable);
   } catch (error) {
    console.log(error.message);
    res.status(500).json({message:error.message})
   }
})

app.get('/timetable',async(req,res)=>{
    try{
const timetable = await timetable.find({});
res.status(200).json(timetable);
    }
    catch (error) {
        res.status(500).json({message:error.message})
    }
})



app.post ('/updatte', async(req,res) =>
{
   try {
  const updatte = await Updatte.create(req.body)
  res.status(200).json(updatte);
   } catch (error) {
    console.log(error.message);
    res.status(500).json({message:error.message})
   }
})



app.get('/updattes',async(req,res)=>{
    try{
const updatte = await Updatte.find({});
res.status(200).json(updatte);
    }
    catch (error) {
        res.status(500).json({message:error.message})
    }
})


//Update Sender
app.post ('/updateSend', async(req,res) =>
{
   try {
  const updatesend = await UpdateSender.create(req.body)
  res.status(200).json(updatesend);
   } catch (error) {
    console.log(error.message);
    res.status(500).json({message:error.message})
   }
})

app.get('/updateSender',async(req,res)=>{
    try{
const updatesend = await UpdateSender.find({});
res.status(200).json(updatesend);
    }
    catch (error) {
        res.status(500).json({message:error.message})
    }
})

app.delete('/updateSender/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const product = await UpdateSender.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message:`cannot find product${id}`})
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})


//Update Reciever

app.post ('/updateRecieve', async(req,res) =>
{
   try {
  const updaterecieve = await UpdateReciever.create(req.body)
  res.status(200).json(updaterecieve);
   } catch (error) {
    console.log(error.message);
    res.status(500).json({message:error.message})
   }
})

app.get('/updateReciever',async(req,res)=>{
    try{
const updaterecieve = await UpdateReciever.find({});
res.status(200).json(updaterecieve);
    }
    catch (error) {
        res.status(500).json({message:error.message})
    }
})

app.delete('/updateReciever/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const product = await UpdateReciever.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message:`cannot find product${id}`})
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})










//Update an update
app.put('/updattes/:SName',
async(req,res)=> {
    try {
        const {SName} =req.params;
        const updatte = await Updatte.findByIdAndUpdate(SName,req.body) 
        if(!updatte) {
            return res.status(404).json({message:`Cannot find Name :${SName}`})
        }
        const updattee =  await Updatte.findById(SName);
        res.status(200).json(updattee)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
)
//Update data
app.put('/updattes/:SName',
async(req,res)=> {
    try {
        const {SName} =req.params;
        const updatte = await Updatte.findByIdAndUpdate(SName,req.body) 
        if(!updatte) {
            return res.status(404).json({message:`Cannot find Name :${SName}`})
        }
        const updattee =  await Updatte.findById(SName);
        res.status(200).json(updattee)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
)

app.delete('/updattes/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const product = await Updatte.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message:`cannot find product${id}`})
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})






app.get('/buddy',async(req,res)=>{
    try{
const buddy = await Buddy.find({});
res.status(200).json(buddy);
    }
    catch (error) {
        res.status(500).json({message:error.message})
    }
})
app.delete('/buddy/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const buddy = await Buddy.findByIdAndDelete(id);
        if(!buddy){
            return res.status(404).json({message:`cannot find student${id}`})
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})



app.listen(3000,()=>{
    console.log('Node server is running')
});
