export function manageVideo(sectionName) {
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

export function showSectionOnLoad(sectionName) {
  window.addEventListener('load', () => {
    const section = document.querySelector(`.${sectionName}`)

    section.classList.add(`${sectionName}--active`)
  })
}

export function showPopupSections(sectionName) {
  const section = sectionName

  const showSections = sectionName => {
    const sectionNode = document.querySelector(`.${sectionName}`),
      sectionCoords = sectionNode.getBoundingClientRect().top + window.pageYOffset,
      upperOffsetWindow = window.pageYOffset,
      windowHeingt = window.innerHeight

    if (sectionCoords < upperOffsetWindow + windowHeingt) {
      sectionNode.classList.add(`${sectionName}--active`)
    }
  }

  window.addEventListener('scroll', () => {
    showSections(section)
  })
}

