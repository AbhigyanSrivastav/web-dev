console.log("welcome to index.js");
shownotes();
//if user adds a note add it to the local storage

let addbtn = document.getElementById('addbtn')

addbtn.addEventListener('click', (e) => {
    let addtit = document.getElementById('addtit')
    let title = localStorage.getItem('title')
    let addTxt = document.getElementById('addtxt')
    let notes = localStorage.getItem('notes')

    if (notes == null) {

        titleObj = []
        notesObj = []
    } else {

        titleObj = JSON.parse(title)
        notesObj = JSON.parse(notes)
    }
    console.log(addtit.value);
  
    notesObj.push(addTxt.value)
    titleObj.push(addtit.value)
    localStorage.setItem('title', JSON.stringify(titleObj))
    localStorage.setItem('notes', JSON.stringify(notesObj))
    addTxt.value = "";
    addtit.value = "";
    // console.log(notesObj);
    // console.log(titleObj);

    shownotes();
})

//Function To Show Elements From Local Storage

function shownotes(e) {
    let addtit = document.getElementById('addtit')
    let title = localStorage.getItem('title')
    let addTxt = document.getElementById('addtxt')
    let notes = localStorage.getItem('notes')

    if (notes == null) {

        titleObj = []
        notesObj = []
    } else {

        titleObj = JSON.parse(title)
        notesObj = JSON.parse(notes)
    }

    let html = ""
    
      let arr=Array.from(titleObj)
       
        notesObj.forEach((element, index) => {
           
            html = html + `
        <div class="notecard my-2 mx-2 card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">${arr[index]}</h5>
            <p class="card-text">${element}</p>
            <button class="btn btn-primary" id=${index}   onclick="Delete(this.id)">Delete Node</button>
          </div>
        </div>
    
     `
            
        });

    // console.log(html)
    let noteElem = document.getElementById('notes')

    if (notesObj.length != 0) {
        noteElem.innerHTML = html
    }
    else {
        noteElem.innerHTML = `Nothing To Show. Use Add Note`
    }
}

//function to delete a node

function Delete(index) {
    // console.log("I am deleting", index);
    titleObj.splice(index, 1)
    notesObj.splice(index, 1)
    localStorage.setItem('title', JSON.stringify(titleObj))
    localStorage.setItem('notes', JSON.stringify(notesObj))
    shownotes();
}

//function to search

let search = document.getElementById('search')

search.addEventListener('input', () => {

    let inputVal = search.value.toLowerCase()

    let notecard = document.getElementsByClassName('notecard')
    console.log(notecard);

    Array.from(notecard).forEach((element) => {
        let tittxt= element.getElementsByTagName('h5')[0].innerText
        let cardtxt = element.getElementsByTagName("p")[0].innerText

        if (cardtxt.includes(inputVal) || tittxt.includes(inputVal)) {
            element.style.display = "block"
        } else {
            element.style.display = "none"

        }
    })
})


                                        