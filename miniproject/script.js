const movies = [
    {
        id: 1,
        title: "Mission: Impossible - The Final Reckoning",
        year: 2025,
        genre: ["action", "thriller"],
        rating: 8.5,
        poster: "https://images.squarespace-cdn.com/content/v1/59558e53be65943ed29f505b/1747971423426-YPVMUZ05J6WS8Z20SHQN/Mission+Impossible+-+Final+Reckoning.jpg",
        description: "Ethan Hunt and his IMF team embark on their most dangerous mission yet in this thrilling conclusion to the franchise."
    },
    {
        id: 2,
        title: "Avatar: Fire and Ash",
        year: 2025,
        genre: ["scifi", "action"],
        rating: 8.8,
        poster: "https://m.media-amazon.com/images/I/71OioRQjVQL._AC_UF350,350_QL80_.jpg",
        description: "The saga of the Sully family continues as they explore new regions of Pandora and face emerging threats."
    },
    {
        id: 3,
        title: "Sinners",
        year: 2025,
        genre: ["thriller", "drama"],
        rating: 8.2,
        poster: "https://m.media-amazon.com/images/M/MV5BNjIwZWY4ZDEtMmIxZS00NDA4LTg4ZGMtMzUwZTYyNzgxMzk5XkEyXkFqcGc@._V1_.jpg",
        description: "A gripping tale of moral ambiguity and redemption in modern society."
    },
    {
        id: 4,
        title: "Frankenstein",
        year: 2025,
        genre: ["thriller", "drama"],
        rating: 7.8,
        poster: "https://m.media-amazon.com/images/I/81zUVBYqInL.jpg",
        description: "A brilliant but egotistical scientist brings a creature to life in a monstrous experiment that leads to tragic consequences."
    },
    {
        id: 5,
        title: "Jurassic World Rebirth",
        year: 2025,
        genre: ["action", "scifi"],
        rating: 7.5,
        poster: "https://m.media-amazon.com/images/M/MV5BMGM3ZmI3NzQtNzU5Yi00ZWI1LTg3YTAtNmNmNWIyMWFjZTBkXkEyXkFqcGc@._V1_.jpg",
        description: "A new chapter begins as humanity faces the consequences of living alongside dinosaurs."
    },
    {
        id: 6,
        title: "The Cosmic Journey",
        year: 2025,
        genre: ["scifi"],
        rating: 8.1,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS08x9lqarJD6fsdKL6IuUkfGuQQW9_U0IGA&s",
        description: "An epic space exploration adventure across distant galaxies in search of a new home for humanity."
    },
    {
        id: 7,
        title: "Laughter Therapy",
        year: 2025,
        genre: ["comedy"],
        rating: 7.3,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbM09IgU4UbBhZkEV59SlLBNyST17hoqY_Dg&s",
        description: "A heartwarming comedy about finding joy in the most unexpected places and people."
    },
    {
        id: 8,
        title: "The Last Stand",
        year: 2025,
        genre: ["action", "drama"],
        rating: 8.0,
        poster: "https://m.media-amazon.com/images/I/81JP1Dy2lUL._AC_UF1000,1000_QL80_.jpg",
        description: "A retired warrior must return to action one final time to protect what matters most."
    },
    {
        id: 9,
        title: "John Wick",
        year: 2014,
        genre: ["action", "thriller"],
        rating: 7.9,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeD5pZSlp5Uuq9RknUGFQlqz-jpXSf_9MAdQ&s",
        description: "John Wick, a retired hitman, is forced to return to his old ways after a group of Russian gangsters steal his car and kill a puppy gifted to him by his late wife.."
    },
    {
        id: 10,
        title: "The Artist",
        year: 2025,
        genre: ["drama"],
        rating: 8.4,
        poster: "https://upload.wikimedia.org/wikipedia/en/a/a4/The_Artist_Poster.jpg",
        description: "A powerful story of passion, sacrifice, and the pursuit of artistic perfection."
    },
    {
        id: 11,
        title: "Neon Nights",
        year: 2025,
        genre: ["thriller", "action"],
        rating: 7.6,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVtioIUk5P4wEt9DTZPYQmWE8qbsr90XUwug&s",
        description: "A cyberpunk thriller set in a dystopian future where nothing is as it seems."
    },
    {
        id: 12,
        title: "Finding Home",
        year: 2025,
        genre: ["drama", "comedy"],
        rating: 7.7,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2a1WeLx4zFh07GZ6yFFms4J7Xr7voqmxWg&s",
        description: "A touching journey about self-discovery and the true meaning of belonging."
    },
    {
        id: 13,
        title: "Quantum Paradox",
        year: 2025,
        genre: ["scifi", "thriller"],
        rating: 8.3,
        poster: "https://m.media-amazon.com/images/I/91avn4X5FBL._UF350,350_QL50_.jpg",
        description: "When a scientist discovers time travel, they must race to prevent a catastrophic paradox."
    },
    {
        id: 14,
        title: "Wonder Woman",
        year: 2017,
        genre: ["action","scifi"],
        rating: 7.3,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Gj1l20yL_mPKdB9w9UXqwi5TE95j1bRq3w&s",
        description: "Princess Diana of an all-female Amazonian race rescues US pilot Steve. Upon learning of a war, she ventures into the world of men to stop Ares, the god of war, from destroying mankind.."
    },
    {
        id: 15,
        title: "The Chase",
        year: 1966,
        genre: ["action", "thriller"],
        rating: 7.4,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe__abR1V2gbO9pltDVywrP0dLA9YxrhJDjg&s",
        description: "An intense cat-and-mouse game across continents in this high-octane thriller."
    }
];

let currentGenre = 'all';

function renderMovies(genre = 'all') {
    const moviesGrid = document.getElementById('moviesGrid');
    const filteredMovies = genre === 'all'
        ? movies
        : movies.filter(movie => movie.genre.includes(genre));

    if (filteredMovies.length === 0) {
        moviesGrid.innerHTML = '<div class="empty-state">No movies found in this genre.</div>';
        return;
    }

    moviesGrid.innerHTML = filteredMovies.map(movie => `
        <div class="movie-card" onclick="openModal(${movie.id})">
            <img class="movie-poster" src="${movie.poster}" alt="${movie.title}" onerror="this.src='https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop'">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-meta">
                    <span class="movie-year">${movie.year}</span>
                    <span class="movie-rating">
                        <span class="star">★</span>
                        ${movie.rating}
                    </span>
                </div>
                <div>
                    ${movie.genre.map(g => `<span class="movie-genre">${g}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function openModal(movieId) {
    const movie = movies.find(m => m.id === movieId);
    if (!movie) return;

    document.getElementById('modalPoster').src = movie.poster;
    document.getElementById('modalTitle').textContent = movie.title;
    document.getElementById('modalYear').textContent = movie.year;
    document.getElementById('modalRating').innerHTML = `<span class="star">★</span> ${movie.rating}`;
    document.getElementById('modalGenres').innerHTML = movie.genre.map(g =>
        `<span class="movie-genre">${g}</span>`
    ).join('');
    document.getElementById('modalDescription').textContent = movie.description;

    document.getElementById('movieModal').classList.add('active');
}

function closeModal() {
    document.getElementById('movieModal').classList.remove('active');
}

document.getElementById('genreFilter').addEventListener('click', (e) => {
    if (e.target.classList.contains('genre-btn')) {
        document.querySelectorAll('.genre-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');

        const genre = e.target.dataset.genre;
        currentGenre = genre;
        renderMovies(genre);
    }
});

document.getElementById('closeModal').addEventListener('click', closeModal);

document.getElementById('movieModal').addEventListener('click', (e) => {
    if (e.target.id === 'movieModal') {
        closeModal();
    }
});

renderMovies();
