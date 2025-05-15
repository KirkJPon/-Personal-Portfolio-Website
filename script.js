// Contact form submit handler
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      formMessage.textContent = "Thank you for your message! I'll get back to you soon.";
      form.reset();

      setTimeout(() => {
        formMessage.textContent = "";
      }, 4000);
    });
  }

  // Smooth scroll to top when switching pages
  const links = document.querySelectorAll("nav ul li a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // Add hover animation to sidebar links
  links.forEach(link => {
    link.addEventListener("mouseenter", () => {
      link.style.transform = "translateX(5px)";
      link.style.transition = "transform 0.2s ease";
    });
    link.addEventListener("mouseleave", () => {
      link.style.transform = "translateX(0)";
    });
  });

  // Highlight active tab based on current file
  const currentPage = window.location.pathname.split("/").pop();
  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});
