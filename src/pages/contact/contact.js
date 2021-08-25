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
