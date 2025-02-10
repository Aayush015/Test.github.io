document.addEventListener("DOMContentLoaded", function() {
    fetch("/config.json")
        .then(response => response.json())
        .then(config => {
            console.log("Config Loaded:", config);
            emailjs.init(config.EMAILJS_PUBLIC_KEY);

            const form = document.getElementById("contact-form");
            if (form) {
                form.addEventListener("submit", function(event) {
                    sendEmail(event, config); // Pass config
                });
            } else {
                console.error("Contact form not found!");
            }
        })
        .catch(error => console.error("Error loading config.json:", error));
});

function sendEmail(event, config) {
    event.preventDefault();

    const form = document.getElementById("contact-form");
    if (!form) {
        console.error("Contact form not found!");
        return;
    }

    const formData = {
        name: form.querySelector("input[name='name']").value.trim(),
        email: form.querySelector("input[name='email']").value.trim(),
        subject: form.querySelector("input[name='subject']").value.trim() || "No subject provided",
        message: form.querySelector("textarea[name='message']").value.trim(),
        phone: form.querySelector("input[name='phone']")?.value.trim() || "Not provided",
        location: form.querySelector("input[name='location']")?.value.trim() || "Not provided",
        website: window.location.href
    };

    if (!formData.name || !formData.email || !formData.message) {
        alert("Please fill in all required fields.");
        return;
    }

    emailjs.send(config.EMAILJS_SERVICE_ID, config.EMAILJS_TEMPLATE_ID, formData)
        .then(response => {
            console.log("Email sent successfully:", response);
            alert("Message sent successfully! ✅");
            form.reset();
        })
        .catch(error => {
            console.error("EmailJS Error:", error);
            alert("Oops! Failed to send message. ❌");
        });
}
