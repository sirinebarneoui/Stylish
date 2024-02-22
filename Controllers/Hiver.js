const Hiver = require("../Models/Hiver")

exports.postHiver=async(req,res)=>{

    try {
        const {id} = req.params

        await Hiver.findByIdAndUpdate(id,{$set : req.body})

        res.status(200).send('hiver updated')

    } catch (error) {


        res.status(500).send('Could not update Hiver')
    }
}


exports.deleteHiver=async(req,res)=>{

    try {
        const {id} = req.params

        await Hiver.findByIdAndDelete(id)

        res.status(200).send('Hiver deleted')

    } catch (error) {

        res.status(500).send('Could not delete Hiver')
    }
}


exports.GetOneHiver=async(req,res)=>{

    try {

        const {id} = req.params

        const HiverF = await Hiver.findById(id)

        res.status(200).send({Msg :"Hiver found", HiverF})


    } catch (error) {

        res.status(500).send('Could not get Hiver')
    }
}

exports.GetHiver=async(req,res)=>{

    try {

        const Hiver= await Hiver.find()

        res.status(200).send({Msg : "Hiver List",Hiver})
        
    } catch (error) {

        res.status(500).send('Could not get Hiver')
    }
}
