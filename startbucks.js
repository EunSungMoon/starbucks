/*
  1. 커피 메뉴를 선택한다.
  2. 선택한 메뉴에 디테일을 정한다 ex) ice/hot, 라떼-> 우유선택
  3. 주문하기
*/


//1. 커피메뉴 선택 이벤트를 만든다


//2. 커피메뉴 이벤트에서 아메리카노 클릭시 상세설정 화면이 나오게한다.


//3. 상세설정을 한후에 완료가 된다.

const selectMenu = document.querySelector('#radioBtn')
let arrRadio = [coffee, latte]

selectMenu.addEventListener('change', () => { //메뉴 선택시 각 메뉴에 따른 디테일 메뉴화면으로 전환
  if (arrRadio[0].checked == true) {
    coffee_order()
  }
  else if (arrRadio[1].checked == true) {
    latte_order()
  }
  hide()
  tempRadio()
  nextstage()
  
})

function coffee_order() { //아메리카노 디테일 메뉴 버튼 출력
  console.log("americano");
}

function latte_order() { //라떼 디테일 메뉴 버튼 출력
  console.log("latte");
}

function hide() { //radio버튼 숨김
  selectMenu.style.display = 'none'
}

function tempRadio() { //hot, ice선택지
  let temp=['hot','ice']
  temp.forEach((tempValue,i)=>{
    let tempBtn = document.createElement('input')
    let labelValue=document.createElement('label')
    labelValue.innerHTML=tempValue
    tempBtn.type="radio" 
    tempBtn.name="temp"
    tempBtn.tempValue=i
    document.body.appendChild(tempBtn)
    document.body.appendChild(labelValue)
  })

}

function nextstage() { //다음 버튼
  let nextBtn = document.createElement('button')
  nextBtn.id="nextBtn"
  nextBtn.innerHTML = "다음"

  document.body.appendChild(nextBtn)
}






