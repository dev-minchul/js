// https://jsonplaceholder.typicode.com/users
// city를 가져와서
// 모두 대문자로 바꾸고
// 알파벳 중에 A의 개수를 세서 콘솔 출력

const printcity = async() => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users =  await response.json();
  return users;

}
printcity()
.then((users) => users.map((user) => user.address.city))
.then((citys)=> citys.map((city)=> city.toUpperCase()))
.then((changedCity) => changedCity.join('').split('A').length -1)
.then(console.log)
.catch(console.error)


// https://jsonplaceholder.typicode.com/users
// city를 가져와서
// 모두 대문자로 바꾸고
// 알파벳 중에 A의 개수를 세서 콘솔 출력

const getCountA = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const datas = await response.json()
  return datas;
};

// getCountA()
//   .then((users) => users.map((user) => user.address.city.toUpperCase()))
//   .then((citys) => citys.join("").split(""))
//   .then((chars) => chars.filter((c) => c === "A"))
//   .then((AList) => {
//     let count = 0;
//     for(a in AList){
//       count++
//     }
//     return count;
//   })
//   .then(console.log)

getCountA()
  .then((users) => users.map((user) => user.address.city.toUpperCase()))
  .then((users) => users.filter((user) => user.includes("A")))
  .then((users) => users.map((user) => {
    let result = ""
    for(s of user){
      if(s === "A"){result += s}; 
    }
    return result;
  }))
  .then(console.log)
