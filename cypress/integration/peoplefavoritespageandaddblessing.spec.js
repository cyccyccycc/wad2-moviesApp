
  let peoples;
  
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
      cy.get(".card").eq(0).find("button").click();
      cy.get("nav").find("li").eq(7).find("a").click();
      cy.get('input').eq(0).type('cyccyccyc@cyc.com');
      cy.get('input').eq(1).type('cyccyc');
      cy.get('#9').click();
      cy.get("nav").find("li").eq(5).find("a").click();
    });
  
    describe("Base tests", () => {
      it("displays page header", () => {
          cy.get("h2").contains("Favorite People");
          cy.get(".badge").contains(1);
        });
        describe("write blessing test", () => {
            it("turn to another page for user to write belssing", () => {
              cy.get("#99").click();
                cy.url().should("include", 'blessings/form');
              });
/*               it("should memory the words writen by user if all conditons are right", () => {
                cy.get("#99").click();
                cy.get("input").eq(0).type('useruseruseruser');
                cy.get("input").eq(1).type('rrrrrrrrrrrrrrrr');
                cy.get("button").contains('Submit').click();
                cy.get("input").eq(0).should("include", 'useruseruseruser');
                cy.get("input").eq(1).should("include", 'rrrrrrrrrrrrrrrr');
              }); */
            });
    });
  });