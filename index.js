const express = require("express")
const helmet = require("helmet")
const carsRouter = require("./cars/carsRouter")

const server = express()
const port = process.env.PORT || 5000

server.use(helmet())
server.use(express.json())

server.use("/cars", carsRouter)

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong. Cannot provide more information.",
    })
})

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})