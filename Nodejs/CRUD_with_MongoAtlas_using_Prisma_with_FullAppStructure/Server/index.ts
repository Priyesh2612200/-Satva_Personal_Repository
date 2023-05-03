import express from 'express'
import bodyParser from 'body-parser';
import mongoDBConnection from '../Config/MongoDBConfig';
import routes from '../App/Routes'
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


class Server {
    port: any
    app: any
    constructor() {
        this.port = 3000
        this.app = express()
    }

    start() {
        this.config()
        //mongoDBConnection.dbConnect()
        this.setupRoutes()
        this.listen()
    }

    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    setupRoutes(){
        this.app.use(routes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`App is running on port ${this.port}`);
            // console.log(`MongoDB Connection Flag: ${prisma.$connect()}`)
        })
    }
}

export default Server