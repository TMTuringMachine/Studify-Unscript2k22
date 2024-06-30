var mongoose = require('mongoose');

//Database URI from .env
const MONGODB_URI = process.env.MONGO_CONNECTION
console.log("Mongo URI: ", MONGODB_URI);

// For connection with mongodb 
mongoose.connect(MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Database connection successful");
}).catch((err)=>{
    console.log("No connection with DB")
})
