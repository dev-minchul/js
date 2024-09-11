const movies = {
  name : "오펜하이머",
  detail : {
    price : "50000",
    date : "20240911"
  }
}

const movies2 = {
  name : "애나벨",
  detail : {
    price : "50000",
  }
}

function printMovieData(movie){
  // console.log(movie.detail.date)
  return movie.detail.date;
}

// console.log(printMovieData(movies)?.split(""))
console.log(printMovieData(movies2)?.split(""))