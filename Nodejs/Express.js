// create = post
// Read = get
//Update = put
//delete = delete

//Example of express
const express = require('express')
const app = express()
const port = 2000
app.get('/xyz',(req,res)=>{
    res.send('i am gonna show myself on browser using express()')
})
// app.get('/data',(req,res)=>{
//     res.download('1.txt')
// })
app.listen(port,()=>{
    console.log('listening on port ${port}')
})
