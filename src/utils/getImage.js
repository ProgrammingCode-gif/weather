const images = {
    ['Sunny']: '/icons/sun.svg',
    ['Clear']: '/icons/sun.svg',
    ['Partly cloudy']: '/icons/minicloud.svg',
    ['Cloudy']: '/icons/cloud.svg',
    ['Overcast']: '/icons/cloud.svg',
    ['Mist']: '/icons/osadki.svg',
    ['Patchy rain possible']: '/icons/sunrain.svg',
    ['Patchy snow possible']: '',
    ['Patchy sleet possible']: '',
    ['Patchy freezing drizzle possible']: '',
    ['Thundery outbreaks possible']: '/icons/rain.svg',
    ['Blowing snow']: '',
    ['Blizzard']: '/icons/wind.svg',
    ['Fog']: '/icons/osadki.svg',
    ['Freezing fog']: '/icons/osadki.svg',
    ['Patchy light drizzle']: '',
    ['Light drizzle']: '',
    ['Freezing drizzle']: '',
    ['Heavy freezing drizzle']: '',
    ['Patchy light rain']: '/icons/sunrain.svg',
    ['Light rain']: '/icons/sunrain.svg',
    ['Moderate rain at times']: '/icons/minicloud.svg',
    ['Moderate rain']: '/icons/minicloud.svg',
    ['Heavy rain at times']: '/icons/rain.svg',
    ['Heavy rain']: '/icons/rain.svg',
    ['Light freezing rain']: '/icons/rain.svg',
    ['Moderate or heavy freezing rain']: '/icons/rain.svg',
    ['Light sleet']: '',
    ['Moderate or heavy sleet']: '',
    ['Patchy light snow']: '',
    ['Light snow']: '',
    ['Patchy moderate snow']: '',
    ['Moderate snow']: '',
    ['Patchy heavy snow']: '',
    ['Heavy snow']: '',
    ['Ice pellets']: '',
    ['Light rain shower']: '/icons/rain.svg',
    ['Moderate or heavy rain shower']: '/icons/rain.svg',
    ['Torrential rain shower']: '/icons/rain.svg',
    ['Light sleet showers']: '',
    ['Moderate or heavy sleet showers']: '',
    ['Light snow showers']: '',
    ['Moderate or heavy snow showers']: '',
    ['Light showers of ice pellets']: '',
    ['Moderate or heavy showers of ice pellets']: '',
    ['Patchy light rain with thunder']: '/icons/rain.svg',
    ['Moderate or heavy rain with thunder']: '/icons/rain.svg',
    ['Patchy light snow with thunder']: '',
    ['Moderate or heavy snow with thunder']: ''
}

export const getImage = (condition) => {
    return images[condition]
}