const express = require("express")
const dotenv = require('dotenv')
const connectDB = require("./config/connectDB")

const productRouter = require("./router/ProductRouter")
const { notFound } = require("./middleware/notFound")
const app = express()
dotenv.config()

app.use(express.json());

app.use('/api/products',productRouter)

app.use('/',notFound)


const MODE = process.env.MODE
const PORT = process.env.PORT
//connect to db
connectDB()
//running the server
app.listen(PORT, () => console.log(
    `server is running in ${MODE} mode on port ${PORT} ...  `
))
