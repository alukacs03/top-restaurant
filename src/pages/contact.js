const renderContact = () => {
    //basic grid setup
    const content = document.querySelector('#content');
    const contactGrid = document.createElement('div');
    contactGrid.id = 'contactgrid';
    content.appendChild(contactGrid);

    //render short floatie on the left
    const shortFloatie = document.createElement('div');
    shortFloatie.classList.add('sidefloatie');
    shortFloatie.id = 'contactUsFloatie';
    contactGrid.appendChild(shortFloatie);
    const shortStoryTitle = document.createElement('h2');
    shortStoryTitle.classList.add('sideFloatieTitle');
    shortStoryTitle.textContent = 'Contact Us';
    shortFloatie.appendChild(shortStoryTitle);

    const contactUsText = document.createElement('p');
    contactUsText.textContent = 'Ad id Lorem dolore exercitation enim do magna. Nisi reprehenderit adipisicing irure laborum do ad ad esse est labore ut laboris. Minim aute reprehenderit aliqua labore est culpa incididunt culpa ipsum in. In aute incididunt dolor excepteur consectetur esse anim deserunt laborum dolore esse.';
    contactUsText.id = 'contactUsText'
    shortFloatie.appendChild(contactUsText);

    //render the right floatie, on which all the services are explained with more detail
    const rightFloatie = document.createElement('div');
    rightFloatie.id = "contactUsRightFloatie";

    contactGrid.appendChild(rightFloatie);

    //fill the right floatie
    const contactRightFloatieTitle = document.createElement('h2')
    contactRightFloatieTitle.id = "contactRightFloatieTitle"
    contactRightFloatieTitle.innerHTML = 'Got any questions? <br> Send us an email!'
    rightFloatie.appendChild(contactRightFloatieTitle)


}

export default renderContact;