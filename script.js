const portfolioBtn = document.getElementById("portfolioBtn");

portfolioBtn.addEventListener("click", () => {
    document
        .getElementById("projects")
        .scrollIntoView({
            behavior: "smooth"
        });
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Pesan berhasil dikirim!");

    contactForm.reset();
});