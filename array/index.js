const arr = [];

console.log(`현재 array : ${arr}`);

setTimeout(() => {
  console.log("데이터를 한개 추가합니다.");
  arr.push("오은하");
  console.log(`현재 array : ${arr}`);
}, 1000);

setTimeout(() => {
  console.log("데이터를 한개 추가합니다.");
  arr.push("정예림");
  console.log(`현재 array : ${arr}`);
}, 2000);

setTimeout(() => {
  console.log("데이터를 한개 추가합니다.");
  arr.push("홍민기");
  console.log(`현재 array : ${arr}`);
}, 3000);
