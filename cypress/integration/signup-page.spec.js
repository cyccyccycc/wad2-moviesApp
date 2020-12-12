let password =123456;
let username;

  describe("Siginup Page ", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("nav").find("li").eq(6).find("a").click();
    });
  
    describe("Base test", () => {
        it("displays page header", () => {
          cy.get("h2").contains("Sign up");
        });
        describe("check the function of this sign up Page", () => {
        it("should display the message to user if he enter the worng form of email ", () => {
      cy.get('input').eq(0).type('asdasdaad');
      cy.get('button').click();
      cy.url().should("not.include", '/Login');
    });
    it("should show 'password is wrong' when user enter the different password", () => {
       cy.get('input').eq(0).type('asdasdaad@adsadad.com');
       cy.get('input').eq(1).type('121731241241241');
       cy.get('input').eq(2).type('123123121');
       cy.get('button').click();
       cy.get("h2").next().contains("Password is wrong");
    });
    it("should show fail when the username are already exist", () => {
        cy.get('input').eq(0).type('asdasdaad@adsadad.com');
        cy.get('input').eq(1).type('123456');
        cy.get('input').eq(2).type('123456');
        cy.get('button').click();
        cy.visit("/");
       cy.get("nav").find("li").eq(6).find("a").click();
       cy.get('input').eq(0).type('asdasdaad@adsadad.com');
       cy.get('input').eq(1).type('123456');
       cy.get('input').eq(2).type('123456');
       cy.get('button').click();
       cy.get('.fade').contains("Fail to create the account");
     });
    });
    });
  });