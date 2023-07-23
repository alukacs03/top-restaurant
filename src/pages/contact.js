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

    const contactForm = document.createElement('form');
    contactForm.method = 'post';
    contactForm.id = 'contactForm';
    rightFloatie.appendChild(contactForm);

    const nameLabel = document.createElement('label');
    nameLabel.innerHTML = 'Name';
    nameLabel.htmlFor = 'name';
    nameLabel.id = 'nameLabel'
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.maxLength = 25;
    nameInput.minLength = 3;
    nameInput.id = 'name';
    nameInput.required = 'true';
    nameInput.placeholder = 'Write your name here...'
    nameInput.classList.add('contactInputField');
    contactForm.appendChild(nameLabel);
    contactForm.appendChild(nameInput);

    const emailLabel = document.createElement('label');
    emailLabel.innerHTML = 'Email';
    emailLabel.htmlFor = 'email';
    emailLabel.id = 'emailLabel';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.maxLength = 50;
    emailInput.minLength = 3;
    emailInput.id = 'email';
    emailInput.required = 'true';
    emailInput.placeholder = 'name@mail.com'
    emailInput.classList.add('contactInputField');
    contactForm.appendChild(emailLabel);
    contactForm.appendChild(emailInput);

    const messageLabel = document.createElement('label');
    messageLabel.innerHTML = 'Message';
    messageLabel.htmlFor = 'message';
    messageLabel.id = 'messageLabel';
    const messageInput = document.createElement('textarea');
    messageInput.id = 'message';
    messageInput.classList.add('contactInputField');
    messageInput.required = 'true';
    messageInput.placeholder = 'Write your message here...'
    contactForm.appendChild(messageLabel);
    contactForm.appendChild(messageInput);

    const sendButton = document.createElement('input');
    sendButton.id = 'contactSendButton';
    sendButton.type = 'submit';
    sendButton.value = 'Send message';
    contactForm.appendChild(sendButton);

}

export default renderContact;