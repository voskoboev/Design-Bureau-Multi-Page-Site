import { toggleMobileMenu } from '../../common.blocks/header-upper/header-upper'
import { showSectionOnLoad, showPopupSections } from '../../ancillary.scripts/ancillary-srcipts'

toggleMobileMenu()
showSectionOnLoad('header__central')
showSectionOnLoad('header__lower')
showPopupSections('contacts')
