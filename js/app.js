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
window.addEventListener(
    'scroll', () => {

    }
);
//function to create new sections
function sectionCreater() {
    const section = document.querySelector('#sectionTemplate');
    const sectionClone = section.content.children[0].cloneNode(true);
    sectionClone.setAttribute('id', `section${numSection}`);
    sectionClone.querySelector('h2').textContent = `section ${numSection}`;
    sectionClone.setAttribute('data-nav', `section ${numSection}`);
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
let newSectionTab = document.getElementById('newSection');
newSectionTab.addEventListener(
    "click",
    function newSection() {
        sectionCreater();
        sectionTabCreater();
    }
);
//funtionality to check active class
function activeChecker() {
    const sectionList = document.querySelectorAll('.section');
    sectionList.forEach(section => {
        let topDistance = Math.floor(section.getBoundingClientRect().top);
        section.classList.remove('your-active-class');
        if (topDistance < 150 && topDistance >= -150) {
            section.classList.add('your-active-class');
        }
    });
}
// functionality for making sections active when in viewport
window.addEventListener(
    'scroll', () => {
        activeChecker();
    }
)

//TO FULFILL REQUIRMENT OF HAVNG 4 SECTIONS --Loops not used as there are only a few initial sections.
sectionTabCreater();
sectionTabCreater();
sectionTabCreater();
sectionCreater();
sectionTabCreater();