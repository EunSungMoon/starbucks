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

const createEl = dom => document.createElement(dom);
const el = selector => document.querySelector(selector);
const elAll = selector => document.querySelectorAll(selector);

let cname
let temps
let milkTypes
let shots

/*
const selectMenu = document.querySelector('#radioBtn');
selectMenu.addEventListener('change', e => { //메뉴 선택시 각 메뉴에 따른 디테일 메뉴화면으로 전환
  MainMenu(e.target);
})*/

document.querySelectorAll('input[name="menu"]').forEach(dom => dom.addEventListener('change', e => {
  coffeeMenu(e.target);
}));



const coffeeMenu = (target) => {
  //화면을 지운다
  const el = document.querySelector('#radioBtn');

  // el.innerHTML='';
  // //커피 오더 화면을 받는다
  // el.innerHTML = newOrder[target.value](target.value);
  el.style.display = 'none'
  newOrder[target.value](target.value)

}

const newOrder = {
  americano(value) {
    // return `
    //   <div>
    //     <label><input type="checkbox" name="icehot" value="ice"/> 아이스 </label>
    //     <label><input type="checkbox" name="icehot" value="hot"/> 핫 </label>
    //   </div>
    // `;
    tempSelector(value)
    nextStage(value)
  },
  latte(value) {
    //라뗴를 그림
    console.log('latte')
  }
};

const hide = (event) => { //버튼 숨김 
  event.style.display = 'none'
};

const creatDiv = () => $(function () {
  $("div.content").html('div')
  let divDom = $('<div></div>')
  $('#content').append(divDom);
});

const tempSelector = () => { //hot, ice선택지
  creatDiv()

  // let temp = ['hot', 'ice']

  // const p = createEl('p');
  // p.innerHTML = "hot, ice 선택"
  // dom.appendChild(p);

  // temp.forEach((tempValue, i) => {
  //   let tempBtn = createEl('input')
  //   let labelValue = createEl('label')

  //   labelValue.innerHTML = tempValue
  //   tempBtn.type = "radio"
  //   tempBtn.id = temp[i]

  //   dom.appendChild(labelValue);
  //   dom.appendChild(tempBtn);
  //   el('body').appendChild(dom);

  // })

  // elAll('#tempRadio').forEach(i => i.addEventListener('change', () => {
  //   // e.target.dataset 활용 방법?
  //   if (document.getElementById('hot').checked) {
  //     temps = "hot"
  //   }
  //   else if (document.getElementById('ice').checked) {
  //     temps = "ice"
  //   }
  // }))
};


//1.  div 돔을 document.createElement() 를 통해서 만듬

//2. 1번의 div 돔에 appendChild 를 통해서 넣음


const nextStage = () => { //다음 버튼
  // const dom = createEl('div');
  // dom.id = "next"
  // let nextBtn = createEl('button');
  // nextBtn.id = "nextBtn"
  // nextBtn.innerHTML = "다음"



  // dom.appendChild(nextBtn);
  // el('body').appendChild(dom);

  let $nextBtn=$('<button name ="next" value=next>다음</button>')
  $('#content').append($nextBtn)

  // document.querySelectorAll('input[name="menu"]').forEach(dom => dom.addEventListener('change', e => {
  //   coffeeMenu(e.target);//활용하기

  // el('#next').addEventListener('click', () => {
  //   hide(next);
  //   hide(tempRadio);
  //   hide(latteMenu); //hide를 한번에 묶을수 있는 방법... 뭐가 있을까...
  //   alert('선택하신 메뉴가 맞습니까? ' + cname + ', ' + temps + ', ' + milkTypes);// 메뉴 확인창 -> 완료 되었습니다 텍스트 등장 예정
  //   orderEnd();
  // })
};

const orderEnd = () => {//완료 텍스트 출력
  const dom = createEl('div');
  dom.id = "end"
  const p = createEl('p');
  p.innerHTML = "주문이 완료 되었습니다."

  dom.appendChild(p);
  el('body').appendChild(dom);
};









