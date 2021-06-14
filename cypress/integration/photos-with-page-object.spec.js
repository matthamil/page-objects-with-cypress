import {
  getPhotos,
  getPhotoByTestId,
  getLikes,
  deletePhoto,
  deleteAllPhotos
} from '../support/photos.po'

beforeEach(() => {
  cy.visit('/')
})

it('should display 9 photos', () => {
  getPhotos().should('have.length', 9)
})
      
it('has 5 Likes on the first photo', () => {
  const TEST_ID = 1
  getLikes(TEST_ID).should('have.text', '5')
})
      
it('should allow the user to delete a photo', () => {
  const TEST_ID = '1'
  deletePhoto(TEST_ID)
  getPhotoByTestId(TEST_ID).should('not.exist')
})
      
it('should display a message when no photos exist in the album', () => {
	deleteAllPhotos()
	const MESSAGE = "You don't have any photos in this album."
	cy.contains(MESSAGE)
})