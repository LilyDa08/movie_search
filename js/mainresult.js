let idLink = new URLSearchParams(window.location.search);
idLink = idLink.get('id');
const url = 'http://www.omdbapi.com/?apikey=a49f54f4';


const showMovie = (movie) => {

  let $content = document.querySelector('.content');
 console.log(movie);
  if (movie.Type === "game") {

    $content.innerHTML = `
    <div class="movieInfo">
        <div class="img">
            <img class="poster" src="${movie.Poster}">
        </div>
        <div class="infos">
            <div class="title">${movie.Title}</div>
            <div class="info release">
              <h4>Released Date:</h4>
               ${movie.Released}</div>
            <div class="info time"><h4>Language:</h4> ${movie.Language}</div>
            <div class="info type"><h4>Type:</h4> ${movie.Type}</div>
            <div class="info genre"><h4>Genre:</h4> ${movie.Genre}</div>
            <div class="info director"><h4>Director:</h4> ${movie.Director}</div>
            <div class="info actor"><h4>Writer:</h4> ${movie.Writer}</div>
            <div class="info country"><h4>Plot:</h4> ${movie.Plot}</div>
        </div>
    </div>
    `

  } else {
  $content.innerHTML = `
        <div class="movieInfo">
            <div class="img">
                <img class="poster" src="${movie.Poster}">
            </div>
            <div class="infos">
                <div class="title">${movie.Title}</div>
                <div class="info release"><h4>Released Date:</h4> ${movie.Released}</div>
                <div class="info time"><h4>Time:</h4> ${movie.Runtime}</div>
                <div class="info type"><h4>Type:</h4> ${movie.Type}</div>
                <div class="info genre"><h4>Genre:</h4> ${movie.Genre}</div>
                <div class="info director"><h4>Director:</h4> ${movie.Director}</div>
                <div class="info actor"><h4>Actors:</h4> ${movie.Actor}</div>
                <div class="info country"><h4>Country:</h4> ${movie.Country}</div>
                <div class="info production"><h4>Production:</h4> ${movie.Production}</div>
            </div>
        </div>
        `
  }
}

fetch(`${url}&i=${idLink}`)
  .then((response) => response.json())
  .then((parsedData) => showMovie(parsedData))