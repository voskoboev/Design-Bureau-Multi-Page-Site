import { toggleMobileMenu } from '../../common.blocks/header-upper/header-upper'
import {
  showSectionOnLoad,
  showPopupSections
} from '../../ancillary.scripts/ancillary-srcipts'
import {
  showBtnToTopOnScroll,
  scrollToTopOnBtnClick
} from '../../common.blocks/btn-to-top/btn-to-top'

toggleMobileMenu()
showSectionOnLoad('header__central')
showSectionOnLoad('header__lower')
showPopupSections('contacts')
showBtnToTopOnScroll('.contacts')
scrollToTopOnBtnClick('.contacts')
