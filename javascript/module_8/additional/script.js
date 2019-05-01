"use strict";

//
// --1--
//
const body = document.body;
console.log(body);

const list = body.firstElementChild;
console.log(list);

// // Массив ли главных
const liAll = list.children;
console.log(liAll);

const li = liAll[0];
console.log(li);

const liNode = li.firstChild;
console.log(liNode);

// Выводим категорию
const liText = liNode.textContent;
// console.log(liText);
// console.log("Категория:", liText);
console.log(`Категория: ${liText}`);

const liInUl = li.firstElementChild;
console.log(liInUl);

const liInLi = liInUl.children;
console.log(liInLi);

// Выводим количество ли в ли
const liInLiLength = liInLi.length;
console.log(liInLiLength);

console.log(`Категория: ${liText}`);
console.log(`Количество вложенных li: ${liInLiLength}`);

for (let i = 0; i < liAll.length; i += 1) {
  //   console.log(liAll[i]);

  const liNode = liAll[i].firstChild;
  //   console.log(liNode);

  const liText = liNode.textContent;
  //   console.log(`Категория: ${liText}`);

  //////

  const liInUl = li.firstElementChild;
  //   console.log(liInUl);

  const liInLi = liInUl.children;
  //   console.log(liInLi);

  // Выводим количество ли в ли
  const liInLiLength = liInLi.length;
  //   console.log(liInLiLength);

  console.log(`Категория: ${liText}`);
  console.log(`Количество вложенных li: ${liInLiLength}`);
}

Array.from(liAll).forEach(liEl => {
  // console.log(liEl);

  c;
});

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

//
// --2--
//
