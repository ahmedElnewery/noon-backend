const mongoose = require("mongoose")
function connectDB() {
    mongoose
        .connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false

        })
        .then(() => {
            console.log("successfully connected to db...")
        })
        .catch((error) => {
            console.error("error in connection with db ...!!")
            process.exit(1)
        }).Promise = global.Promise;
}

module.exports = connectDB