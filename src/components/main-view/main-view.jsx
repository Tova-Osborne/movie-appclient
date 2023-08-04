import React from "react";
import { useState, useEffect } from "react";
import { LoginView } from "../login-view/login-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { ProfileView } from "../profile-view/profile-view";
import { FavoritesView } from "../profile-view/favorites-view";
import { MoviesList } from "../movies-list/movies-list";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ChangeView } from "../profile-view/change-view";
import { useSelector, useDispatch } from "react-redux";
import { setMovies } from "../../redux/reducers/movies";

export const MainView = () => {
  const movies = useSelector((state) => state.movies);
  const user = useSelector((state) => state.user);
  // const [user, setUser] = useState(null);
  // const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  // const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  // const [movies, setMovies] = useState([]);
  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();
  console.log(user);

  // check if user has valid token
  useEffect(() => {
    if (!token) {
      return;
    }

    //get movies list and store in Movies variable

    fetch("https://tovamovielistapp.herokuapp.com/movies", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const moviesApi = data.map((movie) => {
          return {
            id: movie._id,
            title: movie.Title,
            description: movie.Description,
            genre: movie.Genre.Name,
            director: movie.Director.Name,
            image: movie.ImagePath,
          };
        });
        dispatch(setMovies(moviesApi));
      });
  }, [token]);
  console.log(movies);

  useEffect(() => {
    if (!token) {
      return;
    }

    //get users list and store in UserData variable

    fetch("https://tovamovielistapp.herokuapp.com/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const userApi = data.map((userInfo) => {
          return {
            id: userInfo._id,
            username: userInfo.Username,
            password: userInfo.Password,
            birthdate: userInfo.Birthdate,
            favorites: userInfo.Favorites,
          };
        });
        setUserData(userApi);
      });
  }, [token]);
  console.log(userData);

  return (
    <BrowserRouter>
      <NavigationBar
      // user={user}
      // onLoggedOut={() => {
      //   localStorage.removeItem(storedUser);
      //   localStorage.removeItem(storedToken);
      //   setUser(null);
      // }}
      />
      <Row className="justify-content-md-center">
        <Routes>
          <Route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <SignupView />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" replace />
                ) : (
                  <Col md={5}>
                    <LoginView
                    // onLoggedIn={(user, token) => {
                    //   setUser(user);
                    //   setToken(token);
                    // }}
                    />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/movies/:movieId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login?" replace />
                ) : movies.length === 0 ? (
                  <Col> The movie list is empty! </Col>
                ) : (
                  <Col md={8}>
                    <MovieView />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="account"
            element={
              <>
                {!user ? (
                  <Navigate to="/login?" replace />
                ) : (
                  <Col md={8}>
                    <ProfileView user={user} />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="favorites"
            element={
              <>
                {!user ? (
                  <Navigate to="/login?" replace />
                ) : (
                  <Col md={8}>
                    <FavoritesView user={user} movies={movies} />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                {!user ? (
                  <Navigate to="/login?" replace />
                ) : movies.length === 0 ? (
                  <Col> The movie list is empty! </Col>
                ) : (
                  <>
                    <MoviesList />
                  </>
                )}
              </>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};
