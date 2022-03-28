class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        return this.state *= 1.5;    
    }

    set state(state) {
        if (state > 100) {
            this._state = 100;
        }
        else if (state < 0) {
            this._state = 0;
        }
        else {
            this._state = state;
        }  
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = 'magazine'
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "detective";
    }
}



class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
           return this.books.push(book);
        }
        return;
    }

    findBookBy(type, value) {

        let result = this.books.find(book => value == book[type]);
        if (result) {
            return result;
        } else {
            return null;
        }
    }

    giveBookByName(bookName) {
        let giveBook = this.books.find(book => book.name === bookName);
        if (giveBook) {
             this.books.splice(this.books.indexOf(giveBook), 1);
             return giveBook;
        } else {
            return null;
        } 
     }
}