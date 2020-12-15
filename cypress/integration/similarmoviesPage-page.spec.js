let movieId = null
let movie;

describe("simliar movies Pages", () => {
        before(() => {
            cy.request(
                `https://api.themoviedb.org/3/movie/now_playing?api_key=${Cypress.env(
                "TMDB_KEY"
              )}&language=en-US&include_adult=false&include_video=false&page=1`
            )
              .its("body")
              .then((response) => {
                return response.results[2].id;
              })
              .then((arbitraryMovieIdignored) => {
                movieId = arbitraryMovieIdignored
                return cy
                  .request(
                    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${Cypress.env(
                      "TMDB_KEY"
                    )}`
                  )
                  .its("body");
              })
              .then((similarmovies) => {
                movie = similarmovies;
                return similarmovies.id;
              })
          });
      beforeEach(() => {
        cy.visit("/")
        cy.get("nav").find("li").eq(3).find("a").click();
      });

  it("should display SImilar Movies in the page header", () => {
    cy.get(".card").eq(0).find("button").click();
    cy.get("h2").contains("Here are similar Movies");
    cy.get(".badge").contains(20);

  });
  it("should display the movie's similar movies", () => {
    cy.get(".card").eq(0).find("button").click();
    cy.url().should("include", '/similarmovies');
  });



});