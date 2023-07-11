import { loadNextPage } from './loadPage';

const renderNavBar = () => {
    // set up header div
    const content = document.querySelector('#content');
    const headerDiv = document.createElement("div");
    headerDiv.id='header';
    content.prepend(headerDiv);
    
    //create main title
    const mainTitle = document.createElement('h1');
    mainTitle.textContent = "KoffeeCorner";
    mainTitle.id = 'mainTitle';
    headerDiv.appendChild(mainTitle);

    //set up button div
    const buttonDiv = document.createElement('div');
    buttonDiv.id = "buttondiv";
    headerDiv.appendChild(buttonDiv);

    //add buttons
    const menuButton = document.createElement('button');
    menuButton.id="buttonMenu";
    menuButton.textContent = 'Menu';
    buttonDiv.appendChild(menuButton);

    const aboutUsButton = document.createElement('button');
    aboutUsButton.id="buttonAboutUs";
    aboutUsButton.textContent='About Us';
    buttonDiv.appendChild(aboutUsButton);

    const contactButton = document.createElement('button');
    contactButton.id='buttonContact';
    contactButton.textContent='Contact';
    buttonDiv.appendChild(contactButton);

    //add button functionality
    menuButton.addEventListener('click', () => {
        loadNextPage('menu')
    });
    contactButton.addEventListener('click', () => {
        loadNextPage('contact')
    });
    aboutUsButton.addEventListener('click', () => {
        loadNextPage('aboutus')
    });
    mainTitle.addEventListener('click', () => {
        loadNextPage('homepage')
    });
}

export default renderNavBar;