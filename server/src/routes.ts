import express from 'express';

const routes = express.Router();

import Proffy from './controllers/ProffyController';

routes.get('/classes', Proffy.getProffys);

routes.post('/classes', Proffy.createProffy);

export default routes;