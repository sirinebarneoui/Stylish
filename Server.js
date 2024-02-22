const express = require('express')
const ConnectDB = require('./Config/ConnectDB')
const userRouter = require('./Routes/User')
const produitRouter = require('./Routes/Produit')
const HiverRouter = require('./Routes/Hiver')
const EteRouter = require('./Routes/Ete')

const app = express()

require('dotenv').config()

ConnectDB()

app.use(express.json()) 

app.use('/api/user', userRouter)

app.use('/api/produit', produitRouter)

app.use('/api/hiver', HiverRouter)

app.use('/api/ete', EteRouter)




app.listen(process.env.port,console.log(`Server is running on the port ${process.env.port}`))