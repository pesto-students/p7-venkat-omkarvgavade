const mongoose=require('mongoose')

const CityWeatherSchema = new mongoose.Schema({
    city:{type:String, required:true},
    weather:{type:Object, required:true},
},{
    versionKey:false,
    timestamps:true
})


const CityWeather = mongoose.model('CityWeather',CityWeatherSchema)

module.exports = CityWeather;