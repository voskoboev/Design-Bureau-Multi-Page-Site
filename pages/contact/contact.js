'use strict'

showPopupSections()

function showPopupSections() {
  const
    contacts = 'contacts',
    footer = 'footer'

  const showSections = sectionName => {
    const sectionNode = document.querySelector(`.${sectionName}`)

    const
      sectionCoords = sectionNode.getBoundingClientRect().top + window.pageYOffset,
      upperOffsetWindow = window.pageYOffset,
      windowHeingt = window.innerHeight

    if (sectionCoords < upperOffsetWindow + windowHeingt) {
      sectionNode.classList.add(`${sectionName}--active`)
    }
  }

  window.addEventListener('scroll', () => {
    showSections(contacts)
    showSections(footer)
  })
}




window.addEventListener('scroll', () => {
  showBtnToTopOnScroll(document.querySelector('.contacts'))
})
