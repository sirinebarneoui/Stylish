const express= require('express'); 
const { SignUp, SignIn, AddUser, GetUsers, DeleteUser, UpdateUser, GetOneUser } = require('../Controllers/User');
const { IsAuth } = require('../Middleware/IsAuth');


const userRouter = express.Router() 




userRouter.post('/SignUp', SignUp)


userRouter.post('/SignIn', SignIn )
    

userRouter.get('/ConnectedUser',IsAuth,(req,res)=>{res.send(req.user)})


userRouter.post('/addUser',AddUser)


userRouter.get('/getUsers',GetUsers)


userRouter.delete('/deleteUser/:id',DeleteUser)


userRouter.put('/updateUser/:id',UpdateUser)


userRouter.get('/getOneUser/:id',GetOneUser)





module.exports=  userRouter