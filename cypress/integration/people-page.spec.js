
  let peoples;


const filterByName = (peopleList, string) =>
  peopleList.filter((m) => m.name.toLowerCase().search(string) !== -1);

describe("People Page ", () => {
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
    cy.visit("/");
    cy.get("nav").find("li").eq(4).find("a").click();
  });

  describe("Base tests", () => {
    it("displays page header", () => {
        cy.get("h2").contains("No. People");
        cy.get(".badge").contains(20);
      });
  });
  describe("confirm people name" ,() => {
    it("should display people with length in the head", () => {
      const matchingPeoples = filterByName(peoples);
      cy.get(".card").should("have.length", matchingPeoples.length);

    });
});
});