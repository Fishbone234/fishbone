let loggedIn = false;
let registered = false;

function login() {
  const username = document.getElementById("username").value;
  const status = document.getElementById("loginStatus");

  if (username.trim() === "") {
    status.innerText = "Please enter a username.";
    status.style.color = "orange";
    return;
  }

  loggedIn = true;
  status.innerText = "Login successful.";
  status.style.color = "#6dd5ed";

  setTimeout(() => {
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("irisSection").style.display = "block";
  }, 1000);
}

function registerIris() {
  const status = document.getElementById("registerStatus");
  status.innerText = "Registering iris pattern...";
  status.style.color = "white";

  setTimeout(() => {
    registered = true;
    status.innerText = "Iris registration successful.";
    status.style.color = "#6dd5ed";
  }, 2000);
}

function verifyIris() {
  const status = document.getElementById("verifyStatus");

  if (!registered) {
    status.innerText = "Please register iris first.";
    status.style.color = "orange";
    return;
  }

  status.innerText = "Verifying identity...";
  status.style.color = "white";

  setTimeout(() => {
    status.innerText = "Identity verified successfully.";
    status.style.color = "#6dd5ed";
  }, 2000);
}
