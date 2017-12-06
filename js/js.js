var link = document.querySelector(".search-hotels__button");
var input = document.querySelector(".input");
var close = input.querySelector(".input-close");
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  input.classList.add("input-show");
})
