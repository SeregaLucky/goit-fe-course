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

  constructor(initialNotes) {
    this.notes = initialNotes;
    // this._Priority = {
    //   LOW: 0,
    //   NORMAL: 1,
    //   HIGH: 2
    // };
  }

  static Priority = {
    LOW: 0,
    NORMAL: 1,
    HIGH: 2
  };

  // static get Priority() {
  //   // return 33;
  //   // return (Priority = {
  //   //   LOW: 0,
  //   //   NORMAL: 1,
  //   //   HIGH: 2
  //   // });
  //   // LOW = 0;
  //   // NORMAL = 1;
  //   const HIGH = 2;
  // }

  // getNotes() {
  //   const allNotes = this.notes;
  //   return allNotes;
  // }

  get getNotes() {
    const _notes = this.notes;
    return _notes;
  }

  findNoteById(id) {
    for (const elNote of this.notes) {
      const value = Object.values(elNote);

      for (const idElem of value) {
        if (idElem === id) {
          return elNote;
        }
      }
    }
  }

  saveNote(note) {
    this.notes.push(note);
  }

  deleteNote(id) {
    const delFoId = this.findNoteById(id);

    for (let i = 0; i < this.notes.length; i += 1) {
      // console.log(this.notes[i]);

      if (this.notes[i] === delFoId) {
        this.notes.splice(i, 1);
      }
    }
  }

  updateNoteContent(id, updatedContent) {
    const findFoId = this.findNoteById(id);

    for (const key in findFoId) {
      for (const k in updatedContent) {
        // обновляем заметки
        if (k === key) {
          findFoId[key] = updatedContent[k];
        }
      }
    }
  }

  updateNotePriority(id, priority) {
    const findFoId = this.findNoteById(id);
    findFoId.priority = priority;
  }

  filterNotesByQuery(query) {
    const arrayYouNeed = [];

    for (const keyNotes of this.notes) {
      for (const keyNote in keyNotes) {
        if (keyNote === "title") {
          const doLowerWord = keyNotes[keyNote].toLowerCase();
          const doArrayFoValue = doLowerWord.split(" ");
          let isFindNeedNote = doArrayFoValue.includes(query);

          if (isFindNeedNote) {
            arrayYouNeed.push(keyNotes);
            break;
          }
        }
        if (keyNote === "body") {
          const doLowerWord = keyNotes[keyNote].toLowerCase();
          const doArrayFoValue = doLowerWord.split(" ");
          let isFindNeedNote = doArrayFoValue.includes(query);

          if (isFindNeedNote) {
            arrayYouNeed.push(keyNotes);
            break;
          }
        }
      }
    }

    return arrayYouNeed;
  }

  filterNotesByPriority(priority) {
    const arrayYouFind = [];

    for (const keyNotes of this.notes) {
      const isFindNeedPriority = keyNotes.priority;

      if (isFindNeedPriority === priority) {
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
