let currentUser;
let password;

  describe("Logout Page ", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get('nav').find("li").eq(7).click();
      cy.get('input').eq(0).type('cyccyccyc@cyc.com');
      cy.get('input').eq(1).type('cyccyc');
      cy.get('#9').click();
    });
    it("should turn to the login Page if the user do not login and click the logout Link", () => {
        cy.get('nav').find("li").eq(8).click();
        cy.url().should("include", '/');
      });
    it("should turn to the login Page if the user do not login and click the function needed login", () => {
        cy.get('nav').find("li").eq(2).click();
        cy.url().should("include", '/');
        cy.get('nav').find("li").eq(5).click();
        cy.url().should("include", '/');
      });
/*         it("After the user login, it should displays the useraccount", () => {
          cy.visit("/");
          cy.get('nav').find("li").eq(7).click();
          cy.get('input').eq(0).type('cyccyccyc@cyc.com');
          cy.get('input').eq(1).type('cyccyc');
          cy.get('button').click();
          cy.get('nav').find("li").eq(8).click();
          cy.get("h2").contains("YOUR ACCOUNT");
          cy.get("strong").contains("Email:");
          cy.get("strong").next().contains("cyccyccyc@cyc.com");

        }); */
    
/*         it("should log out when user click the logout button ", () => {
          cy.visit("/");
          cy.get('nav').find("li").eq(7).click();
          cy.get('input').eq(0).type('cyccyccyc@cyc.com');
          cy.get('input').eq(1).type('cyccyc');
          cy.get('button').contains('Login').click();
          cy.get('nav').find("li").eq(8).click();
          cy.get('button').click();
          cy.get('nav').find("li").eq(8).click();
          cy.url().should("include", '/');
    }); */
    });
