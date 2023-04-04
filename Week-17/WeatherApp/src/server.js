const express = require('express');
const connect = require('./Config/db');
const app = express();

app.use(express.json()); // !important

const cityWeatherController = require("./Controllers/cityweather.controller");

// console.log(cityWeatherController)

app.use("/weatherapi",cityWeatherController)

app.listen(2345,async()=>{
    await connect();
    console.log('listening on port 2345');
})



//* routes for getting weather data from openweat