const getTheTitles = function(books) {

    let book = {}
    let titles = []

    for(let i=0;i<books.length;i++){
        book = books[i]
        titles[i] = book.title
    }

    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
