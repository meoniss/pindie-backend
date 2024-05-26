// Файл middlewares/categories.js

// Импортируем модель
const categories = require('../models/category');

const findAllCategories = async (req, res, next) => {
    // По GET-запросу на эндпоинт /categories найдём все документы категорий
  req.categoriesArray = await categories.find({});
  next();
}

// middlewares/categories.js
const findCategoryById = async (req, res, next) => {
  console.log("GET /categories/:id");
  try {
    req.category = await categories.findById(req.params.id);
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
        res.status(404).send(JSON.stringify({ message: "Категория не найдена" }));
  }
};

const sendAllCategories = (req, res) => {
  // Установим заголовок ответа в формате JSON
res.setHeader('Content-Type', 'application/json');
// Отправим данные в виде JSON-объекта, 
// которые подготовим в миддлваре findAllCategories
res.end(JSON.stringify(req.categoriesArray));
};

const sendCategoryById = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.category));
};

const updateCategory = async (req, res, next) => {
  try {
      // В метод передаём id из параметров запроса и объект с новыми свойствами
    req.category = await categories.findByIdAndUpdate(req.params.id, req.body);
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Ошибка обновления игры" }));
  }
};

const deleteCategory = async (req, res, next) => {
  console.log("DELETE /categories/:id");
  try {
    req.category = await categories.findByIdAndDelete(req.params.id);
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Ошибка удаления категории" }));
  }
};

const sendCategoryDeleted = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.category));
};

const checkIsCategoryExists = async (req, res, next) => {
  const isInArray = req.categoriesArray.find((category) => {
    return req.body.name === category.name;
  });
  if (isInArray) {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Категория с таким названием уже существует" }));
  } else {
    next();
  }
};

const checkIfCategoriesAvaliable = async (req, res, next) => {
  // Проверяем наличие жанра у игры
if (!req.body.categories || req.body.categories.length === 0) {
  res.setHeader("Content-Type", "application/json");
      res.status(400).send(JSON.stringify({ message: "Выбери хотя бы одну категорию" }));
} else {
  next();
}
};

// Экспортируем функцию поиска всех категорий
module.exports = findAllCategories;
module.exports = findCategoryById;
module.exports = sendCategoryById;
module.exports = updateCategory;
module.exports = deleteCategory;
module.exports = sendCategoryDeleted;
module.exports = checkIsCategoryExists;
module.exports = checkIfCategoriesAvaliable;
module.exports = sendAllCategories;