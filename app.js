require('rootpath')();
const express = require("express")
const dotenv = require('dotenv')
const connectDB = require("./config/connectDB")

const productRouter = require("./router/ProductRouter")
const userRouter = require("./router/userRouter")

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
app.use(jwt());
app.use(express.json());

app.use('/api/products',productRouter)
app.use('/api/users',userRouter)
// app.use('/api/users', require('./controllers/UserController'));
app.use('/',errorHandler);
// app.use('/',notFound)


const MODE = process.env.MODE
const PORT = process.env.PORT
//connect to db
connectDB()
//running the server
app.listen(PORT, () => console.log(
    `server is running in ${MODE} mode on port ${PORT} ...  `
))
