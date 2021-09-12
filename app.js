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


