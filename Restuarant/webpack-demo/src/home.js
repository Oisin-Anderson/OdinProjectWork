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
    modal.id = "videoModal";
    let mcontent = document.createElement('div');
    mcontent.id = "modalContent";
    let iframe = document.createElement('iframe');
    iframe.setAttribute("src", "https://www.youtube.com/embed/4Z55di2gEXM");
    iframe.id = "iframe";
    console.log(iframe.innerHTML);
    mcontent.appendChild(iframe);
    modal.appendChild(mcontent);


    content.appendChild(homeimg);
    content.appendChild(modal);
};

export { homeLoad };