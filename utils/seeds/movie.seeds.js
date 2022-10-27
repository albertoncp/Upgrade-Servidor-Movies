const mongoose = require("mongoose")

const connectDb = require("../db/db")

const Movie = require("../models/movies")

const movies = [
  {
    title: 'The Matrix',
    director: 'Hermanas Wachowski',
    year: 1999,
    genre: 'Acción',
  },
  {
    title: 'The Matrix Reloaded',
    director: 'Hermanas Wachowski',
    year: 2003,
    genre: 'Acción',
  },
  {
    title: 'Buscando a Nemo',
    director: 'Andrew Stanton',
    year: 2003,
    genre: 'Animación',
  },
  {
    title: 'Buscando a Dory',
    director: 'Andrew Stanton',
    year: 2016,
    genre: 'Animación',
  },
  {
    title: 'Interestelar',
    director: 'Christopher Nolan',
    year: 2014,
    genre: 'Ciencia ficción',
  },
  {
    title: '50 primeras citas',
    director: 'Peter Segal',
    year: 2004,
    genre: 'Comedia romántica',
  },
];

//Conectarnos a la base de datos para insetar estos n uevos documentos
const moviesDocuments = movies.map(movie => new Movie(movie))

connectDb().then(async () => {
  await Movie.collection.drop()
  console.log("Se han eliminado todas las peliculas" );
})
.catch( (error) => console.log("no se ha podido eliminar", error))
.then( async () =>{
  await Movie.insertMany(moviesDocuments)
  console.log("Se han ingresado los nuevos datos");
  
  
})
.catch((error) => console.log("No he podido meter los datos " + error))
  .finally(() => mongoose.disconnect());
