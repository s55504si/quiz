let question = document.getElementById("question");
let result = document.getElementById("result");
let logo = document.getElementById("logo");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let count = 25;
let score = 0;
let flag = true;
let num = 0;
let choiceNum = 1;
let max = 10;
let choiceOne = new Array(max);
choiceOne = [
  "HTML",
  "CSS",
  "C",
  "JavaScript",
  "HTML",
  "Swift",
  "C+",
  "Python",
  "C",
  "Go",
];
let choiceTwo = new Array(max);
choiceTwo = [
  "CSS",
  "JavaScript",
  "Python",
  "Java",
  "Kotlin",
  "C#",
  "C",
  "Kotlin",
  "Git",
  "Java",
];
let choiceThree = new Array(max);
choiceThree = [
  "Java",
  "Ruby",
  "PHP",
  "C+",
  "Python",
  "Python",
  "C#",
  "Swift",
  "GitHub",
  "C",
];
let choiceFour = new Array(max);
choiceFour = [
  "Python",
  "C#",
  "Java",
  "Ruby",
  "Ruby",
  "Objective-C",
  "Objective-C",
  "CSS",
  "Java",
  "Ruby",
];
let seikai = new Array(max);
seikai = ["1", "1", "3", "2", "4", "3", "4", "3", "2", "1"];

function select(number) {
  //ボタンを押したとき
  one.textContent = choiceOne[choiceNum];
  two.textContent = choiceTwo[choiceNum];
  three.textContent = choiceThree[choiceNum];
  four.textContent = choiceFour[choiceNum];
  choiceNum++;
  if (flag) {
    console.log(number);
    if (seikai[num] == number) {
      console.log("正解!");
      score++;
      question.textContent = "問題" + (num + 1) + "正解";
    } else {
      console.log("不正解");
      question.textContent = "問題" + (num + 1) + "不正解";
    }
    num++;
    if (num < max) {
      setTimeout(() => {
        question.textContent = "問題" + (num + 1);
        logo.src = "img/logo" + num + ".png";
      }, 500);
    } else {
      question.textContent = "問題の回答終了!";
      clearInterval(time);
      if (score == max) {
        question.textContent = "全問正解!";
        result.textContent = "スコア : 10 | 時間 : " + count + "秒";
        logo.src = "img/clear.png";
        clearInterval(time);
      }
    }
  }
}

let time = setInterval(() => {
  //タイマー処理
  if (count > 0) {
    count--;
    result.textContent = "スコア : " + score + " | 時間 : " + count + "秒";
  } else {
    result.style.color = "red";
    result.textContent = "スコア : " + score + " | 終了";
    question.textContent = "時間切れ！";
    flag = false;
    clearInterval(time);
  }
}, 1000);
one.textContent = choiceOne[0];
two.textContent = choiceTwo[0];
three.textContent = choiceThree[0];
four.textContent = choiceFour[0];

one.addEventListener("click", () => select(1));
two.addEventListener("click", () => select(2));
three.addEventListener("click", () => select(3));
four.addEventListener("click", () => select(4));
