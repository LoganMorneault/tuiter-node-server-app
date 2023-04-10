import express from 'express'
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js"
import UserController from './controllers/users-controller.js'
import TuitsController from './controllers/tuits/tuits-controller.js'
import mongoose from "mongoose"

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || "mongodb://localhost:27017/tuiter"
// mongodb+srv://happydicappy:<password>@cs4550-hw9-cluster.g7kstpk.mongodb.net/?retryWrites=true&w=majority

mongoose.connect(CONNECTION_STRING)

const app = express()

app.use(express.json());
app.use(cors());

HelloController(app);
UserController(app);
TuitsController(app);

app.listen(4000)

app.get('/', function (req, res) {
    res.json({
        status: "OK"
    });
});