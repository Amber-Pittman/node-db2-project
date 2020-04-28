const express = require("express")
const db = require("../data/config")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const cars = await db("cars")
        res.json(cars)
    } catch(err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
    const carById = await db("cars").where("id", req.params.id)

    res.json(carById)
    } catch(err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    const {VIN, Make, Model, Mileage, Transmission, Title} = req.body

    try {
        const payload = {
            VIN,
            Make,
            Model,
            Mileage,
            Transmission,
            Title
        }
       
        const [id] = await db("cars").insert(payload)
        const newCar = await db("cars").where("id", id).first()

        res.status(201).json(newCar)

    } catch(err) {
        next(err)
    }
})


router.put("/:id", async (req, res, next) => {
    const {VIN, Make, Model, Mileage, Transmission, Title} = req.body

    try {
        const payload = {
            VIN,
            Make,
            Model,
            Mileage,
            Transmission,
            Title
        }
         
        const {id} = req.params.id

        await db("cars").where({id}).update(payload)

        const updatedCar = await db("cars").where({id}).first()

        res.json(updatedCar)

    } catch(err) {
        next(err)
    }
})


router.delete("/:id", async (req, res, next) => {
    try {
        const {id} = req.params.id
        await db("cars").where({id}).del()

        res.status(204).end()
        // Wanted to use truncate but wasn't sure if I should reset 
        // the IDs here decided against it. Better safe than sorry.
    } catch(err) {
        next(err)
    }
})

module.exports = router