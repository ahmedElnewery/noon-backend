const express = require("express")
const dotenv = require('dotenv')
const connectDB = require("./config/connectDB")
const session=require('express-session')

/*var Mongostore=require("connect-mongo")(session)*/
const productRouter = require("./router/ProductRouter")
const { notFound } = require("./middleware/notFound")
const app = express()
const cors=require('cors')
dotenv.config()



app.use(cors());
app.use(express.json());

app.use('/api/products',productRouter)
app.use(session({secret:'mysupersecret',resave:false,saveUninitialized:false}));
app.use('/',notFound)
 
const MODE = process.env.MODE
const PORT = process.env.PORT
//connect to db
connectDB()
//running the server
app.listen(PORT, () => console.log(
    `server is running in ${MODE} mode on port ${PORT} ...  `
))
