const routes = require('express').Router();

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');


routes.get('/devs', DevController.index);
routes.get('/devs/:id', DevController.show);
routes.post('/devs', DevController.store);

routes.get('/seacrh', SearchController.index);

module.exports = routes;