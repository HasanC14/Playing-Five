function display(playerID, playerBtn) {
    const count = document.getElementsByTagName('li').length;
    if (count < 5) {
        const NewElement = document.createElement("li");
        NewElement.innerText = document.getElementById(playerID).innerText;
        document.getElementById("display-ol").appendChild(NewElement);
        document.getElementById(playerBtn).disabled = true;
    }
    else alert("You Cannot Select More than Five Player");
}
function Validation(evnt) {
    const char = String.fromCharCode(evnt.which);
    if (!(/[0-9]/.test(char))) {
        alert('Please Input Number Only');
    }
}