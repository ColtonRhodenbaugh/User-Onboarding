describe("User-Onboarding", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    })

    //helpers
    const textInput = () => cy.get("input[name=username]");
    const emailInput = () => cy.get("input[name=email]");
    const passInput = () => cy.get("input[name=password]");
    const tosCheck = () => cy.get("input[name=tos]");
    const submitBtn = () => cy.get('input[type="submit"]');

    //sanity check
    it("sanity-check",()=>{
    expect(7 + 11).to.equal(18);
    })

    it("the proper elements are showing", () => {
        textInput().should("exist");
        emailInput().should("exist");
        passInput().should("exist");
        tosCheck().should("exist");
        submitBtn().should("exist");
    })

    describe("Filling out text", () => {
        it("can navigate to site", () => {
            cy.url().should("include", "localhost"); 
        })
        it("can type into inputs", () => {
            textInput()
            .should("have.value", "")
            .type("Colton")
            .should("have.value", "Colton");

            emailInput()
            .should("have.value", "")
            .type("crhodenbaugh2204@gmail.com")
            .should("have.value", "crhodenbaugh2204@gmail.com");

            passInput()
            .should("have.value", "")
            .type("foobar")
            .should("have.value", "foobar");
        })

    })
    describe("checkbox is working", () => {
        it('should allow a user to check the terms of service box', () => {
            cy.get('[name="tos"]').check();
            cy.get('[name="tos"]').should('be.checked');
          });
    })
    describe("submitBtn is working", () => {
        it('should allow a user to submit the form data', () => {
            cy.get('[name="username"]').type('John');
            cy.get('[name="email"]').type('johndoe@example.com');
            cy.get('[name="password"]').type('foobar')
            cy.get('input[type="submit"]').click();
            cy.get('form').should('exist');
          });
        
    })







})