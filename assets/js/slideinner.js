(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", (event) => {
    var slideIndex = 1;
    showDivs(slideIndex);

    // Set the interval to 2000 milliseconds (2 seconds)
    setInterval(function () {
      plusDivs(1);
    }, 17000);

    function plusDivs(n) {
      showDivs((slideIndex += n));
    }

    window.plusDivs = plusDivs; // This makes the function accessible globally

    function showDivs(n) {
      var i;
      var x = document.getElementsByClassName("mySlides");
      if (n > x.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = x.length;
      }
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      x[slideIndex - 1].style.display = "block";
    }
  });
})();
