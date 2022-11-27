const express = require("express");
const taskControllers = require("../controllers");
const routes = express.Router();

routes.post("/createtasklist",taskControllers.createTaskList);
routes.post("/createtask",taskControllers.createTask);
routes.get("/tasklist",taskControllers.taskList);


module.exports = routes;