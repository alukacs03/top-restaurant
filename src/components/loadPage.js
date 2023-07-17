import renderHomepage from "../pages/homepage";
import renderMenu from "../pages/menu";
import renderAboutUs from "../pages/aboutus";
import renderContact from "../pages/contact";
import renderNavBar from "./renderNavBar";
import renderFooter from "./renderFooter";


// initialize the first loading of the page
const initialLoad = () => {
    document.body.style.backgroundImage = "url('666ad14339e1b3b886db.svg')";
    renderNavBar();
    renderHomepage();
    renderFooter();
};


//load the page clicked by the user
const loadNextPage = (nextPageName) => {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";
    renderNavBar();
    const navbarButtonsNode = document.querySelectorAll('.navbarbutton');
    navbarButtonsNode.forEach((element) => {
        element.classList.remove('currentPageButton');
    })
    if (nextPageName == 'menu') {
        navbarButtonsNode[0].classList.add('currentPageButton')
        renderMenu();
    } else if (nextPageName == 'contact') {
        navbarButtonsNode[2].classList.add('currentPageButton')
        renderContact();
    } else if (nextPageName == 'aboutus') {
        navbarButtonsNode[1].classList.add('currentPageButton')
        renderAboutUs();

    } else {
        renderHomepage();
    }
    renderFooter();

};


export { initialLoad, loadNextPage };