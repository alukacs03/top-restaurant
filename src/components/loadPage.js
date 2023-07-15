import renderHomepage from "../pages/homepage";
import renderMenu from "../pages/menu";
import renderAboutUs from "../pages/aboutus";
import renderContact from "../pages/contact";
import renderNavBar from "./renderNavBar";


// initialize the first loading of the page
const initialLoad = () => {
    document.body.style.backgroundImage = "url('666ad14339e1b3b886db.svg')";
    renderNavBar();
    renderHomepage();
};


//load the page clicked by the user
const loadNextPage = (nextPageName) => {
    const contentDiv = document.querySelector("#content");
    console.log(nextPageName, contentDiv);
    contentDiv.innerHTML = "";
    renderNavBar();
    if (nextPageName == 'menu') {
        renderMenu();
    } else if (nextPageName == 'contact') {
        renderContact();
    } else if (nextPageName == 'aboutus') {
        renderAboutUs();
    } else {
        renderHomepage();
    }

};


export { initialLoad, loadNextPage };