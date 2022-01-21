const express = require('express')
const app = express()
const dotenv = require('dotenv') 
dotenv.config({path:'./config.env'}) 
const port = process.env.PORT

//using middleware to parse json data
app.use(express.json());

require('./db/conn');

app.use('/',require('./routes/UserRoutes'))
app.use('/admin',require('./routes/AdminRoutes'))

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})
