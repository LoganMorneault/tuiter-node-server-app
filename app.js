import express from 'express'
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js"
import UserController from './controllers/users-controller.js'
import TuitsController from './controllers/tuits/tuits-controller.js'

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