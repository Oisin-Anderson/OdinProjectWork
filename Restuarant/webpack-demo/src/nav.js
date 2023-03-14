const navLoad = () => {
    const content = document.querySelector("#content");
    let nav = document.createElement('div');
    let logo = document.createElement('div');
    let tabs = document.createElement('div');
    let home = document.createElement('div');
    let menu = document.createElement('div');
    let contact = document.createElement('div');
    nav.classList.add("nav");
    tabs.classList.add("tabs");
    logo.textContent = "ShannonBridge Fort";
    home.id = 'home';
    menu.id = "menu";
    contact.id = "contact";
    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";
    tabs.appendChild(home);
    tabs.appendChild(menu);
    tabs.appendChild(contact);
    nav.appendChild(logo);
    nav.appendChild(tabs);

    content.appendChild(nav);
};

export { navLoad };