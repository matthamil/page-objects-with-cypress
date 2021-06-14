export const getPhotos = () => cy.get('.photo')

export const getPhotoByTestId = (id) =>
  cy.get(`[data-cy="${id}"]`)

export const getLikes = (index) => 
  getPhotoByTestId(index)
    .find('.likes')

export const deletePhoto = (index) => 
  getPhotoByTestId(index).within(() => {
    cy.get('.delete-btn').click()
  })

export const deleteAllPhotos = () => {
  cy.window().then(({ app }) => {
    app.photos = []
  })
}