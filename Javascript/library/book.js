$ = function(id){
	return document.getElementById(id);
}
$$ = function(id){
	return document.getElementsByClassName(id);
}

let library = [];



function book(id, title, author, pages, read){
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}


function addBook(event){
    const form = document.getElementById("addBook");
    const formData = new FormData(form);
    event.preventDefault();

    const entry = new book();
    if(library.length == 0){
        entry.id = 1;
    }else{
        entry.id = parseInt(library[library.length - 1].id) + 1;
    }
    entry.title = formData.get("title");
    entry.author = formData.get("author");
    entry.pages = formData.get("pages");
    entry.read = "Nope";
    library.push(entry);
    console.log(library)

    refresh();
    
}

function refresh(){
    const output = $("books");
    output.innerHTML = "";
    for(let i=0; i<library.length; i++){
        const div = document.createElement('div');
        //div.className = "card";
        const title = document.createElement('h1');
        title.textContent = library[i].title;
        div.appendChild(title);
        const id = document.createElement('h4');
        id.textContent = library[i].id;
        div.appendChild(id);
        const author = document.createElement('h4');
        author.textContent = library[i].author;
        div.appendChild(author);
        const pages = document.createElement('h4');
        pages.textContent = library[i].pages;
        div.appendChild(pages);
        const read = document.createElement('h4');
        read.textContent = library[i].read;
        div.appendChild(read);
        let del = document.createElement('button');
        del.onclick = function(){removeBook(this.value)};
        del.value = i;
        del.innerHTML = "Delete";
        div.appendChild(del);
        let update = document.createElement('button');
        update.onclick = function(){readBook(this.value)};
        update.value = i;
        update.innerHTML = "Change";
        div.appendChild(update);
        output.appendChild(div);
    }

}

function removeBook(i){
    let trash = library.splice(i, 1);
    refresh();

}

function readBook(i){
    let temp = new book();
    temp = library[i];
    //console.log(temp);
    if(temp.read == "Yeas"){
        temp.read = "Nope"
    }else if(temp.read == "Nope"){
        temp.read = "Yeas"
    }
    library[i] = temp;
    //console.log(temp)

    refresh();

}

window.onload = function(){
    const form = document.getElementById("addBook");
    form.addEventListener('submit', addBook);
    
}

function butCheck(){
    console.log("Here");
    let del = $$("removeBook");
    for(let i=0; i<del.length; i++){
        del[i].addEventListener("click", function(){removeBook(i)})
    }
    let update = $$("readBook");
    for(let i=0; i<update.length; i++){
        update[i].addEventListener("click", function(){updateBook(i)})
    }
}