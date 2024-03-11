// Code goes here!

const userName = "Kim";
// userName = "JeongUn"; // 에러

let age = 20;
age = 30;

function add(a: number, b: number = 1) {
  let result;
  result = a + b;
  return result;
}

if (age > 20) {
  var isOld = true;
}

// console.log(isOld);

// const add = () => {};

const printOutput: (output: string | number) => void = (output) => {
  console.log(output);
};

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);
