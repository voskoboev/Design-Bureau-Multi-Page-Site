'use strict'

manageFnsOnScroll()
manageVideo()
toggleTeamCards()

function toggleTeamCards() {
  const cards = document.querySelectorAll('.team__person')

  const
    infoActivationClass = 'team__person-info--active',
    photoInactivationClass = 'team__person-photo--inactive'

  cards.forEach(card => {
    card.onmouseenter = () => {
      card.firstElementChild.classList.add(infoActivationClass)
      card.lastElementChild.classList.add(photoInactivationClass)
    }

    card.onmouseleave = () => {
      card.firstElementChild.classList.remove(infoActivationClass)
      card.lastElementChild.classList.remove(photoInactivationClass)
    }
  })
}

function manageVideo() {
  const
    video = document.querySelector('.idea__video'),
    playBtn = document.querySelector('.idea__play-btn')

  const playVideo = () => {
    video.play()
    playBtn.classList.add('idea__play-btn--inactive')

    if (video.hasAttribute('controls') === true) {
      return
    }

    video.setAttribute('controls', 'controls')
  }

  video.onclick = ev => {
    ev.preventDefault()
    playVideo()
  }

  playBtn.onclick = ev => {
    ev.preventDefault()
    playVideo()
  }
}

function manageFnsOnScroll() {
  let calledOnce = false

  const showPopupSections = () => {
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

    showSections(idea)
    showSections(services)
    showSections(team)
    showSections(brands)
    showSections(footer)
  }

  const manageNumberIncrement = () => {
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

        setTimeout(joinSetIntervalsCalls, 900)

        calledOnce = true
      }
    }
  }

  window.onscroll = () => {
    showPopupSections()
    manageNumberIncrement()
  }
}



