it('should display 9 photos', () => {
	cy.get('.photo').should('have.length', 9)
})

it('has 5 Likes on the first photo', () => {
  cy.get('.photo').first().within(() => {
    expect(cy.get('.likes')).to.contain(5)
  })
})

it('should allow the user to delete a photo', () => {
  cy.get('.photo').first().as('myPhoto').within(() => {
    cy.get('.delete-btn').click()
  })
  cy.get('@myPhoto').should('not.exist')
})