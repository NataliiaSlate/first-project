const filmsInfo = [
    {
        title: "Inception",
        year: 2010,
        rating: 8.8,
        genre: ["Action", "Sci-Fi"],
        director: "Christopher Nolan",
    },
    {
        title: "The Dark Knight",
        year: 2008,
        rating: 9.0,
        genre: ["Action", "Crime", "Drama"],
        director: "Christopher Nolan",
    },
    {
        title: "Pulp Fiction",
        year: 1994,
        rating: 8.9,
        genre: ["Crime", "Drama"],
        director: "Quentin Tarantino",
    },
    {
        title: "The Matrix",
        year: 1999,
        rating: 8.7,
        genre: ["Action", "Sci-Fi"],
        director: "Lana Wachowski, Lilly Wachowski",
    },
    {
        title: "Fight Club",
        year: 1999,
        rating: 8.8,
        genre: ["Drama"],
        director: "David Fincher",
    },
];

console.log("--------------------1-------------------");

//1. - Create an array of movie titles

console.log(filmsInfo);
console.log(
    "result:",
    filmsInfo.map((film) => film.title)
);
console.log(filmsInfo);

console.log("--------------------2-------------------");

// 2. - Create an array of movies with a rating higher than 8.5. -> changed to 8.7 rating to see the differance

console.log(filmsInfo);
console.log(
    "result:",
    filmsInfo.filter((film) => film.rating > 8.7)
);
console.log(filmsInfo);

console.log("--------------------3-------------------");

// 3. - Sort the movies by rating in descending order.

console.log(filmsInfo);
console.log(
    "result:",
    filmsInfo.sort((a, b) => (a.rating > b.rating ? -1 : 1))
);
console.log(filmsInfo);

console.log("--------------------4-------------------");

// 4. - Create an array of movies released after the year 2000.

console.log(filmsInfo);
console.log(
    "result:",
    filmsInfo.filter((film) => film.year > 2000)
);
console.log(filmsInfo);

console.log("--------------------5-------------------");

// 5. - [ ] Sort the movies by year of release in ascending order.

console.log(filmsInfo);
console.log(
    "result:",
    filmsInfo.sort((a, b) => b.year - a.year)
);
console.log(filmsInfo);

console.log("--------------------6-------------------");

// 6.- [ ] Create an object that counts the number of movies for each genre.

const genreCount = filmsInfo.reduce((acc, film) => {
    film.genre.forEach((genre) => {
        acc[genre] = acc[genre] ? acc[genre] + 1 : 1;
    });
    return acc;
}, {});

console.log(filmsInfo);
console.log("result:", genreCount);
console.log(filmsInfo);

console.log("--------------------7-------------------");

// 7. - [ ] Check if all movies have a rating higher than 7.

console.log(filmsInfo);
console.log(
    "result:",
    filmsInfo.every((film) => film.rating > 7)
);
console.log(filmsInfo);

console.log("--------------------8-------------------");

// 8. - [ ] Calculate the average rating of all movies.

console.log(filmsInfo);

console.log(
    "result:",
    filmsInfo.reduce(
        (acc, film, index, array) => acc + film.rating / array.length,
        0
    )
);
console.log(filmsInfo);

console.log("--------------------9-------------------");

// 9. - [ ] Create an array of objects with only the title and rating of each movie.

console.log(filmsInfo);
console.log(
    "result:",
    filmsInfo.map(({ title, rating }) => ({
        title,
        rating,
    }))
);
console.log(filmsInfo);

console.log("--------------------10------------------");

// 10. - [ ] Check if there is at least one movie in the "Sci-Fi" genre.

console.log(filmsInfo);
console.log(
    "result:",
    filmsInfo.some((film) => film.genre.includes("Sci-Fi"))
);
console.log(filmsInfo);

console.log("--------------------11------------------");

// 11. - [ ] Check if there is at least one movie directed by "Quentin Tarantino".

console.log(filmsInfo);
console.log(
    "result:",
    filmsInfo.some((film) => film.director === "Quentin Tarantino")
);
console.log(filmsInfo);

console.log("--------------------12------------------");

// 12. - [ ] Check if all movies were released after 1990.

console.log(filmsInfo);
console.log(
    "result:",
    filmsInfo.every((film) => film.year > 1990)
);
console.log(filmsInfo);

console.log("--------------------13------------------");

// 13. - [ ] Find the titles of all movies directed by "Christopher Nolan" that have a rating higher than 8.5, sorted by rating in descending order.

console.log(filmsInfo);
console.log(
    "result:",
    filmsInfo
        .filter(
            (film) => film.director === "Christopher Nolan" && film.rating > 8.5
        )
        .map((film) => film.title)
        .sort((a, b) => b.rating - a.rating)
);
console.log(filmsInfo);

console.log("--------------------14------------------");

// 14. - [ ] Calculate the average rating of movies released before the year 2000 that belong to the "Drama" genre.
console.log(filmsInfo);
console.log(
    "result:",
    filmsInfo
        .filter((film) => film.year < 2000 && film.genre.includes("Drama"))
        .reduce(
            (acc, film, index, array) => acc + film.rating / array.length,
            0
        )
        .toFixed(2)
);
console.log(filmsInfo);

console.log("--------------------15------------------");

// 15. - [ ] Create an array of movie titles for movies with a rating higher than 8.5, sorted by their release year.

console.log(filmsInfo);
console.log(
    "result:",
    filmsInfo
        .filter((film) => film.rating > 8.5)
        .map((film) => film.title)
        .sort((a, b) => (a.year - b.year ? -1 : 1))
);
console.log(filmsInfo);

console.log("---------------------16------------------");

// 16. - [ ] Find the total number of genres covered by movies with a rating higher than 8.8.

console.log(filmsInfo);
console.log(
    "result:",
    filmsInfo
        .filter((film) => film.rating > 8.8)
        .reduce((acc, film) => {
            film.genre.forEach((genre) => {
                if (!acc.includes(genre)) {
                    acc.push(genre);
                }
            });
            return acc;
        }, []).length
);
console.log(filmsInfo);

console.log("--------------------17------------------");

// 17. - [ ] Check if there is at least one movie in the dataset with a rating higher than 9.

console.log(filmsInfo);
console.log(
    "result:",
    filmsInfo.some((film) => film.rating > 9)
);
console.log(filmsInfo);

console.log("--------------------18------------------");

// 18. - [ ] Check if all movies directed by "Christopher Nolan" have a rating higher than 8.5.

console.log(filmsInfo);
console.log(
    "result:",
    filmsInfo
        .filter((film) => film.director === "Christopher Nolan")
        .every((film) => film.rating > 8.5)
);
console.log(filmsInfo);
