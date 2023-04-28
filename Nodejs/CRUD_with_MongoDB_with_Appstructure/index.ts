import express from "express";
import mongoDBConfig from "./mongoDBConfig";
import router  from "./Router/index";  
import cors from 'cors';
import bodyparser from 'body-parser';

const app = express()
const port = 2001
mongoDBConfig.dbConnect()

app.use(cors());
app.use(bodyparser.json());
app.use(router)

app.listen(port, () => {
    console.log('App is Running on port:2001');
})
