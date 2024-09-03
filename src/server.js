// import
require('dotenv').config()
const express = require('express')
// const path = require('path')

const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');
// const connection = require('./config/database')

const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

// config template engine
configViewEngine(app);

// config req.body
// Thư viện hỗ trợ lấy giá trị của input
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

// Khai báo route
app.use(webRoutes);
app.use('/v1/api/', apiRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})