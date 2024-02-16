async function main(city) {
  console.log(city);
  cityName.innerHTML = city;
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "fb5a06eb52msh62064a92a3264a7p1b54adjsn029fe1b79fc6",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();

    console.log(result);

    {
      feels_like.innerHTML = result.feels_like;
      humidity.innerHTML = result.humidity;
      humidity2.innerHTML = result.humidity;
      max_temp.innerHTML = result.max_temp;
      min_temp.innerHTML = result.min_temp;
      sunrise.innerHTML = result.sunrise;
      sunset.innerHTML = result.sunset;
      temp.innerHTML = result.temp;
      temp2.innerHTML = result.temp;
      wind_degrees.innerHTML = result.wind_degrees;
      wind_speed.innerHTML = result.wind_speed;
      wind_speed2.innerHTML = result.wind_speed;
    }
  } catch (error) {
    console.error(error);
  }
}

async function defaultfunc(city) {
  console.log(city);
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "fb5a06eb52msh62064a92a3264a7p1b54adjsn029fe1b79fc6",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    let feels_like2 = document.getElementById(`${city + "-feels_like"}`);
    console.log(feels_like2);
    let humidity2 = document.getElementById(`${city + "-humidity2"}`);
    let max_temp2 = document.getElementById(`${city + "-max_temp2"}`);
    let min_temp2 = document.getElementById(`${city + "-min_temp2"}`);
    let temp2 = document.getElementById(`${city + "-temp2"}`);
    let wind_degrees2 = document.getElementById(`${city + "-wind_degrees2"}`);
    let wind_speed2 = document.getElementById(`${city + "-wind_speed2"}`);
    {
      feels_like2.innerHTML = result.feels_like;
      humidity2.innerHTML = result.humidity;
      max_temp2.innerHTML = result.max_temp;
      min_temp2.innerHTML = result.min_temp;
      temp2.innerHTML = result.temp;
      wind_degrees2.innerHTML = result.wind_degrees;
      wind_speed2.innerHTML = result.wind_speed;
    }
  } catch (error) {
    console.error(error);
  }
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  main(city.value);
});

main("Delhi");
defaultfunc("london");
defaultfunc("mumbai");
defaultfunc("Shanghai");
defaultfunc("kolkata");
// defaultfunc("Sanghai");
// defaultfunc("Kolkata");
