let updateBtn = document.getElementById("update-btn");
updateBtn.addEventListener("click", function() {updatePage();});


function updatePage() {

    let greeting = document.getElementById("greeting");
    let nameInput = document.getElementById("nameInput");

        greeting.textContent = "Hello " + nameInput.value + "!";

    let message = document.getElementById("message");
    let messageInput = document.getElementById("messageInput");

        message.textContent = messageInput.value;

    let colorChoice = document.getElementById("colorChoice");

        document.body.style.backgroundColor = colorChoice.value;
}

