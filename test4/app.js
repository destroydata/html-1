const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    setTimeout(()=>{
        res.send('Hello World!')
    },10000)
    console.log(10000)
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send({id:1, name: "김영준", skill:['java', 'php']})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})