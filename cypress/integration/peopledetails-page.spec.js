let peopleId = null
let people;

describe("People Details Page", () => {
  before(() => {
    cy.request(
        `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&include_adult=false&include_video=false&page=1`
      )
      .its("body")
      .then((response) => {
        return response.results[9].id;
      })
      .then((arbitraryPeopleIdignored) => {
        peopleId = arbitraryPeopleIdignored
        return cy
          .request(
            `https://api.themoviedb.org/3/person/${peopleId}?api_key=${Cypress.env(
              "TMDB_KEY"
            )}`
          )
          .its("body");
      })
      .then((peopleDetails) => {
        people = peopleDetails;
        return peopleDetails.name;
      })
  });
  beforeEach(() => {
    cy.visit('/');
    cy.get("nav").find("li").eq(4).find("a").click();
    cy.get(".card").eq(9).find("img").click();
  });

  it("should display People name in the page header", () => {
    cy.get("h2").contains(people.name);
  });
  
  it("should display the people's details", () => {
    cy.get("h4").contains("also_known_as");
    //cy.get("p").contains(people.also_known_as);
    cy.get("ul")
      .eq(1)
      .within(() => {
        cy.get("li").eq(0).contains("place_of_birth");
        cy.get("li").eq(0).next().contains(people.place_of_birth);
      });
      cy.get("ul")
      .eq(2)
      .within(() => {
        cy.get("li").eq(0).contains("biography");
        cy.get("li").eq(0).next().contains(people.biography);
    });
    cy.get("ul")
      .eq(3)
      .within(() => {
        cy.get("li").eq(0).contains("popularity");
        cy.get("li").eq(0).next().contains(people.popularity);
    });
  cy.get("ul")
    .eq(4)
    .within(() => {
    cy.get("li").eq(0).contains("known_for_department");
    cy.get("li").eq(0).next().contains(people.known_for_department);
});
  });
  it("should display the Home icon with the correct URL value", () => {
    cy.get(".fa-home")
      .parent()
     // .should("have.attr", "href")
      //.should("include", people.homepage);
  });
  it("should display the people poster with the appropriate src attribute", () => {
    cy.get("img.people")
      .should("have.attr", "src")
      .should("include", people.profile_path);
  });

});