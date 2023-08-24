const express = require('express')
const app =express()


//routes


app.get('/',(req,res) =>
{
    res.sent('Hello node')
}
)





app.listen(3000,()=>{
    console.log('Node server is running')
})