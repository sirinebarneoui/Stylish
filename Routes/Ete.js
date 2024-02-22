const express= require('express'); 
const { GetOneEte, GetEte, deleteEte } = require('../Controllers/Ete');



const EteRouter=express()

// EteRouter.post('/updateete', updateEte)

EteRouter.get('/getete', GetOneEte)

EteRouter.get('/getallete' , GetEte)

EteRouter.delete('/deleteete', deleteEte)


module.exports = EteRouter