document.getElementById('searchForm').addEventListener('submit',function(event){
    event.preventDefault();

    let inputVal = document.getElementById('searchInput').value;

    fetch(`https://www.omdbapi.com/?s=${inputVal}&apikey=226956c8`)
    .then(response=>response.json())
    .then(data=>{


        //clear previous search results
        document.getElementById('movies').innerHTML=
        `<div class="card">${data.Search.map(movie => `
    <div class="card1">
    <div class="image">
    <img src="${movie.Poster}" alt="${movie.Title}"></div>
    <div class="name">${movie.Title}</div>
    </div>
    `).join('')}
    </div>
    `;;
    //Display each movie
    })
});