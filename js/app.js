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
const mainBody = document.getElementById('main_body');
// Add class 'active' to section when near top of viewport

//function to create new sections
function sectionCreater() {
    const section = document.querySelector('#sectionTemplate');
    const sectionClone = section.content.children[0].cloneNode(true);
    sectionClone.setAttribute('id', `section${numSection}`);
    sectionClone.querySelector('h2').textContent = `section ${numSection}`;
    sectionClone.classList.add(`section-${numSection}`);
    section.parentElement.appendChild(sectionClone);
}
// build the nav
function sectionTabCreater() {
    const newA = document.createElement('a');
    const newli = document.createElement("li");
    newA.href = `#section${numSection}`;
    newli.textContent = `section ${numSection}`;
    newli.setAttribute('id', `tab${numSection}`);
    newli.className = "tab";
    newli.classList.add(`section-${numSection}`);
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
//functionality for new section.
function newSection() {
    sectionCreater();
    sectionTabCreater();
}

let newSectionTab = document.getElementById('newSection');
newSectionTab.addEventListener(
    "click", newSection
);
//funtionality to check active class
function activeChecker() {
    const sectionList = document.querySelectorAll('.section');

    sectionList.forEach(section => {

        //removing non active classes
        section.classList.remove('your-active-class');

        //getting distance from the top.
        let topDistance = Math.floor(section.getBoundingClientRect().top);

        //checking if the section is in viewport
        if (topDistance < 150 && topDistance >= -150) {

            //getting class list names
            let classList = section.classList;

            //selecting the common class for section and navigation bar item.
            const className = classList.item(1);

            //changing class to active and getting both section and navigation item.
            section.classList.add("your-active-class");
            let group = document.getElementsByClassName(className);
            //changing color to active color
            group.item(0).style.cssText = "background-color:grey";
        } else {
            let classList = section.classList;
            const className = classList.item(1);
            let group = document.getElementsByClassName(className);
            //changing back the color. also can be done with css
            group.item(0).style.cssText = "background-color:white";
        }
    });
}
// functionality for making sections active when in viewport
window.addEventListener(
    'scroll', () => {
        activeChecker();
    }
)

//TO FULFILL REQUIREMENT OF HAVNG 4 SECTIONS
for (i = 1; i <= 4; i++) {
    newSection();
}