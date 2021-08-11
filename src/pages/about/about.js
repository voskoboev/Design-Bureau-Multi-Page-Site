import { toggleMobileMenu } from '../../common.blocks/header-upper/header-upper'
import { toggleServicesAccordionTabs } from '../../common.blocks/services/services'
import {
  manageVideo,
  showSectionOnLoad,
  showPopupSections
} from '../../ancillary.scripts/ancillary-srcipts'

toggleMobileMenu()
toggleServicesAccordionTabs()
manageVideo('idea')
showSectionOnLoad('header__central')
showSectionOnLoad('header__lower')
showPopupSections('idea')
showPopupSections('services')
showPopupSections('team')
showPopupSections('brands')
showPopupSections('footer')

manageNumberIncrement()
toggleTeamCards()

function manageNumberIncrement() {
  let calledOnce = false

  const startNumberIncrement = () => {
    const experience = document.querySelector(
        '.idea__lower-number--experience'
      ),
      projects = document.querySelector('.idea__lower-number--projects'),
      section = document.querySelector('.idea__lower'),
      sectionCoords = section.getBoundingClientRect().top + window.pageYOffset,
      upperOffsetWindow = window.pageYOffset,
      windowHeingt = window.innerHeight,
      projectsEndNum = 20,
      experienceEndNum = 14,
      incrementInterval = 100,
      startDelay = 500

    let startNum = 0

    const incrementNums = (endNum, htmlElem) => {
      if (startNum > endNum) return
      htmlElem.textContent = startNum++
    }

    if (sectionCoords < upperOffsetWindow + windowHeingt) {
      if (!calledOnce) {
        const joinSetIntervalsCalls = () => {
          setInterval(
            incrementNums,
            incrementInterval,
            experienceEndNum,
            experience
          )
          setInterval(
            incrementNums,
            incrementInterval,
            projectsEndNum,
            projects
          )
        }

        setTimeout(joinSetIntervalsCalls, startDelay)

        calledOnce = true
      }
    }
  }

  window.addEventListener('scroll', startNumberIncrement)
}

function toggleTeamCards() {
  const cards = document.querySelectorAll('.team__person'),
    infoActivationClass = 'team__person-info--active',
    photoInactivationClass = 'team__person-photo--inactive'

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.firstElementChild.classList.add(infoActivationClass)
      card.lastElementChild.classList.add(photoInactivationClass)
    })

    card.addEventListener('mouseleave', () => {
      card.firstElementChild.classList.remove(infoActivationClass)
      card.lastElementChild.classList.remove(photoInactivationClass)
    })
  })
}
