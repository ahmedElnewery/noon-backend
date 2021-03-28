require('rootpath')();
const express = require("express")
const dotenv = require('dotenv')
const connectDB = require("./config/connectDB")
const session = require('express-session')
const MongoStore = require('connect-mongo');
const productRouter = require("./router/ProductRouter")
const userRouter = require("./router/userRouter")
const filterRouter = require("./router/filterRouter")
const orderRouter = require("./router/orderRouter")
const cartRouter = require("./router/cartRouter")
const adminRouter = require("./router/adminRouter")
//user
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('./middleware/jwt');
const errorHandler = require('./middleware/errorHandler');
const app = express()

dotenv.config()

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(session({
    secret: 'mysupersecret',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URL,
    })
}));

app.use('/api/products', productRouter)
app.use('/api/users', userRouter)
app.use('/api/filter', filterRouter)
app.use('/api/orders', orderRouter)
app.use('/api/cart', cartRouter)
app.use('/api/admin', adminRouter)

app.use('/', errorHandler);
// app.use('/',notFound)


const MODE = process.env.MODE
const PORT = process.env.PORT
//connect to db
connectDB()
//running the server
app.listen(PORT, () => console.log(
    `server is running in ${MODE} mode on port ${PORT} ...  `
))
