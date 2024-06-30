// js/common.js
document.addEventListener("DOMContentLoaded", function() {
    const navbar = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="topbar">
            <a class="navbar-brand" href="/">Kondor Plus</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/projects.html">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    `;

    const footer = `
        <div class="footer">
            <p>&copy; Kondor Digital Services - <span id="current-year"></span></p>
        </div>
    `;

    document.getElementById("navbar-container").innerHTML = navbar;
    document.getElementById("footer-container").innerHTML = footer;

    // Set the current year
    document.getElementById("current-year").textContent = new Date().getFullYear();
});
