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
const section = document.getElementById('section1');
const mainBody = document.getElementById('main_body');

//function to create new sections
function sectionCreater() {
    const sectionClone = section.cloneNode(true);
    sectionClone.setAttribute('id', `section${numSection}`);
    mainBody.appendChild(sectionClone);
}
// build the nav
function sectionTabCreater() {
    const newA = document.createElement('a');
    const newli = document.createElement("li");
    newA.href = `#section${numSection}`;
    newli.textContent = `section ${numSection}`;
    numSection++;
    newA.appendChild(newli);
    navList.appendChild(newA);
    // Scroll to anchor ID using scrollTO event
    newA.addEventListener(
        'click',
        function(event) {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute("href");
            let top = document.querySelector(targetId).offsetTop - 100;
            window.scrollTo({
                top: top,
                behavior: "smooth",
            })
        }
    );
}
//initial number of sections.
sectionTabCreater();
sectionTabCreater();
sectionTabCreater();

//functionality for new section.
let newSectionTab = document.getElementById('newSection');
newSectionTab.addEventListener(
    "click",
    function newSection() {
        sectionCreater();
        sectionTabCreater();
    }
);

// Add class 'active' to section when near top of viewport



/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click


// Set sections as active