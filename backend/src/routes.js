const express = require("express");
const ongsController = require("./controllers/OngController");
const incidentsController = require("./controllers/IncidentController");
const profileController = require("./controllers/ProfileController");
const sessionController = require("./controllers/SessionController");
const routes = express.Router();

routes.post("/session", sessionController.create);

routes.get("/ongs", ongsController.index);

routes.post("/ongs", ongsController.create);

routes.post("/incidents", incidentsController.create);

routes.get("/incidents", incidentsController.index);
routes.get("/profile", profileController.index);
routes.delete("/incidents/:id", incidentsController.delete);



module.exports = routes;