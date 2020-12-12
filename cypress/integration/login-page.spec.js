let username;
let password;
  describe("Login Page ", () => {

    beforeEach(() => {
      cy.visit("/");
      cy.get("nav").find("li").eq(7).find("a").click();
    });
  
    describe("Base test", () => {
        it("displays page header", () => {
          cy.get("h2").contains("Login");
        });
        describe("check the function of this login Page", () => {
        it("should display the message to user if he enter the worng form of email ", () => {
      cy.get('input').eq(0).type('asdasdaad');
      cy.get('button').click();
      cy.url().should("include", '/Login');
    });
    it("should show 'password is wrong' when user enter the wrong password", () => {
       cy.get('input').eq(0).type('asdas@adsadad.com');
       cy.get('input').eq(1).type('121731241241241');
       cy.get('button').click();
       cy.get('input').eq(1).clear();
       cy.get('.fade').contains("Fail to log");
    });
    it("should successful when the user enter the right email and password", () => {
        cy.get('input').eq(0).type('asdasdaad@adsadad.com');
        cy.get('input').eq(1).type('123456');
        cy.get('button').click();
        cy.url().should("include", '/');
     });
    });
    });
  });