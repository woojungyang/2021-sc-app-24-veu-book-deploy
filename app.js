const express= require('express');
const app = express();
const path = require('path');

app.use('/', express.static(path.join(__dirname,'/.dist' )));

app.listen(3200,()=>console.log('http://127.0.0.1:3200'));