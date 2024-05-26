// Файл routes/games.js

const sendGameDeleted = require('../controllers/game')
const deleteGame = require('../controllers/game')

const findGameById = require('../controllers/game')
const checkIfUsersAreSafe = require('../controllers/game')
const checkEmptyFields = require('../controllers/game')
const updateGame = require('../controllers/game')
const gamesRouter = require('express').Router();
const sendGameUpdated = require('../middlewares/games');

const checkIfCategoriesAvaliable = require('../controllers/game')
const checkIsGameExists = require('../middlewares/games')
const sendGameById = require('../middlewares/games');
const createGame = require('../controllers/game');
const findAllGames = require('../middlewares/games');
const sendGameCreated = require('../controllers/game');

const checkIsVoteRequest = require('../middlewares/games');

const { checkAuth } = require("../middlewares/auth.js");

// Маршрут для создания игры
gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  // Другие миддлвары и контроллеры
);

// Маршрут для обновления игры
gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIsVoteRequest,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  // Другие миддлвары и контроллеры
);

// Маршрут для удаления игры
gamesRouter.delete(
    "/games/:id", 
    checkAuth, 
    // Другие миддлвары и контроллеры
); 


module.exports = gamesRouter;