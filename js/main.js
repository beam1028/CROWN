const badgeEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top')

window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
    // 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0
    })
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
    // 버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
}, 300))
// _.throttle(함수, 시간)

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  })
})


// 사이드메뉴 검색 바
const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function () {
  searchInputEl.focus ()
})

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '통합검색')
})

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})


//비주얼 애니메이션
const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to (요소, 지속시간, 옵션)
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .6,
    opacity: 1
  })
})


// 프로모션 슬라이드
new Swiper('.promotion .swiper', {
  // Optional parameters
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-button-prev',
    nextEl: '.promotion .swiper-button-next'
  }
})


// 제품소개 탭메뉴
const itemList = document.querySelectorAll('.infos li')

itemList.forEach(function (item) {
  item.addEventListener('click', function () {
    itemList.forEach(function(e){
      e.classList.remove('active')
    })
    item.classList.add('active')
  })
})

// 제품소개 슬라이드
new Swiper('.info .swiper', {
  // Optional parameters
  slidesPerView: 5, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 30, // 슬라이드 사이 여백
  pagination: {
    el: '.info .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.info .swiper-button-prev',
    nextEl: '.info .swiper-button-next'
  }
})


// 스크롤 애니메이션
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
  .Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소 지정
    triggerHook: .9
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller())
})

// 열기구 애니메이션
// 범위 랜덤 함수 (소수점 2자리 까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `.parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  )
}
floatingObject('.floating1', 1, 10)
floatingObject('.floating2', .5, 20)


// 카피라이트 날짜
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear() //20nn