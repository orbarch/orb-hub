// Retrieve the flag indicating whether the password has been entered before
const hasEnteredPassword = sessionStorage.getItem("hasEnteredPassword");

if (hasEnteredPassword) {
  showContent();
} else {
  document
    .getElementById("passwordForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const correctPassword = "orb2";
      const enteredPassword = document.getElementById("password").value;

      if (enteredPassword === correctPassword) {
        sessionStorage.setItem("hasEnteredPassword", true);
        showContent();
      } else {
        alert("Incorrect password. Please try again.");
      }
    });
}

function showContent() {
  document.getElementById("passwordForm").style.display = "none";
  document.getElementById("content").style.display = "block";
}
