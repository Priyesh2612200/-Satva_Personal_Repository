import express from 'express';
import router from './Route/index';
const bodyparser = require('body-parser'); //add

const app = express();

app.use(bodyparser.json()) //add
app.use(bodyparser.urlencoded({ extended: true })) //add
app.use(router);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});