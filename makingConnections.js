//Clicking the edit profile button will change the user's name form Jane Doe to any other name
function changeName(element){
    // console.log("clicking the edit profile button");
    var ele = document.querySelector(element)
    ele.innerText = "Sponge Bob";
}


//clicking either button will remove the user from the requests list
function removeUser(element){
    // console.log("I'm clicking!!!")
    if(element == "#person1") {
        var ele = document.querySelector("#person1")
        ele.remove();
    } 
    else {
        var ele = document.querySelector("#person2")
        ele.remove();
    }
}


//Bonus: either buton > decreases the "connection Requests number" - Decline X
function decreaseRequests(id){
    // console.log("i'm decreasing the requests button");
    var element = document.querySelector(id);
    var likeCount = Number(element.innerText);
    likeCount -= 1;
    element.innerText = likeCount;
}


//Bonus the accept button also increases the "your Connections" - Accept ✓
function increasesConnections(id){
    // console.log("accept!!!")
    var element = document.querySelector(id);
    var likeCount = Number(element.innerText);
    likeCount += 1;
    element.innerText = likeCount;
}

