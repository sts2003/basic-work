const students = [
  {
    name: "오낙타",
    gender: "female",
    age: 18,
    grade: 2,
    printHandler: () => {
      console.log(`오낙타는 18세끼 입니다.`);
    },
  },
  {
    name: "방효진",
    gender: "female",
    age: 18,
    grade: 2,
    printHandler: () => {
      console.log(`방효진은 18세 입니다.`);
    },
  },
];

console.log(students[0].name);

students[0].printHandler();
students[1].printHandler();
