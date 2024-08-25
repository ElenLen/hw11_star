//для работы всего сценария в «современном» режиме.
"use strict";

const findPrice = document.querySelectorAll(".list__blok-price");
let total = document.getElementById("total");
let resultSum = 0;

// находим сумму по всем позициям
findPrice.forEach(function (findPrice) {
  let result = +findPrice.innerHTML;
  findPrice.innerHTML = `${result} ₽`;
  resultSum += result;
  total.innerHTML = `Итого: ${resultSum} ₽`;
});

// при нажатии кнопки считаем скидку
let button = document.getElementById("sale");
button.onclick = function findPriceCost() {
  findPrice.forEach(function (findPrice) {
    let result = findPrice.innerHTML.replace(/\D/g, "");
    result = result * (20 / 100);
    findPrice.innerHTML = result.toLocaleString("ru-RU", {
      style: "currency",
      currency: "RUB",
    });
  });

  let sumRes = resultSum * (20 / 100);
  total.innerHTML = `Итого: ${sumRes.toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
  })} `;

  // после использования купона, кнопка не активна
  button.setAttribute("disabled", true);
};
