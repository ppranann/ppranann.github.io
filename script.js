
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


import { annotate } from 'rough-notation';
const n1 = document.querySelector("vonsy");
const n2 = document.querySelector("kan");
const n3 = document.querySelector("sa");
const n4 = document.querySelector("su");
const n5 = document.querySelector("sayang");

const a1 = annotate(n1, { type: 'underline', color: 'blue' });
const a2 = annotate(n2, { type: 'circle', color: 'red', padding: 10 });
const a3 = annotate(n3, { type: 'box', color: 'orange' });
const a4 = annotate(n4, { type: 'highlight', color: 'yellow', iterations: 1, multiline: true });
const a5 = annotate(n5, { type: 'highlight', color: 'yellow', iterations: 1, multiline: true });

a1.show();
a2.show();
a3.show();
a4.show();
a5.show();
