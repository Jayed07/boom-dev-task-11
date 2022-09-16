import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  const hotProductsList = document.querySelectorAll(".subtitle is-6 price hot");

  hotProductsList.forEach((hotProduct) => {
    hotProduct.innerHTML += '🔥';
  });

  
  // 🔥
});
