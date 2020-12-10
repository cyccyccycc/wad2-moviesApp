let peoples;
const peopleId = 58369; 


describe("Navigation", () => {
  before(() => {
    cy.request(
        `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
            "TMDB_KEY"
          )}&language=en-US&include_adult=false&include_video=false&page=1`
        )
      .its("body")
      .then((response) => {
        peoples = response.results;
      });
      cy.request(
        `https://api.themoviedb.org/3/person/${peopleId}?api_key=${Cypress.env(
          "TMDB_KEY"
        )}`
      )
      .its("body")
      .then((response) => {
        console.log(response);
     //   reviews = response.results;
      });
  });

  describe("From the people page", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("nav").find("li").eq(4).find("a").click();
    });
    it("should navigate to the people details page and change browser URL", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.url().should("include", `/peoples/${peoples[1].id}`);
      cy.get("h2").contains(peoples[1].name);
    });
    it("should allow navigation from site header", () => {
      cy.get("nav").find("li").eq(4).find("a").click();
      cy.url().should("include", `/people`);
      cy.get("h2").contains("No. People");
      cy.get("nav").find("li").eq(5).find("a").click();
      cy.url().should("include", `/favorites`);
      cy.get("h2").contains("Favorite People");
      cy.get("nav").find("li").eq(3).find("a").click();
      cy.url().should("not.include", `/favorites`);
      cy.get("h2").contains("No. Movies");
    });
  });

  describe("From the people Details page ", () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get("nav").find("li").eq(4).find("a").click();
    });

  });
  describe("From the Favorite People page", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("nav").find("li").eq(4).find("a").click();
      cy.get(".card").eq(0).find("button").click();
      cy.get("nav").find("li").eq(5).find("a").click();
    });
    it("should navigate to the movies detail page and change the browser URL", () => {
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/peoples/${peoples[0].id}`);
      cy.get("h2").contains(peoples[0].name);
    });
  });
  describe("The Go Back button", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("nav").find("li").eq(4).find("a").click();
    });
    it("should navigate from people page to people details and back", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.get("svg[data-icon=arrow-circle-left]").click();
      cy.url().should("not.include", `/peoples`);
      cy.get("h2").contains("No. People");
    });
    it("should navigate from favorites page to movie details and back", () => {
        cy.get(".card").eq(0).find("button").click();
        cy.get("nav").find("li").eq(5).find("a").click();
        cy.get(".card").eq(0).find("img").click();
        cy.get("svg[data-icon=arrow-circle-left]").click();
        cy.url().should("include", `/peoples`);
        cy.get("h2").contains("Favorite");
    });
  });
});