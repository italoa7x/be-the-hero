const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const routes = express.Router();
const OngController = require('./controllers/OngControler');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

routes.post('/sessions', SessionController.create)
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}) ,ProfileController.index)

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);
module.exports = routes;
