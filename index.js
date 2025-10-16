import express from 'express';
import usersRoute from './routes/web.js';
import cors from 'cors';


const app = express();

app.use(express.json());
app.use(cors());

app.listen(8880);

app.use('/', usersRoute);