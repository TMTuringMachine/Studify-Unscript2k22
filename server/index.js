import express, { json } from 'express'
const app = express()
import { config } from 'dotenv' 
config({path:'./config.env'}) 
const port = process.env.PORT

//using middleware to parse json data
app.use(json());

import './db/conn'

app.use('/',require('./routes/UserRoutes'))
app.use('/admin',require('./routes/AdminRoutes'))
app.use('/course', require('./routes/CourseRoutes').default)

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})
