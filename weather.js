let weather = {  //imported from a JSON.  Objects can get pretty long!
    "cnt": 3,
    "list": [
      {
        "coord": {
          "lon": 37.62,
          "lat": 55.75
        },
        "sys": {
          "type": 1,
          "id": 7323,
          "message": 0.0036,
          "country": "RU",
          "sunrise": 1485753940,
          "sunset": 1485784855
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "main": {
          "temp": -10.5,  //current temperature
          "pressure": 1028,
          "humidity": 66,
          "temp_min": -11,
          "temp_max": -10
        },
        "visibility": 10000,
        "wind": {
          "speed": 5, //I want this info
          "deg": 200
        },
        "clouds": {
          "all": 0
        },
        "dt": 1485793175,
        "id": 524901,
        "name": "Moscow"
      },
      {
        "coord": {
          "lon": 30.52,
          "lat": 50.45
        },
        "sys": {
          "type": 1,
          "id": 7358,
          "message": 0.0268,
          "country": "UA",
          "sunrise": 1485754480,
          "sunset": 1485787716
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "main": {
          "temp": -11.04,
          "pressure": 1033,
          "humidity": 61,
          "temp_min": -15,
          "temp_max": -9
        },
        "visibility": 10000,
        "wind": {
          "speed": 3,
          "deg": 150
        },
        "clouds": {
          "all": 0
        },
        "dt": 1485793175,
        "id": 703448,
        "name": "Kiev"
      },
      {
        "coord": {
          "lon": -0.13,
          "lat": 51.51
        },
        "sys": {
          "type": 1,
          "id": 5091,
          "message": 0.0034,
          "country": "GB",
          "sunrise": 1485762036,
          "sunset": 1485794875
        },
        "weather": [
          {
            "id": 701,
            "main": "Mist",
            "description": "mist",  //description
            "icon": "50d"
          },
          {
            "id": 300,
            "main": "Drizzle",
            "description": "light intensity drizzle",  //description
            "icon": "09d"
          }
        ],
        "main": {
          "temp": 7,
          "pressure": 1012,
          "humidity": 81,
          "temp_min": 5,
          "temp_max": 8
        },
        "visibility": 10000,
        "wind": {
          "speed": 4.6,
          "deg": 90
        },
        "clouds": {
          "all": 90
        },
        "dt": 1485793175,
        "id": 2643743,
        "name": "London"
      }
    ]
  }
//getting current temperature
  let weatherList = weather.list  //first we need to select the main array
  //console.log(weatherList)

  let weatherInfo = weatherList[0] //then we narrow it down to the object in the array
 // console.log(weatherInfo)

  let main = weatherInfo.main //then we select nested object in the previus object

  let currentTemp = main.temp //finally we select the element in the last object
  console.log('The current temperature is: ' + currentTemp)

  let wind = weatherInfo.wind

  let windSpeed = wind.speed
  console.log('The current wind speed is: ' + windSpeed)

  let weatherDescriptionArray = weatherInfo.weather

  descriptions = []

  weatherDescriptionArray.forEach(  function( weatherDescription) {
    // console.log(weatherDescription.description)
    descriptions.push(weatherDescription.description)
  })

  let descriptionString = descriptions.join(', ')