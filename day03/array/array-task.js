// 1) 1~10까지 Array 객체에 담은 후 짝수만 출력

// const arr1 =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// arr1.filter(data => data % 2 == 0).forEach(data => console.log(data));

const arr1 = new Array(10).fill(0)
arr1.map((data, i) => i + 1).filter((data) => data % 2 == 0).forEach((data) => {console.log(data)});


// 2) 한글을 숫자로
// ex) "일이삼사" => "1234"
const hangle ="공일이삼사오육칠팔구";
const input ="일이삼사".split("");
console.log(input.map(c => hangle.indexOf(c)).join(""))

// 3) 숫자를 한글로
// ex) "1234" => "일이삼사"
const input2 ="1234".split("");
console.log(input2.map(c => hangle.charAt(c)).join(""))

// 4) 1~100까지 합 출력
const arr2 = new Array(100).fill(0)
let sum = 0;
arr2.map((data, i) => i + 1).forEach((data) => {sum += data});
console.log(sum)
// 5) 문자열 반대로 출력하기 .reverse() 사용
const massage = "안녕하세요";
console.log(massage.split("").reverse().join(""))

// 6) 전화번호를 파라미터로 받아서 파싱하기
// ex) 010-1234-5678
// result) 010-****-5678

// const phoneNumber = "010-1234-5678";
// console.log(phoneNumber.replace("1234", "****"))

const phoneNumber = "010-1234-5678".split("-");
phoneNumber[1] ="****";
const parsephoneNumber = phoneNumber.join("-")
console.log(parsephoneNumber)