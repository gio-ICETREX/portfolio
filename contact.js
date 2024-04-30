let scriptURL = "https://script.google.com/macros/s/AKfycbyl0xrA85Q9CyBRr5bpoOQ9O0IbF-moYgspSbGK3Qhbm7FrfJdRCb2ig8jUFJAQdwVxpQ/exec";
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById("gagimarjos").textContent = "Please wait...";
    document.getElementById("gagimarjos").disabled = true;

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            document.getElementById("gagimarjos").textContent = "Send Succesfuly🤩";
            setTimeout(() => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                document.getElementById("gagimarjos").textContent = "Send";
                document.getElementById("gagimarjos").disabled = false;
            }, 3500);
        }).catch(error => {
            document.getElementById("gagimarjos").textContent = "Please Try Again😘"
            document.getElementById("gagimarjos").disabled = false;
        });
});