var usuario = prompt("Escribe tu pregunta ");
var phrases = [
  "pues si",
  "no ps",
  "anuma",
  "no se",
  ":V",
];
phrases = phrases[Math.floor(Math.random() * 5)];
document.write(phrases);
