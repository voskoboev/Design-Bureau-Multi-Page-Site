'use strict'

showPopupSections()
manageNumberIncrement()

// manageVideo()
toggleTeamCards()

// showSectionOnLoad('header')

// function showSectionOnLoad(sectionName) {
//   window.onload = () => {
//     const section = document.querySelector(`.${sectionName}`)

//     section.classList.add(`${sectionName}--active`)
//   }
// }



function showPopupSections() {
  const
    idea = 'idea',
    services = 'services',
    team = 'team',
    brands = 'brands',
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
    showSections(idea)
    showSections(services)
    showSections(team)
    showSections(brands)
    showSections(footer)
  })
}

function manageNumberIncrement() {
  let calledOnce = false

  const startNumberIncrement = () => {
    const
      experience = document.querySelector('.idea__lower-number--experience'),
      projects = document.querySelector('.idea__lower-number--projects'),
      section = document.querySelector('.idea__lower')

    const
      sectionCoords = section.getBoundingClientRect().top + window.pageYOffset,
      upperOffsetWindow = window.pageYOffset,
      windowHeingt = window.innerHeight

    let startNum = 0
    const
      projectsEndNum = 20,
      experienceEndNum = 14

    const incrementNums = (endNum, htmlElem) => {
      if (startNum > endNum) return
      htmlElem.textContent = startNum++
    }

    if (sectionCoords < upperOffsetWindow + windowHeingt) {
      if (!calledOnce) {
        const joinSetIntervalsCalls = () => {
          setInterval(incrementNums, 100, experienceEndNum, experience)
          setInterval(incrementNums, 100, projectsEndNum, projects)
        }

        setTimeout(joinSetIntervalsCalls, 500)

        calledOnce = true
      }
    }
  }

  window.addEventListener('scroll', startNumberIncrement)
}






// Вынести в отдельный файл

const idea = 'idea'
const news = 'news'

manageVideo(idea)

function manageVideo(sectionName) {
  const
    video = document.querySelector(`.${sectionName}__video`),
    playBtn = document.querySelector(`.${sectionName}__play-btn`)

  const playVideo = () => {
    video.play()
    playBtn.classList.add(`${sectionName}__play-btn--inactive`)

    if (video.hasAttribute('controls') === true) {
      return
    }

    video.setAttribute('controls', 'controls')
  }

  [video, playBtn].forEach(item => {
    item.addEventListener('click', ev => {
      ev.preventDefault()
      playVideo()
    })
  })
}

function toggleTeamCards() {
  const
    cards = document.querySelectorAll('.team__person'),
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



