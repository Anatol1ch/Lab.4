// створити масив з переліком
let list = [
  { firstName: "Іван", lastName: "Кузьмін" },
  { firstName: "Петро", lastName: "Петров" },
  { firstName: "Іван", lastName: "Федоров" },
];

// зчитати ім'я та прізвище користувача
let fullName = prompt(
  "Введіть своє ім'я та прізвище (два слова, розділені пробілом):"
);

// розділити ім'я та прізвище на окремі змінні
let [firstName, lastName] = fullName.split(" ");

// перевірити, чи є користувач в списку
let foundUser = list.find(
  (user) => user.firstName === firstName && user.lastName === lastName
);

// якщо користувач не знайдений, додати його до списку
if (!foundUser) {
  list.push({ firstName, lastName });
}

// знайти користувача за ім'ям та прізвищем
foundUser = list.find(
  (user) => user.firstName === firstName && user.lastName === lastName
);

// замінити знайденого користувача на "Іванов Іван"
if (foundUser) {
  foundUser.firstName = "Іван";
  foundUser.lastName = "Іванов";
}

// вивести оновлений список на екран
list.forEach((user) => console.log(`${user.lastName} ${user.firstName}`));
