let text =
  "JavaScript - це мова програмування, яка використовується для створення динамічних веб-сайтів та веб-додатків. Ця мова є однією з найпопулярніших у світі програмування, завдяки своїй простоті та гнучкості. JavaScript використовується для додавання взаємодії та анімації на веб-сайти, перевірки форм та валідації даних, розробки ігор та багато іншого. Її можна використовувати як на стороні клієнта, так і на стороні сервера, що робить її дуже потужною та універсальною.";
let words = text.split(" ");

for (let i = 0; i < words.length; i++) {
  if (words[i].length >= 15) {
    let firstPart = words[i].slice(0, 5);
    let lastPart = words[i].slice(-5);
    words[i] = firstPart + "..." + lastPart;
  }
}

text = words.join(" ");
console.log(text);
