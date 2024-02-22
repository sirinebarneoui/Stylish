const express= require('express'); 
const { GetOneProduit, GetProduits, deleteProduit } = require('../Controllers/Produit');




const produitRouter=express()


// produitRouter.post('/updateproduit', updateProduit)

produitRouter.get('/getproduit', GetOneProduit)

produitRouter.get('/getproduits' , GetProduits)

produitRouter.delete('/deleteproduit', deleteProduit)

module.exports = produitRouter