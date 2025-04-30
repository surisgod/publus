document.getElementById("contact-form")
    .addEventListener("submit", async function(event) {
    event.preventDefault(); // не перезагружать страницу
    const form = event.target;
    const data = new FormData(form);
    await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
    });
    form.style.display = "none";
    document.getElementById("thanks").style.display = "block";
    });
