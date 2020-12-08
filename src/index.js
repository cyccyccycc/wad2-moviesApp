import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"    // CHANGED
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage';
import PeoplePage from './pages/peopledetailsPage'
import FavoriteMoviesPage from './pages/favoritesMoviesPage'       // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import PeopleTranslationPage from "./pages/peopleTranslationPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviePage from "./pages/UpcomingMoviePage";
import NowPlayingPage from "./pages/NowPlayingPage";
import MoviesContextProvider from "./contexts/moviesContext";
import PeoplesContextProvider from "./contexts/peoplesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import peoplePage from './pages/peoplePage';
import FavoritePeoplesPage from './pages/favoritesPeoplesPage';
import AddPeopleBlessingPage from './pages/addPeopleBlessingPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron">
        <SiteHeader /> 
        <div className="container-fluid">
          <MoviesContextProvider>
           <PeoplesContextProvider>
            <GenresContextProvider>    {/* NEW */}
        <Switch>
        <Route exact path="/reviews/form" component={AddMovieReviewPage} />
        <Route exact path="/peoples/favorites" component={FavoritePeoplesPage} />
          <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route path="/people" component={peoplePage} />
          <Route path="/translations/:id" component={PeopleTranslationPage} />
          <Route path="/movies/upcoming" component={UpcomingMoviePage} />
          <Route path="/movies/nowplaying" component={NowPlayingPage} />
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/peoples/:id" component={PeoplePage} />
          <Route exact path="/blessings/form" component={AddPeopleBlessingPage} />
          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
        </GenresContextProvider>
         </PeoplesContextProvider>    {/* NEW */}
          </MoviesContextProvider>
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));