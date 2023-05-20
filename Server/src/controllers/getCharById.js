const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character/';

const getCharById = (req, res) => {
  const id = req.params.id;

  axios.get(`${URL}${id}`)
    .then(response => {
      const character = response.data;

      if (character) {
        const { id, status, name, species, origin, image, gender } = character;
        res.json({ id, status, name, species, origin, image, gender });
      } else {
        res.status(404).send('Not found');
      }
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
};

module.exports = getCharById;
