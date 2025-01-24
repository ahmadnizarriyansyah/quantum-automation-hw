describe('template spec', () => {
  it('passes', () => {
    cy.viewport(768,1024)
    cy.visit('https://staging-panel.quantum-service.id/login');
    cy.get('#username').type("0001");
    cy.wait(2000)
    cy.get('#password').type("Password123!");
    cy.wait(2000)
    cy.get('.mt-10 > .btn').click()
    cy.wait(2000)
    cy.get('#mobile-nav > .hamburger').click()
    cy.wait(2000)
    cy.get('.top-3 > .hamburger').click()
    cy.wait(2000)
    cy.get('.border-l-gray-500 > .border-t').click()
    cy.get(':nth-child(1) > .w-52').click()

    // Questionnaire Page
    cy.get('#backToNav > :nth-child(2) > .rounded-md > .btn-primary').click()
    cy.wait(2000)
    cy.get('.flex-wrap > .btn-success').click()
    cy.wait(2000)
    cy.get('.btn-secondary').click()
    cy.get('.btn-secondary > .flex').click()
    cy.wait(2000)
    cy.get('tbody > :nth-child(1) > :nth-child(5)').click()


    
  })
  
});