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
        const {id} = req.params.id
        const car = await db("cars").where({ id }).first()

        res.json(car)
    } catch (error) {
        next(error)
    }
})

router.put("/:id", async (req, res, next) => {
    try {
        const payload = {
            vin: req.body.vin,
            make: req.body.make,
            model: req.body.model,
            mileage: req.body.mileage,
            transmission: req.body.transmission,
            title: req.body.title
        }

        const {id} = req.params.id

        await db("cars").where({id}).update(payload)

        const updatedCar = await db("cars").where({id}).first()

        res.json(updatedCar)

    } catch (err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const carInfo = req.body
        const id = await db("cars").insert(carInfo)
        const newCar = await db("cars").where({id})

        res.status(201).json(newCar)

    } catch(err) {
        next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
    try {
        const {id} = req.params.id
        await db("cars").where({id}).delete()
        // Wanted to use truncate but wasn't sure if I should reset 
        // the IDs here decided against it. Better safe than sorry.
    } catch(err) {
        next(err)
    }
})

module.exports = router