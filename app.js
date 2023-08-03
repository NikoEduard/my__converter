// const currencyFrom = document.querySelectorAll(".currency__from");

const currencyFromImage = document.querySelector(".currency__from-img");
const currencyToImage = document.querySelector(".currency__to-img");
const selectFrom = document.querySelector("#select__from");
const selectTo = document.querySelector("#select__to");
let inputAmount = document.querySelector("#input__amount");
let result = document.querySelector(".result");
let getResult = document.querySelector(".get__result");
const uahToUsd = 0.027;
const uahToEu = 0.025;
const uahToZl = 0.11;
const zlToUsd = 0.25;
const zlToEu = 0.23;
const zlToUah = 9.19;
const usdToUah = 36.79;
const usdToEu = 0.91;
const usdToZl = 4.0;
const euToUsd = 1.1;
const euToUah = 40.54;
const euToZl = 4.41;

selectFrom.addEventListener("change", function () {
  let selectedFromCurrency = selectFrom.value;

  if (selectedFromCurrency === "USD") {
    currencyFromImage.style.backgroundImage = "url(./images/USD.png)";
  } else if (selectedFromCurrency === "UAH") {
    currencyFromImage.style.backgroundImage = "url(./images/UAH.png)";
  } else if (selectedFromCurrency === "ZL") {
    currencyFromImage.style.backgroundImage = "url(./images/ZL.png)";
  } else if (selectedFromCurrency === "EU") {
    currencyFromImage.style.backgroundImage = "url(./images/EU.png)";
  } else {
    currencyFromImage.style.backgroundImage = "";
  }
});

selectTo.addEventListener("change", function () {
  let selectedToCurrency = selectTo.value;
  if (selectedToCurrency === "USD") {
    currencyToImage.style.backgroundImage = "url(./images/USD.png)";
  } else if (selectedToCurrency === "UAH") {
    currencyToImage.style.backgroundImage = "url(./images/UAH.png)";
  } else if (selectedToCurrency === "ZL") {
    currencyToImage.style.backgroundImage = "url(./images/ZL.png)";
  } else if (selectedToCurrency === "EU") {
    currencyToImage.style.backgroundImage = "url(./images/EU.png)";
  } else {
    currencyToImage.style.backgroundImage = none;
  }
});

// getResult.addEventListener(
//   "click",
//   function (amount, fromCurrency, toCurrency) {
//     amount = Number(inputAmount.value);
//     fromCurrency = selectFrom.value;
//     toCurrency = selectTo.value;

//     function getExchangeRate(fromCurrency) {
//       if (fromCurrency === "UAH" && toCurrency === "USD") {
//         return Number(uahToUsd);
//       } else if (fromCurrency === "UAH" && toCurrency === "EU") {
//         return Number(uahToEu);
//       } else if (fromCurrency === "UAH" && toCurrency === "ZL") {
//         return Number(uahToZl);
//       } else if (fromCurrency === "ZL" && toCurrency === "USD") {
//         return Number(zlToUsd);
//       } else if (fromCurrency === "ZL" && toCurrency === "EU") {
//         return Number(zlToEu);
//       } else if (fromCurrency === "ZL" && toCurrency === "UAH") {
//         return Number(zlToUah);
//       } else if (fromCurrency === "USD" && toCurrency === "EU") {
//         return Number(usdToEu);
//       } else if (fromCurrency === "USD" && toCurrency === "UAH") {
//         return Number(usdToUah);
//       } else if (fromCurrency === "USD" && toCurrency === "ZL") {
//         return Number(usdToZl);
//       } else if (fromCurrency === "EU" && toCurrency === "USD") {
//         return Number(euToUsd);
//       } else if (fromCurrency === "EU" && toCurrency === "ZL") {
//         return Number(euToZl);
//       } else if (fromCurrency === "EU" && toCurrency === "UAH") {
//         return Number(euToUah);
//       }
//     }
//     let getExchangeResult = getExchangeRate(fromCurrency);
//     result.textContent = (amount * getExchangeResult).toFixed(2);
//   }
// );

function convert(amount, fromCurrency, toCurrency) {
  function getExchangeRate(fromCurrency) {
    if (fromCurrency === "UAH" && toCurrency === "USD") {
      return Number(uahToUsd);
    } else if (fromCurrency === "UAH" && toCurrency === "EU") {
      return Number(uahToEu);
    } else if (fromCurrency === "UAH" && toCurrency === "ZL") {
      return Number(uahToZl);
    } else if (fromCurrency === "ZL" && toCurrency === "USD") {
      return Number(zlToUsd);
    } else if (fromCurrency === "ZL" && toCurrency === "EU") {
      return Number(zlToEu);
    } else if (fromCurrency === "ZL" && toCurrency === "UAH") {
      return Number(zlToUah);
    } else if (fromCurrency === "USD" && toCurrency === "EU") {
      return Number(usdToEu);
    } else if (fromCurrency === "USD" && toCurrency === "UAH") {
      return Number(usdToUah);
    } else if (fromCurrency === "USD" && toCurrency === "ZL") {
      return Number(usdToZl);
    } else if (fromCurrency === "EU" && toCurrency === "USD") {
      return Number(euToUsd);
    } else if (fromCurrency === "EU" && toCurrency === "ZL") {
      return Number(euToZl);
    } else if (fromCurrency === "EU" && toCurrency === "UAH") {
      return Number(euToUah);
    }
  }
  let getExchangeResult = getExchangeRate(fromCurrency);
  result.textContent = (amount * getExchangeResult).toFixed(2);
}

getResult.addEventListener("click", function () {
  let convertAmount = Number(inputAmount.value);
  let convertFrom = selectFrom.value;
  let convertTo = selectTo.value;

  convert(convertAmount, convertFrom, convertTo);
});

// function changeFlag(element) {
//   if (
//     currencyFrom[element].value !== "UAH" &&
//     currencyFrom[element].value !== "ZL" &&
//     currencyFrom[element].value !== "USD" &&
//     currencyFrom[element].value !== "EU"
//   ) {
//     currencyFromImage.style.backgroundImage = " ";
//   } else if (currencyFrom[element].value === "ZL") {
//     currencyFromImage.style.backgroundImage = "url(./images/ZL.png)";
//   } else if (currencyFrom[element].value === "USD") {
//     currencyFromImage.style.backgroundImage = "url(./images/USD.png)";
//   } else if (currencyFrom[element].value === "EU") {
//     currencyFromImage.style.backgroundImage = "url(./images/EU.png)";
//   } else if (currencyFrom[element].value === "UAH") {
//     currencyFromImage.style.backgroundImage = "url(./images/UAH.png)";
//   }
// }

// for (let i = 0; i < currencyFrom.length; i++) {
//   currencyFrom[i].addEventListener("change", changeFlag(i));
// }
