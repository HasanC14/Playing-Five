function display(playerID) {
    const NewElement = document.createElement("li");
    NewElement.innerText = document.getElementById(playerID).innerText;
    document.getElementById("display-ol").appendChild(NewElement);
}