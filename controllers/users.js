const users = require("../models/user");
const bcrypt = require("bcryptjs"); // Импортируем bcrypt 
 
const createUser = async (req, res, next) => {
  try {
    req.user = await users.create(req.body);
    next();
  } catch (error) {
    res.status(400).send("Ошибка при создании пользователя");
  }
};

const sendUserCreated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};

const sendMe = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};

// Экспортируем контроллер
module.exports = createUser;
module.exports = sendUserCreated;
module.exports = sendMe;
