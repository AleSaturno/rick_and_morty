const express = require('express');
const router = express.Router();

//En este código, se importa la función Router de Express y se crea un nuevo enrutador utilizando express.Router(). Luego, se importan los controladores correspondientes: getCharById, login, postFav, y deleteFav.

//Se definen las rutas utilizando los métodos del enrutador (router.get, router.post, router.delete) y se asigna cada ruta a su respectivo controlador.



const getCharById = require('../controllers/getCharById');

const login = require('../controllers/login');

const { postFav, deleteFav } = require('../controllers/handleFavorites');


router.get('/character/:id', getCharById);

router.get('/login', login);

router.post('/fav', postFav);

router.delete('/fav/:id', deleteFav);


module.exports ={
    router
};