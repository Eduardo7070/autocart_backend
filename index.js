import express from 'express';
import bodyParser, { json } from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();

app.use(express.json());
app.use(cors());
app.listen(8800)