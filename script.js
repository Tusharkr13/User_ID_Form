// script.js
document.getElementById("userIdForm").addEventListener("submit", function(event){
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (validateUserId(email)) {
        message.textContent = "Form submitted successfully!";
        message.style.color = "green";
    } else {
        message.textContent = "Invalid User ID. Please use only alphanumeric characters.";
        message.style.color = "red";
    }
});

// Function to validate user ID (alphanumeric check)
function validateUserId(email) {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(email);
}
