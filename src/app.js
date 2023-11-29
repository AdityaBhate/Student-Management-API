const express = require('express')
require('./db/mongoose')

const studentRouter = require('./routers/student')
const courseRouter = require('./routers/course')
const assignmentRouter = require('./routers/assignment')

const app = express()

app.use(express.json())

app.use(studentRouter)
app.use(courseRouter)
app.use(assignmentRouter)

module.exports = app