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
// btn.addEventListener("wheel", showsNumberOnwheel);
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

//
// --2--
//
/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/

const exp = document.querySelector(".expression");
const inputsAll = exp.querySelectorAll("input");
inputsAll.forEach(input => {
  input.onkeydown = function(event) {
    // console.log(event);

    if (event.keyCode < 47 || event.keyCode > 57) {
      console.log("Это не число! А ну быстро поправь!");
      return false;
    }
  };
});

const result = document.querySelector(".result");

const btn = document.querySelector('button[data-action="add"]');
btn.addEventListener("click", addSumm);

function addSumm() {
  let total = 0;
  inputsAll.forEach(input => (total += Number(input.value)));
  result.innerHTML = total;
}

//
// --3--
//
