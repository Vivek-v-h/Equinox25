
function sendEmail(name, email, company, message) {
    emailjs.send("service_g990vhh", "template_31wd0nj", {
        from_name: name,
        from_email: email,
        company_name: company,
        message: message
    })
    .then(function(response) {
        if (response.status === 200) {
            alert("Thank you! Your message has been sent successfully.");
        } else {
            alert("Oops! Something went wrong. Please try again later.");
        }
    })
    .catch(function(error) {
        console.error("Email sending error: ", error);
        alert("Error sending message. Please try again.");
    });
}

// Event listener for form submission
const form = document.querySelector("#contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get values from input fields
    const nameInput = document.querySelector("#contact-name").value;
    const emailInput = document.querySelector("#contact-email").value;
    const companyInput = document.querySelector("#contact-company").value;
    const messageInput = document.querySelector("#contact-message").value;
    
    // Validate the form fields
    if (nameInput && emailInput && companyInput && messageInput) {
        sendEmail(nameInput, emailInput, companyInput, messageInput);
        form.reset();
    } else {
        alert("Please fill in all fields before submitting.");
    }
});