const movies = [
    { title: 'Movie 1', genre: 'action', rating: 7, releaseYear: 2000 },
  { title: 'Movie 2', genre: 'comedy', rating: 8, releaseYear: 2010 },
  { title: 'Movie 3', genre: 'drama', rating: 9, releaseYear: 2020 },
    (async function (){
   const response =  await fetch ("./data.json")
  const movie = await response.json();   

})
  ];
  
  const form = document.getElementById('inputForm');
  const movieList = document.getElementById('movieList');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const genre = document.getElementById('genre').value;
    const rating = parseInt(document.getElementById('rating').value);
    const releaseYear = parseInt(document.getElementById('releaseYear').value);
  
    const filteredMovies = filterMovies(genre, rating, releaseYear);
  
    displayMovies(filteredMovies);
  });
  
  function filterMovies(genre, rating, releaseYear) {
    return movies.filter(movie => {
      return movie.genre === genre && movie.rating >= rating && movie.releaseYear >= releaseYear;
    });
  }
  
  function displayMovies(filteredMovies) {
    movieList.innerHTML = ''; 
  
    filteredMovies.forEach(movie => {
      const li = document.createElement('li');
      li.textContent = movie.title;
      movieList.appendChild(li);
    });
  }
  
  