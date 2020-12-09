
  let peoples;    // List of movies from TMDB

// Utility functions
const filterByName = (peopleList, string) =>
  peopleList.filter((m) => m.title.toLowerCase().search(string) !== -1);

describe("Home Page ", () => {
  before(() => {
    // Get movies from TMDB and store in movies variable.
    cy.request(
      `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")    // Take the body of HTTP response from TMDB
      .then((response) => {
        peoples = response.results
      })
  })
  beforeEach(() => {
    cy.visit("/people")
  });

  describe("Base tests", () => {
    it("displays page header", () => {
        cy.get("h2").contains("No. People");
        cy.get(".badge").contains(20);
      });
  });
  //describe("Filtering", () => {
   // it("should only display movies with the specified title substring", () => {
   //   let searchString = "m";
     // let matchingMovies = filterByTitle(movies, searchString);
      //cy.get("input").clear().type(searchString); // Enter m in text box
    //  cy.get(".card").should("have.length", matchingMovies.length);
      // Do a second test for certainty!
     // searchString = "o";
     // matchingMovies = filterByTitle(movies, searchString);
      //cy.get("input").clear().type(searchString)
     // cy.get(".card").should("have.length", matchingMovies.length);
    //});
  //});
});