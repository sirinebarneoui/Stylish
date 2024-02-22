const express= require('express'); 
const { GetOneHiver, GetHiver, deleteHiver } = require('../Controllers/Hiver');



const HiverRouter=express()

// HiverRouter.post('/updatehiver', updateHiver)

HiverRouter.get('/gethiver', GetOneHiver)

HiverRouter.get('/gethiver' , GetHiver)

HiverRouter.delete('/deletehiver', deleteHiver)


module.exports = HiverRouter