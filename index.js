const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 5000

app.use(bodyParser.json())


const Users = require('./controllers/Users')
const HousesList= require('./controllers/HousesList')

app.group("/api/v1", (router) => {

    
    router.get('/users', Users.index)    
    router.get('/users/:id', Users.show)    
    router.post('/users', Users.store)    
    router.patch('/users/:id', Users.update)    
    router.delete('/users/:id', Users.delete)
    router.get('/login/:email/:password', Users.login)   

    
    router.get('/houseslist', HousesList.index)    
    router.get('/houseslist/:id', HousesList.show)    
    router.post('/houseslist', HousesList.store)    
    router.patch('/houseslist/:id', HousesList.update)    
    router.delete('/houseslist/:id', HousesList.delete)
})


app.listen(port, () => console.log(`Listening on port ${port}!`))