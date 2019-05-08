"use strict";

//
// --1--
//
/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

// const btn = document.querySelector(".button");
// console.log(btn);
// btn.addEventListener("click", showsNumberClicks);
// // btn.addEventListener("wheel", showsNumberOnwheel);
// let count = 0;

// function showsNumberClicks() {
//   count += 1;
//   console.log(count);

//   btn.textContent = count;
// }

// function showsNumberOnwheel(event) {
//   console.log(event);
//   console.log(btn.textContent);

//   if (event.deltaY < 0) {
//     count += 1;
//     btn.textContent = count;
//   } else {
//     if (Number(btn.textContent) > 0) {
//       count -= 1;
//       btn.textContent = count;
//     }
//   }

//   return false;
// }

// btn.onwheel = function(event) {
//   console.log(event);
//   console.log(btn.textContent);

//   if (event.deltaY < 0) {
//     count += 1;
//     btn.textContent = count;
//   } else {
//     if (Number(btn.textContent) > 0) {
//       count -= 1;
//       btn.textContent = count;
//     }
//   }

//   return false;
// };

//
// --2--
//
/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/

// const exp = document.querySelector(".expression");
// const inputsAll = exp.querySelectorAll("input");
// inputsAll.forEach(input => {
//   input.onkeydown = function(event) {
//     console.log(event);

//     if (event.keyCode < 47 || event.keyCode > 57) {
//       console.log("Это не число! А ну быстро поправь!");
//       return false;
//     }
//   };
// });

// const result = document.querySelector(".result");

// const btn = document.querySelector('button[data-action="add"]');
// btn.addEventListener("click", addSumm);

// function addSumm() {
//   let total = 0;
//   inputsAll.forEach(input => (total += Number(input.value)));
//   result.textContent = total;
// }

//
// --3--
//
/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/

// class Counter {
//   constructor(onChange) {
//     this.value = onChange;
//   }

//   increment() {
//     this.value = this.value + 1;
//     console.log(this.value);
//     // valueText = this.value;
//     valueSpan.textContent = this.value;
//   }
//   decrement() {
//     this.value = this.value - 1;
//     console.log(this.value);
//     // valueText = this.value;
//     valueSpan.textContent = this.value;
//   }
// }

// const valueSpan = document.querySelector(".value");
// const valueText = valueSpan.textContent;
// const onChange = Number(valueText);

// const count = new Counter(onChange);
// console.log(count);

// const btnAdd = document.querySelector('button[data-action="add"]');
// const btnSub = document.querySelector('button[data-action="sub"]');

// btnAdd.addEventListener("click", count.increment.bind(count));
// btnSub.addEventListener("click", count.decrement.bind(count));

//
// --4--
//
/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/
// const form = document.querySelector(".question-form");
// form.addEventListener("submit", showResult);

// const list = document.querySelector(".options");
// list.addEventListener("click", sss);

// function sss(event) {
//   const target = event.target;
//   console.log(target);

//   const inputs = list.querySelectorAll("input");
//   inputs.forEach(input => {
//     if (input.hasAttribute("checked")) {
//       input.removeAttribute("checked");
//     }
//   });

//   target.setAttribute("checked", "");
// }

// function showResult(event) {
//   // console.log(event);

//   event.preventDefault();
//   // const list = document.querySelector(".options");

//   const inputs = list.querySelectorAll("input");
//   console.log(inputs);

//   inputs.forEach(input => {
//     console.log(input);

//     const ifFindChecked = input.hasAttribute("checked");
//     console.log(ifFindChecked);

//     if (ifFindChecked) {
//       const res = document.querySelector(".result");
//     }
//   });
// }

///////////////////////////////////////////////////////////

// const form = document.querySelector(".question-form");
// form.addEventListener("submit", showResult);

// const inputs = form.querySelectorAll("input");

// const resultDefolt = document.querySelector(".result").textContent;
// console.log(resultDefolt);

// let inpTarg;

// inputs.forEach(inp => {
//   inp.addEventListener("change", event => {
//     console.log(event);
//     console.log(event.target);
//     console.log(event.target.checked);

//     if (event.target.checked) {
//       inpTarg = event.target;
//     }
//   });
// });

// function showResult(event) {
//   event.preventDefault();
//   console.log(inpTarg);

//   if (!inpTarg) {
//     return console.log("Вы не выбрали");
//   }

//   const inpAtrValue = inpTarg.getAttribute("value");
//   console.log(inpAtrValue);

//   const result = document.querySelector(".result");
//   // const aaa = result.textContent;
//   // console.log(aaa);

//   result.textContent = resultDefolt + " " + inpAtrValue;
//   // result.insertAdjacentHTML("beforeend", ` ${inpAtrValue}`);
// }

//
// --5--
//
/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/
// const imagesList = document.querySelector(".images");

// imagesList.addEventListener("click", showSrcImg);

// function showSrcImg(event) {
//   const target = event.target;
//   console.log(target);

//   const isFindSrc = target.hasAttribute("src");
//   console.log(isFindSrc);

//   if (isFindSrc) {
//     const getAttr = target.getAttribute("src");
//     alert(getAttr);
//   }
// }

//
// --6--
//
/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/
// const list = document.querySelector(".list");

// list.addEventListener("click", delThisLi);

// function delThisLi(ev) {
//   const target = ev.target;
//   console.log(target);

//   const isFindButtonDel = target.hasAttribute("data-action");
//   console.log(isFindButtonDel);

//   if (isFindButtonDel) {
//     const parentForButton = target.closest("li");
//     // console.log(parentForButton);
//     parentForButton.remove();
//   }
// }

//
// --7--
//
/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/
// const list = document.querySelector(".input-list");
// list.addEventListener("change", checkedIsSuitLetters);

// function checkedIsSuitLetters(e) {
//   const target = e.target;
//   console.log(target);

//   const valueInput = target.value;
//   console.log(valueInput);

//   const inputLettersLength = valueInput.length;
//   console.log(inputLettersLength);

//   const needLength = target.getAttribute("data-length");
//   console.log(needLength);

//   if (inputLettersLength === Number(needLength)) {
//     target.classList.remove("invalid");
//     target.classList.add("valid");
//   } else {
//     target.classList.remove("valid");
//     target.classList.add("invalid");
//   }
// }

//
// --8--
//
/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/
// const input = document.querySelector(".input");
// input.addEventListener("focus", showFocus);
// input.addEventListener("input", showTextInp);
// input.addEventListener("blur", showTextInp222);

// const resultInpVal = document.querySelector(".input-value");
// // console.log(resultInpVal);

// function showFocus(e) {
//   // console.log(e);
//   const targVal = e.target.value;

//   if (targVal.length === 0) {
//     resultInpVal.textContent = "Input is in focus!";
//   }
// }

// function showTextInp(e) {
//   const targVal = e.target.value;
//   resultInpVal.textContent = targVal;

//   if (targVal.length === 0) {
//     resultInpVal.textContent = "Input is in focus!";
//   }
// }

// function showTextInp222(e) {
//   const targVal = e.target.value;

//   if (targVal.length === 0) {
//     resultInpVal.textContent = "Current input value:";
//   }
// }

//
// --9--
//
/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/
// const btnOpen = document.querySelector('button[data-action="open-modal"]');
// console.log(btnOpen);
// btnOpen.addEventListener("click", openModulContent);

// const modalBackdrop = document.querySelector(".js-modal-backdrop");
// console.log(modalBackdrop);
// modalBackdrop.addEventListener("click", closeModalContent);

// // Функция: при нажатии на кнопку - появляется модальное окно и сама кнопку прячим
// function openModulContent(e) {
//   // console.log(e);

//   modalBackdrop.classList.remove("modal-hidden");
//   btnOpen.classList.add("modal-hidden");
// }

// // Функция: которая закрывает модальное окно
// function closeModalContent(e) {
//   // console.log(e);

//   const target = e.target;
//   console.log(target);

//   // console.log(target === modalBackdrop);
//   // console.log(target.classList.contains("js-modal-backdrop"));

//   // if (target.classList.contains("js-modal-backdrop")) {
//   //   modalBackdrop.classList.add("modal-hidden");
//   //   btnOpen.classList.remove("modal-hidden");
//   // } else if (target.classList.contains("close-btn")) {
//   //   modalBackdrop.classList.add("modal-hidden");
//   //   btnOpen.classList.remove("modal-hidden");
//   // }

//   if (target.classList.contains("js-modal-backdrop")) {
//     modalBackdrop.classList.add("modal-hidden");
//     btnOpen.classList.remove("modal-hidden");
//   } else if (target.getAttribute("data-action") === "close-modal") {
//     modalBackdrop.classList.add("modal-hidden");
//     btnOpen.classList.remove("modal-hidden");
//   }
// }

//
// --10--
//
/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/

const list = document.querySelector(".js-menu");
list.addEventListener("click", navClick);

function navClick(e) {
  // console.log(e);
  event.preventDefault();

  const target = e.target;
  // console.log(target.nodeName);
  if (target.nodeName !== "A") return;

  showActivLink(target);
}

function showActivLink(clickLink) {
  console.log(clickLink);

  const findActiveLink = list.querySelector(".active");
  console.log(findActiveLink);

  if (findActiveLink) {
    findActiveLink.classList.remove("active");
  }

  clickLink.classList.add("active");
}
