import axios from "axios"

const API_KEY = '94caff0a566f42cfa7263537230608'

export const getCurrentWeather = async (lat, long) => {
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${long}&aqi=no`);
        return response.data
}