const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDb = require('./mongodb/connect')
const postRoutes = require('./routes/postRoutes')
const dalleRoutes = require('./routes/dalleRoutes')

const app = express();
dotenv.config()
const PORT = process.env.PORT || 5000;
connectDb(process.env.DB_URL)

app.use(express.json({ limit: '50mb' }))
app.use(cors())


app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

app.get('/', (req, res) => {
    res.send("Hello")
})

app.listen(PORT, () => {
    console.log(`Server Running at https:localhost:${PORT}`)
})