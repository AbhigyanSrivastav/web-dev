show()

//using es6 classes
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;

    }

}

class Display{

   validate(book) {

        if ((book.name).length < 2 || (book.author).length < 2) {
            return false;
        } else {
            return true;
        }
    }

   add (book) {
        let table = document.getElementById("tbody")
        let data = localStorage.getItem('data')
        if (data == null) {
            dataObj = []
        } else {
            dataObj = JSON.parse(data)
        }
    
        let info = {
            name: book.name,
            author: book.author,
            type: book.type
        }
    
        dataObj.push(info)
        localStorage.setItem('data', JSON.stringify(dataObj))
        show()
    
    }

    clear () {
        let libform = document.getElementById("libraryform")
        libform.reset()
    }

    error() {
        let msg = document.getElementById("msg")
    
        msg.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
    
        setTimeout(() => {
            msg.innerHTML = ""
        }, 2000);
    }
}

function show() {

    let table = document.getElementById("tbody")
    let data = localStorage.getItem('data')
    if (data == null) {
        dataObj = []
    } else {
        dataObj = JSON.parse(data)
    }
    let string = ""
    dataObj.forEach(element => {
        
       
        string =  string + `<td>${element.name}</td>
                   <td>${element.author}</td>
                   <td>${element.type}</td>
                   </tr>`
    });
       
    if (dataObj.length != 0) {
        table.innerHTML = string
    }
}



let libform = document.getElementById("libraryform")
libform.addEventListener('submit', libfrmsubmit)

function libfrmsubmit(e) {


    e.preventDefault()
    let name = document.getElementById("bookname").value
    let author = document.getElementById("author").value

    let type;

    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming")
    let cooking = document.getElementById("cooking")

    if (fiction.checked) {
        type = fiction.value
    }
    if (programming.checked) {
        type = programming.value
    }
    if (cooking.checked) {
        type = cooking.value
    }

    let book = new Book(name, author, type)

    let display = new Display()

    if (display.validate(book)) {

        display.add(book)
        display.clear()
    } else {
        display.error()
    }

}