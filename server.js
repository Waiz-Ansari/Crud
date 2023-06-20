const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const cors = require("cors")

const routes = require("./rout/taskRout")



const app = express()
const port =  5000


app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URi)
.then(()=> console.log("mongodb connecter....ok"))
.catch((error)=> console.log(error))

app.use("/api", routes)

app.listen(port , ()=> console.log(`listening at ${port}` ))