const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();

eventListeners();

function eventListeners(){
    githubForm.addEventListener("submit",getData);
    clearLastUsers.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearched);
}

function getData(e){

    let username = nameInput.value.trim();

    if(username === ""){
        alert("Please enter a valid username");
    }else{
        github.getGithubData(username)
            .then(response => {
                if(response.user.message === "Not Found"){
                    console.log("Err");
                }else{
                    console.log(response);
                }
            })
            .catch(err => console.log(err));
    }



    e.preventDefault();
}

function clearAllSearched(){

}

function getAllSearched(){

}