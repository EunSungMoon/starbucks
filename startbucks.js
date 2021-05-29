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

const el = selector => document.querySelector(selector);
const elAll = selector => document.querySelectorAll(selector);

const hide = (event) => { //버튼 숨김 
  event.style.display = 'none'
};

elAll('input[name="menu"]').forEach(dom => dom.addEventListener('change', e => { //커피메뉴 선택 시 이벤트 
  coffeeMenu(e.target);
}));


const coffeeMenu = (target) => { //화면 삭제, 아메리카노와 라떼에 해당하는 디테일 메뉴 선택화면 출력
  const coffeeMenuBtn = el('#radioBtn');//아메리카노, 라떼 선택지를 화면에서 지운다
  hide(coffeeMenuBtn);

  el.innerHTML = '';
  //커피 오더 화면을 받는다
  el.innerHTML = newOrder[target.value](target.value);
}

const newOrder = { //아메리카노, 라떼 디테일 화면출력 
  americano(value) {
    HotIce(value)
    nextStage(value)
    console.log("아메리카노");
  },
  latte(value) {
    HotIce(value)
    milkTypes(value)
    nextStage(value)
    console.log("라떼");
  }
};

const milkTypes = () => {
  let $milktypes = $(`<div id ="milktypes" ><label><input type="radio" name="milktype" value="original" for="original"/> 일반우유 </label>
  <label><input type="radio" name="milktype" value="bean" for="bean"/> 두유 </label>
  <label><input type="radio" name="milktype" value="oats" for="oats"/> 귀리우유 </label></div>`)
  $('#content').append($milktypes)

  elAll('input[name="milktype"]').forEach(dom => dom.addEventListener('change', e => {
    milkTypesChoice(e.target);
  }));

  const milkTypesChoice = (target) => {
    newmilkTypes[target.value](target.value)
  }
  const newmilkTypes = {
    original(value) {
      console.log("일반");
    },
    bean(value) {
      console.log("두유");
    },
    oats(value) {
      console.log("귀리");
    }
  }

}

const HotIce = () => { //hot, ice선택지
  let $HotIce = $(`<div id ="hotice" ><label><input type="radio" name="icehot" value="ice"/> 아이스 </label>
  <label><input type="radio" name="icehot" value="hot"/> 핫 </label></div>`)
  $('#content').append($HotIce)


  elAll('input[name="icehot"]').forEach(dom => dom.addEventListener('change', e => { //hot, ice 선택시 이벤트 발생
    HotIceChoice(e.target);
  }));

  const HotIceChoice = (target) => {
    newHotIce[target.value](target.value)
  }

  const newHotIce = {
    ice(value) {
      console.log("ice");
    },
    hot(value) {
      console.log("hot");
    }
  }
};

const nextStage = () => { //다음 버튼
  let $nextBtn = $('<button id="next" name ="next" value=next> 다음 </button>')
  $('#content').append($nextBtn)

  el('#next').addEventListener('click', e => { //화면에 버튼 지우고, 알림창 등장 =>메뉴확인 후 끝!!
    hide(next);
    hide(hotice);
    hideCoffee();
    orderEnd();





  });
  const hideCoffee = () => {
    let milktypeChk = $('input[name="milktype"]:checked').val();
    let coffeeChk = $('input[name="menu"]:checked').val();
    let icehotChk = $('input[name="icehot"]:checked').val();

    console.log(milktypeChk);

    if ($('input[name="menu"]:checked').val() == 'latte') {
      hide(milktypes);
      alert(coffeeChk + ', ' + icehotChk + ', ' + milktypeChk + ' 선택하신 메뉴가 맞습니까? ') //선택한 메뉴 등장!!!
    }
    else if ($('input[name="menu"]:checked').val() == 'americano') {
      alert(coffeeChk + ', ' + icehotChk + ', ' + ' 선택하신 메뉴가 맞습니까? ') //선택한 메뉴 등장!!!
    }

  };
};


const orderEnd = () => {//완료 텍스트 출력

  $(function () {
    let divDom = $('<div id= "end"><p>주문이 완료되었습니다.</p></div>')
    $('#content').append(divDom);
  });
};




