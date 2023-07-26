const express = require('express');
const sequelize = require('./config');
const Pokemon = require('./models/pokemon');
const { getPokemons, searchPokemons, createPokemon, editPokemon } = require('./controllers/pokemonController');
const cors = require('cors');

const app = express();

app.use(express.json());

// Configuración de CORS para permitir solicitudes desde http://localhost:4200
const allowedOrigins = ['http://localhost:4200'];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Acceso no permitido por CORS'));
    }
  },
};

app.use(cors(corsOptions));

app.get('/pokemons', getPokemons);
app.get('/pokemons/search', searchPokemons);
app.post('/pokemons', createPokemon);
app.put('/pokemons/:id', editPokemon);

sequelize.sync()
  .then(() => {
    console.log('Tablas sincronizadas con éxito.');
  })
  .catch((err) => {
    console.error('Error al sincronizar las tablas:', err);
  });

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
