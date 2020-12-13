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
import SimilarMoviePage from './pages/similarmoviesPage'
import Signup from './pages/SignupPage'
import Login from './pages/LoginPage'
import PrivateRoute from "./components/privateRoute"
import {AuthProvider} from "./contexts/AuthContext"
import Logout from './pages/logoutPage'
const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron">
        <SiteHeader /> 
        <div className="container-fluid">
          <MoviesContextProvider>
           <PeoplesContextProvider>
            <GenresContextProvider> 
              <AuthProvider>  {/* NEW */}
        <Switch>
        <Route exact path="/reviews/form" component={AddMovieReviewPage} />
        <PrivateRoute exact path="/peoples/favorites" component={FavoritePeoplesPage} />
          <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route path="/signup" component={Signup} />
          <Route path='/Login' component={Login}/>
          <PrivateRoute path='/logout' component={Logout}/>
          <Route path="/people" component={peoplePage} />
          <Route path="/translations/:id" component={PeopleTranslationPage} />
          <Route path="/movies/upcoming" component={UpcomingMoviePage} />
          <Route path="/movies/nowplaying" component={NowPlayingPage} />
          <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <PrivateRoute path="/movies/:id" component={MoviePage} />
          <PrivateRoute path="/peoples/:id" component={PeoplePage} />
          <PrivateRoute path="/similarmovies/:id" component={SimilarMoviePage} />
          <Route exact path="/blessings/form" component={AddPeopleBlessingPage} />
          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
        </AuthProvider> 
        </GenresContextProvider>
         </PeoplesContextProvider>    {/* NEW */}
          </MoviesContextProvider>
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));