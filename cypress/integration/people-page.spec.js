
  let peoples;


const filterByName = (peopleList, string) =>
  peopleList.filter((m) => m.title.toLowerCase().search(string) !== -1);

describe("Home Page ", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body") 
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