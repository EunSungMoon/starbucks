/*
1. 커피 메뉴를 선택한다.
2. 선택한 메뉴에 디테일을 정한다 ex) ice/hot, 라떼-> 우유선택
3. 주문하기
*/

/*1. selectMenu.evtListener
  2. mainmenu -> console 찍음
  3. tempRadio -> label, input[radio] 생성
  4. nxtStage -> 다음 btn evt 할당, dom 숨김
  5. hide -> dom 숨김 */

const selectMenu = document.querySelector('#radioBtn')
const createEl = dom => document.createElement(dom);


selectMenu.addEventListener('change', () => { //메뉴 선택시 각 메뉴에 따른 디테일 메뉴화면으로 전환
  MainMenu();
  hide();
  tempRadio();
  nextstage();

})

const MainMenu = () => {
  let arrRadio = [coffee, latte]
  if (arrRadio[0].checked == true) {
    coffee_order()
  }
  else if (arrRadio[1].checked == true) {
    latte_order()
  }
}

const coffee_order = () => { //아메리카노 디테일 메뉴 버튼 출력
  console.log("americano");
}

const latte_order = () => { //라떼 디테일 메뉴 버튼 출력
  console.log("latte");
}


function hide() { //radio버튼 숨김, 다른 버튼들도 숨기게 만들어야지~
  selectMenu.style.display = 'none' //커피 종류 숨김 
}

const tempRadio = () => { //hot, ice선택지
  const dom = createEl('div')
  let temp = ['hot', 'ice']
  temp.forEach((tempValue, i) => {
    let tempBtn = document.createElement('input')
    let labelValue = document.createElement('label')

    labelValue.innerHTML = tempValue
    tempBtn.type = "radio"
    tempBtn.name = "temp"

    tempBtn.tempValue = i

    dom.appendChild(labelValue);
    dom.appendChild(tempBtn);
    document.querySelector('body').appendChild(dom)
  })

}


//1.  div 돔을 document.createElement() 를 통해서 만듬

//2. 1번의 div 돔에 appendChild 를 통해서 넣음


const nextstage = () => { //다음 버튼
  const dom = createEl('div')
  let nextBtn = document.createElement('button')
  nextBtn.id = "nextBtn"
  nextBtn.innerHTML = "다음"

  dom.appendChild(nextBtn);
  document.querySelector('body').appendChild(dom)

  let next = document.querySelector('#nextBtn')
  next.addEventListener('click', () => {
    dom.style.display = 'none' //ice hot 숨김
    alert('완료');// 메뉴 확인창 -> 완료 되었습니다 텍스트 등장 예정

  })
} 







