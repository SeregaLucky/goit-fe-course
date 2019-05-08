"use strict";

//
// --1--
//
{
  // const body = document.body;
  // console.log(body);
  // const list = body.firstElementChild;
  // console.log(list);
  // // // Массив ли главных
  // const liAll = list.children;
  // console.log(liAll);
  // const li = liAll[0];
  // console.log(li);
  // // const liNode = li.firstChild;
  // // console.log(liNode);
  // // // Выводим категорию
  // // const liText = liNode.textContent;
  // // // console.log(liText);
  // // // console.log("Категория:", liText);
  // // console.log(`Категория: ${liText}`);
  // // const liInUl = li.firstElementChild;
  // // console.log(liInUl);
  // // const liInLi = liInUl.children;
  // // console.log(liInLi);
  // // // Выводим количество ли в ли
  // // const liInLiLength = liInLi.length;
  // // console.log(liInLiLength);
  // // console.log(`Категория: ${liText}`);
  // // console.log(`Количество вложенных li: ${liInLiLength}`);
  // // for (let i = 0; i < liAll.length; i += 1) {
  // //   //   console.log(liAll[i]);
  // //   const liNode = liAll[i].firstChild;
  // //   //   console.log(liNode);
  // //   const liText = liNode.textContent;
  // //   //   console.log(`Категория: ${liText}`);
  // //   //////
  // //   const liInUl = li.firstElementChild;
  // //   //   console.log(liInUl);
  // //   const liInLi = liInUl.children;
  // //   //   console.log(liInLi);
  // //   // Выводим количество ли в ли
  // //   const liInLiLength = liInLi.length;
  // //   //   console.log(liInLiLength);
  // //   console.log(`Категория: ${liText}`);
  // //   console.log(`Количество вложенных li: ${liInLiLength}`);
  // // }
  // Array.from(liAll).forEach(liEl => {
  //   // console.log(liEl);
  //   const liNode = liEl.firstChild;
  //   //   console.log(liNode);
  //   const liText = liNode.textContent;
  //   //   console.log(`Категория: ${liText}`);
  //   //////
  //   const liInUl = li.firstElementChild;
  //   //   console.log(liInUl);
  //   const liInLi = liInUl.children;
  //   //   console.log(liInLi);
  //   // Выводим количество ли в ли
  //   const liInLiLength = liInLi.length;
  //   //   console.log(liInLiLength);
  //   console.log(`Категория: ${liText}`);
  //   console.log(`Количество вложенных li: ${liInLiLength}`);
  // });
}
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

//
// --2--
//
// const list = document.body.firstElementChild;
// console.log(list);

// const firstItem = list.firstElementChild;
// console.log(firstItem);
// firstItem.style.color = "red";

// const lastItem = list.lastElementChild;
// console.log(lastItem);
// lastItem.style.color = "blue";

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

//
// --3--
//
// const elements = ["HTML", "CSS", "JavaScript", "React", "Node"];

// const list = document.querySelector(".list");
// console.log(list);
// // list.innerHTML = "<li>1</li>";

// elements.forEach(li => (list.innerHTML += `<li>${li}</li>`));

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

//
// --4--
//
// const galleryItems = [
//   {
//     url:
//       "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Two Brown Hen and One Red Rooster"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Macaw Birds"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "2 Lion on Grass Field during Daytime"
//   }
// ];

// const gallery = document.querySelector(".gallery");
// console.log(gallery);

// galleryItems.forEach(elImg => {
//   const image = document.createElement("img");
//   console.log(image);

//   image.style.width = "300px";
//   image.style.marginLeft = "4px";

//   image.setAttribute("src", `${elImg.url}`);
//   image.setAttribute("alt", `${elImg.alt}`);

//   gallery.appendChild(image);
// });

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

//
// --5--
//
// const list = document.querySelector(".size-filter");
// console.log(list);

// const listCollection = list.children;
// console.log(listCollection);

// const list1 = listCollection[1];
// console.log(list1);

// const findInput = list1.querySelector("input");
// console.log(findInput);

// const isFindAtr = findInput.hasAttribute("checked");
// console.log(isFindAtr);

// const attributList = findInput.attributes;
// console.log(attributList);

// ////////////////////

// const arrChecked = Array.from(listCollection).filter(elLi => {
//   // console.log(elLi);

//   const findInput = elLi.querySelector("input");
//   // console.log(findInput);

//   const isFindAtr = findInput.hasAttribute("checked");
//   // console.log(isFindAtr);

//   if (isFindAtr) {
//     return true;
//   }
// });

// console.log(arrChecked);

// const fff = arrChecked[2];
// console.log(fff);

// //////////////////

// const collectInputData = inputs => {
//   return inputs.map(elLi => {
//     const input = elLi.querySelector("input");
//     console.log(input);

//     const val = input.value;
//     console.log(val);
//     return val;
//   });
// };

// console.log(collectInputData(arrChecked));

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

//
// --6--
//
/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

//
// --7--
//
const mainDiv = document.querySelector("#root");
console.log(mainDiv);

const createBoxes = num => {
  const test = document.createElement("div");
  console.log(test);

  let biggerOnPx = 0;

  while (num > 0) {
    num -= 1;

    // const genarationColor = Math.round(Math.random() * 1000000);
    // console.log(genarationColor);

    // console.log(Math.floor(100000 + Math.random() * 900000));

    const genarationColor2 = Math.floor(100000 + Math.random() * 900000);
    console.log(genarationColor2);

    const newDiv = document.createElement("div");
    console.log(newDiv);

    newDiv.style.width = `${30 + biggerOnPx + "px"}`;
    newDiv.style.height = `${30 + biggerOnPx + "px"}`;
    newDiv.style.background = `#${genarationColor2}`;
    // newDiv.style.display = "inline-block";

    biggerOnPx += 10;

    mainDiv.appendChild(newDiv);
  }
};

createBoxes(9);
