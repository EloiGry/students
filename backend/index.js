const express = require("express")
const app = express()
const port = 5000
const bodyparser = require("body-parser")
const cors = require("cors")

app.use(cors())

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

const students = require ("./routes/students")

app.use('/students', students)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })