/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
/* function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  } */
  
  // Close the dropdown menu if the user clicks outside of it
/*   window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }// else if (!openDropdown.classList.contains('show')){
           // openDropdown.classList.add('show');
        //}
      }
    }
  } */



  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (e.target.matches('.drop-bars')) {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    if (!e.target.matches('.dropbtn') && !e.target.matches('.drop-bars')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }