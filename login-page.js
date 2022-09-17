const logForm = document.getElementById("log-form");
const logButton = document.getElementById("log-form-submit");
const logErrorMsg = document.getElementById("log-error-msg");

logButton.addEventListener("click", (e) =>)
{
    e.preventDefault();
    const username = logForm.username.value;
    const password = logForm.password.value;

    if(username === "user" && password === "web_dev")
    {
        window.location.href = "mainscreen.html";
    }
    else
    {
        logErrorMsg.style.opacity = 1;
    }
}