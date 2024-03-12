import UserModel from '../models/UserModel'

const Registration=(req,res) => {
    const obj = req.body
    const model = UserModel.create(obj)
    model.then(result => {
        res.send({result, message: "add user details controller"})

    }).catch(err => {
        res.send({message: "err"})

    })
}

const Login=(req,res) => {
    UserModel.find({email:req.body.email, password:req.body.password}).then(result =>{
        console.log(result.length)
        if(result.length===0){
            res.status(401).send({
                message:"your eami and password is wrong"
            })
        }
        else{
            res.send(result)
        }
        } ).catch(err => res.send(err))
}
export default {Registration,Login}
