const express = require("express");

const CityWeather = require("../Models/cityweather.model");
const axios = require('axios')


const router = express();

//? getting all cities weather data from database

router.get("", async (req, res) => {
  const {page,limit} = req.query;
  const offset = (Number(page)-1) * Number(limit);
//   console.log(offset);
  const cityweather = await CityWeather.find().skip(offset).limit(Number(limit)).lean().exec();
  const totalResults = await CityWeather.find().count();
  res.status(200).json({cityweather,totalResults});
});

router.post("", async (req, res) => {
  const { city } = req.query;
  try {
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city[0]}&limit=5&appid=48f5ae62c8edd4eb24f90c633e17df79`
      )
      .then(({ data }) => {
        console.log(data)
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=48f5ae62c8edd4eb24f90c633e17df79`
          )
          .then(async(response) => {
            console.log(response)
            const cityweather = await CityWeather.create({
              city: city,
              weather: response.data,
            });
            res.status(201).json(cityweather);
          });
      });
  } catch (err) {
    // res.status(400);
  }
});


router.get("/city/:city",async(req,res) => {
   const cityWeather = await CityWeather.find({city: req.params.city}).lean().exec();

   if(cityWeather.length) res.status(200).json(cityWeather);
   else res.status(404).json({
    statusCode: 404,
    error: {message:"Not Found"}
   })
})

router.get("/forecast/:city/:days",async(req, res) => {
  console.log(req.params)
    const { city } = req.params;
    const days = Number(req.params.days);
    try {
      axios
        .get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=48f5ae62c8edd4eb24f90c633e17df79`
        )
        .then(({ data }) => {
          console.log(data)
          axios
            .get(
              `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${data[0].lat}&lon=${data[0].lon}&cnt=${days}&appid=48f5ae62c8edd4eb24f90c633e17df79`
            )
            .then(async (response) => {
              const {data} = response;
              res.status(200).json(data)
            });
        });
    } catch (err) {
      res.status(400);
    }
})
module.exports = router;
