const navList = document.querySelector('.nav-list-wrapp')
const closeHamburgerBtn = document.querySelector('.hamburger-close')
const body = document.getElementsByTagName('body')[0]
const navbarLinkKnives = document.getElementById('navbar-link-knives')
const navbarProductList = document.querySelector('.navbar-product-list')


// show navbar nested items
const navbarLinkCatalog = document.getElementById('navbar-link-catalog')
const hamburgerList = document.querySelector('.hamburger-list')
const navbarKnivesCatalog = document.querySelector('.navbar-knives-catalog')
const hamburgerNavigationBack = document.querySelector('.hamburger-navigation-wrapp')
function showNavbarNestedItems(e) {
  if (e.target == navbarLinkCatalog) {
    hamburgerList.classList.add('d-none')
    navbarProductList.classList.replace('d-none', 'd-block')
  }

  else if (e.target == navbarLinkKnives) {
    navbarProductList.classList.replace('d-block', 'd-none')
    hamburgerList.classList.replace('d-block', 'd-none')
    navbarKnivesCatalog.classList.replace('d-none', 'd-block')
  }
   
   hamburgerNavigationBack.classList.replace('d-none', 'd-flex')
}
navbarLinkCatalog.addEventListener('click', showNavbarNestedItems)


const navbarHamburgerContent = document.querySelector('.navbar-hamburger-wrapp')
const hamburgerBtn = document.querySelector('.hamburger-btn');
function hamburgerOpen() { 
  navbarHamburgerContent.classList.remove('d-none')
  navbarHamburgerContent.classList.add('d-block')
  body.classList.add('stop-scroll-body')
}
hamburgerBtn.addEventListener('click', hamburgerOpen)


function hamburgerClose(e) {
  if (body.classList.contains('stop-scroll-body')) {
  if (
    // e.target.className !== 'navbar-hamburger' && 
    (e.target.tagName !== 'A' || (e.target.className === 'go-to-knives-cutting') || e.target.className === 'go-knives-filter-page') &&
    e.target.className !== 'hamburger-close' &&
    e.target.tagName !== 'LI' &&
    e.target.tagName !== 'UL' &&
    !e.target.classList.contains('hamburger-navigation') &&
    !e.target.classList.contains('navbar-hamburger') &&
    !e.target.classList.contains('hamburger-navigation-wrapp') &&
    !e.target.classList.contains('hamburger-back-icon') &&
    !e.target.classList.contains('hamburger-back-text')  &&
    !e.target.classList.contains('hamburger-right-icon') &&
    !e.target.closest('.hamburger-right-icon > img')) {
      navbarHamburgerContent.classList.replace('d-block', 'd-none')
      body.classList.remove('stop-scroll-body')
      resetNavbarPathLink()
    }
  }
}

function resetNavbarPathLink() {
  hamburgerNavigationBack.classList.add('d-none')
  hamburgerNavigationBack.classList.remove('d-flex')

  hamburgerList.classList.add('d-block')
  hamburgerList.classList.remove('d-none')

  navbarProductList.classList.add('d-none')
  navbarProductList.classList.remove('d-block')

  navbarKnivesCatalog.classList.add('d-none')
  navbarKnivesCatalog.classList.remove('d-block')
}


const hrBottom = document.querySelector('.nav-list-hr-bottom')
const isShowNavbarLinksLists = (e) => {
  if (hrBottom.classList.contains('d-block') && hrTop.classList.contains('d-block')) {
    if (e.target.classList.contains('nav-top') &&
      e.target.classList.contains('nav-nav') &&
      e.target.classList.contains('nav-list-title') &&
      e.target.classList.contains('nav-list-bottom-link') &&
      e.target.classList.contains('nav-list-title-item')) {
        return
    } 
    else {
      hideNavbarLinksLists();
      hideHeaderBorder()
    }
  }
}

const navListTitleLinks = document.querySelectorAll('.nav-list-title-item > a')
const navHiddenList = document.querySelectorAll('.nav-list-item')
const navListBottomLinks = document.querySelectorAll('.nav-list-bottom-link')
const ShowNavbarLinksLists = navListTitleLinks.forEach((item) => {
  item.addEventListener('click',(e) => {
    navHiddenList.forEach((item) => {
      item.classList.replace('d-none', 'd-block')           
    })
  
    navListBottomLinks.forEach((item) => {
      item.classList.replace('d-none', 'show-navbar-list')
    })
    showHeaderBorder()
  })
}) 

function hideNavbarLinksLists () {
  navHiddenList.forEach((item) => {
  item.classList.replace('d-block', 'd-none')
  })

  navListBottomLinks.forEach((item) => {
    item.classList.replace('show-navbar-list', 'd-none')
  }) 
}

const hrTop = document.querySelector('.nav-list-hr-top')
function showHeaderBorder () {
  hrTop.classList.replace('d-none', 'd-block')
  hrBottom.classList.replace('d-none', 'd-block')
}

function hideHeaderBorder () {
  hrTop.classList.replace('d-block', 'd-none')
  hrBottom.classList.replace('d-block', 'd-none')
}

// *********** scroll up show navbar
// let distanceHeight = 0
// function switchnavbar () {
//   let nav = document.querySelector('nav')
//   let subHeader = document.querySelector('.sub-header')
//   let currentWindowHeight = window.scrollY

//   if (currentWindowHeight < distanceHeight) {
//     subHeader.style.paddingTop = `${nav.offsetHeight}px`
//     nav.classList.add('fixed')
//   }

//   else {
//     subHeader.style.paddingTop = `${44}px`
//     nav.classList.remove('fixed')
//   }
//   distanceHeight = currentWindowHeight
// }
// window.addEventListener('scroll', switchnavbar)
// ***********


body.addEventListener('click', hamburgerClose, true)
body.addEventListener('click', isShowNavbarLinksLists, true)
closeHamburgerBtn.addEventListener('click', hamburgerClose, true)
navbarLinkKnives.addEventListener('click', showNavbarNestedItems)
hamburgerNavigationBack.addEventListener('click', resetNavbarPathLink)
