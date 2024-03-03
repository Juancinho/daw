// Get the modal
var modal = document.getElementById("myModal");

// Get all the buttons that open modals
var btns = document.getElementsByClassName("botonModal");

// Iterate through the buttons and assign the onclick event to each
for (var i = 0; i < btns.length; i++) {
  btns[i].onclick = function() {
    modal.style.display = "block";
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
