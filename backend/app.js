const {loadTurkiye} = require('./turkiye_model')
const express = require('express');
const cors = require('cors');
 const app = express();

 const port = 3000;

 app.listen(port, () => console.log('Server is running..'));
 app.use(cors());

 app.get('/turkiye', (request, response) => {
   response.send(loadTurkiye());
 });