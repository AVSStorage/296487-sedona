var link = document.querySelector(".search-hotels__button");
var input = document.querySelector(".input");
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  input.classList.toggle("input-show");});

