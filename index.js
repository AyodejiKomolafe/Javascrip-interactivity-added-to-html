console.log("hello world")
let message = document.querySelector("#message")



 function addMovie(event){
    event.preventDefault();
    let inputField = document.querySelector("input");
    let movie = document.createElement("li");
    let movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener("click",crossOffMovie);
    movie.appendChild(movieTitle);
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent ="X";
    movie.appendChild(deleteBtn);
    let list = document.querySelector("ul");
    list.appendChild(movie);
    
    
    deleteBtn.addEventListener("click",deleteMovie);
    
    inputField.value = ""
}

function deleteMovie(event){
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.firstChild.textContent} Deleted`;
    revealMessage()
}


function crossOffMovie(event){
    event.target.classList.toggle("checked");
    if(event.target.classList.contains("checked") === true){
        message.textContent = `${event.target.textContent} Watched`;
    }else{
        message.textContent = `${event.target.textContent} Added Back To List`;
    }
    revealMessage()
}

function revealMessage(){
    message.classList.remove("hide")
    setTimeout(callback,1000)
}
function callback(){
    message.classList.add("hide");
}

let forms = document.querySelector("form");
forms.addEventListener("submit",addMovie);
