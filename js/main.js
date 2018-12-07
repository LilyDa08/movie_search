const $search = document.querySelector('.searchTitle');
const $searchYear = document.querySelector('.searchYear');
const $genre = document.querySelector('.searchGenre');
const $ulElm = document.querySelector('.infos');
const $artist = document.querySelector('.title');
const $submit = document.querySelector('.submit');
const $error = document.querySelector('.notFound');

let noEntry = 0;

let valTitle = "";
let valYear = "";
let valGenre = "";

const url = 'http://www.omdbapi.com/'

const longUrl = 'http://www.omdbapi.com/?apikey=a49f54f4'

const resultList = (movies) => {
  console.log(movies)
  while ($ulElm.hasChildNodes()) {
    $ulElm.removeChild($ulElm.firstChild)
  } if (movies.Response == "False" && $search.value != "" && $searchYear.value != "" && $genre.value != "") {
    $error.innerHTML = "Nothing was found";
  } else {
    $error.innerHTML = "";
    for (i = 0; i < movies.Search.length; i++) {
      const $newAnchor = document.createElement('a');
      const id = movies.Search[i].imdbID;
      const title = movies.Search[i].Title;
      const year = movies.Search[i].Year;
      const genre = movies.Search[i].Type;

      $newAnchor.setAttribute('id', id);
      $newAnchor.href = `result.html?id=${id}`;
      $newAnchor.innerHTML = `<h3>${title}</h3> <br> <p>${year}</p> <br> <p>${genre}</p>`

      const $newLi = document.createElement('li');
      $newLi.appendChild($newAnchor);
      $ulElm.appendChild($newLi);
    }
  }
}


//$$$$$$$$//------- FIRST VERSION SUBMIT ----------//$$$$$$$$////

// const search = () => {
//   let valTitle = $search.value;
//   let valYear = $searchYear.value;
//   fetch(`${longUrl}&s=${valTitle}&y=${valYear}`, {
//       method: 'GET'
//     })
//     .then((response) => response.json())
//     .then((parsedData) => resultList(parsedData))
//     .catch(error => console.log(error))
// }
// $submit.addEventListener('click', search);


//$$$$$$$$//---- SECOND VERSION AUTOCOMPLETE -----//$$$$$$$$$$$//

/// ----- TITLE ------

$submit.style.display = "none";

const search = (e) => {
  valTitle = e.target.value;
  valYear = $searchYear.value;
  valGenre = $genre.value;
  fetch(`${longUrl}&s=${valTitle}&y=${valYear}&type=${valGenre}`, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((parsedData) => resultList(parsedData))
    .catch((error) => console.log(error))
}
$search.addEventListener('keyup', search);

/// ----- YEAR -----

const searchYear = (e) => {
  valYear = e.target.value;
  valTitle = $search.value;
  valGenre = $genre.value;
  fetch(`${longUrl}&s=${valTitle}&y=${valYear}&type=${valGenre}`, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((parsedData) => resultList(parsedData))
    .catch((error) => console.log(error))
}
$searchYear.addEventListener('keyup', searchYear);


/// ----- GENRE -----

const searchGenre = (e) => {
  valGenre = e.target.value;
  valTitle = $search.value;
  valYear = $searchYear.value;
 
  fetch(`${longUrl}&s=${valTitle}&y=${valYear}&type=${valGenre}`, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((parsedData) => resultList(parsedData))
    .catch((error) => console.log(error))
}
$genre.addEventListener('keyup', searchGenre);