(function () {
  "use strict";

  const scriptURL2 =
    "https://script.google.com/macros/s/AKfycbzNyJLIcw-Tt5RM5FjwrS6CA0HMNMkIAk6ab89JInuuQHKBmSQr3kqOCOneLEyo6iJ0/exec";
  const form2 = document.forms["form-univ"];
  const btnKirim2 = document.querySelector(".btn-kirim2");
  const btnLoading2 = document.querySelector(".btn-loading2");
  const myAlert2 = document.querySelector(".my-alert2");
  const namaunivError = document.getElementById("namaunivError");

  form2.addEventListener("submit", (e) => {
    e.preventDefault();

    if (validateForm2()) {
      toggleButtons2();
      fetch(scriptURL2, { method: "POST", body: new FormData(form2) })
        .then((response) => {
          toggleButtons2();
          myAlert2.classList.toggle("d-none");
          form2.reset();
          console.log("Success!", response);
        })
        .catch((error) => console.error("Error!", error.message));
    }
  });

  function toggleButtons2() {
    btnLoading2.classList.toggle("d-none");
    btnKirim2.classList.toggle("d-none");
  }

  function validateForm2() {
    let isValid = true;

    namaunivError.textContent = "";
    if (form2.namauniv.value.trim() === "") {
      namaunivError.textContent =
        "Yuk! isi Universitas dan Jurusan impian kalian Beforians.";
      isValid = false;
    }

    return isValid;
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Your DOMContentLoaded code here, if needed
  });

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
