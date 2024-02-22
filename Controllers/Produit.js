  
const Produit = require('../Models/Produit');


exports.postProduit=async(req,res)=>{

    try {
        const {id} = req.params

        await Produit.findByIdAndUpdate(id,{$set : req.body})

        res.status(200).send('Produit updated')

    } catch (error) {


        res.status(500).send('Could not update Produit')
    }
}


exports.deleteProduit=async(req,res)=>{

    try {
        const {id} = req.params

        await Produit.findByIdAndDelete(id)

        res.status(200).send('Produit deleted')

    } catch (error) {

        res.status(500).send('Could not delete Produit')
    }
}


exports.GetOneProduit=async(req,res)=>{

    try {

        const {id} = req.params

        const ProduitF = await Produit.findById(id)

        res.status(200).send({Msg :"Produit found", ProduitF})


    } catch (error) {

        res.status(500).send('Could not get Produit')
    }
}

exports.GetProduits=async(req,res)=>{

    try {

        const produits = await Produit.find()

        res.status(200).send({Msg : "Produits List",produits})
        
    } catch (error) {

        res.status(500).send('Could not get Produits')
    }
}

