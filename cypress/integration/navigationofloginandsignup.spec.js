
let email;
let password;


describe("Navigation", () => {
  describe("From the signup page", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("nav").find("li").eq(6).find("a").click();
    });
    it("should navigate to the Login page and change browser URL", () => {
      cy.get("#5").contains("Login").click();
      cy.url().should("include", `/Login`);
    });
    it("should allow to the sign up and change browser URL", () => {
      cy.get("nav").find("li").eq(7).find("a").click();
        cy.get("#6").contains("Signup").click();
      cy.url().should("include", `/signup`);
    });
  });
});