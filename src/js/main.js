$(document).ready(function () {
  if (localStorage.getItem("cookies") == "accepted") {
    document.querySelector(".cookie-box").remove();
  }

  const navbar = document.querySelector("#navbar");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll != navbar.offsetTop) {
      navbar.classList.add("sticky");
    }

    if (currentScroll <= 0) {
      navbar.classList.remove("sticky");
      navbar.classList.remove("scroll-up");
      return;
    }

    if (currentScroll > lastScroll && !navbar.classList.contains("scroll-down")) {
      navbar.classList.remove("scroll-up");
      navbar.classList.add("scroll-down");
    } else if (
      currentScroll < lastScroll &&
      navbar.classList.contains("scroll-down")
    ) {
      navbar.classList.remove("scroll-down");
      navbar.classList.add("scroll-up");
    }
    lastScroll = currentScroll;
  });

  $(".scrollTop").click(function () {
    $(window).scrollTop(0);
  });

  $("#accept").click(function (event) {
    event.preventDefault();
    localStorage.setItem("cookies", "accepted");
    $(".cookie-box").fadeOut("normal", function () { $(this).remove(); });
  });

  $("#decline").click(function () {
    localStorage.setItem("cookies", "declined");
    $(".cookie-box").fadeOut("normal", function () { $(this).remove(); });
  });


  // Images loaded is zero because we're going to process a new set of images.
  var imagesLoaded = 0;
  // Total images is still the total number of <img> elements on the page.
  var totalImages = $("img").length;

  if (totalImages == 0) {
    $(".loader-wrapper").fadeOut("slow");
    return false;
  }

  // Step through each image in the DOM, clone it, attach an onload event
  // listener, then set its source to the source of the original image. When
  // that new image has loaded, fire the imageLoaded() callback.
  $("img").each(function (idx, img) {
    $("<img>").on("load", imageLoaded).attr("src", $(img).attr("src"));
  });

  // Do exactly as we had before -- increment the loaded count and if all are
  // loaded, call the allImagesLoaded() function.
  function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded == totalImages) {
      allImagesLoaded();
      return false;
    }
  }

  function allImagesLoaded() {
    setTimeout(() => {
      $(".loader-wrapper").fadeOut("slow");
    }, 2000);
  }
});


// /* Light & Dark Mode START */

// let light_mode, switch_box;

// light_mode = localStorage.getItem("light_mode");
// switch_box = localStorage.getItem("switch_box");

// if (light_mode == null && switch_box == null) {
//   localStorage.setItem("switch_box", "false");
//   localStorage.setItem("light_mode", "false");
// }

// const switchBox = document.getElementById("switch-box")

// light_mode = localStorage.getItem("light_mode");
// switch_box = localStorage.getItem("switch_box");

// if (light_mode == "false" && switch_box == "false") {
//   switchBox.classList.remove("light");
//   document.body.classList.remove("light-mode");

//   localStorage.setItem("switch_box", "false");
//   localStorage.setItem("light_mode", "false");
// } else {
//   switchBox.classList.toggle("light");
//   document.body.classList.toggle("light-mode");

//   localStorage.setItem("switch_box", "true");
//   localStorage.setItem("light_mode", "true");
// }

// switchBox.addEventListener("click", () => {
//   handleSwitch();
// });

// function handleSwitch() {
//   switch_box = localStorage.getItem("switch_box");
//   light_mode = localStorage.getItem("light_mode");

//   if (light_mode == null && switch_box == null) {
//     localStorage.setItem("switch_box", "false");
//     localStorage.setItem("light_mode", "false");
//   }

//   if (light_mode == "true" && switch_box == "true") {
//     switchBox.classList.remove("light");
//     document.body.classList.remove("light-mode");

//     localStorage.setItem("switch_box", "false");
//     localStorage.setItem("light_mode", "false");
//   } else {
//     switchBox.classList.toggle("light");
//     document.body.classList.toggle("light-mode");

//     localStorage.setItem("switch_box", "true");
//     localStorage.setItem("light_mode", "true");
//   }
// }

/* Light & Dark Mode END */