
var map = new BMap.Map("map"); //Map Object
// var x = document.getElementById("location");

// Create a local Search Obj
var local = new BMap.LocalSearch(map, {
  renderOptions: { map: map }
});

//Initial Search
local.search("广州");

//Async Function that calls API to Update Map 
// then -> Gets weather Info
async function search() {
  //Baidu Map Seacrh
  var searchValue = document.getElementById("searchField").value;
  local.search(searchValue);

  //Weather Api call
  // let result = await getWeatherForSearch(searchValue);  //Weather Result
  // console.log(result);

  // Options on the Map
  // var opts = {
  //   width: 250,     // 信息窗口宽度    
  //   height: 100,     // 信息窗口高度    
  //   title: searchValue  // 信息窗口标题   
  // }
  // var weatherInfo = getWeatherInfo(result);
  // var infoWindow = new BMap.InfoWindow(weatherInfo, opts);  // 创建信息窗口对象    
  // console.log(infoWindow);
  // map.openInfoWindow(infoWindow, map.getCenter());
  // addComponents(city=searchValue);
}

// Weather API APi Key:7098a86b6d40af180e77b3b07263794f
var key = "7098a86b6d40af180e77b3b07263794f";

//Async Fucntion to Call  Weather API
function getWeatherForSearch(city,unit) {
  return new Promise(function (resolve, response) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var status = xhr.status;
      if (status == 200) {
        resolve(JSON.parse(xhr.responseText))
      } else {
        response({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" +
      city + "&units="+unit  + "&appid=" + key;
    // req.open("GET","api.openweathermap.org/data/2.5/weather?q=" + city);
    xhr.open("GET", url);
    xhr.send();
  });
}

//Json Manipulation to String for Info
function getWeatherInfo(result) {
  var info = "";
  info += "City:  " + result.name + "   "
  info += "Visible weather: " + result.weather[0].main + "\n";
  info += "Temperature: " + result.main['temp'] + "\n";
  // document.getElementById("infotext").textContent=info;
  return info;
}

// 5 day forecast is available at any location or city. 
// It includes weather data every 3 hours
function forecast(city,unit) {
  return new Promise(function (resolve, response) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var status = xhr.status;
      if (status == 200) {
        resolve(JSON.parse(xhr.responseText).list)
      } else {
        response({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    var url = "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city + "&units="+unit + "&appid=" + key;
    // req.open("GET","api.openweathermap.org/data/2.5/weather?q=" + city);
    xhr.open("GET", url);
    xhr.send();
  });
}


// function addComponents(city, info) {
//   document.getElementById("extra-info").innerHTML +=
//     "<future-info future=\"" + city + "\"> </future-info> ";
// }