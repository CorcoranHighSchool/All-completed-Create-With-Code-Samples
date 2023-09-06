document.addEventListener("DOMContentLoaded", function() {
    // Fade out transition for links.
    document.querySelectorAll("a").forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var href = this.getAttribute("href");

            if (href) {
                document.body.classList.add("fade-out");
                setTimeout(function() {
                    window.location.href = href;
                }, 500);
            }
        });
    });
});
