import { test } from './test.js';

function enter() {
  const main = document.querySelector('#main');
  main.innerHTML = test();
}

enter();
