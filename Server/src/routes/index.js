
const {getCharById }= require('../controllers/getCharById');
const {login} = require('../controllers/login');
const {postFav, deleteFav} = require('../controllers/handleFavorites');

const router = require('express').Router();

router.get('/character/:id', (req, res) => {
    getCharById(req , res);
});

router.get('/login', login);

router.post('/fav', (req, res) => {
    postFav(req , res);
});

router.delete('/fav/:id', (req, res) => {
    deleteFav(req , res);
});


module.exports = router


//En este código, se importa la función Router de Express y se crea un nuevo enrutador utilizando express.Router(). Luego, se importan los controladores correspondientes: getCharById, login, postFav, y deleteFav.

//Se definen las rutas utilizando los métodos del enrutador (router.get, router.post, router.delete) y se asigna cada ruta a su respectivo controlador.