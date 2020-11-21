import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import routes from '../routes/routes';

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.use(routes);

export default app;

