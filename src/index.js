import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"    // CHANGED
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MoviesContextProvider from "./contexts/moviesContext";
import PeoplesContextProvider from "./contexts/peoplesContext";
import GenresContextProvider from "./contexts/genresContext";
import {AuthProvider} from "./contexts/AuthContext"


const HomePage = lazy(() =>import("./pages/homePage"));
const MoviePage = lazy(() =>import('./pages/movieDetailsPage'));
const PeoplePage = lazy(() =>import('./pages/peopledetailsPage'));
const FavoriteMoviesPage = lazy(() =>import('./pages/favoritesMoviesPage'));
const MovieReviewPage = lazy(() =>import("./pages/movieReviewPage"));
const SiteHeader = lazy(() =>import('./components/siteHeader'));
const UpcomingMoviePage = lazy(() =>import("./pages/UpcomingMoviePage"));
const NowPlayingPage = lazy(() =>import("./pages/NowPlayingPage"));
const AddMovieReviewPage = lazy(() =>import('./pages/addMovieReviewPage'));
const peoplePage = lazy(() =>import('./pages/peoplePage'));
const FavoritePeoplesPage = lazy(() =>import('./pages/favoritesPeoplesPage'));
const AddPeopleBlessingPage = lazy(() =>import('./pages/addPeopleBlessingPage'));
const SimilarMoviePage = lazy(() =>import('./pages/similarmoviesPage'));
const Logout = lazy(() =>import('./pages/logoutPage'));
const PrivateRoute = lazy(() =>import("./components/privateRoute"));
const Login = lazy(() =>import('./pages/LoginPage'));
const Signup = lazy(() =>import('./pages/SignupPage'));

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
          <Route path="/movies/upcoming" component={UpcomingMoviePage} />
          <Route path="/movies/nowplaying" component={NowPlayingPage} />
          <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/peoples/:id" component={PeoplePage} />
          <Route path="/similarmovies/:id" component={SimilarMoviePage} />
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

ReactDOM.render(
  <Suspense fallback={<h3>Loading...</h3>}>
<App />
</Suspense>, document.getElementById("root"));