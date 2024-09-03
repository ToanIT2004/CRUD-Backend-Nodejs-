const path = require('path')
const express = require('express');

const configViewEngine = (app) => {
   // config ViewEngine
   app.set('views', path.join('./src', 'views'))
   app.set('view engine', 'ejs')

   //config static file
   app.use(express.static(path.join('./src', 'public')))
}

// Trả ra export 
module.exports = configViewEngine;