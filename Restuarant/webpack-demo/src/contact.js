const contactLoad = () => {
    let content = document.querySelector("#content");
    while(content.children.length > 1){
        content.children[1].remove();
    }
    let body = document.createElement('div');
    let div = document.createElement('div');
    body.classList.add("contactimg");
    div.classList.add("contactdiv");

    let form = document.createElement('form');
    let heading = document.createElement('h2');
    let name = document.createElement('input');
    let email = document.createElement('input');
    let msg = document.createElement('textarea');
    let submit = document.createElement('button');
    heading.textContent = "Contact Us";
    name.placeholder = "Name";
    name.classList.add("input");
    email.placeholder = "Email";
    email.classList.add("input");
    msg.placeholder = "Message";
    msg.classList.add("text");
    submit.textContent = "Send";
    submit.classList.add("submit");
    div.appendChild(form);
    div.appendChild(heading);
    div.appendChild(name);
    div.appendChild(email);
    div.appendChild(msg);
    div.appendChild(submit);
    body.appendChild(div);

    content.appendChild(body);
};

export { contactLoad };