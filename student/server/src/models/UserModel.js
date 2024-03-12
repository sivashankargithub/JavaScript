import mongoose from 'mongoose'

const UserSchema =  mongoose.Schema({
    name: {type: String, default: null},
    email: {type: String, default: null},
    password: {type: String, default: null},
})

const usermodel = mongoose.model('users', UserSchema)

export default usermodel