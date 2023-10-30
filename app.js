const express = require('express')
const app = express()
let { people } = require('./data')
// static assets
app.use(express.static('./methods-public'))
// parse forn data
app.use(express.urlencoded({ extended: false }))
app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})
app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name) {
        console.log(name)
        return res.status(200).send(`welcome ${name}`)
    }
    res.status(401).send('Please fill name')
})
app.listen(5000, () => {
    console.log('server is running')
})


