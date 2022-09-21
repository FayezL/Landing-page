/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const sections = Array.from(document.querySelectorAll("section"));
const navlist = document.getElementById("navbar__list");

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
//looping over all sections
function createListItem() {
  for (sec of sections) {
    //create an item
    listItem = document.createElement("li");
    //Adding the text
    listItem.innerHTML = `<li><a href="#${sec.id}" data-nav="${sec.id}"class="menu__link">${sec.dataset.nav}</a>`;
    //Add the listing to NavBar
    navlist.appendChild(listItem);
  }
}
createListItem();

// Styling the active class with Element.getBoundingClientRect
window.onscroll = function () {
  //selecting all section and doing a for each loop
  document.querySelectorAll("section").forEach(function (active) {
    if (
      active.getBoundingClientRect().top >= -200 &&
      active.getBoundingClientRect().top <= 150
    ) {
      active.classList.add("your-active-class");
    } else {
      active.classList.remove("your-active-class");
    }
  });
};

//Smooth scrolling on click
navlist.addEventListener("click", (toSec) => {
  toSec.preventDefault();
  if (toSec.target.dataset.nav) {
    document
      .getElementById(`${toSec.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
  }
});
