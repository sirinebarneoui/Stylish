
const Ete= require('../Models/Ete');


exports.postEte=async(req,res)=>{

    try {
        const {id} = req.params

        await Ete.findByIdAndUpdate(id,{$set : req.body})

        res.status(200).send('ete updated')

    } catch (error) {


        res.status(500).send('Could not update Ete')
    }
}


exports.deleteEte=async(req,res)=>{

    try {
        const {id} = req.params

        await Ete.findByIdAndDelete(id)

        res.status(200).send('Ete deleted')

    } catch (error) {

        res.status(500).send('Could not delete Ete')
    }
}


exports.GetOneEte=async(req,res)=>{

    try {

        const {id} = req.params

        const EteF = await Ete.findById(id)

        res.status(200).send({Msg :"Ete found", EteF})


    } catch (error) {

        res.status(500).send('Could not get Ete')
    }
}

exports.GetEte=async(req,res)=>{

    try {

        const Ete= await Ete.find()

        res.status(200).send({Msg : "Ete List",Ete})
        
    } catch (error) {

        res.status(500).send('Could not get Ete')
    }
}
