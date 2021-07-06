const { movies } = require('../Models');

const movieData = [
    {
        imdbID: "tt0117705",
        title: "Space Jam",
        genre: "Animation, Adventure, Comdey",
        director: "Joe Pytka",
        description: "In a despearate attempt to win absketball mathc and earn their freedom, the looney Tunes seek the aid of retired basketball champion Michael Jordan."
        released: "15 Nov 1996"
    },
]

const seedMovies = () => Comment.bulkCreate(movieData);

module.exports = seedMovies;