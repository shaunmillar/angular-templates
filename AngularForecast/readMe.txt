AngularForecast Test project

This project demonstrates using a weather service. 

Set up: 
	- npm install [to create the required node files in the source tree]
	- bower install [to create the required angularJS files in the source tree]
	
To run a simple web server 
	- open a command window on the project root
	- run node node_modules/http-server/bin/http-server
	- open http://localhost:8080/index.html 
	
See http://mobileangularui.com/blog/using-the-generator/

Example result set:

{"coord":{"lon":-123.37,"lat":48.43},"weather":[{"id":520,"main":"Rain","description":"light intensity shower rain","icon":"09d"}],"base":"cmc stations","main":{"temp":288.73,"pressure":1018,"humidity":77,"temp_min":285.15,"temp_max":291.48},"wind":{"speed":2.6,"deg":70},"rain":{"1h":1.02},"clouds":{"all":90},"dt":1442616417,"sys":{"type":1,"id":3364,"message":0.0052,"country":"CA","sunrise":1442584540,"sunset":1442629079},"id":6174041,"name":"Victoria","cod":200}

formatted:

{  
  "coord":{  
    "lon":-123.37,
    "lat":48.43
  },
  "weather":[  
    {  
      "id":520,
      "main":"Rain",
      "description":"light intensity shower rain",
      "icon":"09d"
    }
  ],
  "base":"cmc stations",
  "main":{  
    "temp":288.73,
    "pressure":1018,
    "humidity":77,
    "temp_min":285.15,
    "temp_max":291.48
  },
  "wind":{  
    "speed":2.6,
    "deg":70
  },
  "rain":{  
    "1h":1.02
  },
  "clouds":{  
    "all":90
  },
  "dt":1442616417,
  "sys":{  
    "type":1,
    "id":3364,
    "message":0.0052,
    "country":"CA",
    "sunrise":1442584540,
    "sunset":1442629079
  },
  "id":6174041,
  "name":"Victoria",
  "cod":200
}

