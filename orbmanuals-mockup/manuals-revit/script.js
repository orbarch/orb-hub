//assigning a variable to search bar element
//changing the search bar input to lower case
//assigning a variable to elements that have a "animals" class name

function search_class() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("animals");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "block";
    }
  }
}

//clear search bar, and resetting search by calling the search function again after clearing its input
function clearSearch() {
  document.getElementById("searchbar").value = "";
  search_class();
}
