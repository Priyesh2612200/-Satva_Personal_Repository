import express, { Application } from 'express';
import route from './Router/index';
import dotenv from 'dotenv';
import bodyparser from 'body-parser';
import cors from 'cors';
import mongoDBConfig from "./MongoDBConnection";

dotenv.config({ path: ".env" });

mongoDBConfig.dbConnect()

const app: Application = express();
app.use(bodyparser.json());
app.use(route);

const port: number | string = process.env.PORT || 2020;
app.listen(port, () => console.log(`Server runs on the port ${port}. Env : ${process.env.PORT}`));
