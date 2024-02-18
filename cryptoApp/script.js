let baseUrl = "https://api.coinranking.com/v2/coins";
// https://cors-anywhere.herokuapp.com/https://api.coinranking.com/v2/coins
let proxyUrl = "https://cors-anywhere.herokuapp.com/";
let apiKey = "coinrankingf07a0c4f71345db4e0e6944e83e4d5a4c61254de06f6451e";

fetch(`${proxyUrl}${baseUrl}`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "x-access-token": `${apiKey}`,
    "Access-Contorl-Allow-Origin": "*",
  },
})
  .then((Response) => {
    console.log(Response);
    if (Response.ok) {
      Response.json().then((json) => {
        console.log(json);
      });
    }
  })
  .catch((error) => {
    console.log(error);
  });
