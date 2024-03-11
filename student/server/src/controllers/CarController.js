import CarModel from '../models/CarModel'

const addCarDetails = (req,res) => {
    const obj = req.body
    console.log(obj)
    const model = CarModel.create(obj)
    model.then(result => {
        res.send({result, message: "add Car details controller"})

    }).catch(err => {
        res.send({message: "err"})

    })
}

const findCarDetails = (req,res) => {
    CarModel.find({}).then(result => res.send(result)).catch(err => res.send(err))
}

const findCarById = (req,res) => {
    let id = req.params.id
    CarModel.findCarById(id).then(result => {res.send(result)}).catch(err => {res.send(err)})
}

export default{addCarDetails,findCarDetails,findCarById}