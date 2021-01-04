# Assignment 1 - ReactJS app.

Name: YICHENG CAI

## Features.

...... A bullet-point list of the ADDITIONAL user features you have implemented for the  Movies Fan app ......,
 
 + Feature 1 - I use firebase to create the registration interface, login interface, logout interface. Users can register the account through the registration interface, or use the existing account to log in through the login interface. And the user can check wheather he has already logged in or not through the log out interface. After login, User can use the login interface to log out the account. Moreover, I set up a private path. Users who do not log in can only watch some movie information. When the user doesn't log in and wants to add his favorite For movies or actors, or check his account, the page will jump to the registration and login interface. Users who do not log in cannot use these function.

 + Feature 2 - I created a page to get Nowplaying movies. In this page, you can jump to another Page by pressing the button under the card to get all the movies similar to the movies in the card. And you also can get similar movies again and again.

 + Feature 3 = I created a page where I can get actors. Each card has an actor's picture and basic information. By clicking on the actor's picture, I can enter another page to show the actor's details. Click the button below the card to add the actor to my favorite actor

 +Feayure 4 = I create the private route. When the user logs in the website and had already added some movies or actors to his favorites, the user can click the favorites page and he could use the button under the card body to writes some of his words about the movies or actors, and this words will be record there.

 + etc

## Setup requirements (If required).
...... A brief explanation of any non-standard setup steps necessary to run your app/client locally (after cloning the repo) ........

npm i firebase
npm audit fix
npm i bootstrap react-bootstrap

You should run these in terminal to install the firebase and bootstrap.



## API Data Model.

..... List the additional TMDB endpoints used in your assignment, e.g.

+ https://api.themoviedb.org/3/movie/now_playing - get now playing movies. 
+ https://api.themoviedb.org/3/person/popular - get popular actors
+ https://api.themoviedb.org/3/person/${id} - get all of the information about a Special actors
+ https://api.themoviedb.org/3/movie/${id}/similar- get a list of all of the similar movies related to one special movie
+ https://api.themoviedb.org/3/person/${id} - get all of the details of one actors
+ REACT_APP_FIREBASE_API_KEY=AIzaSyDjtrLVNppzzii9BbUHkUVAXIlVInyrprM
REACT_APP_FIREBASE_AUTH_DOMAIN=login-development-bbcd1.firebaseapp.com
REACT_APP_FIREBASE_DATABASE_URL=https://login-development-bbcd1.firebaseio.com
REACT_APP_FIREBASE_PROJECT_ID=login-development-bbcd1
REACT_APP_FIREBASE_STORAGE_BUCKET=login-development-bbcd1.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=1010593383964
REACT_APP_FIREBASE_APP_ID=1:1010593383964:web:d1bf499260aeebb50c01d9

    These are firebase Keys

## App Design.

### Component catalogue (If required).

![][newstorybook]

### UI Design.


![][similarmovies]
>Shows all of the similar movies about one special id movie, and you could get similar movies again.

![][signup]
>Shows the interface for user to register. And if you already have account you could click the button Login below to login page.

![][people]
>Shows the popular people and you can clcik the picture to see details and you can click the button to add this actor into your favorites

![][peopledetails]
>Shows the information about a special actor. 

![][Nowplaying]
>Shows the now playing movies and you could use button to get similar movies. 

![][logout]
>Shows the interface for user to log out and check their account.

![][login]
>Shows the interface for user to log in the website, and you could use the button below to the signup page.

![][favoritespeople]
>Shows the actor which has been added into this page by user.

![][addblessingform]
>Shows the form for user to write their name and words about one special actor, and you could use the 'submit' button to hand in your words to the website, and you could use the 'reset' button to delete your words.

## Routing.

+ /movies/favorites (private) - displays the user's favorite movies selection.
+ /peoples/favorites (private) - displays the user's favorite actors selection
+ /logout (private) - for users to log out and check their account
+ /Login (public) - for log in the website
+ /signup (public) - for account register
+ /movies/nowplaying (public) - display now playing movies
+ /peoples/:id (public) - display details information of actors
+ /similarmovies/:id (public) - display the similar movies related to one move
+ /blessings/form (public) - display the user's words about one actor in user's favorites

### Data hyperlinking.


![][Blessingformlink]
>Clicking the 'Write a Blessing' cause the display a form for user to write his own words.

![][peopledetailslink]
>Clicking the a card cause the diaplay of that actor's details.

![][loginpagelink]
>Clicking the 'Login' cause the website turn to login page.

![][peoplehomepagelink]
>Clicking the 'house' cause the display of the actor's homepage.

![][signuppagelink]
>Clicking the 'Signup' cause the website turn to the signup page.

![][similarmovieslink]
>Clicking the 'Get the similar movies' cause the display of all similar movies related to this movie.


## Independent learning (If relevant).

. . . . . Briefly mention each technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include reference material links (articles/blogs).



I learnt the use of firebase and its functions by myself and make the login, signup and logout page for the movie app.
The filename is :
./src/login/index.js
./src/logout/index.js
./src/signup/index.js
./src/firebase.js
./pages/SignupPage.js
./pages/LoginPage.js
./pages/logoutPage.js
./context/AuthContexts.js
.env

reference:
https://blog.csdn.net/mp624183768/article/details/80553866
https://www.yiibai.com/firebase/
https://www.it1352.com/OnLineTutorial/firebase/firebase_facebook_authentication.html
https://www.imooc.com/article/288414
https://www.youtube.com/watch?v=PKwu15ldZ7k
https://blog.csdn.net/pmtwy/article/details/62045856
http://www.bilibili.com/video/av7198106/




---------------------------------

# Assignment 1 - Agile Software Practice.

Name: YICHENG CAI

## App Features.

[Document each new feature/page in your Movies Fan app, including: Feature Name; Its objective/purpose; The associated test file; a screenshot of its UI.]
e,g,
 
+ Similar movies page - Shows the similar movies related to a special movie, the 'Get the similar movies' button can get similar movies again.

Tests: cypress/integration/similarmoviesPage-page.spec.js 

![][similarmovies]


+ Sign up page: Displays the interface for user to register, and the button 'Lgoin' can get into the Login page

Tests: cypress/integration/logoutpage.spec.js

![][signup]


+ People page - Shows the popular actors, and the imgs in cards can be clicked to get details about the actor, and the button below the card can add this actor to user's favrites.

Tests: cypress/integration/people-page.spec.js 

![][people]


+ People Details page - Shows the details about a actor. The Homepage button at the top can go to the actor's homepage.

Tests: cypress/integration/peopledetails-page.spec.js 

![][peopledetails]


+ Nowplaying movies page - Shows the now playing movies, and the button below 'Get the similar movies' can get similar movies related to this movie

Tests: cypress/integration/similarmoviesPage-page.spec.js 

![][Nowplayingmovies]

+ Logout page - Shows the interface for user to log out and check his account, and he could click the button below to log out his account.

Tests: cypress/integration/logoutpage.spec.js

![][Logout]

+ Login page - Shows the interface for user to log in the website and the button below can be clicked to get into signup page if user already have account.

Tests: cypress/integration/login-page.spec.js 

![][Login]

+ Favorites people page - Shows the people which have already been added by user to this page, and the button below can be clicked to turn to the Blessing write page.

Tests: cypress/integration/peoplefavoritespageandaddblessing.spec.js 

![][favoritepeople]

+ Blessingform page - Shows the form for user to write his name and his words about one special actor, and he could click the 'Submit' button to record his words and name, or click the 'reset' button to delete his words and name.

Tests: cypress/integration/peoplefavoritespageandaddblessing.spec.js 

![][addBlessingform]

## Testing.

Cypress Dashboard URL: https://dashboard.cypress.io/organizations/b38bf2b6-d234-47bb-ae68-82f13ec56936/projects

### Advanced Testing (If required).

[State briefly each instances of boundary and/or error/exceptional test case in your project]
e.g.

+ cypress/integration/login-page.spec.js -test when user has type the wrong form of the email
+ cypress/integration/login-page.spec.js - test when user has type the wrong password
+ cypress/integration/signup-page.spec.js - test when user type the password and passwordconfirm don't match
+ cypress/integration/signup-page.spec.js - test when user type a already existing username it should fail
+ cypress/integration/peoplefavoritespageandaddblessing.spec.js - test when user type too short words


## Independent learning (If relevant).

[ Itemize each technologies/techniques used in your project that were not covered in the lectures/labs. Provide the necessary evidence of their use (e,g, project file names, screenshots, service URL, etc)

List reference material links (articles/blogs).

---------------------------------

[similarmovies]: ./public/similarmovies.png
[similarmovieslink]: ./public/similarmovieslink.png
[signup]: ./public/signup.png
[signuppagelink]: ./public/signuppagelink.png
[people]: ./public/people.png
[peoplehomepagelink]: ./public/peoplehomepagelink.png
[peopledetails]: ./public/peopledetails.png
[peopledetailslink]: ./public/peopledetailslink.png
[Nowplayingmovies]: ./public/Nowplayingmovies.png
[newstorybook]: ./public/newstorybook.png
[Logout]: ./public/Logout.png
[Login]: ./public/Login.png
[loginpagelink]: ./public/loginpagelink.png
[favoritespeople]: ./public/favoritespeople.png
[addblessingform]: ./public/addblessingform.png
[Blessingformlink]: ./public/Blessingformlink.png

