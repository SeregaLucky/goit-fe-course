"use strict";

class Notepad {
  /*
   * Перенеси свойства и методы конструктора в класс
   *
   * Замени метод getNotes геттером, чтобы можно было обратиться как notepad.notes,
   * для этого создай свойство _notes, в котором храни массив заметок,
   * а геттер notes возвращает значение этого поля
   *
   * Добавь статическое свойство Priority используя ключевое слово static
   */

  static Priority = {
    LOW: 0,
    NORMAL: 1,
    HIGH: 2
  };

  constructor(initialNotes) {
    this.notes = initialNotes;
  }

  get getNotes() {
    const _notes = this.notes;
    return _notes;
  }

  findNoteById(id) {
    for (const elNote of this.notes) {
      if (elNote.id === id) {
        return elNote;
      }
    }
  }

  saveNote(note) {
    this.notes.push(note);
    return note;
  }

  deleteNote(id) {
    const findFoId = this.findNoteById(id);

    for (let i = 0; i < this.notes.length; i += 1) {
      if (this.notes[i] === findFoId) {
        this.notes.splice(i, 1);
      }
    }
  }

  updateNoteContent(id, updatedContent) {
    let findFoId = this.findNoteById(id);
    const changeYouNeed = { ...findFoId, ...updatedContent };

    for (let i = 0; i < this.notes.length; i += 1) {
      if (findFoId === this.notes[i]) {
        this.notes.splice(i, 1, changeYouNeed);
        return changeYouNeed;
      }
    }
  }

  updateNotePriority(id, priority) {
    const findFoId = this.findNoteById(id);

    findFoId.priority = priority;
    return findFoId;
  }

  filterNotesByQuery(query) {
    const arrayYouNeed = [];

    for (const keyNotes of this.notes) {
      const doArrayOfTitle = keyNotes.title.toLowerCase();
      const isFindNeedNoteInTitle = doArrayOfTitle.includes(query);

      if (isFindNeedNoteInTitle) {
        arrayYouNeed.push(keyNotes);
        continue;
      }

      const doArrayOfBody = keyNotes.body.toLowerCase();
      const isFindNeedNoteInBody = doArrayOfBody.includes(query);

      if (isFindNeedNoteInBody) {
        arrayYouNeed.push(keyNotes);
        continue;
      }
    }

    return arrayYouNeed;
  }

  filterNotesByPriority(priority) {
    const arrayYouFind = [];

    for (const keyNotes of this.notes) {
      if (keyNotes.priority === priority) {
        arrayYouFind.push(keyNotes);
      }
    }

    return arrayYouFind;
  }
}

const initialNotes = [
  {
    id: "id-1",
    title: "JavaScript essentials",
    body:
      "Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc",
    priority: Notepad.Priority.HIGH
  },
  {
    id: "id-2",
    title: "Refresh HTML and CSS",
    body:
      "Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.",
    priority: Notepad.Priority.NORMAL
  }
];

const notepad = new Notepad(initialNotes);
console.log(notepad);

/*
  Смотрю что у меня в заметках после инициализации
*/
console.log("Все текущие заметки: ", notepad.notes);

/*
 * Добавляю еще 2 заметки и смотрю что получилось
 */
notepad.saveNote({
  id: "id-3",
  title: "Get comfy with Frontend frameworks",
  body:
    "First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.",
  priority: Notepad.Priority.NORMAL
});

notepad.saveNote({
  id: "id-4",
  title: "Winter clothes",
  body:
    "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: Notepad.Priority.LOW
});

console.log("Все текущие заметки: ", notepad.notes);

/*
 * Зима уже близко, пора поднять приоритет на покупку одежды
 */
notepad.updateNotePriority("id-4", Notepad.Priority.NORMAL);

console.log("Заметки после обновления приоритета для id-4: ", notepad.notes);

/*
 * Решил что фреймворки отложу немного, понижаю приоритет
 */
notepad.updateNotePriority("id-3", Notepad.Priority.LOW);

console.log("Заметки после обновления приоритета для id-3: ", notepad.notes);

/*
 * Решил отфильтровать заметки по слову html
 */
console.log(
  'Отфильтровали заметки по ключевому слову "html": ',
  notepad.filterNotesByQuery("html")
);

/*
 * Решил отфильтровать заметки по слову javascript
 */
console.log(
  'Отфильтровали заметки по ключевому слову "javascript": ',
  notepad.filterNotesByQuery("javascript")
);

/*
 * Хочу посмотреть только заметки с нормальным приоритетом
 */
console.log(
  "Отфильтровали заметки по нормальному приоритету: ",
  notepad.filterNotesByPriority(Notepad.Priority.NORMAL)
);

/*
 * Обновим контент заметки с id-3
 */
notepad.updateNoteContent("id-3", {
  title: "Get comfy with React.js or Vue.js"
});

console.log(
  "Заметки после обновления контента заметки с id-3: ",
  notepad.notes
);

/*
 * Повторил HTML и CSS, удаляю запись c id-2
 */
notepad.deleteNote("id-2");
console.log("Заметки после удаления с id -2: ", notepad.notes);
