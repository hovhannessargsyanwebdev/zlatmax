const navList = document.querySelector('.nav-list-wrapp')
const closeHamburgerBtn = document.querySelector('.hamburger-close')
const body = document.getElementsByTagName('body')[0]
// const stopSrollBody = document.querySelector('.stop-scroll-body')
const navbarLinkKnives = document.getElementById('navbar-link-knives')
const navbarProductList = document.querySelector('.navbar-product-list')
// const knivesSelectHiddenItems = document.querySelectorAll('.select-opt-list')
const knivesFilterContent = document.querySelector('.knives-filter-content')
const filterSelects = document.querySelector('.filter-part')


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

const plusCounterElem = document.querySelector('.plus-counter')
const minusCounterElem = document.querySelector('.minus-counter')
let costProduct = document.querySelector('.text-cost')
let initialProductVal = costProduct.innerText
let showCount = document.querySelector('.show-count')
let counter = 1 

function counterCostPlus() {
  counter++
  showCount.textContent = counter
  let currentCost = +initialProductVal.replace(' ', '') 
  costProduct.textContent = currentCost * counter
}

function counterCostMinus() {
  if (+showCount.textContent < 2) return
  counter--
  let sumPrpoductVal = +costProduct.innerText
  showCount.textContent = counter
  let currentCost = sumPrpoductVal - (+initialProductVal.replace(' ', ''))
  costProduct.textContent = currentCost
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

const hideAboutKnivesContent = (oldItem, idx) => {
  oldItem.classList.replace('knive-type-title-active','knive-type-title-no-active')
  aboutKnivesTypeContent[idx].classList.replace('d-block', 'd-none')    
}

const aboutKnivesTypeContent = document.querySelectorAll('.knives-type-character-container')
const showAboutKnivesContent = (targetLink, idx) => {
  targetLink.classList.replace('knive-type-title-no-active', 'knive-type-title-active')
  aboutKnivesTypeContent[idx].classList.replace('d-none', 'd-block')
}

let previousActiveItem = false
let currentElIdx = null;
const aboutKnivesTypeLinks = document.querySelector('.knives-type-character-title')
const knivesDetailsSwitch = Array.from(aboutKnivesTypeLinks.children).forEach((item, i) => {
  if (item.classList.contains('knive-type-title-active')) { currentElIdx = i }

  item.addEventListener('click',(e) => {   
    if (e.target !== aboutKnivesTypeLinks.children[0]) {
      aboutKnivesTypeContent[0].classList.replace('d-block', 'd-none')
      aboutKnivesTypeLinks.children[0].classList.replace('knive-type-title-active','knive-type-title-no-active')
    }
    
    if (previousActiveItem) {
      hideAboutKnivesContent(previousActiveItem, currentElIdx)    
    }
    
    if (e.target.className === 'knive-type-title-active') return

    else if (e.target.className !== 'knive-type-title-active') {
      previousActiveItem = aboutKnivesTypeLinks.children[i] 
      currentElIdx = i
      showAboutKnivesContent(item, i)
    }
  })   
})

let switcher = -4
const knivesTypeSelectsRegion = document.querySelector('.knives-type-select-group-wrapp')
const showPostImg = knivesTypeSelectsRegion.addEventListener('click', (e) => {    
  document.querySelector('.select-region')
  const postImgShow = document.querySelector('.region-post')
  if (e.target.className === 'select-list-region') {
    let currentItm = document.querySelectorAll('.knives-character-select-group .select-choose-text').forEach((item) => {
      if (item.className != 'change-text-style') switcher++
    })    
  }
  if (switcher >= 0) postImgShow.classList.replace('d-none', 'd-block')    
}) 

const linkKnivesCuttingPage = document.querySelectorAll('.go-to-knives-cutting')
const knivesTypePages = document.querySelector('.knives-type-page ')
const subHeader = document.querySelector('.sub-header')
const knivesFilterPage = document.querySelector('.knives-filter-page')
const knivesTypePagePromo = document.querySelector('.knives-type-page-promo')
const mainPart = document.querySelector('.main-part')
const showKnivesCuttingPage = linkKnivesCuttingPage.forEach((item) => {
  item.addEventListener('click', () => {   
    if (knivesTypePages.classList.contains('d-none')) {
      knivesTypePages.classList.replace('d-none', 'd-block')      
      subHeader.classList.replace('d-block', 'd-none')
      knivesFilterPage.classList.replace('d-block', 'd-none')
      knivesTypePagePromo.classList.replace('d-none', 'd-block')
      mainPart.classList.add('d-none')   
    }
    hamburgerClose()
    hideNavbarLinksLists()
    hideHeaderBorder()
  })
})

const linkKnivesFilterPage = document.querySelectorAll('.go-knives-filter-page')
const showKnivesFilterPage = linkKnivesFilterPage.forEach((item) => {
  item.addEventListener('click', () => {
    knivesFilterPage.classList.replace('d-none', 'd-block')
    knivesTypePages.classList.replace('d-block', 'd-none')
    subHeader.classList.replace('d-block', 'd-none')
    mainPart.classList.add('d-none')
    knivesTypePagePromo.classList.replace('d-block', 'd-none')
    hamburgerClose()
    hideNavbarLinksLists()
    hideHeaderBorder()
  })
})

const logoLink = document.querySelectorAll('.nav-logo')
const backToMainPage = logoLink.forEach((link) => {
  link.addEventListener('click', () => {
    knivesTypePages.classList.replace('d-block', 'd-none')
    knivesFilterPage.classList.replace('d-block', 'd-none')
    subHeader.classList.replace('d-none', 'd-block')
    mainPart.classList.remove('d-none')
    knivesTypePagePromo.classList.replace('d-block', 'd-none')
    // window.scrollTo(0,0)
    window.scrollTo({top: 0, behavior: 'smooth'});
  })
  resetAll()
})

function resetAll() {
  hamburgerClose()
  resetNavbarPathLink()
  hideNavbarLinksLists()  
  hideHeaderBorder()
}

// *****   filtration section    *****

let productPricesList = []
let productReviewsList = []
let productRatingsList = []
let productBrandsList = []
let productList = document.querySelectorAll('.knife')

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

setTimeout(() => { // get all product prices value in new array
  let currentPrice 
  productList.forEach((item) => {
    Array.from(item.children).forEach((price) => {
      if (price.className == 'price') {
        currentPrice = parseInt(currentPrice = price.children[0].textContent)
      }
    })
    productPricesList.push(currentPrice)
  })
}, 0)


// doesn't work
// let minRangeInput = document.querySelector('.min-input')
// let maxRangeInput = document.querySelector('.max-input')
// let minValueEl = document.querySelector('.min-range-text')
// let maxValueEl = document.querySelector('.max-range-text')
// let initialMinValue = +document.querySelector('.min-range-text').textContent
// let initialMaxValue = +document.querySelector('.max-range-text').textContent

// let currentMinValue = initialMinValue
// let currentMaxValue = initialMaxValue
// let filterRangeInputs = document.querySelector('.filter-range-slider')
// let rangValue = document.querySelector('.range-value')

// let filterRangelength = filterRangeInputs.offsetWidth
// let betweenValue = Math.abs(initialMinValue - initialMaxValue)
// let step = Math.floor(betweenValue / filterRangelength)

// let currentMinStep = 0 
// let currentMaxStep = 0 
// let currentStepOffset = 0 
// let maxStep = 0

// function minInputValue (evn) {
//   if (evn.offsetX < 1 || evn.offsetX > filterRangelength) return
//   if (evn.offsetX > currentStepOffset) {
//     currentMinValue += step 
//   }

//   if (evn.offsetX < currentStepOffset) {
//     currentMinValue -= step
//   }

//   currentStepOffset = evn.offsetX 
//   minValueEl.textContent = currentMinValue
//   console.log(evn.offsetX);
// }

// function maxInputValue (evn) {
//   if (evn.offsetX > filterRangelength || evn.offsetX < 1 ) return

//   if (evn.offsetX > currentStepOffset) {
//     currentStepOffset += step
//     currentMaxValue.textContent = parseInt(+currentMaxValue.textContent + currentStepOffset)
//   }
//   else if (evn.offsetX < currentStepOffset) {
//     currentStepOffset -= step
//     currentMaxValue.textContent = parseInt(+currentMaxValue.textContent - currentStepOffset)
//   }
//   currentStepOffset = evn.offsetX
// }

// function filterRangeStart (e) {
//   if (e.type == 'mousedown') {
//     if (e.target.className == 'min-input') {
//       minRangeInput.addEventListener('mousemove', minInputValue)
//     }
//     else if (e.target.className == 'max-input') {
//       maxRangeInput .addEventListener('mousemove', maxInputValue)
//     }
//   }

//   else if (e.type == 'mouseup') {
//     minRangeInput.removeEventListener('mousemove', minInputValue )
//     maxRangeInput .removeEventListener('mousemove', maxInputValue )
//   }  
// }
// filterRangeInputs.addEventListener('mousedown', filterRangeStart)
// filterRangeInputs.addEventListener('mouseup', filterRangeStart)


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
plusCounterElem.addEventListener('click', counterCostPlus)
minusCounterElem.addEventListener('click', counterCostMinus)