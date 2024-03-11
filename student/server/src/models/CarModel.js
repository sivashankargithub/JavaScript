import mongoose from "mongoose"

const CarSchema = mongoose.Schema({
    carId: {type: Number,  default: 0},
    carBrand: {type: String, default: null},
    carName: {type: String, default: null},
    carModel: {type: String, default: null},
    carPrice: {type: String, default: null} 
})

const carmodel = mongoose.model('cars', CarSchema)

export default carmodel