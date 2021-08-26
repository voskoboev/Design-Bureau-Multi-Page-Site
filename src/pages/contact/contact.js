// import '../../libs/inputmask/inputmask.min.js'
import { toggleMobileMenu } from '../../common.blocks/header-upper/headerUpper'
import {
  showSectionOnLoad,
  showPopupSections
} from '../../ancillary.scripts/ancillarySrcipts'
import {
  showBtnToTopOnScroll,
  scrollToTopOnBtnClick
} from '../../common.blocks/btn-to-top/btnToTop'

toggleMobileMenu()
showSectionOnLoad('header__central')
showSectionOnLoad('header__lower')
showPopupSections('contacts')
showBtnToTopOnScroll('.contacts')
scrollToTopOnBtnClick('.contacts')

// function inputMask() {
//   const inputTel = document.querySelector('.modal-window__input-tel')
//   const im = new Inputmask('+7 (999) 999-99-99')

//   im.mask(inputTel)
// }
