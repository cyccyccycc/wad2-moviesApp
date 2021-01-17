export const login = (username, password) => {
  return fetch('/api/users', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};

export const signup = (username, password) => {
  return fetch('/api/users?action=register', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};

export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
      'Content-Type': 'application/json',
      'Authorization': window.localStorage.getItem('token')
    },
    method: 'get',
  }
  ).then(res => res.json());
};

export const getMovie = id => {
  return fetch(`/api/movie/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': window.localStorage.getItem('token')
    },
    method: 'get',
    
}).then(res => res.json())
};
  
  export const getGenres = () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    )
      .then(res => res.json())
      .then(json => json.genres);
  };
  export const getMovieReviews = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.results);
  };
  export const getUpcomingMovie = () => {
    return fetch(
      '/api/upcoming',{headers: {
        'Authorization': window.localStorage.getItem('token')
     },
     method: 'get',
   }
   ).then(res => res.json());
 };
  export const getnowplaying = () => {
    return fetch(
      '/api/nowplaying',{headers: {
        'Authorization': window.localStorage.getItem('token')
     },
     method: 'get',
   }
   ).then(res => res.json());
 };



  export const getpeoples = () => {
    return fetch(
      '/api/actor',{headers: {
        'Content-Type': 'application/json'
      }
    }
    ).then(res => res.json());
  };

 
  

  export const getpeopledetail = id => {
    return fetch(`/api/actordetail/${id}`, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      },
      method: 'get',
      
  }).then(res => res.json())
  };
  //export const getpeopledetail = id => {
 //   return fetch(
   //   `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
   // ).then(res => res.json());
 // };

/*   export const getPeopleTranslations = id => {
    return fetch(
      `https://api.themoviedb.org/3/person/${id}/translations?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.results);
  };
 */
  export const getsimilarmovies = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )//.then(res => res.json());
    .then(res => res.json())
    .then(json => {
      console.log(json)
      return json.results
    })
  };
/* 
  export const getMoviecredits = id => {
    return fetch(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  
  export const getcredits = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.results);
  };
 */