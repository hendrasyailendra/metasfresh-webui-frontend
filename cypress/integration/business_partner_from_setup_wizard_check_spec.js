describe('Business partner window widgets test', function() {
  before(function() {
    // login before each test
    cy.loginByForm();
  });

  context('DataCheck', function() {
    beforeEach(function() {
      cy.visit('/window/123/2155894');
      cy
        .get('.header-breadcrumb-sitename')  // note: probably needs to be changed
        .should('contain', 'testfirmaWebUI');
    });

    specify('Check the data entry from Initial SetUp Wizard', function() {
        describe('Check data in bpartner window', function() {
        cy
          .get('.header-breadcrumb-sitename')
          .should('contain', 'testfirmaWebUI');

        cy.get('.form-field-Value').find('input').should('have.value', 'testfirmaWebUI');

        
        

        cy
          .get('Name')
          .find('input')
          .should('contain', 'testfirmaWebUI');

        cy
          .get('Name')
          .should('contain', 'testfirmaWebUI');

        cy
          .get('Organisation')
          .should('contain', 'testfirmaWebUI');
      });
    });
  });
});