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

})