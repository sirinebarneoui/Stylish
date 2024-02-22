const mongoose= require ('mongoose')


const hiverSchema = new mongoose.Schema(


     {  
        
        ref : { type : Number , unique : true },



        name: { type : String  , id : Math.random()}

        


     }

)

module.exports= mongoose.model('hiver', hiverSchema)