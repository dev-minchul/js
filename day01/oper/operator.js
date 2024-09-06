// 최우선 연산자
// 10 * 20 + 2 = 202;
// 10 * ( 20 + 2 ) = 220;
// let number1 = 10 * 20 + 2; //202
// let number2 = 10 * (20 + 2); //220

// 이항 연산자(항 2개)
// 산술연산 (+, -, *, /, %)
// 누적복잡연산자 (+=, -=, *=, /=)
// let number3 = 10;
// number3 += 10;

// console.log(number3);

// 관계 연산자
// console.log(20 === "20");
// console.log(20 !== "20");

// 논리 연산자
// console.log(false || 100);
// console.log(200 || false);
// console.log(false && 200);
// console.log(true && 200);
// console.log(200 && true);

// 삼항 연산자
// 조건 ? 실행할 문장 또는 값 : 실행할 문장 또는 값
// let num1 = 20;
// let result = 0;
// num1 % 2 == 0 ? result += num1 : console.log();
// console.log(result)

// 형변환
// typeof()
// let result1 = String(10); // === "10";
// let result2 = Number("10"); // === 10;
// let result3 = Boolean("true"); // === true;
// console.log(typeof(result1));
// console.log(typeof(result2));
// console.log(typeof(result3));

// 자동 형변환
// console.log(typeof(+"20"))
// console.log(typeof("10"+"20"))
// console.log(typeof(!10))

// false가 아닌데 false 취급을 받는 값
console.log(Boolean(100)) // true
console.log(Boolean(NaN)) // false
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean("")) // false
console.log(Boolean(" ")) // true







