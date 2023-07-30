const currencyFrom = document.querySelectorAll(".currency__from");
const currencyFromImage = document.querySelector(".currency__from-img");
for (let i = 0; i < currencyFrom.length; i++) {
  if (
    currencyFrom[i].value !== "UAH" &&
    currencyFrom[i].textContent !== "ZL" &&
    currencyFrom[i].textContent !== "USD" &&
    currencyFrom[i].textContent !== "EU"
  ) {
    currencyFromImage.style.backgroundImage = " ";
  } else if (currencyFrom[i].value === "UAH") {
    currencyFromImage.style.backgroundImage = "url(./images/UAH.png)";
  } else if (currencyFrom[i].value === "ZL") {
    currencyFromImage.style.backgroundImage = "url(./images/ZL.png)";
  } else if (currencyFrom[i].value === "USD") {
    currencyFromImage.style.backgroundImage = "url(./images/USD.png)";
  } else if (currencyFrom[i].value === "EU") {
    currencyFromImage.style.backgroundImage = "url(./images/EU.png)";
  }
}
