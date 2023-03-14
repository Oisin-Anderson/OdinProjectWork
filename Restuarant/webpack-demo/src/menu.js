import food from "./images/foodmenu.jpg"

const menuLoad = () => {
    let content = document.querySelector("#content");
    while(content.children.length > 1){
        content.children[1].remove();
    }
    let body = document.createElement('div');
    body.classList.add("menubody");

    let menu = document.createElement('div');
    let foodmenu = document.createElement('img');
    foodmenu.src = food;
    menu.classList.add("menu");
    foodmenu.classList.add("foodmenu");
    menu.appendChild(foodmenu);
    body.appendChild(menu);

    content.appendChild(body);
};

export { menuLoad };