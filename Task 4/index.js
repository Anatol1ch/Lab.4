function validateNumber(inputStr) {
  let regex = /^(\d+([.,])?\d*)$/;
  let matches = regex.exec(inputStr);
  if (matches == null) {
    console.log("Введено не число");
  } else {
    let numberStr = matches[0];
    let parts = numberStr.split(/[.,]/);
    if (parts.length == 1) {
      console.log(`Ціле число: ${parts[0]}`);
    } else {
      console.log(`Ціла частина: ${parts[0]}`);
      console.log(`Дробова частина: ${parts[1]}`);
    }
  }
}

let inputStr = prompt("Введіть число:");

validateNumber(inputStr);
