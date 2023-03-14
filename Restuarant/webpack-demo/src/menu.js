const menuLoad = () => {
    let content = document.querySelector("#content");
    while(content.children.length > 1){
        content.children[1].remove();
    }
    let body = document.createElement('div');
    body.classList.add("menubody");

    let header = document.createElement('h2');
    header.textContent = "Food Menu";
    body.appendChild(header);

    let menu = document.createElement('div');
    menu.classList.add("menu");
    let items = ["tleft","tcenter","tright","bleft","bcenter","bright"]
    let headers = ["Light Bites","Big Bites","Kiddie Bites","Sandwiches/Wraps","Pizza","Sips"]
    
    for(let i=0; i<items.length; i++){
        let div = document.createElement('div');
        div.classList.add(items[i]);
        let title = document.createElement('h4');
        title.textContent = headers[i];
        title.classList.add("menutitle");
        div.appendChild(title);

        let options = document.createElement('div');
        let food = [];
        food = foods(items[i]);
        for(let j=0;j<food.length;j++){
            let item = document.createElement('h6');
            item.textContent = food[j];
            options.appendChild(item);

        }
        div.appendChild(options);
        menu.appendChild(div);

    }
    body.appendChild(menu);


    

    content.appendChild(body);
};

function foods(option){
    let tleft = ["Soup Of The Day","Fish Cakes","Caesar Salad","Goats Cheese Salad","The River Cafe Salad","Goujons","Smoked Salmon","Prawn Cocktail"];
    let tcenter = ["Crispy Beer Battered Cod And Chips","Prime Hereford Beef Burger","Homemade Beef Lasagne","Vegetarian Option","Quiche Of The Day"];
    let bright = ["Bottled Water","Tea","Coffee","Latte/Espresso/Cappuccino","Milk","Fruit Juice","Minerals","Wine: Red, White Or Rose","Bottled Beer"];
    let bleft = ["Blt","Ham And Cheese Toastie","Cajun Chicken Wrap","Tuna And Sweetcorn Wrap","Veggie Wrap","Hot Chicken Wrap","Italian Wrap"];
    let bcenter = ['12" Margherita','12" Pepperoni','12" Bacon And Mushroom','12" Goats Cheese And Red Onion','12" Ham And Pineapple','12" Cajun Chicken'];
    let tright = ["Soup With Brown Bread",'8" Pizza Margherita',"Chicken Goujons And Chips","Sausages And Chips"];


    if(option == "tleft"){
        return tleft;
    }
    if(option == "tcenter"){
        return tcenter;
    }
    if(option == "tright"){
        return tright;
    }
    if(option == "bleft"){
        return bleft;
    }
    if(option == "bcenter"){
        return bcenter;
    }
    if(option == "bright"){
        return bright;
    }
}

export { menuLoad };