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
    this._notes = initialNotes;
  }

  get notes() {
    return this._notes;
  }

  findNoteById(id) {
    return this.notes.find(note => note.id === id);
  }

  saveNote(note) {
    this._notes = [...this.notes, note];
  }

  deleteNote(id) {
    this._notes = this.notes.filter(note => note.id !== id);
  }

  updateNoteContent(id, updatedContent) {
    this._notes = notepad.notes.map(note =>
      note.id === id ? { ...note, ...updatedContent } : note
    );
  }

  updateNotePriority(id, priority) {
    this._notes = this.notes.map(note =>
      note.id === id ? { ...note, priority: priority } : note
    );

    // return findFoId;
  }

  filterNotesByQuery(query) {
    return this.notes.filter(
      note =>
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.body.toLowerCase().includes(query.toLowerCase())
    );
  }

  filterNotesByPriority(priority) {
    return this.notes.filter(note => note.priority === priority);
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
// console.log(notepad);

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

console.log("Все текущие заметки после добавления: ", notepad.notes);

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
