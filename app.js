const express = require('express')
const app = express()
const {products} = require('./data')
app.get('/',(req,res) =>{
    res.send('<h1>Home page</h1><a href="api/products">product </a>')
})

app.get('/api/products/:productID',(req,res) =>{
    const {productID} = req.params
    const singleProduct = products.find(
        (product) => product.id ==  Number(productID))
    if(!singleProduct){
        res.status(404).send('page not found')
    }
    res.json(singleProduct)
})



app.listen(5000,() =>{
    console.log('server is running')
})


