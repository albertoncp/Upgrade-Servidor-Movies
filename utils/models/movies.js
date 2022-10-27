
const mongoose = require("mongoose")


const Schema = mongoose.Schema;

//Crear nuestro esquema 

const moviesSchema = new Schema (
    {
        title:{type:String, required:true},
        director:{type:String, required:true},
        year:{type:Number, required:true},
        genre:{type:String ,required:true}
    },
    {
        timestamps: true
    }
)

const Movie = mongoose.model("movies", moviesSchema)
module.exports = Movie