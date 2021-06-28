//  select dom elements
const searchList = document.querySelector(".saerch-wrapper ul");
const filterInput = document.querySelector(".saerch-wrapper input");

// Search
filterInput.addEventListener("keyup", function () {
  const cities = searchList.children;
  for (i = 0; i < searchList.children.length; i++) {
    if (
      cities[i].firstElementChild.innerHTML
        .trim()
        .toUpperCase()
        .includes(filterInput.value.trim().toUpperCase())
    ) {
      cities[i].style.display = "";
    } else {
      cities[i].style.display = "none";
    }
  }
});
