const renderMenu = () => {
    //basic grid setup
    const content = document.querySelector('#content');
    const menuGrid = document.createElement('div');
    menuGrid.id = 'menugrid';
    const menuTitleDiv = document.createElement('div');
    menuTitleDiv.id = 'menuTitleDiv';
    content.appendChild(menuGrid);
    menuGrid.appendChild(menuTitleDiv);
    const menuTitle = document.createElement('h1');
    menuTitle.id = "menuTitle"
    menuTitle.textContent = 'Take a gander and follow your heart...'
    menuTitleDiv.appendChild(menuTitle);

    //set up first item
    const itemOne = document.createElement('div');
    itemOne.classList.add('menuElement');
    menuGrid.appendChild(itemOne);
    const itemOneBg = document.createElement('div');
    itemOneBg.classList.add('menuItemBackground');
    itemOne.appendChild(itemOneBg);
    const itemOneName = document.createElement('h2');
    itemOneName.innerHTML = 'Corner <br> Special';
    itemOneName.classList.add('menuItemName');
    itemOneBg.appendChild(itemOneName);
    const dividingLineOne = document.createElement('div')
    dividingLineOne.classList.add('menuDividingLine')
    itemOneBg.appendChild(dividingLineOne)
    const itemOneDescription = document.createElement('p');
    itemOneDescription.textContent = 'Consectetur et in dolore excepteur voluptate ea labore est pariatur mollit ea officia. Veniam cupidatat pariatur aute est. Est aute do nulla ullamco irure ea deserunt. Est sit exercitation dolore exercitation officia dolore irure ad proident laborum Lorem eiusmod dolore commodo.'
    itemOneDescription.classList.add('menuItemDescription');
    itemOneBg.appendChild(itemOneDescription);
    const itemOnePrice = document.createElement('p');
    itemOnePrice.textContent = '2,00€';
    itemOnePrice.classList.add('menuItemPrice');
    itemOneBg.appendChild(itemOnePrice)

    //set up second item
    const itemTwo = document.createElement('div');
    itemTwo.classList.add('menuElement');
    menuGrid.appendChild(itemTwo);
    const itemTwoBg = document.createElement('div');
    itemTwoBg.classList.add('menuItemBackground');
    itemTwo.appendChild(itemTwoBg);
    const itemTwoName = document.createElement('h2');
    itemTwoName.innerHTML = 'Kold <br> Brew';
    itemTwoName.classList.add('menuItemName');
    itemTwoBg.appendChild(itemTwoName);
    const dividingLineTwo = document.createElement('div')
    dividingLineTwo.classList.add('menuDividingLine')
    itemTwoBg.appendChild(dividingLineTwo)
    const itemTwoDescription = document.createElement('p');
    itemTwoDescription.textContent = 'Consectetur et in dolore excepteur voluptate ea labore est pariatur mollit ea officia. Veniam cupidatat pariatur aute est. Est aute do nulla ullamco irure ea deserunt. Est sit exercitation dolore exercitation officia dolore irure ad proident laborum Lorem eiusmod dolore commodo.'
    itemTwoDescription.classList.add('menuItemDescription');
    itemTwoBg.appendChild(itemTwoDescription);
    const itemTwoPrice = document.createElement('p');
    itemTwoPrice.textContent = '3,50€';
    itemTwoPrice.classList.add('menuItemPrice');
    itemTwoBg.appendChild(itemTwoPrice)

    //third item
    const itemThree = document.createElement('div');
    itemThree.classList.add('menuElement');
    menuGrid.appendChild(itemThree);
    const itemThreeBg = document.createElement('div');
    itemThreeBg.classList.add('menuItemBackground');
    itemThree.appendChild(itemThreeBg);
    const itemThreeName = document.createElement('h2');
    itemThreeName.innerHTML = 'Klassic <br> Koffee';
    itemThreeName.classList.add('menuItemName');
    itemThreeBg.appendChild(itemThreeName);
    const dividingLineThree = document.createElement('div')
    dividingLineThree.classList.add('menuDividingLine')
    itemThreeBg.appendChild(dividingLineThree)
    const itemThreeDescription = document.createElement('p');
    itemThreeDescription.textContent = 'Consectetur et in dolore excepteur voluptate ea labore est pariatur mollit ea officia. Veniam cupidatat pariatur aute est. Est aute do nulla ullamco irure ea deserunt. Est sit exercitation dolore exercitation officia dolore irure ad proident laborum Lorem eiusmod dolore commodo.'
    itemThreeDescription.classList.add('menuItemDescription');
    itemThreeBg.appendChild(itemThreeDescription);
    const itemThreePrice = document.createElement('p');
    itemThreePrice.textContent = '1,50€';
    itemThreePrice.classList.add('menuItemPrice');
    itemThreeBg.appendChild(itemThreePrice)

    //fourth item
    const itemFour = document.createElement('div');
    itemFour.classList.add('menuElement');
    menuGrid.appendChild(itemFour);
    const itemFourBg = document.createElement('div');
    itemFourBg.classList.add('menuItemBackground');
    itemFour.appendChild(itemFourBg);
    const itemFourName = document.createElement('h2');
    itemFourName.innerHTML = 'Corner <br> Kappuccino';
    itemFourName.classList.add('menuItemName');
    itemFourBg.appendChild(itemFourName);
    const dividingLineFour = document.createElement('div')
    dividingLineFour.classList.add('menuDividingLine')
    itemFourBg.appendChild(dividingLineFour)
    const itemFourDescription = document.createElement('p');
    itemFourDescription.textContent = 'Consectetur et in dolore excepteur voluptate ea labore est pariatur mollit ea officia. Veniam cupidatat pariatur aute est. Est aute do nulla ullamco irure ea deserunt. Est sit exercitation dolore exercitation officia dolore irure ad proident laborum Lorem eiusmod dolore commodo.'
    itemFourDescription.classList.add('menuItemDescription');
    itemFourBg.appendChild(itemFourDescription);
    const itemFourPrice = document.createElement('p');
    itemFourPrice.textContent = '1,75€';
    itemFourPrice.classList.add('menuItemPrice');
    itemFourBg.appendChild(itemFourPrice)

    //fifth item
    const itemFive = document.createElement('div');
    itemFive.classList.add('menuElement');
    menuGrid.appendChild(itemFive);
    const itemFiveBg = document.createElement('div');
    itemFiveBg.classList.add('menuItemBackground');
    itemFive.appendChild(itemFiveBg);
    const itemFiveName = document.createElement('h2');
    itemFiveName.innerHTML = 'Corner <br> Amerikano';
    itemFiveName.classList.add('menuItemName');
    itemFiveBg.appendChild(itemFiveName);
    const dividingLineFive = document.createElement('div')
    dividingLineFive.classList.add('menuDividingLine')
    itemFiveBg.appendChild(dividingLineFive)
    const itemFiveDescription = document.createElement('p');
    itemFiveDescription.textContent = 'Consectetur et in dolore excepteur voluptate ea labore est pariatur mollit ea officia. Veniam cupidatat pariatur aute est. Est aute do nulla ullamco irure ea deserunt. Est sit exercitation dolore exercitation officia dolore irure ad proident laborum Lorem eiusmod dolore commodo.'
    itemFiveDescription.classList.add('menuItemDescription');
    itemFiveBg.appendChild(itemFiveDescription);
    const itemFivePrice = document.createElement('p');
    itemFivePrice.textContent = '2,00€';
    itemFivePrice.classList.add('menuItemPrice');
    itemFiveBg.appendChild(itemFivePrice)

    //sixth item
    const itemSix = document.createElement('div');
    itemSix.classList.add('menuElement');
    menuGrid.appendChild(itemSix);
    const itemSixBg = document.createElement('div');
    itemSixBg.classList.add('menuItemBackground');
    itemSix.appendChild(itemSixBg);
    const itemSixName = document.createElement('h2');
    itemSixName.innerHTML = 'Turkish <br> Koffee';
    itemSixName.classList.add('menuItemName');
    itemSixBg.appendChild(itemSixName);
    const dividingLineSix = document.createElement('div')
    dividingLineSix.classList.add('menuDividingLine')
    itemSixBg.appendChild(dividingLineSix)
    const itemSixDescription = document.createElement('p');
    itemSixDescription.textContent = 'Consectetur et in dolore excepteur voluptate ea labore est pariatur mollit ea officia. Veniam cupidatat pariatur aute est. Est aute do nulla ullamco irure ea deserunt. Est sit exercitation dolore exercitation officia dolore irure ad proident laborum Lorem eiusmod dolore commodo.'
    itemSixDescription.classList.add('menuItemDescription');
    itemSixBg.appendChild(itemSixDescription);
    const itemSixPrice = document.createElement('p');
    itemSixPrice.textContent = '2,50€';
    itemSixPrice.classList.add('menuItemPrice');
    itemSixBg.appendChild(itemSixPrice)
}

export default renderMenu;