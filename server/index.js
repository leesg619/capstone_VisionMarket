// express moudule
const express = require('express');
const app = express();

// cors 정책을 proxy로 회피하기 위함
const cors = require('cors');

app.use(cors());

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const mongoose = require('mongoose');

const config = require("./config/key");

const connect = mongoose.connect(config.mongoURI, 
    {
        useNewUrlParser : true, useUnifiedTopology : true,
        useCreateIndex : true, useFindAndModify : false
    })
    .then(()=>console.log("MongoDB Connect..."))
    .catch(err => console.log(err));

// Router
const userRoute = require('./routes/user');
const searchRoute = require('./routes/search');
const adminPostRoute = require('./routes/adminPost')
const postRoute = require('./routes/post')
const categoryRoute = require('./routes/category')
const reviewRoute = require('./routes/review')
// const cartRoute = require('./routes/cart')

// app use
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(cookieParser())

app.get('/', (req, res) => res.send("Hello World"))
app.use('/api/users', userRoute);
app.use('/api/searchs', searchRoute);
app.use('/api/admin/posts', adminPostRoute);
app.use('/api/post',postRoute);
app.use('/api/category',categoryRoute)
app.use('/api/review',reviewRoute);
// app.use('/api/cart',cartRoute)

const port = 5000

var server = app.listen(port, ()=>{console.log(`listen to http://127.0.0.1:${port}/`)});
server.timeout = 12000;
