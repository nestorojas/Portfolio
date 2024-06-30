document.addEventListener("DOMContentLoaded", function() {
    // Load navbar
    document.getElementById("navbar-container").innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="topbar">
            <a class="navbar-brand" href="index.html">Kondor Plus</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
                    <li class="nav-item"><a class="nav-link" href="projects.html">Projects</a></li>
                    <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                </ul>
            </div>
        </nav>
    `;

    // Load footer
    document.getElementById("footer-container").innerHTML = `
        <div class="footer bg-dark text-white text-center py-3">
            <p>&copy; Kondor Digital Services - <span id="current-year"></span></p>
        </div>
    `;

    // Set current year
    document.getElementById("current-year").textContent = new Date().getFullYear();
});
