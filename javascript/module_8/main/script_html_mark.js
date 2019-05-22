"use strict";
import quizData from "./script_with_array.js";

const form = document.querySelector(".form");
const buttonChecked = document.querySelector(".button");

// Счетчик для каждой группы инпутов
let countSect = 0;

const finishedMarkup = doHtmlMark(quizData);
console.log(finishedMarkup);

/*
 * START: делаем разметку
 */
function doHtmlMark({ title, questions }) {
  const doTitleMain = document.createElement("h2");
  doTitleMain.classList.add("title");
  doTitleMain.textContent = title;
  form.insertBefore(doTitleMain, buttonChecked);

  doAllSection(questions);

  return form;
}

// Make HTML: section, h3, ol
function doSection({ question, choices }) {
  countSect += 1;

  const doSectionForQuestion = document.createElement("section");
  doSectionForQuestion.classList.add("section");

  const doTitleForQuestion = document.createElement("h3");
  doTitleForQuestion.classList.add("question");
  doTitleForQuestion.textContent = question;

  const doListForQuestion = document.createElement("ol");

  doSectionForQuestion.append(doTitleForQuestion, doListForQuestion);

  //CALL: auto do li
  doAllLi(choices, doListForQuestion);

  return doSectionForQuestion;
}

// Auto make
function doAllSection(questions) {
  questions.forEach(question => {
    const needSection = doSection(question);
    form.insertBefore(needSection, buttonChecked);
  });
}

// Make HTML: li
function doItem(text, idx) {
  const item = document.createElement("li");
  item.classList.add("item");

  const label = document.createElement("label");
  item.appendChild(label);

  const input = document.createElement("input");
  input.classList.add("input");
  input.name = `question_group_${countSect}`;
  input.type = "radio";
  input.value = idx;
  const textForInput = document.createTextNode(text);
  label.append(input, textForInput);

  return item;
}

// Auto li
function doAllLi(choices, ol) {
  choices.forEach((choice, idx) => {
    const needLi = doItem(choice, idx);
    ol.appendChild(needLi);
  });
}

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

/*
 * Делаем сбор данных
 */

// Что бы кнопка была не активна пока все не отмеченно
form.addEventListener("change", handleCheckedAllPush);
// Функционал при нажатии на кнопку: "Проверить"
form.addEventListener("submit", handleResult);

function handleCheckedAllPush(e) {
  const allResult = new FormData(e.currentTarget);

  const arrayResult = {};
  allResult.forEach((value, name) => {
    arrayResult[name] = value;
  });

  const tachLength = Object.keys(arrayResult).length;
  if (tachLength !== quizData.questions.length) return;

  buttonChecked.classList.remove("disabled");
}

//
function handleResult(e) {
  e.preventDefault();
  const allResult = new FormData(e.currentTarget);

  const arrayResult = {};
  allResult.forEach((value, name) => {
    arrayResult[name] = value;
  });

  const tachLength = Object.values(arrayResult).length;

  // Проверка что бы все было отсеченно и лишь тогда бузет запущен ниже код
  if (tachLength !== quizData.questions.length) return;

  muchDoGood(arrayResult);

  // Открывает модальное окно
  document.body.classList.add("show-modal");
  // При откритии модального окна
  window.addEventListener("keydown", handleKeyPress);
}

//
function muchDoGood(arrResult) {
  console.log(arrResult);

  const valuesResult = Object.values(arrResult);
  console.log("Индекс отмеченного инрута: ", valuesResult);

  const arrayRightAnswers = quizData.questions.map(el => el.answer);
  console.log("Индекс правильного инрута: ", arrayRightAnswers);
  const arrayRightAnswersLength = arrayRightAnswers.length;

  const arrayDoGood = valuesResult.filter(
    (el, idx) => Number(el) === arrayRightAnswers[idx]
  );
  console.log("Массив интексов конечный: ", arrayDoGood);
  const arrayDoGoodLength = arrayDoGood.length;
  console.log(arrayDoGoodLength);

  const pesent = (arrayDoGoodLength / arrayRightAnswersLength) * 100;
  console.log(pesent);
  console.log(`${pesent}%`);

  showModalResult();

  // Выводит текст с результатом в модальном окне
  rightResultInModal(pesent);

  const bbb = Array.from(form.elements);
  console.log(bbb);

  // Что бы виделить првельные и не правельные ответы при нажатии на кнопку
  let countTrueShow = 0;
  bbb.forEach(input => {
    if (input.checked) {
      if (Number(input.value) === arrayRightAnswers[countTrueShow]) {
        input.closest(".item").classList.add("good");
        countTrueShow += 1;
      } else {
        input.closest(".item").classList.add("bad");
        countTrueShow += 1;
      }
    }
  });
}

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

// Модальное окно
function handleKeyPress(e) {
  console.log(1111);
  if (e.code !== "Escape") return;

  document.body.classList.remove("show-modal");
  window.removeEventListener("keydown", handleKeyPress);
}

function showModalResult() {
  const backDrop = document.querySelector(".backdrop");
  const btnModal = document.querySelector(".js_btn_modal");

  backDrop.addEventListener("click", handleBackDropClick);
  btnModal.addEventListener("click", closeModal);

  function closeModal() {
    document.body.classList.remove("show-modal");
    window.removeEventListener("keydown", handleKeyPress);
  }

  function handleBackDropClick(e) {
    if (e.currentTarget !== e.target) return;
    closeModal();
  }
}

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

/*
 * Выводим результаты в модальку
 */

const resultPesent = document.querySelector(".js_text_pes");
const resultText = document.querySelector(".js_text_text");

function rightResultInModal(pesent) {
  if (pesent >= 80) {
    resultPesent.textContent = `Процент правельных ответов: ${pesent}%`;
    resultText.textContent = "Вы сдали!)";
  } else {
    resultPesent.textContent = `Процент правельных ответов: ${pesent}%`;
    resultText.textContent = "Вы не сдали=(";
  }
}
