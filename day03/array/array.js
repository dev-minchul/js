// 선언
// const arr1 = [];
// const arr2 = new Array();
// const arr3 = new Array(10).fill(0);
// const arr4 = Array.of("초기값1", "초기값2")

// console.log(arr1)
// console.log(arr2)
// console.log(arr3)
// console.log(arr4)

// .split(), string
// const phoneNumber = "010-9999-5555"
// .join(), array
// console.log(phoneNumber.split("-").join(""))
// // 변경
// // .replace(), String
// console.log(phoneNumber.replaceAll("9", "*"))
// 추가
// .push(), array
// 기존의 배열에 값을 추가한다.
// const arr = ["김세환", "홍길동", "장보고"]
// arr.push("마피아", "흰둥이", "대마왕")
// console.log(arr)

// .concat(), array
// 두 개의 배열을 [새로운 배열]로 리턴한다.
// const arr1 = ["짱구", "고길동"];
// const arr2 = ["철수", "영희"];
// const arr3 = arr1.concat(arr2);

// console.log(arr1+arr2) // -> 문자열로 더해버림
// console.log(arr1.concat(arr2));

// // 제거
// // .pop(),, array
// // 마지막 요소를 제거하고 그 값을 반환한다.
// arr3.pop()
// console.log(arr3)

// const arr4 = [10, 20, 30, 40];
// console.log(arr4.pop())
// console.log(arr4)

// // .slice(start, end)
// // startIndex부터 endIndex 전까지 요소를 1depth 복사하여 새로운 배열을 반환한다.
// const arr6 =[10,20,30,40,50,60,70,80,90,100];

// console.log(arr6.slice(4, 7))
// console.log(arr6.slice(-4, -1))

// // 매개변수를 1개만 전하면 끝까지!
// console.log(arr6.slice(4))
// console.log(arr6.slice(-4))

// // .splice(startIndex, deleteCount)
// // 제거 및 수정
// // const arr7 =[10,20,30,40,50,60,70,80,90,100];
// // // console.log(arr7.splice(2, 3))
// // // .splice(startIndex, deleteCount, ...pushItems )
// // console.log(arr7.splice(3, 1 , 400))
// // console.log(arr7.splice(3, 1 , 400, 400, 400, 400, 400, 400))
// // console.log(arr7)
// // -------------------------------------------------------------------
// // 정렬
// // .sort()
// const arr = [100, 150, 15, 200, 600, 70, 80, 20, 40];
// // 오름차순
// console.log(arr.sort((a, b) => a- b))
// // 내림차순
// console.log(arr.sort((a, b) => b - a))
// // .reverse()
// console.log(arr.sort((a, b) => b - a).reverse())
// // 포함
// // .includes(), string, array
// const arr8 = [100, 150, 15, 200, 600, 70, 80, 20, 40];
// console.log(arr8.includes(100))

// // .some(), array
// // 조건식을 1개라도 만족하면 true 아니면 false
// console.log(arr8.some( (data) => data % 2 == 0 ))

// -------------------------------------------------------------------------------
// 배열의 고차함수(메서드)
const arr9 = [100, 200, 300, 400, 500, 600, 700];

// .forEach(callback(data, i , datas)) : 반복문
// 반복을 돌아서 각각 하나의 값에 접근하여 필요한 기능을 실행 시킬수 있다.
// arr9.forEach((data, i , datas) => {
//   console.log(datas)
// });

// arr9번을  forEach를 사용하여, 모든 배열의 값을 제곱값으로 변경하기
// arr9.forEach((data, i, datas) => {
//   datas[i] *= datas[i];
// });
// console.log(arr9)

// .map(callback(data, i, datas))
// 값을 저장해서 [새로운 배열]로 리턴한다.
// 반드시 리턴 값이 존재해야 한다.

const arr10 = arr9.map(data => data + 20 )
// console.log(arr10)

// .filter((data) => 조건식)
// 조건식이 true인 값만 모아서 [새로운 배열]로 리턴한다.
// 반드시 리턴값이 필요하다.

// arr10.filter(data => data % 4 == 0).forEach(data => console.log(data));
// arr10.filter(data => data % 3 == 0).forEach(data => console.log(data));
arr10.filter(data => data % 4 == 0).forEach(data => console.log(data));


// 3개 고차함수중에 .forEach() 제일 마지막
// .indexof
// .find
// .from
// .reduce