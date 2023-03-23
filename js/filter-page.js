const filterSelects = document.querySelector('.filter-part')
const knivesFilterContent = document.querySelector('.knives-filter-content')
const navbarLinkCatalog = document.getElementById('navbar-link-catalog')
const hamburgerList = document.querySelector('.hamburger-list')
const navbarKnivesCatalog = document.querySelector('.navbar-knives-catalog')
const hamburgerNavigationBack = document.querySelector('.hamburger-navigation-wrapp')
const body = document.getElementsByTagName('body')[0]
const navbarProductList = document.querySelector('.navbar-product-list')
const navList = document.querySelector('.nav-list-wrapp')
const closeHamburgerBtn = document.querySelector('.hamburger-close')
const navbarLinkKnives = document.getElementById('navbar-link-knives')
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

const showKnivesTypesList = (list) => list.classList.replace('d-none', 'd-block')

const hideKnivesTypesList = (list) => list.classList.replace('d-block', 'd-none')
let toggleKnivesTypeList = 0
let currentSelectList
const knivesTypeSelect = document.querySelectorAll('.knives-type-select-item')
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
          item.addEventListener('click', () => {
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

// *****   filtration section    *****

setTimeout(() => { // hide cards
  isWindowSizeSmall = false
  if (window.innerWidth <= 992) {
    isWindowSizeSmall = true
    document.querySelector('.knives-filter-top').classList.replace('d-flex', 'd-none')   
  }

  Array.from(filterSelects.children).forEach((item) => {
    if (isWindowSizeSmall) {

      item.firstElementChild.classList.toggle('bord-b')
      item.firstElementChild.children[1].classList.toggle('filter-select-rotate-icon')
      item.lastElementChild.classList.toggle('filter-select-hide')
    }
    item.firstElementChild.addEventListener('click', (e) => {
      item.firstElementChild.classList.toggle('bord-b')
      item.firstElementChild.children[1].classList.toggle('filter-select-rotate-icon')
      item.lastElementChild.classList.toggle('filter-select-hide')
    })
  })
},0)

// call func get range values
let sliderSections = document.getElementsByClassName('filter-range-slider')
for (let i = 0; i < sliderSections.length; i++) {
  let sliders = sliderSections[i].getElementsByTagName("input");
  for(let j = 0; j < sliders.length; j++) {
    if (sliders[j].type === "range" ) {
      sliders[j].oninput = getValues;
      sliders[j].oninput();
    }
  }
}
function getValues() {
  let parent = this.parentNode;
  let minRangeValue = document.querySelector('.min-range-value')
  let maxRangeValue = document.querySelector('.max-range-value')
  let rangeValue = document.querySelector('.range-value')
  let slides = parent.getElementsByTagName("input");
  let slide1 = parseFloat(slides[0].value);
  let slide2 = parseFloat(slides[1].value);
  minRangeValue.textContent = slide1
  maxRangeValue.textContent = slide2
  let cordinateminValue = minRangeValue.getBoundingClientRect();
  rangeValue.style.left = `${cordinateminValue.width}px`
  rangeValue.textContent = `${slide2 - slide1}`
}
// *********

// *** filter bottom pagination  ***
const showMoreBtn = document.querySelector('.show-more-btn')
let filterHideItemsCount = []
let hideCards = setTimeout(() => {
let hideKnivesCards = Array.from(knivesFilterContent.children)
hideKnivesCards.forEach((item, idx, arr) => {
    if (arr[idx] === arr[arr.length - 1]) {
      return
    }
    if (window.innerWidth <= 1200) {
      if (idx > 1) {
        item.classList.replace('d-flex', 'd-none')
        filterHideItemsCount.push(item)
      }        
    }
    else if (idx > 6) {
      item.classList.replace('d-flex', 'd-none')
      filterHideItemsCount.push(item)
    }
})
}, 0);

function showMoreCards (e) {
  let currentItems
  if (window.innerWidth <= 1200) {
    currentItems = filterHideItemsCount.splice(0, 2)
  }
  else {
    currentItems = filterHideItemsCount.splice(0, 7)
  }

  currentItems.forEach((item) => {
    item.classList.replace('d-none', 'd-flex')
  })

  if (filterHideItemsCount.length < 1) {
    showMoreBtn.classList.toggle('d-none')
  }
}
showMoreBtn.addEventListener('click', showMoreCards)
// **********

body.addEventListener('click', hamburgerClose, true)
body.addEventListener('click', isShowNavbarLinksLists, true)
closeHamburgerBtn.addEventListener('click', hamburgerClose, true)
navbarLinkKnives.addEventListener('click', showNavbarNestedItems)
hamburgerNavigationBack.addEventListener('click', resetNavbarPathLink)