
        // Get the button element
        const backToTopBtn = document.getElementById("backToTop");

        // Show button when user scrolls down
        window.onscroll = function () {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }
        };

        // Scroll to top smoothly when clicked
        backToTopBtn.onclick = function () {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }