const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const usersRouter = require('./routes/users');
const gamesRouter = require('./routes/games');
const categoriesRouter = require('./routes/categories');

const connectToDatabase = require('./database/connect');
const cors = require('./middlewares/cors');

const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3001;

connectToDatabase();

const pagesRouter = require("express").Router();
const { sendIndex } = require("../controllers/auth.js");

pagesRouter.get("/", sendIndex); 

// app.js
// Импорты и инициализация приложения


app.use(
  cors,
  cookieParser(),
  bodyParser.json(),
  pagesRouter, // Добавляем роутер для страниц
  apiRouter,
  express.static(path.join(__dirname, "public"))
);

// Запуск приложения

app.listen(PORT);
