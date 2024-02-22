const bcrypt = require('bcrypt');  
var jwt = require('jsonwebtoken');
const User = require('../Models/User');
  
  exports.SignUp= async(req,res)=>{

    try {

        const {email,password} = req.body
        
        const found = await User.findOne({email})
    
        if(found) {
    
            return res.status(400).send({errors : [{ msg : "Email already exist"}]})
        }
            const newUser = new User(req.body)
    
                const saltRounds = 10;
                const salt = bcrypt.genSaltSync(saltRounds) ;
                const hashedPassword = bcrypt.hashSync(password, salt); 
             
                 newUser.password= hashedPassword
            
                  await newUser.save()
    
                  const payload= {id : newUser._id}
    
                  var token = jwt.sign(payload, process.env.privateKey, {expiresIn : '5h'});
    
                  res.status(200).send({msg : "User registred", newUser, token})
    
    
    
             } catch (error) {
    
                res.status(500).send({errors : [{msg : "Could Not Add User"}]})
        
            }
    
    }


    exports.SignIn= async(req,res)=>{ 

        try {

       const {email,password} = req.body
       
       const found = await User.findOne({email})
   
         if(!found) {
   
           return res.status(400).send({errors : [{ msg : "Email Not Found"}]})
         }
          
           const matched = bcrypt.compareSync(password, found.password ) 

           if (!matched) {

           return res.status(400).send({errors : [{ msg : "Wrong password"}]})

           }
               
               
           const payload= {id : found._id}

           var token = jwt.sign(payload, process.env.privateKey, {expiresIn : '5h'});
                
                 res.status(200).send({msg : 'Connected', found, token})

            } catch (error) {
   
               res.status(500).send({errors : [{ msg : "Could not connected "}]})
       
          } }


          exports.AddUser=async(req,res)=>{

            try {
        
                const found = await User.findOne({email : req.body.email})
        
                if(found){
                    return res.status(400).send('Email already used')
                }
        
                const newUser = new User(req.body)
        
                await newUser.save()
        
                res.status(200).send({Msg : "User Added",newUser})


            } catch (error) {

                res.status(500).send('Could not add User')
            }
        }
         
          exports.GetUsers=async(req,res)=>{
            try {
                const users = await User.find()
        
                res.status(200).send({Msg : "User List",users})

            } catch (error) {


                res.status(500).send('Could not get Users')
            }
        }


          exports.DeleteUser=async(req,res)=>{

            try {
                const {id} = req.params
        
                await User.findByIdAndDelete(id)
        
                res.status(200).send('User deleted')

            } catch (error) {

              
                res.status(500).send('Could not delete Users')
            }
        }

        exports.UpdateUser=async(req,res)=>{

          try {
              const {id} = req.params
      
              await User.findByIdAndUpdate(id,{$set : req.body})
      
              res.status(200).send('User updated')

          } catch (error) {


              res.status(500).send('Could not update Users')
          }
      }

      exports.GetOneUser=async(req,res)=>{

        try {

            const {id} = req.params
    
            const userF = await User.findById(id)
    
            res.status(200).send({Msg :"User found", userF})


        } catch (error) {

            res.status(500).send('Could not get User')
        }
    }


    exports.UpdateProfil=async(req,res)=>{

        try {
            const {id} = req.params
    
            await User.findByIdAndUpdate(id,{$set : req.body})
    
            res.status(200).send('Profil updated')
    
        } catch (error) {
    
    
            res.status(500).send('Could not update Profil')
        }
    }
    
    
    exports.DeleteProfil=async(req,res)=>{
    
        try {
            const {id} = req.params
    
            await User.findByIdAndDelete(id)
    
            res.status(200).send('Profil deleted')
    
        } catch (error) {
    
          
            res.status(500).send('Could not delete Profil')
        }
    }
    
    
    