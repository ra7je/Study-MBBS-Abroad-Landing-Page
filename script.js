document.getElementById('leadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let country = document.getElementById('country').value;

    if (name === "" || email === "" || phone === "" || country === "") {
        alert("Please fill all the fields!");
        return;
    }

    if (!email.includes('@')) {
        alert("Enter a valid email address!");
        return;
    }

    if (phone.length < 10) {
        alert("Enter a valid phone number!");
        return;
    }

    alert("Form submitted successfully!");
});
