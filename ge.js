const scrollTopBtn = document.querySelector("#scroll-top");
window.addEventListener("scroll", () => {
    const scrollTopDist = document.documentElement.scrollTop;
    if(scrollTopDist >= 200) {
        // Show the scroll top button
        scrollTopBtn.classList.add("show-btn");
    } else {
        // hide the scroll top button
        scrollTopBtn.classList.remove("show-btn");
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: "smooth"}); // scroll back to top of the page
});

(function($){
    'use strict';
      $(window).on('load', function () {
          if ($(".loader").length > 0)
          {
              $(".loader").fadeOut("slow");
          }
      });
  })(jQuery)

