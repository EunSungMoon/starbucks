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
const el = selector => document.querySelector(selector);
const elAll = selector => document.querySelectorAll(selector);


selectMenu.addEventListener('change', () => { //메뉴 선택시 각 메뉴에 따른 디테일 메뉴화면으로 전환
  MainMenu();
  hide(selectMenu);
  tempSelector();
  nextstage();

})
let cname = "";

const MainMenu = () => {
  let arrRadio = [coffee, latte]
  if (arrRadio[0].checked == true) {
    coffee_order()
    cname = 'americano'
  }
  else if (arrRadio[1].checked == true) {
    latte_order()
    cname = 'latte'
  }
}

const coffee_order = () => { //아메리카노 디테일 메뉴 버튼 출력
  console.log("americano");
}

const latte_order = () => { //라떼 디테일 메뉴 버튼 출력
  console.log("latte");
}


const hide = (event) => { //radio버튼 숨김, 다른 버튼들도 숨기게 만들어야지~
  event.style.display = 'none' //커피 종류 숨김 
}

let temps = "";
const tempSelector = () => { //hot, ice선택지
  const dom = createEl('div')
  dom.id = "tempRadio"

  let temp = ['hot', 'ice']

  temp.forEach((tempValue, i) => {
    let tempBtn = createEl('input')
    let labelValue = createEl('label')

    labelValue.innerHTML = tempValue
    tempBtn.type = "radio"
    tempBtn.name = "temp"
    tempBtn.id=temp[i]

    tempBtn.tempValue=i

    dom.appendChild(labelValue);
    dom.appendChild(tempBtn);
    el('body').appendChild(dom)
  
  })


  elAll('#tempRadio').forEach(i => i.addEventListener('change', () => {
    // e.target.dataset

    if(document.getElementById('hot').checked){
      temps="hot"
    }
    else if(document.getElementById('ice').checked){
      temps="ice"
    }
  }))
}


//1.  div 돔을 document.createElement() 를 통해서 만듬

//2. 1번의 div 돔에 appendChild 를 통해서 넣음


const nextstage = () => { //다음 버튼
  const dom = createEl('div')
  dom.id = "next"
  let nextBtn = createEl('button')
  nextBtn.id = "nextBtn"
  nextBtn.innerHTML = "다음"

  dom.appendChild(nextBtn);
  el('body').appendChild(dom)


  el('#next').addEventListener('click', () => {
    hide(next);
    hide(tempRadio)
    alert('선택하신 메뉴가 맞습니까? '+ cname + ', '+ temps);// 메뉴 확인창 -> 완료 되었습니다 텍스트 등장 예정

  })



}







