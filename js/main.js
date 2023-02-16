const navList = document.querySelector('.nav-list-wrapp')
const subHeader = document.querySelector('.sub-header')
const hrTop = document.querySelector('.nav-list-hr-top')
const hrBottom = document.querySelector('.nav-list-hr-bottom')
const navbarHamburgerContent = document.querySelector('.navbar-hamburger-wrapp')
const hamburgerBtn = document.querySelector('.hamburger-btn');
const closeHamburgerBtn = document.querySelector('.hamburger-close')
const body = document.getElementsByTagName('body')[0]
const stopSrollBody = document.querySelector('.stop-scroll-body')

const navbarLinkCatalog = document.getElementById('navbar-link-catalog')
const navbarLinkKnives = document.getElementById('navbar-link-knives')
const hamburgerNavigationBack = document.querySelector('.hamburger-navigation-wrapp')

const hamburgerList = document.querySelector('.hamburger-list')
const navbarProductList = document.querySelector('.navbar-product-list')
const navbarKnivesCatalog = document.querySelector('.navbar-knives-catalog')

const knivesTypeSelect = document.querySelectorAll('.knives-type-select-item')
// const knivesTypeSelect = document.getElementById('bbb')


// show navbar nested items
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


function hamburgerOpen() { 
  navbarHamburgerContent.classList.remove('d-none')
  navbarHamburgerContent.classList.add('d-block')
  body.classList.add('stop-scroll-body')
}

function hamburgerClose(e) {
  if (body.classList.contains('stop-scroll-body')) {
  if (
    e.target.tagName !== 'A' &&
    e.target.tagName !== 'LI' &&
    e.target.tagName !== 'UL' &&
    !e.target.classList.contains('hamburger-navigation') &&
    !e.target.classList.contains('navbar-hamburger') &&
    !e.target.classList.contains('hamburger-back-icon') &&
    !e.target.classList.contains('hamburger-back-text')  &&
    !e.target.classList.contains('hamburger-navigation-wrapp')  &&
    !e.target.classList.contains('hamburger-right-icon') &&
    !e.target.closest('.hamburger-right-icon > img'))    
    {
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

const showNavList = () => {
  subHeader.classList.add('change-subHeader-margin')
  hrTop.classList.add('d-block')
  hrBottom.classList.add('d-block')
}

const hideNavList = () => {
  subHeader.classList.remove('change-subHeader-margin')
  hrTop.classList.remove('d-block')
  hrBottom.classList.remove('d-block')  
}

const hideKnivesTypesList = (list) => list.classList.replace('d-block', 'd-none')

const showKnivesTypesList = (list) => list.classList.replace('d-none', 'd-block')

let toggleKnivesTypeList = 0
let currentSelectList;
const knivesTypeSelectSwitch = knivesTypeSelect.forEach((item) => {  
  let closest = item.closest(".knives-type-select-item")
  let targetEl = closest.children[1]
  
  item.addEventListener('click', (e) => {
    if (targetEl.classList.contains('d-none')) {    
      if (toggleKnivesTypeList <= 0) {    
        showKnivesTypesList(targetEl)
        toggleKnivesTypeList++
        currentSelectList = targetEl
      }
      if (currentSelectList.classList.contains('select-opt-list')) {
        let currentSelectText = currentSelectList.parentNode.children[0].childNodes[1]
        Array.from(currentSelectList.children).forEach((item, i) => {
          item.addEventListener('click', (e) => {
            currentSelectText.innerHTML = item.textContent
            currentSelectText.classList.toggle('change-text-style')
          })
        })
      }
    }

    else if (targetEl.classList.contains('d-block')) {
      hideKnivesTypesList(targetEl)
      toggleKnivesTypeList--        
    }
  })
})



hamburgerBtn.addEventListener('click', hamburgerOpen)
body.addEventListener('click', hamburgerClose, true)
closeHamburgerBtn.addEventListener('click', hamburgerClose, true)

navList.addEventListener('mousemove', showNavList)
navList.addEventListener('mouseout', hideNavList)

navbarLinkCatalog.addEventListener('click', showNavbarNestedItems)
navbarLinkKnives.addEventListener('click', showNavbarNestedItems)
hamburgerNavigationBack.addEventListener('click', resetNavbarPathLink)
