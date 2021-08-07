import { toggleMobileMenu } from '../../common.blocks/header-upper/header-upper'
import { toggleServicesAccordionTabs } from '../../common.blocks/services/services'
import { manageVideo } from '../../ancillary.scripts/ancillary-srcipts'

toggleMobileMenu()
toggleServicesAccordionTabs()
manageVideo('idea')

showPopupSections()
manageNumberIncrement()
toggleTeamCards()

// manageVideo()

// showSectionOnLoad('header')

// function showSectionOnLoad(sectionName) {
//   window.onload = () => {
//     const section = document.querySelector(`.${sectionName}`)

//     section.classList.add(`${sectionName}--active`)
//   }
// }


function showPopupSections() {
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
    showSections('idea')
    showSections('services')
    showSections('team')
    showSections('brands')
    showSections('footer')
  })
}

function manageNumberIncrement() {
  let calledOnce = false

  const startNumberIncrement = () => {
    const experience = document.querySelector('.idea__lower-number--experience'),
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
          setInterval(incrementNums, incrementInterval, experienceEndNum, experience)
          setInterval(incrementNums, incrementInterval, projectsEndNum, projects)
        }

        setTimeout(joinSetIntervalsCalls, startDelay)

        calledOnce = true
      }
    }
  }

  window.addEventListener('scroll', startNumberIncrement)
}

function toggleTeamCards() {
  const
    cards = document.querySelectorAll('.team__person'),
    infoActivationClass = 'team__person-info--active',
    photoInactivationClass = 'team__person-photo--inactive'

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card
        .firstElementChild
        .classList
        .add(infoActivationClass)
      card
        .lastElementChild
        .classList
        .add(photoInactivationClass)
    })

    card.addEventListener('mouseleave', () => {
      card
        .firstElementChild
        .classList
        .remove(infoActivationClass)
      card
        .lastElementChild
        .classList
        .remove(photoInactivationClass)
    })
  })
}



