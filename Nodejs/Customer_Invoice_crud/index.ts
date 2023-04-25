import express, { Application } from 'express';
import route from './Route/index';
import dotenv from 'dotenv';
dotenv.config({ path: ".env" });

const app: Application = express();
app.use(route);

const port: number | string = process.env.PORT || 2020;
app.listen(port, () => console.log(`Server runs on the port ${port}. Env : ${process.env.PORT}`));

console.log("test");
