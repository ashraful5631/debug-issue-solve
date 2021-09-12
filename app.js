const addTitle = document.getElementById("addTitle");
const addText = document.getElementById("addText");
const saveNoteButton = document.getElementById("save-button");

let userImg
let userName
let userEmail

fetch("https://randomuser.me/api/")
  .then(res => res.json())
  .then(data => {
    // console.log(data)
    userName = data.results[0].name
    userImg = data.results[0].picture.medium
    userEmail = data.results[0].email

    // console.log(userEmail,userImg,userName)
    displayUserInfo(userImg, userName, userEmail)
  })



function displayUserInfo(userImg, userName, userEmail) {


  document.getElementById("user-info").innerHTML = `
  
  <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${userImg}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${userName.first} ${userName.last}</h5>
        <p class="card-text">${userEmail}</p>
      </div>
    </div>
  </div>
</div>
`;
}
class NoteTemplate {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }
}

//function for saving note
saveNoteButton.addEventListener("click", function () {
  let notesArray = [];
  const alertDiv = document.getElementById("alert-user");
  const allNotes = localStorage.getItem("notes");

  console.log(allNotes)
  if (allNotes === null) {
    notesArray = [];
  } else {
    notesArray = JSON.parse(allNotes);
  }

  let title = addTitle.value;
  let body = addText.value;
  const singleNote = new NoteTemplate(title, body);
  if (singleNote.title.length < 1 || singleNote.body.length < 1) {
    alertDiv.innerHTML = `<div class="alert alert-warning"  role="alert">
        Please enter a title and body texts both...
      </div>`;

    return;
  }
  else {
    alertDiv.innerHTML = "";
    notesArray.push(singleNote);

    localStorage.setItem("notes", JSON.stringify(notesArray));
    document.getElementById("display-notes").innerHTML = "";
    showNotes();
    addTitle.value = "";
    addText.value = "";
  }
});