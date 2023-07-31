const tabList = document.querySelectorAll('.nav li');
const contents = document.querySelectorAll('.contents .content')
let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

for(var i = 0; i < tabList.length; i++){
  tabList[i].querySelector('.nav-item').addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < tabList.length; j++){
      // 나머지 버튼 클래스 제거
      tabList[j].classList.remove('on');

      // 나머지 컨텐츠 display:none 처리
      contents[j].style.display = 'none';
    }

    // 버튼 관련 이벤트
    this.parentNode.classList.add('on');

    // 버튼 클릭시 컨텐츠 전환
    activeCont = this.getAttribute('href');
    document.querySelector(activeCont).style.display = 'block';
  });
}

const hisList = document.querySelectorAll('.history-nav li');
const historys = document.querySelectorAll('.historys .history')
let hisCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

for(var i = 0; i < hisList.length; i++){
  hisList[i].querySelector('.history-nav-item').addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < hisList.length; j++){
      // 나머지 버튼 클래스 제거
      hisList[j].classList.remove('on');

      // 나머지 컨텐츠 display:none 처리
      historys[j].style.display = 'none';
    }

    // 버튼 관련 이벤트
    this.parentNode.classList.add('on');

    // 버튼 클릭시 컨텐츠 전환
    hisCont = this.getAttribute('href');
    document.querySelector(hisCont).style.display = 'block';
  });
}