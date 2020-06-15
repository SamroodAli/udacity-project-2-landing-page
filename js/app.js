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
 * Define Global Variables
 * 
 */


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */
// global variables
// let numSection be th number of sections
let numSection = 1;
const navList = document.getElementById('navbar__list');
// build the nav
function newSection() {
    const newA = document.createElement('a');
    const newli = document.createElement("li");
    newA.href = `#section${numSection}`;
    newli.textContent = `section${numSection}`;
    numSection++;
    newA.appendChild(newli);
    navList.appendChild(newA);
}

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active