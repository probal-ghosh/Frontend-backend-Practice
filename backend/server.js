import express from "express"
const app= express()

app.get('/', (req,res)=>{
    res.send("Server is empty")
})

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id:2,
            title: 'A another joke',
            content: 'This is another joke'
        },
        {
            id:3,
            title: 'Third joke',
            content: 'This is third joke'
        }
    ]
    res.send(jokes)
})

const port  = process.env.PORT||3000
app.listen(port, ()=>{
    console.log('listning')
})