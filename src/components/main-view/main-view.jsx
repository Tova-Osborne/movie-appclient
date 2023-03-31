import React from "react";
import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      Title: "The Green Mile",
      Description:
        "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
      Genre: {
        Name: "Fantasy",
        Description:
          "The fantasy genre is defined by both circumstance and setting inside a fictional universe with an unrealistic set of natural laws. The possibilities of fantasy are nearly endless, but the movies will often be inspired by or incorporate human myths.",
      },
      Director: {
        Name: "Frank Darabont",
        Bio: "Frank Darabont is an American film director, screenwriter and producer. He has been nominated for three Academy Awards and a Golden Globe.",
        Birth: "1959",
        ImagePath:
          "https://www.themoviedb.org/t/p/original/xQPgyZOBhaz1GdCQIPf5A5VeFzO.jpg",
      },
      Featured: false,
      ImagePath:
        "https://www.themoviedb.org/t/p/original/cYUhG7GsU9wrQNT1urqNoF2aK18.jpg",
    },
    {
      id: 2,
      Title: "Bringing Up Baby",
      Description:
        "While trying to secure a $1 million donation for his museum, a befuddled paleontologist is pursued by a flighty and often irritating heiress and her pet leopard, Baby.",
      Genre: {
        Name: "Comedy",
        Description:
          "omedy is a genre of film in which the main emphasis is on humor. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect.",
      },
      Director: {
        Name: "Howard Hawks",
        Bio: "Howard Winchester Hawks (May 30, 1896 – December 26, 1977) was an American film director, producer and screenwriter of the classic Hollywood era. ",
        Birth: "1896",
        Death: "1977",
      },
      Featured: false,
      ImagePath:
        "https://www.themoviedb.org/t/p/original/f1AJaiC7bXjCf2ndlSEumLM5Gj.jpg",
    },
    {
      id: 3,
      Title: "Inception",
      Description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      Genre: {
        Name: "Action",
        Description:
          "Movies in the action genre are defined by risk and stakes. While many movies may feature an action sequence, to be appropriately categorized inside the action genre, the bulk of the content must be action-oriented, including fight scenes, stunts, car chases, and general danger.",
      },
      Director: {
        Name: "Christopher Nolan",
        Bio: "Best known for his cerebral, often nonlinear, storytelling, acclaimed writer-director Christopher Nolan was born on July 30, 1970, in London, England. Over the course of 15 years of filmmaking, Nolan has gone from low-budget independent films to working on some of the biggest blockbusters ever made.",
        Birth: "1970",
      },
      Featured: false,
      ImagePath:
        "https://www.themoviedb.org/t/p/original/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg",
    },
    {
      id: 4,
      Title: "The Godfather",
      Description:
        "The GodFather is a movie about The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
      Genre: {
        Name: "Drama",
        Description:
          "he drama genre is defined by conflict and often looks to reality rather than sensationalism. Emotions and intense situations are the focus, but where other genres might use unique or exciting moments to create a feeling, movies in the drama genre focus on common occurrences.",
      },
      Director: {
        Name: "Francis Ford Coppola",
        Bio: "Francis Ford Coppola, (born April 7, 1939, Detroit, Michigan, U.S.), American motion-picture director, writer, and producer whose films range from sweeping epics to small-scale character studies. As the director of films such as The Godfather (1972), The Conversation (1974), and Apocalypse Now (1979), he enjoyed his greatest success and influence in the 1970s, when he attempted to create an alternative to the Hollywood system of film production and distribution.",
        Birth: "1939",
      },
      Featured: false,
      ImagePath:
        "https://www.themoviedb.org/t/p/original/zOYiXN7VKhMlvUxt6Zul5IwmYWs.jpg",
    },
    {
      id: 5,
      Title: "Silence of the Lambs",
      Description:
        "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
      Genre: {
        Name: "Thriller",
        Description:
          "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience.",
      },
      Director: {
        Name: "Jonathan Demme",
        Bio: "Robert Jonathan Demme was an American director, producer, and screenwriter.",
        Birth: "1944",
        Death: "2017",
      },
      ImagePath: "silenceofthelambs.png",
      Featured: true,
    },
    {
      id: 6,
      Title: "Philadelphia",
      Description:
        "When a man with HIV is fired by his law firm because of his condition, he hires a homophobic small time lawyer as the only willing advocate for a wrongful dismissal suit.",
      Genre: {
        Name: "Drama",
        Description:
          "The drama genre is defined by conflict and often looks to reality rather than sensationalism. Emotions and intense situations are the focus, but where other genres might use unique or exciting moments to create a feeling, movies in the drama genre focus on common occurrences.",
      },
      Director: {
        Name: "Jonathan Demme",
        Bio: "Robert Jonathan Demme was an American director, producer, and screenwriter",
        Birth: "1944",
        Death: "2017",
      },
      ImagePath:
        "https://www.themoviedb.org/t/p/original/tFe5Yoo5zT495okA49bq1vPPkiV.jpg",
      Featured: false,
    },
    {
      id: 7,
      Title: "The Dark Knight",
      Description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      Genre: {
        Name: "Action",
        Description:
          "Movies in the action genre are defined by risk and stakes. While many movies may feature an action sequence, to be appropriately categorized inside the action genre, the bulk of the content must be action-oriented, including fight scenes, stunts, car chases, and general danger.",
      },
      Director: {
        Name: "Christopher Nolan",
        Bio: "Best known for his cerebral, often nonlinear, storytelling, acclaimed writer-director Christopher Nolan was born on July 30, 1970, in London, England. Over the course of 15 years of filmmaking, Nolan has gone from low-budget independent films to working on some of the biggest blockbusters ever made.",
        Birth: "1970",
      },
      Featured: true,
      ImagePath:
        "https://www.themoviedb.org/t/p/original/xQPgyZOBhaz1GdCQIPf5A5VeFzO.jpg",
    },
    {
      id: 8
      Title: "The 40-Year-Old Virgin",
      Description:
        "Goaded by his buddies, a nerdy guy who''s never 'done the deed'only finds the pressure mounting when he meets a single mother.",
      Genre: {
        Name: "Comedy",
        Description:
          "Comedy is a genre of film in which the main emphasis is on humor. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect.",
      },
      Director: {
        Name: "Judd Apatow",
        Bio: "Judd Apatow is an American producer, writer, director, actor and stand-up comedian.",
        Birth: "1967",
      },
      Featured: false,
      ImagePath:
        "https://www.themoviedb.org/t/p/original/90ZjgddAMvGH3SUthtWjaGJZsn9.jpg",
    },
    {
      id: 9,
      Title: "The Shawshank Redemption",
      Description:
        "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
      Genre: {
        Name: "Drama",
        Description:
          "The drama genre is defined by conflict and often looks to reality rather than sensationalism. Emotions and intense situations are the focus, but where other genres might use unique or exciting moments to create a feeling, movies in the drama genre focus on common occurrences.",
      },
      Director: {
        Name: "Frank Darabont",
        Bio: "Frank Darabont is an American film director, screenwriter and producer. He has been nominated for three Academy Awards and a Golden Globe.",
        Birth: "1959",
      },
      Featured: false,
      ImagePath:
        "https://www.themoviedb.org/t/p/original/hBcY0fE9pfXzvVaY4GKarweriG2.jpg",
    },
    {
      id: 10,
      Title: "The Godfather Part II",
      Description:
        "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
      Genre: {
        Name: "Drama",
        Description:
          "he drama genre is defined by conflict and often looks to reality rather than sensationalism. Emotions and intense situations are the focus, but where other genres might use unique or exciting moments to create a feeling, movies in the drama genre focus on common occurrences.",
      },
      Director: {
        Name: "Francis Ford Coppola",
        Bio: "Francis Ford Coppola, (born April 7, 1939, Detroit, Michigan, U.S.), American motion-picture director, writer, and producer whose films range from sweeping epics to small-scale character studies. As the director of films such as The Godfather (1972), The Conversation (1974), and Apocalypse Now (1979), he enjoyed his greatest success and influence in the 1970s, when he attempted to create an alternative to the Hollywood system of film production and distribution.",
        Birth: "1939",
      },
      Featured: false,
      ImagePath:
        "https://www.themoviedb.org/t/p/original/5ZSfJ9aleg2rGhVWp0Dcqv38Nr5.jpg",
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

   if (selectedMovie) {
    return (
      <MovieView
        movieData={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }
  
  if (movies.length === 0) {
    return <div> The movie list is empty! </div>;
  }

  return (
    <div>
      <React.StrictMode>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movieData={movie}
            onMovieClick={(newSelectedMovie) => {
              setSelectedMovie(newSelectedMovie);
            }}
          />
        ))}
      </React.StrictMode>
    </div>
  );
};