const express = require("express")
require("dotenv").config()
require("./utils/db/db")

const connectDb = require("./utils/db/db")
connectDb()

const movieRoutes = require("./utils/routes/movies.routes")



const PORT = process.env.PORT || 4000;
const DB_URL = process.env.DB_URL;

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use("/", movieRoutes)
/* server.use("/", ) */

server.use("*",(req,res) =>{
    const error = new Error("Ruta no encontrada, 404")
    error.status = 404

    return res.status(error.status).json(error.message)
})

server.use((error,req,res,next) => {
    console.log("error next", error.message);
    return res.status(418).json(error.message)
})

server.listen(PORT, () =>  {
    console.log(`Server running in http://localhost:${PORT}`);
})
