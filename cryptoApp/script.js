async function main(inputValue) {
  let baseUrl = "https://api.coinranking.com/v2/coins";
  let apiKey = "coinrankingf07a0c4f71345db4e0e6944e83e4d5a4c61254de06f6451e";

  fetch(`${baseUrl}`, {
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
          let coinData = json.data.coins;

          let cryptoCoins;
          if (coinData.length > 0) {
            cryptoCoins = "";
          }

          coinData
            .filter((item) => item.name.includes(inputValue || ""))
            .forEach((coin) => {
              cryptoCoins += "<tr>";
              cryptoCoins += `<td> ${coin.uuid} </td>`;
              cryptoCoins += `<td> ${coin.btcPrice} </td>`;
              cryptoCoins += `<td> ${coin.rank} </td>`;
              cryptoCoins += `<td> ${coin.tier} </td>`;
              cryptoCoins += `<td> ${coin.name} </td>`;
              cryptoCoins += `<td>$${Math.round(coin.price)} billion</td>`;
              cryptoCoins += `<td> ${coin.symbol} </td>`;
              ("</tr>");
              document.getElementById("data").innerHTML = cryptoCoins;
            });
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let inputElement = document.getElementById("id");
  console.log("inputElement", inputElement);
  let inputValue = inputElement.value;
  console.log("inputValue", inputValue);
  main(inputValue);
});
main();
