import wifisvg from '../resources/wifi.svg'

const renderHomepage = () => {
    //set up main grid
    const content = document.querySelector('#content');
    const mainGrid = document.createElement('div');
    mainGrid.id='maingrid';
    content.appendChild(mainGrid);

    //set up left side floatie
    const leftSideFloatie = document.createElement('div');
    leftSideFloatie.classList.add('sidefloatie');
    mainGrid.appendChild(leftSideFloatie);
    
    //add left side floatie content
    const servicesTitle = document.createElement('h2');
    servicesTitle.id='servicesTitle';
    leftSideFloatie.appendChild(servicesTitle);

    const servicesGrid = document.createElement('div');
    servicesGrid.id='servicesgrid';
    leftSideFloatie.appendChild(servicesGrid);

    //add servicesgrid content
    const servicesgridelement1 = document.createElement('div');
    servicesgridelement1.classList.add('serviceGridElement');
    servicesGrid.appendChild(servicesgridelement1);
    const wifiImage = document.createElement('img');
    wifiImage.src = "url('../resources/wifi.svg')";
    wifiImage.width='69px';
    wifiImage.height='69px';
    wifiImage.alt='wifi';
    servicesgridelement1.appendChild(wifiImage);
    const wifiText = document.createElement('p');
    wifiText.textContent='Free WiFi';
    servicesgridelement1.appendChild(wifiText);


}

export default renderHomepage;