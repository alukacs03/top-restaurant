import wifiImg from '../resources/wifi.png';
import chargeImg from '../resources/battery.png';
import bookImg from '../resources/bookcorner.png';


const renderAboutUs = () => {
    //set up basic grid
    const content = document.querySelector('#content');
    const aboutGrid = document.createElement('div');
    aboutGrid.id = 'aboutgrid';
    content.appendChild(aboutGrid);

    //render short floatie on the left
    const shortFloatie = document.createElement('div');
    shortFloatie.classList.add('sidefloatie');
    shortFloatie.id = 'aboutUsFloatie';
    aboutGrid.appendChild(shortFloatie);
    const shortStoryTitle = document.createElement('h2');
    shortStoryTitle.classList.add('sideFloatieTitle');
    shortStoryTitle.textContent = 'About Us';
    shortFloatie.appendChild(shortStoryTitle);

    const aboutUsText = document.createElement('p');
    aboutUsText.innerHTML = 'KoffeeCorner is an independent café with around <a class="orangetext">35 locations</a> in Europe, with more to come soon. <br>Established in 2003, we\'ve accumulated a ton of experience, to serve you with the greatest koffee and provide outstanding customer service. <br> Come, taste our delicious <a class="orangetext">koffee</a>, get some work done or relax a bit.';
    aboutUsText.id = 'aboutUsText'
    shortFloatie.appendChild(aboutUsText);

    //render the right floatie, on which all the services are explained with more detail
    const rightFloatie = document.createElement('div');
    rightFloatie.id = "aboutUsRightFloatie";

    aboutGrid.appendChild(rightFloatie);

    //set up free wifi card floatie thing
    const wifiCard = document.createElement('div');
    rightFloatie.appendChild(wifiCard);
    wifiCard.classList.add('aboutUsRightFloatieElement');
    const wifiTitle = document.createElement('h2');
    wifiTitle.textContent = "Free WiFi";
    const wifiImage = document.createElement('img');
    wifiImage.src = wifiImg;
    wifiImage.width = '69';
    wifiImage.height = '69';
    wifiImage.alt = 'wifi';
    wifiCard.appendChild(wifiImage);
    wifiCard.appendChild(wifiTitle);
    const wifiText = document.createElement('p');
    wifiText.innerHTML = "Occaecat proident pariatur laborum ea eiusmod sit pariatur aliqua aliqua sunt. Deserunt dolor quis ad reprehenderit laboris pariatur ullamco culpa qui deserunt dolor. Pariatur commodo culpa officia esse. Est in esse proident commodo veniam sint aliquip nisi sunt nostrud mollit.";
    wifiCard.appendChild(wifiText);

    //set up charging floatie thing
    const chargingCard = document.createElement('div');
    rightFloatie.appendChild(chargingCard);
    chargingCard.classList.add('aboutUsRightFloatieElement');
    const chargingTitle = document.createElement('h2');
    chargingTitle.textContent = "Free Charging";
    const chargeImage = document.createElement('img');
    chargeImage.src = chargeImg;
    chargeImage.width = '69';
    chargeImage.height= '69';
    chargeImage.alt = 'charge';
    chargingCard.appendChild(chargeImage);
    chargingCard.appendChild(chargingTitle);
    const chargeText = document.createElement('p');
    chargeText.innerHTML = "Occaecat proident pariatur laborum ea eiusmod sit pariatur aliqua aliqua sunt. Deserunt dolor quis ad reprehenderit laboris pariatur ullamco culpa qui deserunt dolor. Pariatur commodo culpa officia esse. Est in esse proident commodo veniam sint aliquip nisi sunt nostrud mollit.";
    chargingCard.appendChild(chargeText);


    //set up bookcorner floatie thing
    const bookCard = document.createElement('div');
    rightFloatie.appendChild(bookCard);
    bookCard.classList.add('aboutUsRightFloatieElement');
    const bookTitle = document.createElement('h2');
    bookTitle.textContent = "BookCorner";
    const bookImage = document.createElement('img');
    bookImage.src = bookImg;
    bookImage.width = '60';
    bookImage.height= '69';
    bookImage.alt = 'books';
    bookCard.appendChild(bookImage);
    bookCard.appendChild(bookTitle);
    const bookText = document.createElement('p');
    bookText.innerHTML = "Occaecat proident pariatur laborum ea eiusmod sit pariatur aliqua aliqua sunt. Deserunt dolor quis ad reprehenderit laboris pariatur ullamco culpa qui deserunt dolor. Pariatur commodo culpa officia esse. Est in esse proident commodo veniam sint aliquip nisi sunt nostrud mollit.";
    bookCard.appendChild(bookText);
    
}

export default renderAboutUs;