"use-strict";

let api = async function () {
  let apikey = "fbcc52a2d34321613b856ae554720c1a&units=Metric";
  let city = document.getElementById("search").value;
  console.log(city);
  let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
  const response = await fetch(apiurl);
  let data = await response.json();

  let name = data.name;
  let temp = Math.round(data.main.temp) + `℃`;
  let humidity = data.main.humidity + `%`;
  let cloudName = data.weather[0].description;
  let cloudpic = document.getElementById("cloudpic");
  let wind = data.wind.speed;
  document.getElementById("tempid").innerText = temp;
  document.getElementById("humid").innerText = humidity;
  document.getElementById("city").innerText = name;

  if (cloudName == "scattered clouds") {
    cloudpic.src = "images/clouds.png";
  } else if (cloudName == "clear sky") {
    cloudpic.src = "images/clear.png";
  } else if (cloudName == "overcast clouds") {
    cloudpic.src = "images/drizzle.png";
  } else if (cloudName == "few clouds") {
    cloudpic.src = "images/clouds.png";
  } else if (cloudName == "smoke") {
    cloudpic.src = "images/mist.png";
  } else if (cloudName == "broken clouds") {
    cloudpic.src = "images/clouds.png";
  }
  document.getElementById("cldName").innerText = cloudName;
  document.getElementById("windid").innerText = wind + "ms";
};
