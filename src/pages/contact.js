const renderContact = () => {
    //basic grid setup
    const content = document.querySelector('#content');
    const contactGrid = document.createElement('div');
    contactGrid.id = 'contactgrid';
    content.appendChild(contactGrid);
    const contactTitle = document.createElement('h1');
    contactTitle.id = "contactTitle"
    contactTitle.textContent = 'Contact us!'
    contactGrid.appendChild(contactTitle);
}

export default renderContact;