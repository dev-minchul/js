// https://jsonplaceholder.typicode.com/users
// zipcode만 추출해서 콘솔에 출력하기
// 하나의 함수는 하나의 기능만 수행해야한다.
// 에러핸들링을 모두 작성해야한다.

// fetch("https://jsonplaceholder.typicode.com/users")
  // .then((response) => {
  //   if(!response.ok){
  //     throw new Error(`response error ${response.status}`)
  //   }
  //   return response.json()
  // })
  // .then((users) => { 
  //   if(!users){ 
  //     throw new Error(`no users`)
  //   }
  //   return users.map((user) => user.address.zipcode)
  // })
  // .then(console.log)
  // .catch(console.error)
  
  // ES8 async await
  const printzipcode = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json();
    return users;
  }
  printzipcode()
  .then(console.log)
  .catch(console.error)