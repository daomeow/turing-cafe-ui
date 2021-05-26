describe('Home', () => {
  beforeEach(() => {
    cy.visit("/")
  })
  
  it('Should render the application\'s home screen', () => {
    cy.get('h1').contains('Turing Cafe Reservations')
      .get('form input[name="name"')
      .get('form input[name="date"')
      .get('form input[name="time"')
      .get('form input[name="number"')
      .get('button')
  });

  it('should check that the form data is displayed after entered', () => {
    cy.get('form input[name="name"').type('Craig')
      .get('form input[name="date"').type('05/26')
      .get('form input[name="time"').type('11:00')
      .get('form input[name="number"').type(2)
      .get('form button').click()

    cy.contains('h3', 'Craig')
    .get('.orderDate').should('contain', '05/26')
    .get('.orderTime').should('contain', '11:00')
    .get('.orderNumber').should('contain', 2)
  })
})


// Write a test that checks that when data is put into the form, the value is reflected in that form input.

// Write a test to check the user flow of adding a new reservation to the page.