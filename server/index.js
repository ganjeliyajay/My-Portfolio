import express, { json, urlencoded } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { db } from './Configs/db.js'
import { ProjectRoute } from './Routes/ProjectRoute.js'
import { ContactRoute } from './Routes/ContactRoute.js'

dotenv.config()

const app = express()

app.use(json());
app.use(urlencoded({ extended: true }));


const isProduction = process.env.NODE_ENV === "production";
app.use(cors({
    origin: isProduction
        ? [process.env.CLIENT_URL]                // ✅ only frontend URL on Render
        : ["http://localhost:5173"],             // ✅ local dev
    credentials: true,
}));


app.get('/', (req, res) => {
    res.send('✅ Portfolio Backend is running on Render!');
});


//Database connect
db()


//main route
app.use('/portfolio', ProjectRoute)
app.use('/portfolio', ContactRoute)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running on : ${PORT}`))