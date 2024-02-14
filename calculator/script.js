// let string = "";
// let buttons = document.querySelectorAll(".button");
// Array.from(buttons).forEach((button) => {
//   button.addEventListener("click", (e) => {
//     if (e.target.innerHTML === "=") {
//       // it is for calculate the value of the numbers
//       string = eval(string);
//       document.querySelector("input").value = string;
//     } else if (e.target.innerHTML === "C") {
//       // it is for clera the caluclted values
//       string = "";
//       document.querySelector("input").value = string;
//     } else {
//       console.log(e.target); // here we taken the value from the calculator and show it on the input tag
//       string = string + e.target.innerHTML;
//       document.querySelector("input").value = string;
//     }
//   });
// });

let string = "";

let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML === "C") {
      string = "";
      document.querySelector("input").value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
