// omdbService.js
const apiKey = 'YOUR_API_KEY';
const baseUrl = 'http://www.omdbapi.com/';

export async function fetchMoviesByTitle(title) {
    const response = await fetch(`${baseUrl}?s=${title}&apikey=${apiKey}`);
    const data = await response.json();
    return data.Search || [];
}

export async function fetchMovieById(id) {
    const response = await fetch(`${baseUrl}?i=${id}&apikey=${apiKey}`);
    const data = await response.json();
    return data;
}
