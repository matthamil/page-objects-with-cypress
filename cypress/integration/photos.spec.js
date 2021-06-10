beforeEach(() => {
  cy.visit('/')
})

it('should display 9 photos', () => {
	cy.get('.photo').should('have.length', 9)
})

it('has 5 Likes on the first photo', () => {
  cy.get('.photo').first().within(() => {
    cy.get('.likes').should('have.text', '5')
  })
})

it('should allow the user to delete a photo', () => {
  const TEST_ID = '1'
  cy.get(`[data-cy="${TEST_ID}"`).within(() => {
    cy.get('.delete-btn').click()
  })
  cy.get(`[data-cy="${TEST_ID}]"`).should('not.exist')
})

it('should display a message when no photos exist in the album', () => {
  // remove all photos
  cy.get('.photo').each(($photo) => {
    cy.wrap($photo).within(() => {
      cy.get('.delete-btn').click()
    })
  })
  const MESSAGE = "You don't have any photos in this album."
  cy.contains(MESSAGE)
})