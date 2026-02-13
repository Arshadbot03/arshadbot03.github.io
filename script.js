document.getElementById("feedbackForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let response = document.getElementById("responseMessage");

    if (name === "" || email === "" || message === "") {
        response.style.color = "red";
        response.textContent = "Please fill in all fields.";
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        response.style.color = "red";
        response.textContent = "Please enter a valid email address.";
        return;
    }

    response.style.color = "green";
    response.textContent = "Thank you! Your feedback has been submitted successfully.";

    document.getElementById("feedbackForm").reset();
});
