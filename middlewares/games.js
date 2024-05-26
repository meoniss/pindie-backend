// Файл middlewares/games.js

// Импортируем модель
const games = require("../models/game");

const findAllGames = async (req, res, next) => {
  req.gamesArray = await games.find({}).populate("categories").populate("users");
  next();
};

// Экспортируем функцию поиска всех игр
module.exports = findAllGames;

// Файл controllers/games.js

const sendAllGames = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  // Вернём найденные игры в формате JSON
  res.end(JSON.stringify(req.gamesArray));
};

module.exports = sendAllGames;


