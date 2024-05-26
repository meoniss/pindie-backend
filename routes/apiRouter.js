const gamesRouter = require("./games");

const apiRouter = require("express").Router();
apiRouter.use("/api", gamesRouter);
// Импорты и инициализация главного роута
apiRouter.use("/api", gamesRouter);
apiRouter.use("/api", usersRouter);
apiRouter.use("/api", categoriesRouter);
apiRouter.use("/api", authRouter);

// Код роута
module.exports = apiRouter;