"use strict";

const Priority = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2
};

const notepad = {
  notes: [],

  getNotes() {
    /*
     * Принимает: ничего
     * Возвращает: все заметки, значение свойства notes
     */

    // const allNotes = this.notes;
    // return allNotes;

    return this.notes;
  },

  findNoteById(id) {
    /*
     * Ищет заметку в массиве notes
     *
     * Принимает: идентификатор заметки
     * Возвращает: заметку с совпавшим полем id или undefined если ничего не найдено
     */

    for (const elNote of this.notes) {
      if (elNote.id === id) {
        return elNote;
      }
    }

    // for (const elNote of this.notes) {
    //   console.log(elNote);
    //   const value = Object.values(elNote);

    //   for (const idElem of value) {
    //     // console.log(idElem);

    //     if (idElem === id) {
    //       return elNote;
    //     }
    //   }
    // }
  },

  saveNote(note) {
    /*
     * Сохраняет заметку в массив notes
     *
     * Принимает: объект заметки
     * Возвращает: сохраненную заметку
     */

    this.notes.push(note);
    return note;
  },

  deleteNote(id) {
    /*
     * Удаляет заметку по идентификатору из массива notes
     *
     * Принимает: идентификатор заметки
     * Возвращает: ничего
     */

    const findFoId = this.findNoteById(id);

    for (let i = 0; i < this.notes.length; i += 1) {
      // console.log(this.notes[i]);

      if (this.notes[i] === findFoId) {
        this.notes.splice(i, 1);
      }
    }
  },

  updateNoteContent(id, updatedContent) {
    /*
     * Обновляет контент заметки
     * updatedContent - объект с полями вида {имя: значение, имя: значение}
     * Свойств в объекте updatedContent может быть произвольное количество
     *
     * Принимает: идентификатор заметки и объект, полями которого надо обновить заметку
     * Возвращает: обновленную заметку
     */

    // console.log(updatedContent);

    //////////////////////////////////////////////////

    let findFoId = this.findNoteById(id);
    // console.log(findFoId);

    const changeYouNeed = { ...findFoId, ...updatedContent };
    // console.log(changeYouNeed);
    // console.log(changeYouNeed === findFoId);

    for (let i = 0; i < this.notes.length; i += 1) {
      // console.log(this.notes[i]);

      // console.log(findFoId === this.notes[i]);

      if (findFoId === this.notes[i]) {
        this.notes.splice(i, 1, changeYouNeed);
        return changeYouNeed;
        // console.log(1111111111111);
      }
    }

    // findFoId = { findFoId, ...updatedContent };
    // console.log(findFoId);

    // const keysFindFoId = Object.keys(findFoId);
    // console.log(keysFindFoId);

    // const keysUpdatedContent = Object.keys(updatedContent);
    // // console.log(kkk2);

    // for (const k of keysUpdatedContent) {
    //   // console.log(k);
    //   for (const key of keysFindFoId) {
    //     // console.log(key);
    //     if (k === key) {
    //       findFoId[key] = updatedContent[k];
    //       // console.log(11111111111);
    //     }
    //   }
    // }

    //////////////////////////////////////////////////

    // for (const key in findFoId) {
    //   // console.log(key);

    //   for (const k in updatedContent) {
    //     // console.log(k);

    //     // обновляем заметки
    //     if (k === key) {
    //       // console.log(findFoId[key]);
    //       // console.log(updatedContent[k]);
    //       findFoId[key] = updatedContent[k];
    //     }
    //   }
    // }
  },

  updateNotePriority(id, priority) {
    /*
     * Обновляет приоритет заметки
     *
     * Принимает: идентификатор заметки и ее новый приоритет
     * Возвращает: обновленную заметку
     */

    const findFoId = this.findNoteById(id);
    // console.log(findFoId);
    // console.log(priority);

    findFoId.priority = priority;
    // console.log(findFoId.priority);
    return findFoId;
  },

  filterNotesByQuery(query) {
    /*
     * Фильтрует массив заметок по подстроке query.
     * Если значение query есть в заголовке или теле заметки - она подходит
     *
     * Принимает: подстроку для поиска в title и body заметки
     * Возвращает: новый массив заметок, контент которых содержит подстроку
     */

    // console.log(query);

    const arrayYouNeed = [];

    for (const keyNotes of this.notes) {
      // console.log(keyNotes);
      // console.log("===============================");

      ///////////////////////////////////////////////

      // console.log(keyNotes.title);
      const doArrayOfTitle = keyNotes.title.toLowerCase();
      // console.log(doArrayOfTitle);
      //
      const isFindNeedNoteInTitle = doArrayOfTitle.includes(query);
      // console.log(isFindNeedNoteInTitle);

      if (isFindNeedNoteInTitle) {
        arrayYouNeed.push(keyNotes);
        break;
      }

      // console.log(keyNotes.body);
      const doArrayOfBody = keyNotes.body.toLowerCase();
      // console.log(doArrayOfBody);

      const isFindNeedNoteInBody = doArrayOfBody.includes(query);
      // console.log(isFindNeedNoteInBody);

      if (isFindNeedNoteInBody) {
        arrayYouNeed.push(keyNotes);
        break;
      }

      ///////////////////////////////////////////////

      // for (const keyNote in keyNotes) {
      //   if (keyNote === "title") {
      //     // console.log(1);
      //     console.log(keyNotes[keyNote]);

      //     const doLowerWord = keyNotes[keyNote].toLowerCase();
      //     console.log(doLowerWord);

      //     const doArrayFoValue = doLowerWord.split(" ");
      //     console.log(doArrayFoValue);

      //     let isFindNeedNote = doArrayFoValue.includes(query);
      //     // console.log(isFindNeedNote);

      //     if (isFindNeedNote) {
      //       arrayYouNeed.push(keyNotes);
      //       break;
      //     }
      //   }
      //   if (keyNote === "body") {
      //     // console.log(1);
      //     // console.log(keyNotes[keyNote]);

      //     const doLowerWord = keyNotes[keyNote].toLowerCase();
      //     // console.log(doLowerWord);

      //     const doArrayFoValue = doLowerWord.split(" ");
      //     // console.log(doArrayFoValue);

      //     let isFindNeedNote = doArrayFoValue.includes(query);
      //     // console.log(isFindNeedNote);

      //     if (isFindNeedNote) {
      //       arrayYouNeed.push(keyNotes);
      //       break;
      //     }
      //   }
      // }
    }

    return arrayYouNeed;
  },

  filterNotesByPriority(priority) {
    /*
     * Фильтрует массив заметок по значению приоритета
     * Если значение priority совпадает с приоритетом заметки - она подходит
     *
     * Принимает: приоритет для поиска в свойстве priority заметки
     * Возвращает: новый массив заметок с подходящим приоритетом
     */

    const arrayYouFind = [];

    for (const keyNotes of this.notes) {
      // console.log(keyNotes);

      const isFindNeedPriority = keyNotes.priority;
      // console.log(isFindNeedPriority);

      if (isFindNeedPriority === priority) {
        // console.log(122);

        arrayYouFind.push(keyNotes);
      }
    }

    return arrayYouFind;
  }
};

/*
 * Добавляю 4 заметки и смотрю что получилось
 */
notepad.saveNote({
  id: "id-1",
  title: "JavaScript essentials",
  body:
    "Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc",
  priority: Priority.HIGH
});

notepad.saveNote({
  id: "id-2",
  title: "Refresh HTML and CSS",
  body:
    "Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.",
  priority: Priority.NORMAL
});

notepad.saveNote({
  id: "id-3",
  title: "Get comfy with Frontend frameworks",
  body:
    "First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.",
  priority: Priority.NORMAL
});

notepad.saveNote({
  id: "id-4",
  title: "Winter clothes",
  body:
    "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: Priority.LOW
});

console.log("Все текущие заметки: ", notepad.getNotes());

/*
 * Зима уже близко, пора поднять приоритет на покупку одежды
 */
notepad.updateNotePriority("id-4", Priority.NORMAL);

console.log(
  "Заметки после обновления приоритета для id-4: ",
  notepad.getNotes()
);

/*
 * Решил что фреймворки отложу немного, понижаю приоритет
 */
notepad.updateNotePriority("id-3", Priority.LOW);

console.log(
  "Заметки после обновления приоритета для id-3: ",
  notepad.getNotes()
);

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
  notepad.filterNotesByPriority(Priority.NORMAL)
);

/*
 * Обновим контент заметки с id-3
 */
notepad.updateNoteContent("id-3", {
  title: "Get comfy with React.js or Vue.js"
});

console.log(
  "Заметки после обновления контента заметки с id-3: ",
  notepad.getNotes()
);

/*
 * Повторил HTML и CSS, удаляю запись c id-2
 */
notepad.deleteNote("id-2");
console.log("Заметки после удаления с id -2: ", notepad.getNotes());
