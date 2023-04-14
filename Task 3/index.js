/*
В даному випадку, для перевірки правильності введення прізвища та імені користувача, можна скористатися наступним регулярним виразом: `/^([^\d\s]{2,})(\s+)([^\d\s]{2,})$/`. Цей вираз виконує наступні перевірки:

- `^` - початок рядка;
- `([^\d\s]{2,})` - знак дужки визначає перший підшаблон, який повинен містити два або більше символів, які не є цифрами та пропусками (прізвище);
- `(\s+)` - другий підшаблон повинен містити один або більше символів прогалини (пропуск);
- `([^\d\s]{2,})` - третій підшаблон повинен містити два або більше символи, які не є цифрами та пропусками (ім'я);
- `$` - кінець рядка. 
*/

function validateName(fullName) {
  let regex = /^([^\d\s]{2,})(\s+)([^\d\s]{2,})$/;
  let matches = regex.exec(fullName);
  if (matches == null) {
    console.log("Некоректно введено прізвище та ім'я");
  } else {
    let lastName = matches[1];
    let firstName = matches[3];
    console.log(`${lastName} ${firstName}`);
  }
}

let fullName = prompt(
  "Введіть своє ім'я та прізвище (два слова, розділені пробілом):"
);
validateName(fullName);