$ = function(id){
	return document.getElementById(id);
}

const library = [];

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
    entry.id = library.length + 1;
    entry.title = formData.get("title");
    entry.author = formData.get("author");
    entry.pages = formData.get("pages");
    entry.read = "No";
    library.push(entry);
    console.log(library)

    refresh();
    
}

function refresh(){
    const output = $("books");
    output.innerHTML = "";
    for(let i=0; i<library.length; i++){
        const div = document.createElement('div');
        div.classList.add("card")
        const title = document.createElement('h1');
        title.textContent = library[i].title;
        div.append(title);
        const id = document.createElement('h4');
        id.textContent = library[i].id;
        div.append(id);
        const author = document.createElement('h4');
        author.textContent = library[i].author;
        div.append(author);
        const pages = document.createElement('h4');
        pages.textContent = library[i].pages;
        div.append(pages);
        const read = document.createElement('h4');
        read.textContent = library[i].read;
        div.append(read);
        console.log(div);
        output.innerHTML += div.innerHTML;
    }

}

window.onload = function(){
    const form = document.getElementById("addBook");
    form.addEventListener('submit', addBook);
}