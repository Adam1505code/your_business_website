function toggleMenu() {
    var nav = document.getElementById("navbar");
    nav.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function(e) {
            var name = form.name.value.trim();
            var email = form.email.value.trim();
            var message = form.message.value.trim();
            if (!name || !email || !message) {
                alert("Please fill in all fields.");
                e.preventDefault();
            }
        });
    }
});


function toggleMenu() {
    var nav = document.getElementById("navbar");
    nav.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function(e) {
            var name = form.name.value.trim();
            var email = form.email.value.trim();
            var message = form.message.value.trim();
            if (!name || !email || !message) {
                alert("Please fill in all fields.");
                e.preventDefault();
            }
        });
    }
    // Fade-in animation for main content
    var main = document.querySelector("main");
    if(main){
        main.style.opacity = 0;
        setTimeout(() => { main.style.transition = "opacity 0.8s"; main.style.opacity = 1; }, 100);
    }
});
