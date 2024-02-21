function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== "number" && typeof n2 !== "number") {
  //   // js로 타입체크 ts로 먼저 체크하기때문에 필요가없다.
  //   throw new Error("잘못된 입력입니다.");
  // }

  const result = n1 + n2;

  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

// const number1 = "5";
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);

// const result = add(number1, number2, printResult); // number1이 string이라 컴파일 에러가 발생
// console.log(result);
