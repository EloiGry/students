const express = require("express")
const app = express()
let students = require('../students.json')

app.get("/", (req, res) => {
    res.json(students)
})

app.post("/", (req, res) => {
    console.log(req.body)
    const student = {
        ...req.body,
        id: students.length + 1
      }

    students = [...students, student]

    res.json(student)
})

module.exports = app