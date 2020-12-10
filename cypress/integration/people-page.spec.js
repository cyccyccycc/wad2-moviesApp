
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
});