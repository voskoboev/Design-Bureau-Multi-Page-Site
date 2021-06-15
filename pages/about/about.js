'use strict';

toggleTeamCards()

function toggleTeamCards() {
  const cards = document.querySelectorAll('.team__person')
  const infoActivationClass = 'team__person-info--active'
  const photoInactivationClass = 'team__person-photo--inactive'

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



function changeNumbers() {
  const experience = document.querySelector('.idea__lower-number--experience')
  const projects = document.querySelector('.idea__lower-number--projects')

  let startNum = 0
  const projectsEndNum = 20
  const experienceEndNum = 7

  function addNums(endNum, htmlElem) {
    if (startNum > endNum) return
    htmlElem.textContent = startNum++
  }

  setInterval(addNums, 70, projectsEndNum, projects)
  setInterval(addNums, 70, experienceEndNum, experience)
}

// changeNumbers()



function manageVideo() {
  const vid = document.querySelector('.idea__video')
  const playBtn = document.querySelector('.idea__play-btn')


  // vid.onclick = function (ev) {
  //   ev.preventDefault()

  //   this.play()
  // }

  function playVid() {
    vid.play()
    playBtn.classList.add('idea__play-btn--inactive')

    if (vid.hasAttribute('controls') === true) {
      return
    }

    vid.setAttribute('controls', 'controls')
  }

  // function pauseVid() {
    // vid.pause()
    // vid.dataset.
  // }

  vid.onclick = function (ev) {
    ev.preventDefault()
    playVid()
  }

  playBtn.onclick = function (ev) {
    ev.preventDefault()
    playVid()
  }
}

manageVideo()

