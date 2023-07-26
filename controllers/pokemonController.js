const { Op } = require('sequelize');
const Pokemon = require('../models/pokemon');

// Controlador para obtener la lista de pokémons paginada y ordenada por ID
async function getPokemons(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 1000;
    const offset = (page - 1) * pageSize;

    const pokemons = await Pokemon.findAll({
      order: [['id', 'ASC']],
      offset,
      limit: pageSize,
    });

    res.json(pokemons);
  } catch (error) {
    console.error("Error al obtener la lista de pokémons:", error);
    res.status(500).json({ error: 'Error al obtener la lista de pokémons' });
  }
}

// Controlador para buscar pokémons por nombre o identificador
async function searchPokemons(req, res) {
  try {
    const term = req.query.term;

    if (!term || term.trim() === "") {
      return res.status(400).json({ error: 'El término de búsqueda es inválido.' });
    }

    const pokemons = await Pokemon.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${term}%` } }, // Búsqueda por nombre (insensible a mayúsculas/minúsculas)
          { id: { [Op.eq]: parseInt(term) } }, // Búsqueda por identificador exacto
        ],
      },
    });

    if (pokemons.length === 0) {
      return res.status(404).json({ error: 'No se encontraron pokémones.' });
    }

    res.json(pokemons);
  } catch (error) {
    console.error("Error al realizar la búsqueda de pokémons:", error);
    res.status(500).json({ error: 'Error al realizar la búsqueda de pokémons' });
  }
}

// Controlador para crear un nuevo pokémon
async function createPokemon(req, res) {
  try {
    const { name, attack, defense, image, type } = req.body;

    // Crea el nuevo Pokémon en la base de datos
    const newPokemon = await Pokemon.create({
      name,
      attack,
      defense,
      image,
      type,
    });

    res.json(newPokemon);
  } catch (error) {
    console.error('Error al crear un nuevo pokémon:', error);
    res.status(500).json({ error: 'Error al crear un nuevo pokémon' });
  }
}


// Controlador para editar un pokémon existente
async function editPokemon(req, res) {
  try {
    const { id } = req.params;
    const { name, species, attack, defense, image, type } = req.body;

    const pokemon = await Pokemon.findByPk(id);

    if (!pokemon) {
      return res.status(404).json({ error: 'Pokémon no encontrado' });
    }

    pokemon.name = name;
    pokemon.species = species;
    pokemon.attack = attack;
    pokemon.defense = defense;
    pokemon.image = image;
    pokemon.type = type;
    await pokemon.save();

    res.json(pokemon);
  } catch (error) {
    console.error('Error al editar el pokémon:', error);
    res.status(500).json({ error: 'Error al editar el pokémon' });
  }
}

module.exports = {
  getPokemons,
  searchPokemons,
  createPokemon,
  editPokemon,
};
