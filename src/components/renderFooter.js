const renderFooter = () => {
    const content = document.querySelector('#content');
    const footerBar = document.createElement('div');
    const footerText = document.createElement('p');
    footerBar.id = "footerBar";
    content.appendChild(footerBar);
    footerText.innerHTML = 'Made by <a href="https://github.com/lukiakos" target="_blank" rel="noopener noreferrer">Ákos Lukács</a> for The Odin Project'
    footerBar.appendChild(footerText)
}

export default renderFooter;