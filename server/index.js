import express, { json, urlencoded } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { db } from './Configs/db.js'
import { ProjectRoute } from './Routes/ProjectRoute.js'
import { ContactRoute } from './Routes/ContactRoute.js'

dotenv.config()

const app = express()

app.use(json(), urlencoded({ extended: true }))
app.use(cors())

const PORT = process.env.PORT

//Database connect
db()


//main route
app.use('/portfolio', ProjectRoute)
app.use('/portfolio/send-mail', ContactRoute)

app.listen(PORT, () => console.log(`server is running on : ${PORT}`))