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
      max_temp.innerHTML = result.max_temp;
      min_temp.innerHTML = result.min_temp;
      sunrise.innerHTML = result.sunrise;
      sunset.innerHTML = result.sunset;
      temp.innerHTML = result.temp;
      wind_degrees.innerHTML = result.wind_degrees;
      wind_speed.innerHTML = result.wind_speed;
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
