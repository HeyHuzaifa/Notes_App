// console.log("Working");
showNotes();
// Recognizing variables

let addBtn = document.getElementById('addBtn');
let clearBtn = document.getElementById('clearBtn');
let addTxt = document.getElementById('addTxt');
let deleteBtn = document.getElementById('btn-primary');
let plus = document.getElementById('plus');
let form = document.getElementById('form');
let notesBtn = document.getElementById('notesBtn');

const notes = JSON.parse(localStorage.getItem("notes") || "[]");
// Main Working



function removeError() {
    setTimeout(() => {
        let nullval = document.getElementById('error');
        nullval.classList.add('none');
        nullval.classList.remove('block');
        // console.log(nullval);
        plus.classList.remove('none');
        // console.log("set timeout-1");
    }, 1500);
}

function addError() {
    // console.log("null val");
    let nullval = document.getElementById('error');
    nullval.classList.add('block');
    nullval.classList.remove('none');
    plus.classList.add('none');
}

let noteTitle = document.getElementById('noteTitle');

noteTitle.addEventListener('input', (e) => {
    let titleVal = e.target.value;
    // console.log(titleVal);
    if (titleVal === "") {
        e.preventDefault();
        addError();
        removeError();
        plus.classList.add('hidden');
    }
    else {
        plus.classList.remove('hidden');
    }
})


plus.addEventListener('click', () => {
    form.classList.remove('none');
    notesBtn.classList.remove('none')
    addBtn.classList.remove('none')
})



// Working on if user add a note


addBtn.addEventListener('click', (e) => {
    let noteTitle = document.getElementById('noteTitle');
    e.preventDefault();
    let title = noteTitle.value,
        noteContent = addTxt.value;
    if (title || noteContent != "") {
        let noteObj = {
            Title: title, noteContent: noteContent
        }

        notes.push(noteObj);
        localStorage.setItem("notes", JSON.stringify(notes))
        noteTitle.value = "";
        addTxt.value = "";
        plus.classList.add('none')
        // console.log(notes);
        showNotes();
        window.location.reload();
    }
})



// Working on if user want to clear all notes

clearBtn.addEventListener('click', () => {
    localStorage.removeItem("notes");
    window.location.reload();
})

// Working on showing notes
function showNotes() {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");
    // first removing all the notes then adding new notes
    document.querySelectorAll('.noteCard').forEach(new_2 => new_2.remove());
    notes.forEach((note, index) => {
        let html = `
        <div class="noteCard p-2 mx-my new_2" id="noteContainer">
        <div class="">
            <h5 class="card-title color-white ml">${note.Title}</h5>
        </div>
        <div class="" id="noteContent">
            <p class="card-text">${note.noteContent}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary mt-1">Delete
                Note</button>
            <button id="" class="btn btn-primary mt-1 ml-1">Edit Note</button>
        </div>
    </div> `

        let addNote = document.getElementById('notes')
        if (notes.length != 0) {
            let form = document.getElementById('form');
            // addNote.innerHTML = html
            addNote.insertAdjacentHTML("afterend", html)
            form.classList.add('none')
        }

        if (notes.length >= 3) {
            
            let addBtn = document.getElementById('addBtn');
            let notesBtn = document.getElementById('notesBtn');
            notesBtn.classList.remove('none')
            addBtn.classList.add('none')
        }
    })
}


function deleteNote(index) {

    // console.log("i am deleting this", index);
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

// Search Bar

let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})

// console.log(notes);


hamb.addEventListener('click', ()=>{
    cross.classList.remove('none')
    options.classList.remove('none')
    hamb.classList.add('none')
})
cross.addEventListener('click', ()=>{
    cross.classList.add('none')
    options.classList.add('none')
    hamb.classList.remove('none')
})