const question = [
  {
    que: "which of the following is frontend language?",
    a: " HTML",
    b: "C#",
    c: "JAVA",
    d: "English",
    correct: "a",
  },
  {
    que: "which of the following is back-end language?",
    a: " HTML",
    b: "CSS",
    c: "JAVA",
    d: "other",
    correct: "c",
  },
  {
    que: "which of the framework is used for design web Application ",
    a: "React",
    b: "Angular",
    c: "All",
    d: "Hieberanate",
    correct: "b",
  },
];

let index = 0;
let total = question.length;
let right = 0;
let wrong = 0;

const quebox = document.getElementById("quebox");
const optionInp = document.querySelectorAll(".option");
const loadquestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  const data = question[index];
  //   console.log(data);
  quebox.innerText = `${index + 1}) ${data.que}`;
  optionInp[0].nextElementSibling.innerText = data.a;
  optionInp[1].nextElementSibling.innerText = data.b;
  optionInp[2].nextElementSibling.innerText = data.c;
  optionInp[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  const data = question[index];
  console.log("data", data);
  const ans = getAnswer();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadquestion();
  return;
};

const getAnswer = () => {
  let answer;
  optionInp.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const reset = () => {
  optionInp.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  const data = question;
  console.log("data", data);
  document.getElementById(
    "box"
  ).innerHTML = `<h2> Thanks for playing the Quiz</h2>
  <h2>${right}/${total} are correct </h2>
  <h2 style="color: green; "> Correct answer of the quiz are:  </h2>
  <ul>
  ${(() => {
    let result = "";
    for (let i = 0; i < data.length; i++) {
      result += `<li style=" font-size: 20px">${data[
        i
      ].correct.toUpperCase()}</li>`;
    }
    return result;
  })()}
</ul>

  `;

  let box = document.getElementById("box");
  box.style.height = "300px";
  box.style.marginBottom = "100px";
};

loadquestion();
