// const person: {
//   name: string;
//   age: number;
// } = {

//  -------------- tuple role ----------
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   // 타입추론에 의거한 타입지정
//   name: "Kim", // string
//   age: 30, // number
//   hobbies: ["Sports", "Cooking"], // string[]
//   role: [2, "author"],
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  // 타입추론에 의거한 타입지정
  name: "Kim", // string
  age: 30, // number
  hobbies: ["Sports", "Cooking"], // string[]
  role: Role.ADMIN,
};

// person.role.push("admin"); // 가능하다. tuple이 잡지못하는 오류이다 push는
// person.role[1] = 10; // 가능하다.
// person.role = [0, "admin", "user"] 는 에러가발생

let favoriteActivities: any[];
favoriteActivities = ["Sports"]; // 배열이기만하면 어떤값이든 저장가능
// favoriteActivities = ["Sports", 1] // 숫자로인해 에러발생
// favoriteActivities = "Sports" // 에러발생

for (const hobby of person.hobbies) {
  console.log(hobby); // string
}

// console.log(person.name); person이 object타입일때 구체적으로 타입을 정해주지않아 컴파일 에러 발생
// console.log(person.nickname); 없는 속성을 불러 컴파일에러가 발생
