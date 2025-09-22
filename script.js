const user_movie = document.querySelector("#movie-input");
const submitbtn = document.querySelector(".submitbtn");
const api_key =  "5843fa84";

const hidden = document.querySelector(".movie");

submitbtn.addEventListener("click", () => {
    const movie = user_movie.value.trim();
    hidden.classList.remove('hidden');
    submitbtn.classList.add('hidden');

    if (!movie){
        alert("Enter the Movie Name");
    }
    fectchmovie(movie);
});

user_movie.addEventListener("keydown", (e) => {
    if (e.key == 'Enter') {submitbtn.click()};
});

async  function fectchmovie(movie) {
    const movieName = document.getElementById("movieName");
    const releasedate = document.getElementById("releasedate");
    const director  = document.getElementById("director");
    const cast = document.getElementById("cast");

    try {
        movieName.innerText = `Searching ${movie}`;
        releasedate.innerText = "........."
        director.innerText = "Directed By ......"
        cast.innerText = "Acted By ......"

        const url = `https://www.omdbapi.com/?t=${movie}&apikey=${api_key}`;

       const response = await fetch(url);
       
       if(!response.ok){
        throw new Error ("Movie Not Found..");
       }

       const data = await response.json();
        movieName.innerText = data.Title;
        releasedate.innerText = data.Released;
        director.innerText = data.Director;
        cast.innerText = data.Actors;
    } catch (error) {
        movieName.innerText = `ERROR`;
        releasedate.innerText = "........."
        director.innerText = "Directed By ......"
        cast.innerText = "Acted By ......"
    }
}