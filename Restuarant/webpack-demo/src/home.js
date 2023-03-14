const homeLoad = () => {
    let content = document.querySelector("#content");
    while(content.children.length > 1){
        content.children[1].remove();
    }
    let homeimg = document.createElement('div');
    let hometext = document.createElement('div');
    let homeintro = document.createElement('div');
    let homecopy = document.createElement('div');
    let modalbutton = document.createElement('div');
    homeimg.classList.add("homeimg");
    homeintro.classList.add("homeintro");
    hometext.classList.add("hometext");
    modalbutton.id = "openModal";
    modalbutton.textContent = "OPEN MODAL";
    homeintro.textContent = "Discover This Iconic Fort On The Banks Of The River Shannon";
    homecopy.textContent = "Step back in time to explore this unique Fortification, visit our free exhibition, soak up the panoramic views that Shannonbridge Fort has to offer and take time to enjoy our Café & Gift Shop";
    hometext.appendChild(homeintro);
    hometext.appendChild(homecopy);
    homeimg.appendChild(hometext);
    homeimg.appendChild(modalbutton);

    let modal = document.createElement('div');
    modal.classList.add("modal");
    modal.id = "videomodal";
    let modalContent = document.createElement('div');
    modalContent.textContent = "Hello World";
    modalContent.classList.add("modalContent");
    modal.appendChild(modalContent);


    content.appendChild(homeimg);
    content.appendChild(modal);
};

export { homeLoad };