$ = function(id){
	return document.getElementById(id);
}

let myLibrary = [];

function book(id, title, author, pages, read){
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function addBook(){
    let num = myLibrary.length + 1;
    //let formData = new FormData(document.querySelector('addBook'))
    console.log(formData)
    let title = $("title").innerHTML;
    let author = $("author").innerHTML;
    let pages = $("pages").innerHTML;
    const entry = new book( num, title, author, pages, "Nope")
    myLibrary.push(entry);
    console.log("Hello");
    console.log(myLibrary);
}