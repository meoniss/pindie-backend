// Создаём роут для запросов категорий 
const usersRouter = require('express').Router();

// Импортируем вспомогательные функции
const sendUserDeleted = require('../middlewares/users');
const deleteUser = require('../middlewares/users');

const sendUserUpdated = require('../middlewares/users');
const updateUser = require('../middlewares/users');

const checkEmptyNameAndEmail = require('../middlewares/games');
const checkIsUserExists = require('../middlewares/users');
const checkEmptyNameAndEmailAndPassword = require('../middlewares/games');
const findAllUsers = require('../middlewares/users');
const createUser = require('../controllers/users')
const sendUserCreated = require('../controllers/users')

const findUserById = require('../middlewares/games');
const filterPassword = require('../middlewares/games');
const sendAllUsers = require('../middlewares/games');
const sendUserById = require('../middlewares/games');
const hashPassword = require('../middlewares/games');

const { checkAuth } = require("../middlewares/auth.js");

// Обрабатываем GET-запрос с роутом '/users'
usersRouter.get("/users", findAllUsers, filterPassword, sendAllUsers);
usersRouter.get("/users/:id", findUserById, filterPassword, sendUserById);
usersRouter.get("/me", checkAuth, sendMe);

usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated
);
usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser,
  sendUserUpdated
);
usersRouter.delete(
    "/users/:id",
    checkAuth,
    deleteUser,
    sendUserDeleted
); 

// Экспортируем роут для использования в приложении — app.js
module.exports = usersRouter;
  