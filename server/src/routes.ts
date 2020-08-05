import express from 'express';

const routes = express.Router();

routes.get('/users', (req, res) => {
    res.send('heeeello');
});

export default routes;