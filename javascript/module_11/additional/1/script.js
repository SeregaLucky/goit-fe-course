"use strict";

class Timer {
  constructor({ el, invialValue = 0, step = 1 }) {
    (this.value = invialValue),
      (this.step = step),
      (this.refs = {
        decBtn: el.querySelector("button[data-action='dec']"),
        incBtn: el.querySelector("button[data-action='inc']"),
        clockFace: el.querySelector("div.value")
      });

    console.log(this.refs);

    this.updclockFace();
    this.init();
  }

  inc() {
    this.value += this.step;
    this.updclockFace();
  }

  dec() {
    this.value -= this.step;
    this.updclockFace();
  }

  updclockFace() {
    this.refs.clockFace.textContent = this.value;
  }

  init() {
    this.refs.decBtn.addEventListener("click", this.dec.bind(this));
    this.refs.incBtn.addEventListener("click", this.inc.bind(this));
  }
}

new Timer({
  el: document.querySelector("#timer-1"),
  invialValue: 0,
  step: 1
});

new Timer({
  el: document.querySelector("#timer-2"),
  invialValue: 10,
  step: 5
});
