document
  .getElementById("passwordForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // prevent the default form submission behavior

    // define the correct password to access the content
    const correctPassword = "orb";

    // retrieve the password entered by the user
    const enteredPassword = document.getElementById("password").value;

    // compare the entered password with the correct password
    if (enteredPassword === correctPassword) {
      // password is correct, show the protected content
      document.getElementById("passwordForm").style.display = "none";
      document.getElementById("content").style.display = "block";
    } else {
      // password is incorrect, display an error message
      alert("Incorrect password. Please try again.");
    }
  });
