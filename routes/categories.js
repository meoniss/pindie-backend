// Создаём роут для запросов категорий 
const categoriesRouter = require('express').Router();

// Импортируем вспомогательные функции
const sendCategoryDeleted = require('../middlewares/categories');
const deleteCategory = require('../middlewares/categories');

const updateCategory = require('../middlewares/categories');
const sendCategoryUpdated = require('../middlewares/categories');

const checkEmptyName = require('../middlewares/games');
const checkIsCategoryExists = require('../middlewares/categories');
const findAllCategories = require('../middlewares/categories');
const createCategory = require('../controllers/game')
const sendCategoryCreated = require('../controllers/game')

const findCategoryById = require('../middlewares/categories');
const sendCategoryById = require('../middlewares/categories');

const { checkAuth } = require("../middlewares/auth.js");

// Обрабатываем GET-запрос с роутом '/categories'
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
// routes/categories.js

categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  checkAuth,
  createCategory,
  sendCategoryCreated
);
categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  checkAuth,
  updateCategory,
  sendCategoryUpdated
);
categoriesRouter.delete(
  "/categories/:id",
  checkAuth,
  deleteCategory,
  sendCategoryDeleted
); 

// Экспортируем роут для использования в приложении — app.js
module.exports = categoriesRouter;